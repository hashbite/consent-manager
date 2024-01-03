"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8306],{2346:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=i(2322),o=i(5392);const a={},t="Consent Manager Core Hooks Documentation",r={id:"core/hooks",title:"Consent Manager Core Hooks Documentation",description:"The Consent Manager Core provides a suite of React hooks designed to manage and handle user consent decisions, integration configurations, and other aspects related to consent management.",source:"@site/docs/core/hooks.md",sourceDirName:"core",slug:"/core/hooks",permalink:"/consent-manager/docs/core/hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/core/hooks.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"<PrivacyShield />",permalink:"/consent-manager/docs/core/privacy-shield"},next:{title:"Helper Functions",permalink:"/consent-manager/docs/core/helpers"}},l={},c=[{value:"Handling User Consent Decisions",id:"handling-user-consent-decisions",level:2},{value:"useDecision",id:"usedecision",level:3},{value:"Code and Example",id:"code-and-example",level:4},{value:"useDecisions",id:"usedecisions",level:3},{value:"Code and Example",id:"code-and-example-1",level:4},{value:"Interacting with Integration Configurations",id:"interacting-with-integration-configurations",level:2},{value:"useIntegration",id:"useintegration",level:3},{value:"Code and Example",id:"code-and-example-2",level:4},{value:"useIntegrations",id:"useintegrations",level:3},{value:"Code and Example",id:"code-and-example-3",level:4},{value:"useEnabledIntegrations",id:"useenabledintegrations",level:3},{value:"Code and Example",id:"code-and-example-4",level:4},{value:"Other hooks",id:"other-hooks",level:2},{value:"useConsentFormVisible",id:"useconsentformvisible",level:3},{value:"Code and Example",id:"code-and-example-5",level:4},{value:"useFallbackComponent",id:"usefallbackcomponent",level:3},{value:"Code and Example",id:"code-and-example-6",level:4},{value:"usePageViewEventTrigger",id:"usepagevieweventtrigger",level:3},{value:"Code and Example",id:"code-and-example-7",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"consent-manager-core-hooks-documentation",children:"Consent Manager Core Hooks Documentation"}),"\n",(0,s.jsx)(n.p,{children:"The Consent Manager Core provides a suite of React hooks designed to manage and handle user consent decisions, integration configurations, and other aspects related to consent management."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#consent-manager-core-hooks-documentation",children:"Consent Manager Core Hooks Documentation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#handling-user-consent-decisions",children:"Handling User Consent Decisions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#usedecision",children:"useDecision"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#code-and-example",children:"Code and Example"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#usedecisions",children:"useDecisions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#code-and-example-1",children:"Code and Example"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#interacting-with-integration-configurations",children:"Interacting with Integration Configurations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#useintegration",children:"useIntegration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#code-and-example-2",children:"Code and Example"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#useintegrations",children:"useIntegrations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#code-and-example-3",children:"Code and Example"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#useenabledintegrations",children:"useEnabledIntegrations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#code-and-example-4",children:"Code and Example"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#other-hooks",children:"Other hooks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#useconsentformvisible",children:"useConsentFormVisible"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#code-and-example-5",children:"Code and Example"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#usefallbackcomponent",children:"useFallbackComponent"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#code-and-example-6",children:"Code and Example"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#usepagevieweventtrigger",children:"usePageViewEventTrigger"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#code-and-example-7",children:"Code and Example"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"handling-user-consent-decisions",children:"Handling User Consent Decisions"}),"\n",(0,s.jsx)(n.p,{children:"Our suite of hooks offers comprehensive solutions for interacting with and managing users' consent preferences."}),"\n",(0,s.jsx)(n.h3,{id:"usedecision",children:"useDecision"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useDecision"})," is used to manage the consent decision for a specific integration. It allows you to retrieve and set the consent state of a particular integration."]}),"\n",(0,s.jsx)(n.h4,{id:"code-and-example",children:"Code and Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"export function useDecision(\n  id: IntegrationId\n): [boolean, Dispatch<SetStateAction<boolean>>] {\n  // ... implementation ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react'\nimport { useDecision } from '@consent-manager/core'\n\nconst IntegrationComponent = ({ integrationId }) => {\n  const [consentGiven, setConsentGiven] = useDecision(integrationId)\n\n  const handleConsentChange = () => {\n    setConsentGiven(!consentGiven)\n  }\n\n  return (\n    <div>\n      <p>\n        Consent for {integrationId}: {consentGiven ? 'Granted' : 'Denied'}\n      </p>\n      <button onClick={handleConsentChange}>\n        {consentGiven ? 'Revoke Consent' : 'Give Consent'}\n      </button>\n    </div>\n  )\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, ",(0,s.jsx)(n.code,{children:"useDecision"})," efficiently manages user consent for a specific integration. It offers both the current consent state and a function to update it, ideal for components that display consent status or allow users to change their consent. This hook is also integral to the functionality of the ",(0,s.jsxs)(n.a,{href:"/consent-manager/docs/core/privacy-shield",children:[(0,s.jsx)(n.code,{children:"<PrivacyShield />"})," component"]}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"usedecisions",children:"useDecisions"}),"\n",(0,s.jsx)(n.p,{children:"Manages the state of consent decisions for all integrations, providing a global view of user consents."}),"\n",(0,s.jsx)(n.h4,{id:"code-and-example-1",children:"Code and Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"export function useDecisions(): [ConsentManagerDecisions, Dispatch<SetStateAction<ConsentManagerDecisions>>] {\n  // ... implementation ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react'\nimport { useDecisions } from '@consent-manager/core'\n\nconst ConsentOverview = () => {\n  const [decisions] = useDecisions()\n\n  return (\n    <ul>\n      {Object.entries(decisions).map(([integrationId, decision]) => (\n        <li key={integrationId}>\n          {integrationId}: {decision ? 'Consented' : 'Not Consented'}\n        </li>\n      ))}\n    </ul>\n  )\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, ",(0,s.jsx)(n.code,{children:"useDecisions"})," is used to access all consent decisions across various integrations, allowing for a comprehensive overview."]}),"\n",(0,s.jsx)(n.h2,{id:"interacting-with-integration-configurations",children:"Interacting with Integration Configurations"}),"\n",(0,s.jsx)(n.p,{children:"These specialized hooks facilitate access to the configuration from all integrations, whether it's information on a specific integration or insights into all enabled integrations."}),"\n",(0,s.jsx)(n.h3,{id:"useintegration",children:"useIntegration"}),"\n",(0,s.jsx)(n.p,{children:"Retrieves the configuration for a specific integration."}),"\n",(0,s.jsx)(n.h4,{id:"code-and-example-2",children:"Code and Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"export function useIntegration(id: IntegrationId): IntegrationConfig | undefined {\n  // ... implementation ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react'\nimport { useIntegration } from '@consent-manager/core'\n\nconst IntegrationDetails = ({ integrationId }) => {\n  const integrationConfig = useIntegration(integrationId)\n\n  if (!integrationConfig) return <p>Integration not found.</p>\n\n  return (\n    <div>\n      <h2>{integrationConfig.title}</h2>\n      <p>{integrationConfig.description}</p>\n    </div>\n  )\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This example shows how ",(0,s.jsx)(n.code,{children:"useIntegration"})," can be used to retrieve and display the configuration details of a specific integration."]}),"\n",(0,s.jsx)(n.h3,{id:"useintegrations",children:"useIntegrations"}),"\n",(0,s.jsx)(n.p,{children:"Retrieves all integration configurations from the context."}),"\n",(0,s.jsx)(n.h4,{id:"code-and-example-3",children:"Code and Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"export function useIntegrations(): IntegrationConfig[] {\n  // ... implementation ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react'\nimport { useIntegrations } from '@consent-manager/core'\n\nconst AllIntegrations = () => {\n  const integrations = useIntegrations()\n\n  return (\n    <ul>\n      {integrations.map((integration) => (\n        <li key={integration.id}>{integration.title}</li>\n      ))}\n    </ul>\n  )\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useIntegrations"})," is utilized for accessing the configurations of all available integrations, aiding in rendering a complete list or performing global operations."]}),"\n",(0,s.jsx)(n.h3,{id:"useenabledintegrations",children:"useEnabledIntegrations"}),"\n",(0,s.jsxs)(n.p,{children:["Same as useIntegrations, but provides a list of ",(0,s.jsx)(n.strong,{children:"enabled"})," integrations based on user consent."]}),"\n",(0,s.jsx)(n.h4,{id:"code-and-example-4",children:"Code and Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"export function useEnabledIntegrations(): [IntegrationId[], Dispatch<SetStateAction<IntegrationId[]>>] {\n  // ... implementation ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react'\nimport { useEnabledIntegrations } from '@consent-manager/core'\n\nconst EnabledIntegrationsList = () => {\n  const [enabledIntegrations] = useEnabledIntegrations()\n\n  return (\n    <ul>\n      {enabledIntegrations.map((id) => (\n        <li key={id}>{id}</li>\n      ))}\n    </ul>\n  )\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useEnabledIntegrations"})," offers an easy way to list all integrations that have been consented to by the user."]}),"\n",(0,s.jsx)(n.h2,{id:"other-hooks",children:"Other hooks"}),"\n",(0,s.jsx)(n.h3,{id:"useconsentformvisible",children:"useConsentFormVisible"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useConsentFormVisible"})," manages the visibility of the consent form, determining whether it should be displayed based on pending decisions."]}),"\n",(0,s.jsx)(n.h4,{id:"code-and-example-5",children:"Code and Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"export function useConsentFormVisible(): boolean {\n  // ... implementation ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react'\nimport { useConsentFormVisible } from '@consent-manager/core'\n\nconst ConsentForm = () => {\n  const isFormVisible = useConsentFormVisible()\n\n  return isFormVisible ? <div>Your Consent Form</div> : null\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This hook is particularly useful for conditionally rendering the consent form based on the user's current consent decisions."}),"\n",(0,s.jsx)(n.h3,{id:"usefallbackcomponent",children:"useFallbackComponent"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useFallbackComponent"})," retrieves the fallback component defined in the Consent Manager's context, typically used when an integration is disabled or awaiting consent."]}),"\n",(0,s.jsx)(n.h4,{id:"code-and-example-6",children:"Code and Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"export function useFallbackComponent(): React.FC<FallbackComponentProps> {\n  // ... implementation ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react'\nimport { useFallbackComponent } from '@consent-manager/core'\n\nconst MyComponent = () => {\n  const FallbackComponent = useFallbackComponent()\n\n  return <FallbackComponent integrationId=\"integration-id\" />\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, ",(0,s.jsx)(n.code,{children:"useFallbackComponent"})," helps in obtaining and rendering a specific fallback UI when an integration is not enabled."]}),"\n",(0,s.jsx)(n.h3,{id:"usepagevieweventtrigger",children:"usePageViewEventTrigger"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"usePageViewEventTrigger"})," provides a function to trigger page view events for a specific integration, often used for analytics and tracking purposes."]}),"\n",(0,s.jsx)(n.h4,{id:"code-and-example-7",children:"Code and Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"export function usePageViewEventTrigger(\n  id: IntegrationId\n): PageViewEventTrigger {\n  // ... implementation ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React, { useEffect } from 'react'\nimport { usePageViewEventTrigger } from '@consent-manager/core'\n\nconst PageComponent = ({ integrationId }) => {\n  const triggerPageViewEvent = usePageViewEventTrigger(integrationId)\n\n  useEffect(() => {\n    triggerPageViewEvent(window.location)\n  }, [triggerPageViewEvent])\n\n  return <div>Page Content</div>\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This hook is ideal for integrating with analytics tools, allowing you to track page views only when consent is granted for the specified integration."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);