"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"someSidebar":[{"type":"category","label":"Consent Manager","items":[{"type":"link","label":"What is Consent Manager?","href":"/consent-manager/docs/","docId":"about","unlisted":false},{"type":"link","label":"Quick Start Guide","href":"/consent-manager/docs/quick-start-guide","docId":"quick-start-guide","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Guides","items":[{"type":"link","label":"Client-Side Routing and Tracking in SPAs","href":"/consent-manager/docs/guides/client-side-routing","docId":"guides/client-side-routing","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Core Components","items":[{"type":"link","label":"ConsentManager","href":"/consent-manager/docs/components/core/consent-manager","docId":"components/core/consent-manager","unlisted":false},{"type":"link","label":"ConsentManagerForm","href":"/consent-manager/docs/components/core/consent-manager-form","docId":"components/core/consent-manager-form","unlisted":false},{"type":"link","label":"PrivacyShield","href":"/consent-manager/docs/components/core/privacy-shield","docId":"components/core/privacy-shield","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Core Hooks","items":[{"type":"link","label":"This Page is Under Construction","href":"/consent-manager/docs/todo","docId":"todo","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Default Interface","items":[{"type":"link","label":"This Page is Under Construction","href":"/consent-manager/docs/todo","docId":"todo","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Integrations","items":[{"type":"link","label":"Algolia Integration","href":"/consent-manager/docs/integrations/algolia","docId":"integrations/algolia","unlisted":false},{"type":"link","label":"Google Analytics Integration","href":"/consent-manager/docs/integrations/google-analytics","docId":"integrations/google-analytics","unlisted":false},{"type":"link","label":"Google Tag Manager Integration","href":"/consent-manager/docs/integrations/google-tag-manager","docId":"integrations/google-tag-manager","unlisted":false},{"type":"link","label":"Hubspot Integration","href":"/consent-manager/docs/integrations/hubspot","docId":"integrations/hubspot","unlisted":false},{"type":"link","label":"LinkedIn Integration","href":"/consent-manager/docs/integrations/linkedin","docId":"integrations/linkedin","unlisted":false},{"type":"link","label":"Mapbox Integration","href":"/consent-manager/docs/integrations/mapbox","docId":"integrations/mapbox","unlisted":false},{"type":"link","label":"Matomo Integration","href":"/consent-manager/docs/integrations/matomo","docId":"integrations/matomo","unlisted":false},{"type":"link","label":"Segment Integration","href":"/consent-manager/docs/integrations/segment","docId":"integrations/segment","unlisted":false},{"type":"link","label":"Vimeo Integration","href":"/consent-manager/docs/integrations/vimeo","docId":"integrations/vimeo","unlisted":false},{"type":"link","label":"Youtube Integration","href":"/consent-manager/docs/integrations/youtube","docId":"integrations/youtube","unlisted":false}],"collapsed":true,"collapsible":true}]},"docs":{"about":{"id":"about","title":"What is Consent Manager?","description":"Welcome to Consent Manager \u2013 an intuitive, React-based toolkit designed to seamlessly integrate external services into web applications, ensuring compliance with GDPR and various data privacy laws. Our solution simplifies managing user consent, streamlining data processing and interactions with third-party services while prioritizing user privacy and experience.","sidebar":"someSidebar"},"components/core/consent-manager":{"id":"components/core/consent-manager","title":"ConsentManager","description":"ConsentManager is the core component that provides context and state management for all consent-related functionality. It should wrap the root of your application.","sidebar":"someSidebar"},"components/core/consent-manager-form":{"id":"components/core/consent-manager-form","title":"ConsentManagerForm","description":"ConsentManagerForm is a React component designed to provide a basic, unstyled form enabling users to control their consent choices for different integrations. This component is particularly useful as a reference or starting point for integrating a custom consent form. It facilitates the enabling or disabling of integrations based on user preferences. For a pre-styled version, consider exploring our default interface.","sidebar":"someSidebar"},"components/core/privacy-shield":{"id":"components/core/privacy-shield","title":"PrivacyShield","description":"PrivacyShield is a component that conditionally renders children based on the consent decision for a specific integration. It\'s typically used to wrap content that should only be displayed if the user has consented to the associated integration.","sidebar":"someSidebar"},"guides/client-side-routing":{"id":"guides/client-side-routing","title":"Client-Side Routing and Tracking in SPAs","description":"Single Page Applications (SPAs) update the content without reloading the entire page, which can make traditional page view tracking challenging. To accurately track page views in such applications, you can use the trackPageViewSPA method provided by some of our integrations.","sidebar":"someSidebar"},"integrations/algolia":{"id":"integrations/algolia","title":"Algolia Integration","description":"- Source code//github.com/hashbite/consent-manager/tree/main/packages/integration-algolia","sidebar":"someSidebar"},"integrations/google-analytics":{"id":"integrations/google-analytics","title":"Google Analytics Integration","description":"- Source code//github.com/hashbite/consent-manager/tree/main/packages/integration-google-analytics","sidebar":"someSidebar"},"integrations/google-tag-manager":{"id":"integrations/google-tag-manager","title":"Google Tag Manager Integration","description":"- Source code//github.com/hashbite/consent-manager/tree/main/packages/integration-google-tag-manager","sidebar":"someSidebar"},"integrations/hubspot":{"id":"integrations/hubspot","title":"Hubspot Integration","description":"- Source code//github.com/hashbite/consent-manager/tree/main/packages/integration-hubspot","sidebar":"someSidebar"},"integrations/linkedin":{"id":"integrations/linkedin","title":"LinkedIn Integration","description":"- Source code//github.com/hashbite/consent-manager/tree/main/packages/integration-linkedin","sidebar":"someSidebar"},"integrations/mapbox":{"id":"integrations/mapbox","title":"Mapbox Integration","description":"- Source code//github.com/hashbite/consent-manager/tree/main/packages/integration-mapbox","sidebar":"someSidebar"},"integrations/matomo":{"id":"integrations/matomo","title":"Matomo Integration","description":"- Source code//github.com/hashbite/consent-manager/tree/main/packages/integration-matomo","sidebar":"someSidebar"},"integrations/segment":{"id":"integrations/segment","title":"Segment Integration","description":"- Source code//github.com/hashbite/consent-manager/tree/main/packages/integration-segment","sidebar":"someSidebar"},"integrations/vimeo":{"id":"integrations/vimeo","title":"Vimeo Integration","description":"- Source code//github.com/hashbite/consent-manager/tree/main/packages/integration-vimeo","sidebar":"someSidebar"},"integrations/youtube":{"id":"integrations/youtube","title":"Youtube Integration","description":"- Source code//github.com/hashbite/consent-manager/tree/main/packages/integration-youtube","sidebar":"someSidebar"},"new-structure":{"id":"new-structure","title":"new-structure","description":"* home - introduction about the how and why"},"quick-start-guide":{"id":"quick-start-guide","title":"Quick Start Guide","description":"Welcome to the Quick Start Guide for Consent Manager. This guide will help you swiftly integrate Consent Manager into your React project, aligning with GDPR requirements while enhancing user privacy.","sidebar":"someSidebar"},"todo":{"id":"todo","title":"This Page is Under Construction","description":"Apologies for the inconvenience. This page is currently in progress. We\'re actively working on adding more content here, so stay tuned!","sidebar":"someSidebar"}}}')}}]);