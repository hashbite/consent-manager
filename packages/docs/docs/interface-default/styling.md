---
title: Styling the Default Interface
---

# Styling the Consent Manager Default Interface

Customizing the appearance of the default interface of Consent Manager can be achieved in various ways, allowing you to align it with your application's design and branding:

## Adjusting Colors via CSS Variables

You can modify the color scheme by tweaking CSS variables. This approach offers an easy way to align the interface with your app's color palette.

```css
/*
 * These might be the most relevant css variables with their defaults.
 * See all: https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/index.module.css
*/
:root {
  --consent-manager-ui-primary: #16a34a;
  --consent-manager-ui-bg: #f4f4f5;
  --consent-manager-ui-bg-transparent: rgba(250, 250, 250, 0.87);
  --consent-manager-ui-color: #18181b;
  --consent-manager-ui-switch-slide-bg: #e4e4e7;
  --consent-manager-ui-link-color: var(--consent-manager-ui-primary);
  --consent-manager-ui-fallback-stripe-color: rgb(247, 247, 248);
}

html[data-theme='dark'] {
  --consent-manager-ui-bg: #18181b;
  --consent-manager-ui-bg-transparent: rgba(24, 24, 27, 0.87);
  --consent-manager-ui-color: #f4f4f5;
  --consent-manager-ui-switch-slide-bg: #a1a1aa;
  --consent-manager-ui-link-color: #22c55e;
  --consent-manager-ui-fallback-stripe-color: rgb(32, 32, 34);
}
```

### Dark Mode

The default interface comes with dark mode support out of the box. Please test your page in dark mode to ensure the privacy shield fallback component looks fine.

## Replacing Components

The default interface components can be replaced with your custom components. This includes buttons, switches, and more. For a list of replaceable components, refer to the properties of the [`ConsentManagerDefaultInterface` component](./interface.md).

### Example: Custom Toggle Button

Here's an example of how you can add your own toggle button. The source for the default toggle button can be found [here](https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/toggle-button.tsx):

```jsx
// Import your custom toggle button component
import MyToggleButton from './MyToggleButton'

;<ConsentManagerDefaultInterface
  ToggleButton={MyToggleButton}
  // ... other props
>
  {/* Your app components */}
</ConsentManagerDefaultInterface>
```

## Overriding Styles

You can override the existing styles, though this method should be used cautiously. For a complete overview of the styles applied, visit the [style sheet here](https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/index.module.css). The plugin uses consistent class names, making it possible to override styles using CSS.

## Creating Your Own Styles

For a completely custom look, consider copying and altering the existing stylesheet found [here](https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/index.module.css). This method gives you full control over the interface's appearance.
