---
title: Vite
---

# Integrating Consent Manager with Vite

This guide explains how to incorporate Consent Manager into a React application using Vite.

## Installation

First, install the necessary packages:

```bash
npm install @consent-manager/core @consent-manager/interface-default use-persisted-state
```

## Setting Up the Consent Manager

### Step 1: Create Configuration File

Create a file named `consent-manager.js` in your project. This file will configure and export the `ConsentManagerWrapper` component. Here's the code for this file:

```javascript
import React from 'react'
import { ConsentManagerDefaultInterface } from '@consent-manager/interface-default'
import '@consent-manager/interface-default/dist/default.min.css'
import createPersistedState from 'use-persisted-state'

// Store consent information in localStorage
const useConsentStateStore = createPersistedState('consent-manager')

// Define your configuration here
const config = {
  // ... your configuration options ...
}

export const ConsentManagerWrapper = ({ children }) => {
  const storage = useConsentStateStore()

  return (
    <ConsentManagerDefaultInterface store={storage} config={config}>
      {children}
    </ConsentManagerDefaultInterface>
  )
}
```

This configuration file sets up the core functionality of the Consent Manager, including storing user consent decisions.

### Step 2: Wrap Your Application

In your Vite `src/main.js` file, import and utilize the `ConsentManagerWrapper` to wrap your entire application:

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ConsentManagerWrapper } from './consent-manager'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConsentManagerWrapper>
      <App />
    </ConsentManagerWrapper>
  </React.StrictMode>,
)

```
