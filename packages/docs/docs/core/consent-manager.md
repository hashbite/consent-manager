---
title: <ConsentManager />
---

# `<ConsentManager />`

`ConsentManager` is the core component that provides context and state management for all consent-related functionality. It should wrap the root of your application.

The actual layout is provided by the [Form Component](./consent-manager-form.md), while [the Default Interface is implementing this component on its own](../interface-default/interface.md), you dont need to set it up when you use the default interface.

## Props

| Prop                | Type                                                                                                        | Description                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `config`            | [`ConsentManagerConfig`](../configuration.md)                                                               | Configuration object for Consent Manager.                         |
| `store`             | [`ConsentManagerStore`](https://github.com/hashbite/consent-manager/blob/main/packages/core/src/storage.ts) | Storage mechanism for consent decisions.                          |
| `fallbackComponent` | `React.ComponentType<FallbackComponentProps>`                                                               | Optional. Custom fallback component for unconsented integrations. |
| `children`          | `React.ReactNode`                                                                                           | The application's components.                                     |

## Example Usage

```jsx
import { ConsentManager } from '@consent-manager/core'

const App = () => (
  <ConsentManager config={myConfig} store={myStore}>
    {/* Rest of your application */}
  </ConsentManager>
)
```
