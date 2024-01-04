---
id: linkedin
title: LinkedIn Integration
---

import { linkedinIntegration } from "@consent-manager/integration-linkedin"

- Source code: https://github.com/hashbite/consent-manager/tree/main/packages/integration-linkedin

The LinkedIn integration with Consent Manager directly injects the LinkedIn tracking script (Insight Tag) into your application once the user consents. The LinkedIn Insight Tag enables tracking of website visitors for analytics and ad targeting purposes. For more information about the LinkedIn Insight Tag, you can refer to [LinkedIn's official page](https://business.linkedin.com/marketing-solutions/insight-tag).

<IntegrationProfile integration={linkedinIntegration({})} />

## Configuration Options

* partnerId: Your LinkedIn Partner ID