---
id: matomo
title: Matomo Integration
---

import { matomoIntegration, matomoPrivacyAwareIntegration } from "@consent-manager/integration-matomo"

- Source code: https://github.com/hashbite/consent-manager/tree/main/packages/integration-matomo

[Matomo](https://matomo.org/google-analytics-alternative/) is a robust, open-source alternative to SAAS tracking solutions like Google Analytics. It offers full data control and can be configured for GDPR-friendly implementation.

The Consent Manager's Matomo integration is available in two variants: a standard version and a privacy-aware version that should be used only if your [Matomo instance is privacy-aware](https://matomo.org/cookie-consent-banners/).

## Default Matomo Integration

<IntegrationProfile integration={matomoIntegration({})} />

## Privacy-Aware Matomo Integration

Ensure your [Matomo instance is privacy-aware](https://matomo.org/cookie-consent-banners/) before using this variant.

<IntegrationProfile integration={matomoPrivacyAwareIntegration({})} />

## Tracking API

The Matomo integration exposes a tracking API with functions to simplify page view and event tracking. The `getMatomoTracker` function provides methods such as `trackPageViewSPA` for single-page applications and `trackEvent` for event tracking.

### Example Usage with `react-router`

This example demonstrates using the Matomo tracking API with `react-router` for tracking page views and events:

```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMatomoTracker } from '@consent-manager/integration-matomo';

function App() {
  const location = useLocation();
  const { trackPageViewSPA, trackEvent } = getMatomoTracker();

  useEffect(() => {
    // Track page view for SPA
    if (trackPageViewSPA) {
      trackPageViewSPA({
        location,
        prevLocation: window.prevLocation,
      });
      window.prevLocation = location;
    }

    // Track a custom event
    if (trackEvent){
      trackEvent('Category', 'Action', 'Label');
    }
  }, [location, trackPageViewSPA, trackEvent]);

  // Your application content
  return (
    // ...
  );
}

export default App;
```
