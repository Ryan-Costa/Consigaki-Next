import AgreementDetails from '@/components/Services/Agreement/AgreementDetails'
import AgreementForm from '@/components/Services/Agreement/AgreementForm'
import { IAgreementID } from '@/interfaces/Agreement'
import { ProductGetAll } from '@/interfaces/AgreementProduct'
import api from '@/services/server/api'

export default async function EditAgreement({
  params,
}: {
  params: { agreement: string }
}) {
  const agreementRes = await api.get<IAgreementID>(
    `/agreements/${params.agreement}`,
  )

  const agreementsById = agreementRes.data

  const body = {
    name: '',
    page: 1,
    size: 20,
  }

  const allProducts = await api
    .post<ProductGetAll>('/products/get-all', body)
    .then((res) => res.data)

  if (!allProducts) {
    return <div>Erro ao encontrar dados</div>
  }

  return (
    <>
      <AgreementForm data={agreementsById} />
      <AgreementDetails
        agreementId={params.agreement}
        allProducts={allProducts}
      />
    </>
  )
}

export async function generateMetadata({
  params,
}: {
  params: { agreement: string }
}) {
  return {
    title: `Editar Convênio ${params.agreement}`,
  }
}
