import React, { useMemo, useState, useEffect } from 'react'

import { IntegrationConfig, ConsentManagerConfig } from '../config'
import { useDecisions } from '../decisions'

type IntegrationWithWrapperComponent = IntegrationConfig &
  Required<Pick<IntegrationConfig, 'WrapperComponent'>>

export const IntegrationWrapperComponents: React.FC<{
  config: ConsentManagerConfig
}> = ({ config, children }) => {
  const [decisions] = useDecisions()
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [setIsMounted])

  const wrapperComponents = useMemo(() => {
    if (!isMounted) {
      return null
    }

    return config.integrations
      .filter(i => decisions[i.id] === true)
      .filter((i): i is IntegrationWithWrapperComponent =>
        Boolean(i.WrapperComponent)
      )
      .map(({ WrapperComponent, id }) => <WrapperComponent key={id} />)
  }, [config, decisions, isMounted])

  return (
    <>
      {children}
      {wrapperComponents}
    </>
  )
}
