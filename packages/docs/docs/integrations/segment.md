---
id: segment
title: Segment Integration
---

import { segmentIntegration } from "@consent-manager/integration-segment"

- Source code: https://github.com/hashbite/consent-manager/tree/main/packages/integration-segment

The Segment integration in Consent Manager manages user consent for the Segment tracking script in your application. It directly injects the [Segment Analytics.js script](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/) once the user consents.

> **Warning**: Using Segment can lead to increased loading times and potential loss of control over tracking and script management, similar to Google Tag Manager. It's important to use it judiciously and understand its impact on performance and privacy.

<IntegrationProfile integration={segmentIntegration({})} />

## `getSegment` Function

The `getSegment` function provides access to the initialized Segment instance. This enables you to interact with Segment's tracking functionalities within your application.

### Example Usage with Segment's API

Here's how you might use the `getSegment` function to integrate and manage Segment in your React application:

```javascript
import { useEffect } from 'react';
import { getSegment } from '@consent-manager/integration-segment';

function App() {
  useEffect(() => {
    const segment = getSegment();
    if (segment) {
      // Utilize Segment functionalities
      // segment.track(...), segment.identify(...), etc.
    }
  }, []);

  // Your application content
  return (
    // ...
  );
}

export default App;
```