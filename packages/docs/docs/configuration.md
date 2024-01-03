# Configuration

The configuration detailed here is utilized by both the [`<ConsentManager />` component](./core/consent-manager.md) in Core and the [`<ConsentManagerDefaultInterface />` component](./interface-default/interface.md) in our default interface.

| Property           | Type                                                                                                | Description                                                      |
| ------------------ | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `integrations`     | `IntegrationConfig[]`                                                                               | Array of configurations for each integration.                    |
| `onChangeDecision` | [`Function`](https://github.com/hashbite/consent-manager/blob/main/packages/core/src/config.ts#L32) | Optional callback that triggers when a consent decision changes. |

## Setting Up Integrations

### Utilizing Pre-built Integrations

For ease and efficiency, you can leverage existing integrations in Consent Manager. These integrations come pre-configured and are ready to use with minimal setup, as demonstrated below:

```javascript
import { matomoIntegration } from '@consent-manager/integration-matomo'

const consentManagerConfig = {
  integrations: [
    matomoIntegration({
      matomoURL: 'https://statistics.yourdomain.com/',
      siteID: 'YOUR_SITE_ID',
    }),
  ],
}
```

### Create your own integration

Alternatively, you can [create a custom integration](./guides/create-custom-integration.md) tailored to your specific needs.

### `IntegrationConfig` Structure

Each integration used within the `ConsentManagerConfig` must conform to the following structure:

| Property               | Type                       | Description                                                     |
| ---------------------- | -------------------------- | --------------------------------------------------------------- |
| `id`                   | `string`                   | Unique identifier for the integration.                          |
| `title`                | `string`                   | The title of the integration.                                   |
| `description`          | `string`                   | A brief description of the integration.                         |
| `category`             | `string`                   | The category under which the integration falls.                 |
| `color`                | `string`                   | Optional. The primary color associated with the integration.    |
| `contrastColor`        | `string`                   | Optional. A contrasting color for better visibility.            |
| `privacyPolicyUrl`     | `string`                   | URL to the privacy policy of the integration.                   |
| `Icon`                 | `React.FC`                 | A React component for the integration's icon.                   |
| `pageViewEventHandler` | `PageViewEventTrigger`     | Optional. Handler for tracking page views.                      |
| `WrapperComponent`     | `React.FC`                 | Optional. A wrapper component for the integration.              |
| `options`              | `IntegrationConfigOptions` | Optional. Additional configuration options for the integration. |
| `enabledByDefault`     | `boolean`                  | Optional. Indicates if the integration is enabled by default.   |

## Example of a Consent Manager Configuration

Here’s an example of how you might configure the Consent Manager in your application:

```javascript
import { ConsentManager } from '@consent-manager/core'
import { matomoIntegration } from '@consent-manager/integration-matomo'
import { yourCustomIntegration } from './your-integration'

const consentManagerConfig = {
  integrations: [
    matomoIntegration({
      matomoURL: 'https://statistics.yourdomain.com/',
      siteID: 'YOUR_SITE_ID',
    }),
    yourCustomIntegration({
      tracking_key: 'VERY#SECURE#KEY',
    }),
  ],
  onChangeDecision: (lastDecisionsState, nextDecisionState) => {
    // Handle decision changes as you wish
  },
}

const App = () => {
  return (
    <ConsentManager config={consentManagerConfig}>
      {/* Your application components */}
    </ConsentManager>
  )
}
```
