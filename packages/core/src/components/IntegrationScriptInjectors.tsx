import React, { useMemo, useState, useEffect } from 'react'

import {
  IntegrationConfig,
  ConsentManagerConfig,
  ConsentManagerDecisions,
} from '../config'
import { useDecisions } from '../decisions'

type IntegrationWithScriptInjector = IntegrationConfig &
  Required<Pick<IntegrationConfig, 'ScriptInjector'>>

function useScriptInjectors(
  config: ConsentManagerConfig,
  decisions: ConsentManagerDecisions
): React.ComponentType {
  const Wrapper: React.ComponentType = useMemo(() => {
    return (({ children }) => {
      return config.integrations
        .filter(i => decisions[i.id] === true)
        .filter((i): i is IntegrationWithScriptInjector =>
          Boolean(i.ScriptInjector)
        )
        .reverse()
        .reduce((children, { ScriptInjector }) => {
          return <ScriptInjector>{children}</ScriptInjector>
        }, children)
    }) as React.FC
  }, [config.integrations, decisions])
  return Wrapper
}

export const IntegrationScriptInjectors: React.FC<{
  config: ConsentManagerConfig
}> = ({ config, children }) => {
  const [decisions] = useDecisions()
  const Wrapper = useScriptInjectors(config, decisions)

  // Check if component was mounted for SSR
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [setIsMounted])

  return (
    <>
      {children}
      {isMounted && <Wrapper>{null}</Wrapper>}
    </>
  )
}
