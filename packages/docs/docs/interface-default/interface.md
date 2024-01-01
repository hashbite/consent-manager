---
title: <ConsentManagerDefaultInterface />
---

# `<ConsentManagerDefaultInterface />`

`ConsentManagerDefaultInterface` is a React component that acts as a wrapper for your application, providing a default user interface for managing consent. It supports all properties passed to the [core `ConsentManager` component](../core/consent-manager.md).

## Props

In addition to all the props supported by `ConsentManager`, `ConsentManagerDefaultInterface` also accepts:

| Prop                         | Type                                                                                                                                                                                | Description                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `messages`                   | `Messages`                                                                                                                                                                          | Custom messages for localization and text customization.        |
| `children`                   | `React.ReactNode`                                                                                                                                                                   | The application's components to be rendered within the manager. |
| `config`                     | [`ConsentManagerConfig`](../configuration.md)                                                                                                                                       | Configuration object for Consent Manager.                       |
| `styles`, `animationStyles`  | `Styles`                                                                                                                                                                            | Custom styling for the interface.                               |
| `ToggleButton`, `ToggleIcon` | [`React.ComponentType<ToggleButtonProps>`,<br/>`React.ComponentType<IconProps>`](https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/toggle-button.tsx) | Components for toggle buttons and icons.                        |
| `CloseIcon`                  | [`React.ComponentType<IconProps>`](https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/index.tsx#L33)                                              | Component for the close icon.                                   |
| `Switch`                     | [`React.ComponentType<SwitchProps>`](https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/switch.tsx)                                               | Component for the switch control.                               |
| `Button`                     | [`React.ComponentType<ButtonProps>`](https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/index.tsx#L37)                                            | Component for buttons.                                          |
| `Form`                       | [`React.ComponentType<ConsentFormProps>` ](https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/form.tsx)                                           | Component for the consent form.                                 |

## Example Usage

```jsx
import { ConsentManagerDefaultInterface } from '@consent-manager/interface-default'

const App = () => (
  <ConsentManagerDefaultInterface config={myConfig} store={myStore}>
    {/* Rest of your application */}
  </ConsentManagerDefaultInterface>
)
```