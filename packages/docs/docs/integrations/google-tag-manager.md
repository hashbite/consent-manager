---
id: google-tag-manager
title: Google Tag Manager Integration
---

import { googleTagManagerIntegration } from "@consent-manager/integration-google-tag-manager"

- Source code: https://github.com/hashbite/consent-manager/tree/main/packages/integration-google-tag-manager

The Google Tag Manager integration uses the [`react-gtm-module`](https://www.npmjs.com/package/react-gtm-module) to manage and deploy marketing tags (such as tracking pixels or site analytics) on your React application.

> **Warning**: Using Google Tag Manager can significantly increase your site's loading time, especially if numerous scripts are enabled through it. It can also reduce the control developers have over tracking and script management on their website. Use it responsibly and understand its impact on performance and privacy.

<IntegrationProfile integration={googleTagManagerIntegration({})} />

## `getGoogleTagManager` Function

The `getGoogleTagManager` function provides access to the initialized instance of [`react-gtm-module`](https://www.npmjs.com/package/react-gtm-module). This allows for the integration and management of Google Tag Manager functionalities within your application.

### Example Usage

This example demonstrates how you might use the `getGoogleTagManager` function to manage Google Tag Manager in your React application:

```javascript
import { useEffect } from 'react';
import { getGoogleTagManager } from '@consent-manager/integration-google-tag-manager';

function App() {
  useEffect(() => {
    const GTM = getGoogleTagManager();
    if (GTM) {
      // Add your Google Tag Manager functionalities here
      // GTM.dataLayer.push(...) or other GTM operations
    }
  }, []);

  // Your application content
  return (
    // ...
  );
}

export default App;
```