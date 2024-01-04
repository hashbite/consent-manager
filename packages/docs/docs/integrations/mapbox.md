---
id: mapbox
title: Mapbox Integration
---

import { mapboxIntegration } from "@consent-manager/integration-mapbox"

- Source code: https://github.com/hashbite/consent-manager/tree/main/packages/integration-mapbox

The Mapbox integration in Consent Manager doesn't directly integrate scripts from Mapbox. Instead, it focuses on managing user consent for utilizing Mapbox maps and services within your application, ensuring GDPR-compliant usage.

<IntegrationProfile integration={mapboxIntegration()} />

## Managing Consent for Mapbox

To control the loading of Mapbox map services based on user consent, you can utilize the [`useDecision` hook](../core/hooks.md#usedecision) from Consent Manager Core or the [`PrivacyShield` component](../core/privacy-shield.md).

### Example: Conditional Loading of Mapbox Services with the Privacy Shield Component

Here's an example of how you can conditionally load a Mapbox map component based on user consent:

```javascript
import React from 'react';
import { PrivacyShield } from '@consent-manager/core';
import MapboxMapComponent from './MapboxMapComponent';

function MapWithConsent() {
  return (
    <PrivacyShield id="mapbox">
      <MapboxMapComponent />
    </PrivacyShield>
  );
}

export default MapWithConsent;
```