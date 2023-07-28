'use client'

import { useState } from 'react'
import { Agreements } from './Agreements'
import { Requests } from './Requests'
import Calls from './Calls'
import BankData from './BankData'
interface UserDetailsProps {
  userId: string
}

export default function UserDetails({ userId }: UserDetailsProps) {
  const sections = [
    {
      id: 'agreements',
      label: 'CONVÊNIOS',
      component: <Agreements userId={userId} />,
    },
    {
      id: 'requests',
      label: 'SOLICITAÇÕES',
      component: <Requests userId={userId} />,
    },
    {
      id: 'calls',
      label: 'ATENDIMENTOS',
      component: <Calls userId={userId} />,
    },

    {
      id: 'bankData',
      label: 'DADOS BANCÁRIOS',
      component: <BankData userId={userId} />,
    },
  ]
  const [activeSection, setActiveSection] = useState<string>('agreements')

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
