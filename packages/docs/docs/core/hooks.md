# Consent Manager Core Hooks Documentation

The Consent Manager Core provides a suite of React hooks designed to manage and handle user consent decisions, integration configurations, and other aspects related to consent management.

- [Consent Manager Core Hooks Documentation](#consent-manager-core-hooks-documentation)
  - [Handling User Consent Decisions](#handling-user-consent-decisions)
    - [useDecision](#usedecision)
      - [Code and Example](#code-and-example)
    - [useDecisions](#usedecisions)
      - [Code and Example](#code-and-example-1)
  - [Interacting with Integration Configurations](#interacting-with-integration-configurations)
    - [useIntegration](#useintegration)
      - [Code and Example](#code-and-example-2)
    - [useIntegrations](#useintegrations)
      - [Code and Example](#code-and-example-3)
    - [useEnabledIntegrations](#useenabledintegrations)
      - [Code and Example](#code-and-example-4)
  - [Other hooks](#other-hooks)
    - [useConsentFormVisible](#useconsentformvisible)
      - [Code and Example](#code-and-example-5)
    - [useFallbackComponent](#usefallbackcomponent)
      - [Code and Example](#code-and-example-6)
    - [usePageViewEventTrigger](#usepagevieweventtrigger)
      - [Code and Example](#code-and-example-7)


## Handling User Consent Decisions

Our suite of hooks offers comprehensive solutions for interacting with and managing users' consent preferences.

### useDecision

`useDecision` is used to manage the consent decision for a specific integration. It allows you to retrieve and set the consent state of a particular integration.

#### Code and Example
```javascript
export function useDecision(
  id: IntegrationId
): [boolean, Dispatch<SetStateAction<boolean>>] {
  // ... implementation ...
}
```

**Example Usage:**
```jsx
import React from 'react';
import { useDecision } from '@consent-manager/core';

const IntegrationComponent = ({ integrationId }) => {
  const [consentGiven, setConsentGiven] = useDecision(integrationId);

  const handleConsentChange = () => {
    setConsentGiven(!consentGiven);
  };

  return (
    <div>
      <p>Consent for {integrationId}: {consentGiven ? 'Granted' : 'Denied'}</p>
      <button onClick={handleConsentChange}>
        {consentGiven ? 'Revoke Consent' : 'Give Consent'}
      </button>
    </div>
  );
};
```

In this example, `useDecision` efficiently manages user consent for a specific integration. It offers both the current consent state and a function to update it, ideal for components that display consent status or allow users to change their consent. This hook is also integral to the functionality of the [`<PrivacyShield />` component](./privacy-shield.md).


### useDecisions

Manages the state of consent decisions for all integrations, providing a global view of user consents.

#### Code and Example
```javascript
export function useDecisions(): [ConsentManagerDecisions, Dispatch<SetStateAction<ConsentManagerDecisions>>] {
  // ... implementation ...
}
```

**Example Usage:**
```jsx
import React from 'react';
import { useDecisions } from '@consent-manager/core';

const ConsentOverview = () => {
  const [decisions] = useDecisions();

  return (
    <ul>
      {Object.entries(decisions).map(([integrationId, decision]) => (
        <li key={integrationId}>
          {integrationId}: {decision ? 'Consented' : 'Not Consented'}
        </li>
      ))}
    </ul>
  );
};
```

In this example, `useDecisions` is used to access all consent decisions across various integrations, allowing for a comprehensive overview.

## Interacting with Integration Configurations

These specialized hooks facilitate access to the configuration from all integrations, whether it's information on a specific integration or insights into all enabled integrations.

### useIntegration

Retrieves the configuration for a specific integration.

#### Code and Example
```javascript
export function useIntegration(id: IntegrationId): IntegrationConfig | undefined {
  // ... implementation ...
}
```

**Example Usage:**
```jsx
import React from 'react';
import { useIntegration } from '@consent-manager/core';

const IntegrationDetails = ({ integrationId }) => {
  const integrationConfig = useIntegration(integrationId);

  if (!integrationConfig) return <p>Integration not found.</p>;

  return (
    <div>
      <h2>{integrationConfig.title}</h2>
      <p>{integrationConfig.description}</p>
    </div>
  );
};
```

This example shows how `useIntegration` can be used to retrieve and display the configuration details of a specific integration.

### useIntegrations

Retrieves all integration configurations from the context.

#### Code and Example
```javascript
export function useIntegrations(): IntegrationConfig[] {
  // ... implementation ...
}
```

**Example Usage:**
```jsx
import React from 'react';
import { useIntegrations } from '@consent-manager/core';

const AllIntegrations = () => {
  const integrations = useIntegrations();

  return (
    <ul>
      {integrations.map((integration) => (
        <li key={integration.id}>{integration.title}</li>
      ))}
    </ul>
  );
};
```

`useIntegrations` is utilized for accessing the configurations of all available integrations, aiding in rendering a complete list or performing global operations.

### useEnabledIntegrations

Same as useIntegrations, but provides a list of **enabled** integrations based on user consent.

#### Code and Example
```javascript
export function useEnabledIntegrations(): [IntegrationId[], Dispatch<SetStateAction<IntegrationId[]>>] {
  // ... implementation ...
}
```

**Example Usage:**
```jsx
import React from 'react';
import { useEnabledIntegrations } from '@consent-manager/core';

const EnabledIntegrationsList = () => {
  const [enabledIntegrations] = useEnabledIntegrations();

  return (
    <ul>
      {enabledIntegrations.map((id) => (
        <li key={id}>{id}</li>
      ))}
    </ul>
  );
};
```

`useEnabledIntegrations` offers an easy way to list all integrations that have been consented to by the user.

## Other hooks

### useConsentFormVisible

`useConsentFormVisible` manages the visibility of the consent form, determining whether it should be displayed based on pending decisions.

#### Code and Example
```javascript
export function useConsentFormVisible(): boolean {
  // ... implementation ...
}
```

**Example Usage:**
```jsx
import React from 'react';
import { useConsentFormVisible } from '@consent-manager/core';

const ConsentForm = () => {
  const isFormVisible = useConsentFormVisible();

  return isFormVisible ? <div>Your Consent Form</div> : null;
};
```

This hook is particularly useful for conditionally rendering the consent form based on the user's current consent decisions.

### useFallbackComponent

`useFallbackComponent` retrieves the fallback component defined in the Consent Manager's context, typically used when an integration is disabled or awaiting consent.

#### Code and Example
```javascript
export function useFallbackComponent(): React.ComponentType<FallbackComponentProps> {
  // ... implementation ...
}
```

**Example Usage:**
```jsx
import React from 'react';
import { useFallbackComponent } from '@consent-manager/core';

const MyComponent = () => {
  const FallbackComponent = useFallbackComponent();

  return <FallbackComponent integrationId="integration-id" />;
};
```

In this example, `useFallbackComponent` helps in obtaining and rendering a specific fallback UI when an integration is not enabled.

### usePageViewEventTrigger

`usePageViewEventTrigger` provides a function to trigger page view events for a specific integration, often used for analytics and tracking purposes.

#### Code and Example
```javascript
export function usePageViewEventTrigger(
  id: IntegrationId
): PageViewEventTrigger {
  // ... implementation ...
}
```

**Example Usage:**
```jsx
import React, { useEffect } from 'react';
import { usePageViewEventTrigger } from '@consent-manager/core';

const PageComponent = ({ integrationId }) => {
  const triggerPageViewEvent = usePageViewEventTrigger(integrationId);

  useEffect(() => {
    triggerPageViewEvent(window.location);
  }, [triggerPageViewEvent]);

  return <div>Page Content</div>;
};
```

This hook is ideal for integrating with analytics tools, allowing you to track page views only when consent is granted for the specified integration.