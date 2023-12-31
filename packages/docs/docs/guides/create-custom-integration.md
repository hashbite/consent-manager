---
title: Custom Integrations
---

# Creating a Custom (Tracking) Integration for Consent Manager

This guide will help you create a custom integration for Consent Manager. We’ll use a generalized approach, providing you with the framework to integrate any third-party service.

## Step 1: Define the Integration Configuration

Create an `IntegrationConfig` object for your integration. This includes metadata like ID, title, category, colors, icon, privacy policy URL, and description. You can find suitable icons for your service at [Simple Icons](https://simpleicons.org/).

```javascript
import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor,
  IntegrationConfig
} from '@consent-manager/core';

// Replace with your service's icon
import { siYourService } from 'simple-icons';

export function yourServiceIntegration(options: { apiKey: string }): IntegrationConfig {
  const { title, hex, path } = siYourService;
  const color = `#${hex}`;
  const contrastColor = getForegroundColor(color);
  const Icon = createIconComponentFromSimpleIconsSvgPath(title, path);
  const lang = typeof window !== 'undefined' ? window.navigator.language : 'en-US';

  return {
    id: 'your-service',
    title,
    category: 'Your Category',
    color,
    contrastColor,
    Icon,
    privacyPolicyUrl: `https://your-service-privacy-policy.com?hl=${lang}`,
    description: 'Description of your service.',
    WrapperComponent,
    options: { apiKey: options.apiKey }, // Pass custom options here
  };
}
```

## Step 2: Initialize Service Scripts On User Consent

The `WrapperComponent` is used to initialize the service and its code based on user consent.

**Note:** That despite its name, it does not actually wrap your application - this is a legacy term from an earlier version of Consent Manager and may be renamed in the future.

```javascript
import React from 'react';
import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor,
  IntegrationConfig,
  useDecision,
  useIntegration
} from '@consent-manager/core';

let wasInitialized = false;

const WrapperComponent: React.FC = () => {
  const [isEnabled] = useDecision('your-service');
  const yourServiceConfig = useIntegration('your-service');

  if (!yourServiceConfig || !yourServiceConfig.options) {
    throw new Error('Initialization requires configuration.');
  }

  // Avoid double initialization
  if (!wasInitialized && isEnabled) {
    // Initialize your service here using yourServiceConfig.options
    wasInitialized = true;
  }

  return null;
};

export function yourServiceIntegration(options: { apiKey: string }): IntegrationConfig {
  // ...

  return {
    // ...
    WrapperComponent,
  };
}
```

## Step 3: Add to Consent Manager Configuration

Incorporate your custom integration into the Consent Manager configuration of your application. Here's an example:

```javascript
import { ConsentManager } from '@consent-manager/core';
import { yourServiceIntegration } from './your-service-integration';

const App = () => {
  const config = {
    integrations: [
      yourServiceIntegration({ apiKey: 'your-api-key' }) // Pass custom options here
    ],
  };

  return (
    <ConsentManager config={config}>
      {/* Your application components */}
    </ConsentManager>
  );
};
```

## Additional Notes

- Ensure thorough testing, particularly in respecting user consent choices.
- Be mindful of performance, especially when loading external scripts or services.

This guide gives you a flexible framework to integrate any third-party service with Consent Manager, ensuring your application is compliant and respectful of user consent.