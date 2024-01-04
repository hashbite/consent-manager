---
id: google-analytics
title: Google Analytics Integration
---

import { googleAnalyticsIntegration } from "@consent-manager/integration-google-analytics"

- Source code: [GitHub](https://github.com/hashbite/consent-manager/tree/main/packages/integration-google-analytics)

The Google Analytics integration leverages the [`react-ga`](https://www.npmjs.com/package/react-ga) package, enabling features like tracking page views, events, and conversions in your React application.

<IntegrationProfile integration={googleAnalyticsIntegration({})} />

## `getGoogleAnalytics` Function

The `getGoogleAnalytics` function retrieves the initialized instance of [`react-ga`](https://www.npmjs.com/package/react-ga). This allows for direct interactions with Google Analytics tracking features within your application.

### Example Usage with `react-router`

This example demonstrates how to use the `getGoogleAnalytics` function in conjunction with `react-router` to track page views:

```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getGoogleAnalytics } from '@consent-manager/integration-google-analytics';

function App() {
  const location = useLocation();
  useEffect(() => {
    const ReactGA = getGoogleAnalytics();
    if (ReactGA) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [location]);

  // Your application content
  return (
    // ...
  );
}

export default App;
```
