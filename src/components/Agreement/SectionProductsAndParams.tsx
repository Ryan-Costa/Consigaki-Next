'use client'

import { useState } from 'react'
import { TableEditParamAgreement } from './TableEditParamAgreement'
import { TableEditProductAgreement } from './TableEditProductAgreement'

export default function SectionProductsAndParams() {
  const [activeSection, setActiveSection] = useState<string>('product')
  const [activeButton, setActiveButton] = useState('product')

  const handleAgreementsSection = () => {
    setActiveSection('product')
  }

  const handleRequestsSection = () => {
    setActiveSection('param')
  }

  const handleButtonClick = (section: any) => {
    setActiveButton(section)
  }

  const sectionContent =
    activeSection === 'product' ? (
      <>
        <div className="mt-4">
          <TableEditProductAgreement />
        </div>
      </>
    ) : activeSection === 'param' ? (
      <>
        <div className="mt-4">
          <TableEditParamAgreement />
        </div>
      </>
    ) : null
  return (
    <>
      <div className="mt-8 flex w-full justify-center gap-11">
        <button
          className={`btn text-xl font-bold ${
            activeButton === 'product' ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick('product')
            handleAgreementsSection()
          }}
          style={{
            position: 'relative',
            borderBottom:
              activeButton === 'product' ? '3px solid black' : 'none',
          }}
        >
          PRODUTOS
        </button>
        <button
          className={`btn z-0 text-xl font-bold ${
            activeButton === 'param' ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick('param')
            handleRequestsSection()
          }}
          style={{
            position: 'relative',
            borderBottom: activeButton === 'param' ? '3px solid black' : 'none',
          }}
        >
          PARÂMETROS
        </button>
      </div>
      {sectionContent}
    </>
  )
}
