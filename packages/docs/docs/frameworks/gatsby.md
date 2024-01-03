---
title: Gatsby
---

# Integrating Consent Manager with Gatsby

This guide demonstrates how to effectively integrate the Consent Manager into a Gatsby project, ensuring GDPR compliance and a smooth user experience.

## Example

A tested implementation is available in our [example repository](https://github.com/hashbite/consent-manager-examples/tree/main/gatsby).

## Installation

Begin by installing `@consent-manager/core`, its default interface, and `use-persistent-state`:

```bash
npm install @consent-manager/core @consent-manager/interface-default use-persisted-state
```

## Setting Up the Consent Manager

### Step 1: Create Configuration File

Create a `consent-manager.js` file in your project. This file configures and exports the `ConsentManagerWrapper` component:

```javascript
import React from 'react';
import { ConsentManagerDefaultInterface } from '@consent-manager/interface-default';
import '@consent-manager/interface-default/dist/default.min.css';
import createPersistedState from 'use-persisted-state';

const useConsentStateStore = createPersistedState('consent-manager');

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

This configuration file sets up the core elements of the Consent Manager, including storage and customization options.

### Step 2: Wrap Your Gatsby Application

In Gatsby, you can wrap your application with the `ConsentManagerWrapper` in two specific files: `gatsby-browser.js` and `gatsby-ssr.js`.

#### gatsby-browser.js

```javascript
import React from 'react';
import { ConsentManagerWrapper } from './src/consent-manager';

export const wrapRootElement = ({ element }) => (
  <ConsentManagerWrapper>{element}</ConsentManagerWrapper>
);
```

This file ensures that the Consent Manager wraps around your application during client-side rendering.

#### gatsby-ssr.js

```javascript
import React from 'react';
import { ConsentManagerWrapper } from './src/consent-manager';

export const wrapRootElement = ({ element }) => (
  <ConsentManagerWrapper>{element}</ConsentManagerWrapper>
);
```

Similarly, `gatsby-ssr.js` wraps your application during server-side rendering, maintaining consistency across both rendering methods.