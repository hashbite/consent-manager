---
title: Alternative Storage Libraries
---

# Using Alternative Storage Libraries for Consent Manager

You are not limited to using `use-persistent-state` for managing user consent decisions in Consent Manager. Although `use-persistent-state` is a convenient choice for semi-permanently storing user consent decisions in the browser's local storage, other storage solutions or even React's native state management can be employed.

## Using React's useState

You can utilize React's `useState` hook for storing consent decisions. This approach provides a more transient storage solution, as the state is maintained only for the duration of the user's session.

### Implementation Example

Here's how you can set up Consent Manager using React's `useState`:

```javascript
import React from 'react';
import { ConsentManager } from '@consent-manager/core';

// Define your Consent Manager configuration
const config = {
  // ... your configuration options ...
};

export const ConsentManagerWrapper = ({ children }) => {
  // Use React's useState for storing consent decisions
  const storage = React.useState({
    decisions: {},
  });

  return (
    <ConsentManager store={storage} config={config}>
      {children}
    </ConsentManager>
  );
};
```