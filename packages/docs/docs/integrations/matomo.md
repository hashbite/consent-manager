---
id: matomo
title: Matomo Integration
slug: "/integrations/matomo"
---

import { matomoIntegration, matomoPrivacyAwareIntegration } from "@consent-manager/integration-matomo"

- Source code: https://github.com/hashbite/consent-manager/tree/main/packages/integration-matomo

Available as disabled default implementation and second variant when your [Matomo instance is privacy-aware](https://matomo.org/cookie-consent-banners/).

## Default

<IntegrationProfile integration={matomoIntegration({})} />

## Privacy aware variant

Please make sure your [Matomo instance is privacy-aware](https://matomo.org/cookie-consent-banners/) before using this variant.

<IntegrationProfile integration={matomoPrivacyAwareIntegration({})} />
