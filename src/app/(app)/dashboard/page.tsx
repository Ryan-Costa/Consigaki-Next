import Chart from '@/components/Chart'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Dashboard() {
  return (
    <>
      <div className="h-full w-full ">
        <h2 className="mb-4 text-2xl font-semibold">Section</h2>
        <div className="mb-10 flex gap-4">
          <div className="h-48 w-96 rounded-xl bg-white p-2 shadow-lg">
            <p className="font-semibold">Dados 01</p>
          </div>
          <div className="h-48 w-96 rounded-xl bg-white p-2 shadow-lg">
            <p className="font-semibold">Dados 02</p>
          </div>
          <div className="h-48 w-96 rounded-xl bg-white p-2 shadow-lg">
            <p className="font-semibold">Dados 03</p>
          </div>
        </div>
        <div className="flex w-full gap-4 ">
          <div className="w-full ">
            <h2 className="mb-4 text-2xl font-semibold">Gráfico de dados</h2>
            <div className="w-full rounded-xl bg-white px-6 py-4 shadow-lg">
              <p className="text-md font-semibold">Análise mensal de vendas</p>
              <Chart />
            </div>
          </div>
          <div className="w-full">
            <h2 className="mb-4 text-2xl font-semibold">
              Dados anual de vendas
            </h2>
            <div className="w-full rounded-xl bg-white px-6 py-4 shadow-lg">
              <p className="text-md font-semibold">Análise anual de vendas</p>
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
