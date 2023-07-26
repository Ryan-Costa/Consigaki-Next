'use client'

import { useState } from 'react'
import { AgreementsUserPage } from './AgreementsUserPage'
import { UserRequests } from './UserRequests'
import Calls from './Calls'
import BankData from './BankData'
import { UserAgreement } from '@/interfaces/UserAgreement'
import { UserRequest } from '@/interfaces/UserRequest'
import { UserBankAccount } from '@/interfaces/UserBankAccount'
import { UserCall } from '@/interfaces/UserCall'

interface UserDetailsProps {
  dataAgreements: UserAgreement
  dataRequests: UserRequest
  dataCalls: UserCall
  dataBankDatas: UserBankAccount
}

export default function UserDetails({
  dataAgreements,
  dataRequests,
  dataCalls,
  dataBankDatas,
}: UserDetailsProps) {
  console.log('request', dataRequests)
  console.log('bank', dataBankDatas)
  const sections = [
    {
      id: 'agreements',
      label: 'CONVÊNIOS',
      component: <AgreementsUserPage data={dataAgreements} />,
    },
    {
      id: 'requests',
      label: 'SOLICITAÇÕES',
      component: <UserRequests data={dataRequests} />,
    },
    {
      id: 'calls',
      label: 'ATENDIMENTOS',
      component: <Calls data={dataCalls} />,
    },

    {
      id: 'bankData',
      label: 'DADOS BANCÁRIOS',
      component: <BankData data={dataBankDatas} />,
    },
  ]
  const [activeSection, setActiveSection] = useState<string>('agreements')

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId)
    // api
    //   .getSection(sectionUrl)
    //   .then((response) => {
    //     // Encontra a seção correspondente
    //     const section = sections.find((section) => section.id === sectionId)
    //     if (section) {
    //       // Atualiza o valor de data com o response
    //       section.data = response.data
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
  }

  return (
    <>
      <div className="mt-8 flex w-full justify-center gap-11">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`btn text-xl font-bold ${
              activeSection === section.id ? 'active' : ''
            }`}
            onClick={() => handleSectionChange(section.id)}
            style={{
              position: 'relative',
              borderBottom:
                activeSection === section.id ? '3px solid black' : 'none',
            }}
          >
            {section.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {sections.find((section) => section.id === activeSection)?.component}
      </div>
    </>
  )
}
