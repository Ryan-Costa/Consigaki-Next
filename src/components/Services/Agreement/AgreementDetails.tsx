import { useState } from 'react'
import { TableEditParamAgreement } from './TableEditParamAgreement'
import { TableEditProductAgreement } from './TableEditProductAgreement'

const sections = [
  {
    id: 'products',
    label: 'PRODUTOS',
    component: <TableEditProductAgreement />,
  },
  {
    id: 'parameters',
    label: 'PARÂMETROS',
    component: <TableEditParamAgreement />,
  },
]

export default function AgreementDetails() {
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
