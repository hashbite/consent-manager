---
title: TypeScript
---

# TypeScript Integration Guide for Consent Manager

## Introduction

This guide offers a straightforward approach to integrating Consent Manager with TypeScript, enhancing development with type safety and streamlined code management.

## Install types for use-persisted-state

To effectively manage user consent decisions, we recommend using the `use-persisted-state` package. This ensures that user preferences are stored persistently. Install its types with:

```bash
npm i --dev @types/use-persisted-state
```

## Basic Configuration Example

In a TypeScript project, configuring Consent Manager involves setting up the config object and user consent state store with type definitions:

```tsx
import {
  ConsentManager,
  ConsentManagerConfig,
  ConsentManagerStorageState,
} from '@consent-manager/core'
import createPersistedState from 'use-persisted-state'

const useConsentStateStore = createPersistedState<ConsentManagerStorageState>(
  'consent-manager-typescript-example'
)

const config: ConsentManagerConfig = {
  integrations: [
    // Define your integrations here
  ],
  onChangeDecision: (last, next) => {
    const changedDecisions = {}
    for (const key in next) {
      if (last[key] !== next[key]) {
        changedDecisions[key] = next[key]
      }
    }
    console.log('New user decisions:', changedDecisions)
  },
}

const App: React.FC = () => {
  const storage = useConsentStateStore()

  return (
    <ConsentManager config={config} store={storage}>
      {/* Your application components */}
    </ConsentManager>
  )
}

export default App
```

This configuration ensures that both your Consent Manager settings and user consent state are handled with TypeScript's type safety features.
