import React from 'react'
import { useDecision } from '@consent-manager/core'

export function DisableButton({
  children,
  id,
}: {
  children: React.ReactNode
  id: string
}) {
  const [, setEnabled]= useDecision(id)

  return <button onClick={() => setEnabled(false)}>{children}</button>
}
