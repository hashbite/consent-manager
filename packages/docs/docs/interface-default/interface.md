# <ConsentManagerDefaultInterface />

`ConsentManagerDefaultInterface` is a React component that acts as a wrapper for your application, providing a default user interface for managing consent. It supports all properties passed to the [core `ConsentManager` component](../core/consent-manager.md).

## Props
In addition to all the props supported by `ConsentManager`, `ConsentManagerDefaultInterface` also accepts:

| Prop                               | Type                                  | Description                                                  |
|------------------------------------|---------------------------------------|--------------------------------------------------------------|
| `messages`                         | `Messages`                            | Custom messages for localization and text customization.     |
| `children`                         | `React.ReactNode`                     | The application's components to be rendered within the manager.|
| `config`                           | `ConsentManagerConfig`                | Configuration object for Consent Manager.                    |
| `styles`, `animationStyles`        | `Styles`                              | Custom styling for the interface.                             |
| `ToggleButton`, `ToggleIcon`       | `React.ComponentType<ToggleButtonProps>`, `React.ComponentType<IconProps>` | Components for toggle buttons and icons.                    |
| `CloseIcon`                        | `React.ComponentType<IconProps>`      | Component for the close icon.                                |
| `Switch`                           | `React.ComponentType<SwitchProps>`    | Component for the switch control.                            |
| `Button`                           | `React.ComponentType<ButtonProps>`    | Component for buttons.                                       |
| `Form`                             | `React.ComponentType<ConsentFormProps>`| Component for the consent form.                              |

## Example Usage
```jsx
import { ConsentManagerDefaultInterface } from '@consent-manager/interface-default';

const App = () => (
  <ConsentManagerDefaultInterface config={myConfig} store={myStore}>
    {/* Rest of your application */}
  </ConsentManagerDefaultInterface>
);
```