---
id: algolia
title: Algolia Integration
---

import { algoliaIntegration } from "@consent-manager/integration-algolia"

- Source code: https://github.com/hashbite/consent-manager/tree/main/packages/integration-algolia

The Algolia integration in Consent Manager doesn't directly integrate scripts from Algolia. Instead, it's designed to manage user consent for sending data to Algolia. This allows users to utilize Algolia's search functionalities in a GDPR-compliant manner.

<IntegrationProfile integration={algoliaIntegration()} />

## Managing Consent for Algolia

To control the loading of any Algolia search integration based on user consent, you can use the [`useDecision` hook](../core/hooks.md#usedecision) from Consent Manager Core or the [`PrivacyShield` component](../core/privacy-shield.md).

### Example: Conditional Loading of Algolia Search with the Privacy Shield component

Here's an example of how you can conditionally load an Algolia search component based on user consent:

```javascript
import React from 'react';
import { PrivacyShield } from '@consent-manager/core';
import AlgoliaSearchComponent from './AlgoliaSearchComponent';

function SearchWithConsent() {
  const [algoliaConsent] = useDecision('algolia');

  return (
    <PrivacyShield id="algolia">
      <AlgoliaSearchComponent />
    </PrivacyShield>
  );
}

export default SearchWithConsent;
```