---
id: quick-start-guide
title: Quick Start Guide
---
# Quick Start Guide

Welcome to the Quick Start Guide for Consent Manager. This guide will help you swiftly integrate Consent Manager into your React project, aligning with GDPR requirements while enhancing user privacy. 

Let's dive in to understand how to install Consent Manager, set it up in your app, integrate a third-party service like Matomo, and track events efficiently.

## Installation Instructions

To start, you need to install Consent Manager along with its default interface. Run the following command in your project directory:

```bash
npm install @consent-manager/core @consent-manager/interface-default use-persisted-state
```

## Setting Up Consent Manager in Your React App
Create a file named `consent-manager.js` in your project. This file will configure and export the `ConsentManagerWrapper` component. Add the following code to this file:

```javascript
import React from 'react';
import { ConsentManagerDefaultInterface } from '@consent-manager/interface-default';
import '@consent-manager/interface-default/dist/default.min.css';

import createPersistedState from 'use-persisted-state';

// We store our consent information in localStorage
const useConsentStateStore = createPersistedState('consent-manager');

// Add your configuration here if necessary
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

## Wrapping Your Application with Consent Manager
In your main `index.js` (or `layout.js`, depending on your project structure), import and use the `ConsentManagerWrapper` to wrap your application:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConsentManagerWrapper } from './consent-manager';

ReactDOM.render(
  <ConsentManagerWrapper>
    <App />
  </ConsentManagerWrapper>,
  document.getElementById('root')
);
```

Your application now includes Consent Manager, displaying the shield 🛡️ icon at the bottom left. Next, let's incorporate some integrations into your page, enabling users to provide their consent.

## Integrating Matomo for Tracking Page Views and Events

[Matomo is a robust, open-source alternative to SAAS tracking solutions](https://matomo.org/google-analytics-alternative/), offering full data control and GDPR-friendly implementation.

### Installing Matomo Integration
First, add the [Matomo integration](./integrations/matomo.md) to your project:

```bash
npm install @consent-manager/integration-matomo
```

### Configuring Matomo in Consent Manager
Update `consent-manager.js` to include Matomo in the integrations:

```javascript
// Add this to your consent-manager.js imports
import { matomoIntegration } from '@consent-manager/integration-matomo';

// Update your configuration
const consentManagerConfig = {
  integrations: [
    matomoIntegration({
      matomoURL: "https://statistics.yourdomain.com/",
      siteID: "YOUR_SITE_ID",
    }),
  ],
};

// Include in ConsentManagerDefaultInterface
<ConsentManagerDefaultInterface config={consentManagerConfig} store={storage}>
  {children}
</ConsentManagerDefaultInterface>
```

**Note:** For React Router or similar setups, see our [client-side routing documentation](./guides/client-side-routing.md) to ensure proper page view tracking.

### Tracking Events with Matomo
All integrations, including Matomo, follow a similar interface for event tracking:

```jsx
import { getMatomoTracker } from '@consent-manager/integration-matomo';

const SomeComponent = () => {
  const { trackEvent } = getMatomoTracker();

  const onTrack = useCallback(() => {
    trackEvent('Example', 'Button', 'Pressed');
  }, [trackEvent]);

  return <button onClick={onTrack}>Track Event</button>;
};
```

[Learn more about Matomo integration](./integrations/matomo.md).

## Integrating Iframe Services like YouTube

For embedding services like YouTube, obtain user consent before loading iframes that may share data with third-party services.

### Installing YouTube Integration

First, integrate [YouTube](./integrations/youtube.md) into your project. Note that in this demo we're using `react-youtube` for rendering, but it's not a mandatory requirement!

```bash
npm install @consent-manager/integration-youtube react-youtube
```

### Configuring YouTube Integration

Add YouTube to your integrations in `consent-manager.js`:

```javascript
// Import YouTube integration
import { youtubeIntegration } from '@consent-manager/integration-youtube';

// Update your consent manager configuration
const consentManagerConfig = {
  integrations: [
    // ... other integrations
    youtubeIntegration(),
  ],
};

// The rest of the file remains unchanged
```

### Wrapping YouTube Videos for Consent
Use the `PrivacyShield` component to wrap YouTube embeds:

```javascript
import React from 'react';
import ReactYouTube from 'react-youtube';
import { PrivacyShield } from '@consent-manager/core';

const YouTube = ({ id, ...props }) => {
  return (
    <PrivacyShield id="youtube">
      <ReactYouTube videoid={id} {...props} />
    </PrivacyShield>
  );
};

export default YouTube;
```

[Explore more about YouTube integration](./integrations/youtube.md).

## Fin

You now have the fundamental knowledge to integrate Consent Manager into your React application. For more detailed guides, please refer to the sidebar on the left.