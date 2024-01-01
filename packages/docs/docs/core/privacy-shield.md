---
title: <PrivacyShield />
---

import { PrivacyShield } from '@consent-manager/core';
import { DisableButton } from '../../src/components/disable-button';

# `<PrivacyShield />`

`PrivacyShield` is a component that conditionally renders children based on the consent decision for a specific integration. It's typically used to wrap content that should only be displayed if the user has consented to the associated integration.

## Props

| Prop       | Type              | Description                                              |
| ---------- | ----------------- | -------------------------------------------------------- |
| `id`       | `string`          | The identifier for the integration to check consent for. |
| `children` | `React.ReactNode` | The content to render if consent is given.               |
| `...props` | `unknown`         | Additional props passed to the fallback component.       |

## Prefer a Custom Placeholder or Fallback Component?

Set it up globally using the `fallbackComponent` property in the [`ConsentManager` component](./consent-manager.md).

## Example Usage

```jsx
import { PrivacyShield } from '@consent-manager/core'

const YouTubeEmbed = ({ videoId }) => (
  <PrivacyShield id="youtube">
    {/* Your YouTube embed component */}
  </PrivacyShield>
)
```

### Example Rendering

Here's an example of what a shield will appear as:

<PrivacyShield id="demo">
  <center>
    <h4>Looking for the privacy shield?</h4>
    <p>The demo integration has been enabled!</p>
    <DisableButton id="demo">Display Privacy Shield</DisableButton>
  </center>
</PrivacyShield>
