---
id: hubspot
title: Hubspot Integration
---

import { hubspotIntegration } from "@consent-manager/integration-hubspot"

- Source code: https://github.com/hashbite/consent-manager/tree/main/packages/integration-hubspot

The HubSpot integration with Consent Manager will directly inject the HubSpot tracking script into your application once the user gives their consent. This integration ensures that user tracking aligns with privacy regulations like GDPR. For more details on the tracking script, refer to [HubSpot's official guide](https://knowledge.hubspot.com/reports/install-the-hubspot-tracking-code).

<IntegrationProfile integration={hubspotIntegration({})} />

## Example Usage with `react-router`

This example demonstrates how to use hubspot in conjunction with `react-router` to track page views:

```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [hubspotConsent] = useDecision('hubspot');
  useEffect(() => {
    if (hubspotConsent) {
      var _hsq = window._hsq = window._hsq || [];
      _hsq.push(['setPath', { path: location.pathname + location.search }])
    }
  }, [location, hubspotConsent]);

  // Your application content
  return (
    // ...
  );
}

export default App;
```
