---
title: Helper Functions
---

# Helper Functions in Consent Manager Core

Consent Manager Core offers a few helper functions that enhance the user experience and accessibility of your integrations.

## `getForegroundColor(bgHex: string): string`

This function determines a suitable foreground color based on the background color to meet WCAG contrast ratio requirements. It uses the [wcag-contrast](https://www.npmjs.com/package/wcag-contrast) module, which adheres to accessibility standards ensuring content readability for all users, including those with low vision.

### Parameters

- `bgHex` (string): The hexadecimal color code of the background.

### Returns

- (string): A hexadecimal color code (`#000` or `#fff`) for the foreground, ensuring optimal contrast.

### Example Usage

```jsx
import { getForegroundColor } from '@consent-manager/core'

const backgroundColor = '#ff5733'
const foregroundColor = getForegroundColor(backgroundColor)
```

## `createIconComponentFromSimpleIconsSvgPath(title: string, path: string)`

This function generates a React component for an icon using an SVG path from [Simple Icons](https://github.com/icons-pack/react-simple-icons). It's particularly useful when creating custom integrations, ensuring that icons match the brand's CI in terms of color and style within the Consent Manager form and privacy shield.

### Parameters

- `title` (string): The title of the icon, used for accessibility.
- `path` (string): The SVG path data for the icon.

### Returns

- `React.FC<IntegrationIconComponentProps>`

### Example Usage in Custom Integration

When creating a custom integration, you can utilize this function to incorporate brand-specific icons:

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

  return {
    // ... other configuration properties
    Icon,
    color,
    contrastColor,
    // ...
  };
}
```
