# <ConsentManagerForm />

`ConsentManagerForm` is a React component designed to provide a basic, unstyled form enabling users to control their consent choices for different integrations. This component is particularly useful as a reference or starting point for integrating a custom consent form. It facilitates the enabling or disabling of integrations based on user preferences. For a pre-styled version, consider exploring our default interface.

## Props
| Prop           | Type                        | Description                                                  |
|----------------|-----------------------------|--------------------------------------------------------------|
| `formComponent`| `React.ComponentType<DecisionsFormProps>` | Optional. A custom form component to override the default.   |
| `...props`     | `unknown`                   | Any additional props are passed down to the form component.  |

## Example Usage
```jsx
import { ConsentManagerForm } from '@consent-manager/core';

const MyConsentForm = () => {
  // Custom form component (optional)
  const CustomFormComponent = ...; 

  return (
    <ConsentManagerForm formComponent={CustomFormComponent} />
  );
};
```
