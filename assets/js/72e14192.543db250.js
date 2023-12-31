"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[668],{9639:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(2322),i=t(5392);const o={id:"quick-start-guide",title:"Quick Start Guide"},r="Quick Start Guide",s={id:"quick-start-guide",title:"Quick Start Guide",description:"Welcome to the Quick Start Guide for Consent Manager. This guide will help you swiftly integrate Consent Manager into your React project, aligning with GDPR requirements while enhancing user privacy.",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start-guide",permalink:"/consent-manager/docs/quick-start-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/quick-start.md",tags:[],version:"current",frontMatter:{id:"quick-start-guide",title:"Quick Start Guide"},sidebar:"someSidebar",previous:{title:"What is Consent Manager?",permalink:"/consent-manager/docs/"},next:{title:"Translation and Internationalization Support",permalink:"/consent-manager/docs/guides/i18n"}},c={},l=[{value:"Installation Instructions",id:"installation-instructions",level:2},{value:"Setting Up Consent Manager in Your React App",id:"setting-up-consent-manager-in-your-react-app",level:2},{value:"Wrapping Your Application with Consent Manager",id:"wrapping-your-application-with-consent-manager",level:2},{value:"Integrating Matomo for Tracking Page Views and Events",id:"integrating-matomo-for-tracking-page-views-and-events",level:2},{value:"Installing Matomo Integration",id:"installing-matomo-integration",level:3},{value:"Configuring Matomo in Consent Manager",id:"configuring-matomo-in-consent-manager",level:3},{value:"Tracking Events with Matomo",id:"tracking-events-with-matomo",level:3},{value:"Integrating Iframe Services like YouTube",id:"integrating-iframe-services-like-youtube",level:2},{value:"Installing YouTube Integration",id:"installing-youtube-integration",level:3},{value:"Configuring YouTube Integration",id:"configuring-youtube-integration",level:3},{value:"Wrapping YouTube Videos for Consent",id:"wrapping-youtube-videos-for-consent",level:3},{value:"Fin",id:"fin",level:2}];function u(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"quick-start-guide",children:"Quick Start Guide"}),"\n",(0,a.jsx)(e.p,{children:"Welcome to the Quick Start Guide for Consent Manager. This guide will help you swiftly integrate Consent Manager into your React project, aligning with GDPR requirements while enhancing user privacy."}),"\n",(0,a.jsx)(e.p,{children:"Let's dive in to understand how to install Consent Manager, set it up in your app, integrate a third-party service like Matomo, and track events efficiently."}),"\n",(0,a.jsx)(e.h2,{id:"installation-instructions",children:"Installation Instructions"}),"\n",(0,a.jsx)(e.p,{children:"To start, you need to install Consent Manager along with its default interface. Run the following command in your project directory:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"npm install @consent-manager/core @consent-manager/interface-default use-persisted-state\n"})}),"\n",(0,a.jsx)(e.h2,{id:"setting-up-consent-manager-in-your-react-app",children:"Setting Up Consent Manager in Your React App"}),"\n",(0,a.jsxs)(e.p,{children:["Create a file named ",(0,a.jsx)(e.code,{children:"consent-manager.js"})," in your project. This file will configure and export the ",(0,a.jsx)(e.code,{children:"ConsentManagerWrapper"})," component. Add the following code to this file:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"import React from 'react';\nimport { ConsentManagerDefaultInterface } from '@consent-manager/interface-default';\nimport '@consent-manager/interface-default/dist/default.min.css';\n\nimport createPersistedState from 'use-persisted-state';\n\n// We store our consent information in localStorage\nconst useConsentStateStore = createPersistedState('consent-manager');\n\n// Add your configuration here if necessary\nconst config = {\n  // ... your configuration options ...\n};\n\nexport const ConsentManagerWrapper = ({ children }) => {\n  const storage = useConsentStateStore();\n\n  return (\n    <ConsentManagerDefaultInterface store={storage} config={config}>\n      {children}\n    </ConsentManagerDefaultInterface>\n  );\n};\n"})}),"\n",(0,a.jsx)(e.h2,{id:"wrapping-your-application-with-consent-manager",children:"Wrapping Your Application with Consent Manager"}),"\n",(0,a.jsxs)(e.p,{children:["In your main ",(0,a.jsx)(e.code,{children:"index.js"})," (or ",(0,a.jsx)(e.code,{children:"layout.js"}),", depending on your project structure), import and use the ",(0,a.jsx)(e.code,{children:"ConsentManagerWrapper"})," to wrap your application:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nimport { ConsentManagerWrapper } from './consent-manager';\n\nReactDOM.render(\n  <ConsentManagerWrapper>\n    <App />\n  </ConsentManagerWrapper>,\n  document.getElementById('root')\n);\n"})}),"\n",(0,a.jsx)(e.p,{children:"Your application now includes Consent Manager, displaying the shield \ud83d\udee1\ufe0f icon at the bottom left. Next, let's incorporate some integrations into your page, enabling users to provide their consent."}),"\n",(0,a.jsx)(e.h2,{id:"integrating-matomo-for-tracking-page-views-and-events",children:"Integrating Matomo for Tracking Page Views and Events"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://matomo.org/google-analytics-alternative/",children:"Matomo is a robust, open-source alternative to SAAS tracking solutions"}),", offering full data control and GDPR-friendly implementation."]}),"\n",(0,a.jsx)(e.h3,{id:"installing-matomo-integration",children:"Installing Matomo Integration"}),"\n",(0,a.jsxs)(e.p,{children:["First, add the ",(0,a.jsx)(e.a,{href:"/consent-manager/docs/integrations/matomo",children:"Matomo integration"})," to your project:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"npm install @consent-manager/integration-matomo\n"})}),"\n",(0,a.jsx)(e.h3,{id:"configuring-matomo-in-consent-manager",children:"Configuring Matomo in Consent Manager"}),"\n",(0,a.jsxs)(e.p,{children:["Update ",(0,a.jsx)(e.code,{children:"consent-manager.js"})," to include Matomo in the integrations:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'// Add this to your consent-manager.js imports\nimport { matomoIntegration } from \'@consent-manager/integration-matomo\';\n\n// Update your configuration\nconst consentManagerConfig = {\n  integrations: [\n    matomoIntegration({\n      matomoURL: "https://statistics.yourdomain.com/",\n      siteID: "YOUR_SITE_ID",\n    }),\n  ],\n};\n\n// Include in ConsentManagerDefaultInterface\n<ConsentManagerDefaultInterface config={consentManagerConfig} store={storage}>\n  {children}\n</ConsentManagerDefaultInterface>\n'})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Note:"})," For React Router or similar setups, see our ",(0,a.jsx)(e.a,{href:"/consent-manager/docs/guides/client-side-routing",children:"client-side routing documentation"})," to ensure proper page view tracking."]}),"\n",(0,a.jsx)(e.h3,{id:"tracking-events-with-matomo",children:"Tracking Events with Matomo"}),"\n",(0,a.jsx)(e.p,{children:"All integrations, including Matomo, follow a similar interface for event tracking:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"import { getMatomoTracker } from '@consent-manager/integration-matomo';\n\nconst SomeComponent = () => {\n  const { trackEvent } = getMatomoTracker();\n\n  const onTrack = useCallback(() => {\n    trackEvent('Example', 'Button', 'Pressed');\n  }, [trackEvent]);\n\n  return <button onClick={onTrack}>Track Event</button>;\n};\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/consent-manager/docs/integrations/matomo",children:"Learn more about Matomo integration"}),"."]}),"\n",(0,a.jsx)(e.h2,{id:"integrating-iframe-services-like-youtube",children:"Integrating Iframe Services like YouTube"}),"\n",(0,a.jsx)(e.p,{children:"For embedding services like YouTube, obtain user consent before loading iframes that may share data with third-party services."}),"\n",(0,a.jsx)(e.h3,{id:"installing-youtube-integration",children:"Installing YouTube Integration"}),"\n",(0,a.jsxs)(e.p,{children:["First, integrate ",(0,a.jsx)(e.a,{href:"/consent-manager/docs/integrations/youtube",children:"YouTube"})," into your project. Note that in this demo we're using ",(0,a.jsx)(e.code,{children:"react-youtube"})," for rendering, but it's not a mandatory requirement!"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"npm install @consent-manager/integration-youtube react-youtube\n"})}),"\n",(0,a.jsx)(e.h3,{id:"configuring-youtube-integration",children:"Configuring YouTube Integration"}),"\n",(0,a.jsxs)(e.p,{children:["Add YouTube to your integrations in ",(0,a.jsx)(e.code,{children:"consent-manager.js"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"// Import YouTube integration\nimport { youtubeIntegration } from '@consent-manager/integration-youtube';\n\n// Update your consent manager configuration\nconst consentManagerConfig = {\n  integrations: [\n    // ... other integrations\n    youtubeIntegration(),\n  ],\n};\n\n// The rest of the file remains unchanged\n"})}),"\n",(0,a.jsx)(e.h3,{id:"wrapping-youtube-videos-for-consent",children:"Wrapping YouTube Videos for Consent"}),"\n",(0,a.jsxs)(e.p,{children:["Use the ",(0,a.jsx)(e.code,{children:"PrivacyShield"})," component to wrap YouTube embeds:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"import React from 'react';\nimport ReactYouTube from 'react-youtube';\nimport { PrivacyShield } from '@consent-manager/core';\n\nconst YouTube = ({ id, ...props }) => {\n  return (\n    <PrivacyShield id=\"youtube\">\n      <ReactYouTube videoid={id} {...props} />\n    </PrivacyShield>\n  );\n};\n\nexport default YouTube;\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/consent-manager/docs/integrations/youtube",children:"Explore more about YouTube integration"}),"."]}),"\n",(0,a.jsx)(e.h2,{id:"fin",children:"Fin"}),"\n",(0,a.jsx)(e.p,{children:"You now have the fundamental knowledge to integrate Consent Manager into your React application. For more detailed guides, please refer to the sidebar on the left."})]})}function g(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}}}]);