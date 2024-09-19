"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[530],{109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(2322),r=t(5392);const i={title:"Vite"},o="Integrating Consent Manager with Vite",s={id:"frameworks/vite",title:"Vite",description:"This guide explains how to incorporate Consent Manager into a React application using Vite.",source:"@site/docs/frameworks/vite.md",sourceDirName:"frameworks",slug:"/frameworks/vite",permalink:"/consent-manager/docs/frameworks/vite",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/frameworks/vite.md",tags:[],version:"current",frontMatter:{title:"Vite"},sidebar:"someSidebar",previous:{title:"Alternative Storage Libraries",permalink:"/consent-manager/docs/guides/alternative-storage-libraries"},next:{title:"Next.js",permalink:"/consent-manager/docs/frameworks/nextjs"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Setting Up the Consent Manager",id:"setting-up-the-consent-manager",level:2},{value:"Step 1: Create Configuration File",id:"step-1-create-configuration-file",level:3},{value:"Step 2: Wrap Your Application",id:"step-2-wrap-your-application",level:3}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"integrating-consent-manager-with-vite",children:"Integrating Consent Manager with Vite"})}),"\n",(0,a.jsx)(n.p,{children:"This guide explains how to incorporate Consent Manager into a React application using Vite."}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.p,{children:"First, install the necessary packages:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @consent-manager/core @consent-manager/interface-default use-persisted-state\n"})}),"\n",(0,a.jsx)(n.h2,{id:"setting-up-the-consent-manager",children:"Setting Up the Consent Manager"}),"\n",(0,a.jsx)(n.h3,{id:"step-1-create-configuration-file",children:"Step 1: Create Configuration File"}),"\n",(0,a.jsxs)(n.p,{children:["Create a file named ",(0,a.jsx)(n.code,{children:"consent-manager.js"})," in your project. This file will configure and export the ",(0,a.jsx)(n.code,{children:"ConsentManagerWrapper"})," component. Here's the code for this file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import React from 'react'\nimport { ConsentManagerDefaultInterface } from '@consent-manager/interface-default'\nimport '@consent-manager/interface-default/dist/default.min.css'\nimport createPersistedState from 'use-persisted-state'\n\n// Store consent information in localStorage\nconst useConsentStateStore = createPersistedState('consent-manager')\n\n// Define your configuration here\nconst config = {\n  // ... your configuration options ...\n}\n\nexport const ConsentManagerWrapper = ({ children }) => {\n  const storage = useConsentStateStore()\n\n  return (\n    <ConsentManagerDefaultInterface store={storage} config={config}>\n      {children}\n    </ConsentManagerDefaultInterface>\n  )\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"This configuration file sets up the core functionality of the Consent Manager, including storing user consent decisions."}),"\n",(0,a.jsx)(n.h3,{id:"step-2-wrap-your-application",children:"Step 2: Wrap Your Application"}),"\n",(0,a.jsxs)(n.p,{children:["In your Vite ",(0,a.jsx)(n.code,{children:"src/main.js"})," file, import and utilize the ",(0,a.jsx)(n.code,{children:"ConsentManagerWrapper"})," to wrap your entire application:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport App from './App.jsx'\nimport './index.css'\n\nimport { ConsentManagerWrapper } from './consent-manager'\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <ConsentManagerWrapper>\n      <App />\n    </ConsentManagerWrapper>\n  </React.StrictMode>,\n)\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}}}]);