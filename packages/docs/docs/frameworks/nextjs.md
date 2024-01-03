---
title: Next.js
---

# Integrating Consent Manager with Next.js

Integrating Consent Manager into a Next.js application involves configuring the manager and wrapping your application with it. We will also handle route changes for analytics tracking within the `ConsentManagerWrapper`.

## Example

A tested implementation is available in our [example repository](https://github.com/hashbite/consent-manager-examples/tree/main/nextjs).

## Installation

First, install the necessary packages:

```bash
npm install @consent-manager/core @consent-manager/interface-default use-persisted-state
```

## Setting Up the Consent Manager

### Step 1: Create and Configure `ConsentManagerWrapper`

Create a `consent-manager.js` file in your project. This file will configure `ConsentManagerWrapper`, including handling route changes for analytics tracking:

```javascript
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ConsentManagerDefaultInterface } from '@consent-manager/interface-default';
import '@consent-manager/interface-default/dist/default.min.css';
import createPersistedState from 'use-persisted-state';
import { getMatomoTracker } from '@consent-manager/integration-matomo';

const useConsentStateStore = createPersistedState('consent-manager');

const config = {
  // ... your configuration options ...
};

export const ConsentManagerWrapper = ({ children }) => {
  const storage = useConsentStateStore();
  const router = useRouter();
  const { trackPageViewSPA } = getMatomoTracker();
  const [prevLocation, setPrevLocation] = useState(
    typeof window !== 'undefined' ? window.location : undefined
  );

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const { location } = window;
      trackPageViewSPA({ location, prevLocation });
      setPrevLocation(location);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [prevLocation, router.events, trackPageViewSPA]);

  return (
    <ConsentManagerDefaultInterface store={storage} config={config}>
      {children}
    </ConsentManagerDefaultInterface>
  );
};
```

In this setup, the `ConsentManagerWrapper` takes care of the route change tracking in addition to managing user consents.

### Step 2: Wrap Your Next.js Application

In your Next.js `_app.js` file, import and use `ConsentManagerWrapper` to wrap your application:

```javascript
import React from 'react';
import { ConsentManagerWrapper } from '../components/consent-manager';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConsentManagerWrapper>
      <Component {...pageProps} />
    </ConsentManagerWrapper>
  );
}

export default MyApp;
```

This integration ensures that Consent Manager wraps around the entire Next.js application and manages consent decisions and tracking throughout the app.
