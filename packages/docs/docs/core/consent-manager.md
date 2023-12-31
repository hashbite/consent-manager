# <ConsentManager />

`ConsentManager` is the core component that provides context and state management for all consent-related functionality. It should wrap the root of your application.

## Props
| Prop                | Type                                  | Description                                                  |
|---------------------|---------------------------------------|--------------------------------------------------------------|
| `config`            | `ConsentManagerConfig`                | Configuration object for Consent Manager.                    |
| `fallbackComponent` | `React.ComponentType<FallbackComponentProps>` | Optional. Custom fallback component for unconsented integrations. |
| `store`             | `ConsentManagerStore`                 | Storage mechanism for consent decisions.                     |
| `children`          | `React.ReactNode`                     | The application's components.                                |

## Example Usage
```jsx
import { ConsentManager } from '@consent-manager/core';

const App = () => (
  <ConsentManager config={myConfig} store={myStore}>
    {/* Rest of your application */}
  </ConsentManager>
);
```