---
title: Create React App
---

# Integrating Consent Manager with Create React App

This guide will help you to integrate the Consent Manager into a React application created with Create React App.

## Example

For a practical example, including a tested implementation, visit our [example repository](https://github.com/hashbite/consent-manager-examples/tree/main/create-react-app).

## Installation

First, install the `@consent-manager/core` and its default interface, along with any other integrations you might need:

```bash
npm install @consent-manager/core @consent-manager/interface-default use-persisted-state
```

## Setting Up the Consent Manager

### Step 1: Create Configuration File

Create a file named `consent-manager.js` in your project. This file will configure and export the `ConsentManagerWrapper` component. Add the following code:

```javascript
import React from 'react';
import { ConsentManagerDefaultInterface } from '@consent-manager/interface-default';
import '@consent-manager/interface-default/dist/default.min.css';
import createPersistedState from 'use-persisted-state';

// Store consent information in localStorage
const useConsentStateStore = createPersistedState('consent-manager');

// Add your configuration here
const config = {
  // ... your configuration options ...
};

export const ConsentManagerWrapper = ({ children }) => {
  const storage = useConsentStateStore();

  return (
    <ConsentManagerDefaultInterface store={storage} config={config}>
      {children}
    </ConsentManagerDefaultInterface>
  );
};
```

This file establishes the core configuration for Consent Manager, including storing user decisions in localStorage.

### Step 2: Wrap Your Application

In your `src/index.js` (or `layout.js`, if applicable), import and use the `ConsentManagerWrapper` to encompass your application:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConsentManagerWrapper } from './consent-manager';

ReactDOM.render(
  <React.StrictMode>
    <ConsentManagerWrapper>
      <App />
    </Consent ManagerWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
```

This step integrates the Consent Manager with your React application, ensuring that it wraps around the entire app.