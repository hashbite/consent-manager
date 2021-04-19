import React, { useContext } from 'react'

import { ConsentManagerDefaultInterfaceContext } from './context'

export interface ResultProps {
  [key: string]: React.ReactNode
}

interface TransProps {
  id: string
  fallbackId?: string
  props?: ResultProps
  render?: ({
    message,
  }: {
    message: string
  }) => React.ReactElement<any, any> | null
}

export const Trans: React.FC<TransProps> = ({
  id,
  fallbackId,
  render,
  props,
}) => {
  const { messages } = useContext(ConsentManagerDefaultInterfaceContext)

  const Result = messages[id] || (fallbackId && messages[fallbackId]) || id

  if (render && typeof Result === 'string') {
    return render({ message: Result })
  }

  if (typeof Result === 'function') {
    return <Result {...props} />
  }

  return <>{Result}</>
}
