---
title: Custom User Interfaces
---

# Creating a Custom User Interface for Consent Manager

This guide outlines the initial steps to integrate your custom user interface with Consent Manager. Your feedback and insights from this process are invaluable to us. Please feel free to share your experiences in the issues section, as we are eager to enhance the implementation experience and this documentation for others who wish to create their own user interface.

## Step 1: Wrap Your App as Usual

First, wrap your application with `ConsentManager`, using your custom fallback component to match your design. For reference, see the [default implementation](https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/index.tsx).

```tsx
import { ConsentManager, ConsentManagerForm } from '@consent-manager/core'
import { ConsentManagerCustomFormComponent } from './consent-manager-custom-form'

export const ConsentManagerCustomInterface = ({ children, ...props }) => {
  return (
    <ConsentManager
      config={config}
      store={store}
      fallbackComponent={(fallbackProps) => (
        <YourCustomFallbackComponent {...fallbackProps} />
      )}
    >
      {children}
      <ConsentManagerForm
        formComponent={ConsentManagerCustomFormComponent}
        id="consent-manager-default-interface"
        {...props}
      />
    </ConsentManager>
  )
}
```

## Step 2: Create Your Own Form Component

For reference see the [default interface implementation](https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/interface.tsx)

Your custom form component will receive the following properties:

### `DecisionsFormProps` Structure

| Prop            | Type                                  | Description                                    |
| --------------- | ------------------------------------- | ---------------------------------------------- |
| `integrations`  | `IntegrationConfig[]`                 | Array of integration configurations.           |
| `initialValues` | `DecisionsFormState`                  | Initial state indicating enabled integrations. |
| `onSubmit`      | `(value: DecisionsFormState) => void` | Callback function to handle form submission.   |

### `IntegrationConfig` Structure

| Prop                     | Type                                      | Description                                         |
| ------------------------ | ----------------------------------------- | --------------------------------------------------- |
| `id`                     | `string`                                  | Unique identifier for the integration.              |
| `title`                  | `string`                                  | Title of the integration.                           |
| `description`            | `string`                                  | Description of the integration.                     |
| `category`               | `string`                                  | Category of the integration.                        |
| `color`, `contrastColor` | `string`                                  | Optional colors for the integration icon.           |
| `privacyPolicyUrl`       | `string`                                  | URL to the privacy policy of the integration.       |
| `Icon`                   | `React.FC<IntegrationIconComponentProps>` | Icon component for the integration.                 |
| `pageViewEventHandler`   | `PageViewEventTrigger`                    | Optional event handler for tracking page views.     |
| `WrapperComponent`       | `React.FC`                                | Optional wrapper component for the integration.     |
| `options`                | `IntegrationConfigOptions`                | Additional options specific to the integration.     |
| `enabledByDefault`       | `boolean`                                 | Indicates if the integration is enabled by default. |

Certainly! Here's the table detailing the structure of `DecisionsFormState`:

### `DecisionsFormState` Structure

| Property  | Type              | Description                                                                            |
| --------- | ----------------- | -------------------------------------------------------------------------------------- |
| `enabled` | `IntegrationId[]` | An array of `IntegrationId`s representing the integrations that are currently enabled. |

Each `IntegrationId` in the `enabled` array corresponds to a unique identifier for an integration that the user has consented to. This state is used to manage and reflect the user's current consent choices in your custom form component.

### Example Implementation

```jsx
export const ConsentManagerCustomFormComponent: React.FC = ({
  integrations,
  initialValues,
  onSubmit,
}) => {
  const [set, { toggle, has }] = useSet(new Set(initialValues.enabled));

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const integrationId = e.target.value;
    toggle(integrationId);
  }, [toggle]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const enabled = Array.from(set.values());
    onSubmit({ enabled });
  }, [set, onSubmit]);

  return (
    <form onSubmit={handleSubmit}>
      {integrations.map(({ id, title }) => (
        <label key={id}>
          <input
            name="enabled"
            type="checkbox"
            value={id}
            onChange={handleChange}
            checked={has(id)}
          /> {title}
        </label>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};
```
