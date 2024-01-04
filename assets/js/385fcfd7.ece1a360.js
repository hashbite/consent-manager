"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1067],{7591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(2322),r=t(5392);const o={title:"Parcel"},s="Integrating Consent Manager with Parcel",i={id:"frameworks/parcel",title:"Parcel",description:"This guide explains how to incorporate Consent Manager into a React application using Parcel.",source:"@site/docs/frameworks/parcel.md",sourceDirName:"frameworks",slug:"/frameworks/parcel",permalink:"/consent-manager/docs/frameworks/parcel",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/frameworks/parcel.md",tags:[],version:"current",frontMatter:{title:"Parcel"},sidebar:"someSidebar",previous:{title:"Gatsby",permalink:"/consent-manager/docs/frameworks/gatsby"},next:{title:"Create React App",permalink:"/consent-manager/docs/frameworks/create-react-app"}},c={},l=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Setting Up the Consent Manager",id:"setting-up-the-consent-manager",level:2},{value:"Step 1: Create Configuration File",id:"step-1-create-configuration-file",level:3},{value:"Step 2: Wrap Your Application",id:"step-2-wrap-your-application",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"integrating-consent-manager-with-parcel",children:"Integrating Consent Manager with Parcel"}),"\n",(0,a.jsx)(n.p,{children:"This guide explains how to incorporate Consent Manager into a React application using Parcel."}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["For a hands-on example, check out our ",(0,a.jsx)(n.a,{href:"https://github.com/hashbite/consent-manager-examples/tree/main/parcel",children:"example repository"})," which contains a tested implementation."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.p,{children:"First, install the necessary packages:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @consent-manager/core @consent-manager/interface-default use-persisted-state\n"})}),"\n",(0,a.jsx)(n.h2,{id:"setting-up-the-consent-manager",children:"Setting Up the Consent Manager"}),"\n",(0,a.jsx)(n.h3,{id:"step-1-create-configuration-file",children:"Step 1: Create Configuration File"}),"\n",(0,a.jsxs)(n.p,{children:["Create a file named ",(0,a.jsx)(n.code,{children:"consent-manager.js"})," in your project. This file will configure and export the ",(0,a.jsx)(n.code,{children:"ConsentManagerWrapper"})," component. Here's the code for this file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import React from 'react'\nimport { ConsentManagerDefaultInterface } from '@consent-manager/interface-default'\nimport '@consent-manager/interface-default/dist/default.min.css'\nimport createPersistedState from 'use-persisted-state'\n\n// Store consent information in localStorage\nconst useConsentStateStore = createPersistedState('consent-manager')\n\n// Define your configuration here\nconst config = {\n  // ... your configuration options ...\n}\n\nexport const ConsentManagerWrapper = ({ children }) => {\n  const storage = useConsentStateStore()\n\n  return (\n    <ConsentManagerDefaultInterface store={storage} config={config}>\n      {children}\n    </ConsentManagerDefaultInterface>\n  )\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"This configuration file sets up the core functionality of the Consent Manager, including storing user consent decisions."}),"\n",(0,a.jsx)(n.h3,{id:"step-2-wrap-your-application",children:"Step 2: Wrap Your Application"}),"\n",(0,a.jsxs)(n.p,{children:["In your Parcel ",(0,a.jsx)(n.code,{children:"index.js"})," file, import and utilize the ",(0,a.jsx)(n.code,{children:"ConsentManagerWrapper"})," to wrap your entire application:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport App from './App'\nimport { ConsentManagerWrapper } from './consent-manager'\n\nconst RootApp = () => {\n  return (\n    <ConsentManagerWrapper>\n      <App />\n    </ConsentManagerWrapper>\n  )\n}\n\nReactDOM.render(<RootApp />, document.getElementById('root'))\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}}}]);