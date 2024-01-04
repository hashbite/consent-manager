---
id: vimeo
title: Vimeo Integration
---

import { VimeoVideo } from '../../src/components/vimeo-video'
import { vimeoIntegration } from "@consent-manager/integration-vimeo"

- Source code: https://github.com/hashbite/consent-manager/tree/main/packages/integration-vimeo

The Vimeo integration with Consent Manager handles user consent for embedding Vimeo videos, ensuring GDPR-compliant usage.

<IntegrationProfile integration={vimeoIntegration({})} />

## Managing Consent for Vimeo

To manage the loading of Vimeo videos based on user consent, utilize the [`useDecision` hook](../core/hooks.md#usedecision) from Consent Manager Core or the [`PrivacyShield` component](../core/privacy-shield.md).

### Example: Conditional Loading of Vimeo Videos

```javascript
import React from 'react';
import { PrivacyShield } from '@consent-manager/core';
import VimeoVideoComponent from './VimeoVideoComponent';

function VideoWithConsent() {
  return (
    <PrivacyShield id="vimeo">
      <VimeoVideoComponent />
    </PrivacyShield>
  );
}

export default VideoWithConsent;
```

<VimeoVideo id="325910798" />