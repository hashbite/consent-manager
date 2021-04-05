import React, { useMemo, useState, useEffect } from 'react'

import { IntegrationConfig, ConsentManagerConfig } from '../config'
import { useDecisions } from '../decisions'

type IntegrationWithScriptInjector = IntegrationConfig &
  Required<Pick<IntegrationConfig, 'ScriptInjector'>>

export const IntegrationScriptInjectors: React.FC<{
  config: ConsentManagerConfig
}> = ({ config, children }) => {
  const [decisions] = useDecisions()
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [setIsMounted])

  const scriptInjectors = useMemo(() => {
    if (!isMounted) {
      return null
    }

    return config.integrations
      .filter(i => decisions[i.id] === true)
      .filter((i): i is IntegrationWithScriptInjector =>
        Boolean(i.ScriptInjector)
      )
      .map(({ ScriptInjector, id }) => <ScriptInjector key={id} />)
  }, [config, decisions, isMounted])

  return (
    <>
      {children}
      {scriptInjectors}
    </>
  )
}
