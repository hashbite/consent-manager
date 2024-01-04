---
id: youtube
title: Youtube Integration
slug: '/integrations/youtube'
---

import { YoutubeVideo } from '../../src/components/youtube-video'
import { youtubeIntegration } from "@consent-manager/integration-youtube"

- Source code: https://github.com/hashbite/consent-manager/tree/main/packages/integration-youtube

The YouTube integration in Consent Manager manages user consent for YouTube video embeds in your application, aligning with GDPR compliance.

<IntegrationProfile integration={youtubeIntegration({})} />

## Managing Consent for YouTube

To control the loading of YouTube videos based on user consent, use the [`useDecision` hook](../core/hooks.md#usedecision) from Consent Manager Core or the [`PrivacyShield` component](../core/privacy-shield.md).

### Example: Conditional Loading of YouTube Videos

```javascript
import React from 'react';
import { PrivacyShield } from '@consent-manager/core';
import YouTubeVideoComponent from './YouTubeVideoComponent';

function VideoWithConsent() {
  return (
    <PrivacyShield id="youtube">
      <YouTubeVideoComponent />
    </PrivacyShield>
  );
}

export default VideoWithConsent;
```

<YoutubeVideo id="WhWc3b3KhnY" />