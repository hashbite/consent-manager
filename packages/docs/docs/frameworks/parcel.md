---
title: Parcel
---

# Integrating Consent Manager with Parcel

This guide explains how to incorporate Consent Manager into a React application using Parcel. The process is quite similar to integrating with Create React App, focusing on setting up and configuring the Consent Manager efficiently.

## Example

For a hands-on example, check out our [example repository](https://github.com/hashbite/consent-manager-examples/tree/main/parcel) which contains a tested implementation.

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

In your Parcel `index.js` file, import and utilize the `ConsentManagerWrapper` to wrap your entire application:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ConsentManagerWrapper } from './consent-manager'

const RootApp = () => {
  return (
    <ConsentManagerWrapper>
      <App />
    </ConsentManagerWrapper>
  )
}

ReactDOM.render(<RootApp />, document.getElementById('root'))
```
