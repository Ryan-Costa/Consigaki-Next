'use client'

import React from 'react'
import dynamic from 'next/dynamic'
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Chart = () => {
  const options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    },
  }

  const series = [
    {
      name: 'Vendas',
      data: [30, 40, 35, 50, 49, 60],
    },
  ]

  return (
    <div>
      <ApexChart options={options} series={series} type="bar" height={350} />
    </div>
  )
}

export default Chart
