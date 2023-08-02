'use client'

import { useState } from 'react'
import { Parameters } from './Parameters'
import { Products } from './Products'
import { ProductGetAll } from '@/interfaces/AgreementProduct'

interface AgreementDetailsProps {
  agreementId: string
  allProducts: ProductGetAll
}

export default function AgreementDetails({
  agreementId,
  allProducts,
}: AgreementDetailsProps) {
  const sections = [
    {
      id: 'products',
      label: 'PRODUTOS',
      component: (
        <Products agreementId={agreementId} allProducts={allProducts} />
      ),
    },
    {
      id: 'parameters',
      label: 'PARÂMETROS',
      component: <Parameters agreementId={agreementId} />,
    },
  ]
  const [activeSection, setActiveSection] = useState<string>('products')

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId)
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
