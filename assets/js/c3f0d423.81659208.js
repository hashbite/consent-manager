"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1810],{6436:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=t(2322),o=t(5392);const a={title:"<ConsentManager />"},s="<ConsentManager />",c={id:"core/consent-manager",title:"<ConsentManager />",description:"ConsentManager is the core component that provides context and state management for all consent-related functionality. It should wrap the root of your application.",source:"@site/docs/core/consent-manager.md",sourceDirName:"core",slug:"/core/consent-manager",permalink:"/consent-manager/docs/core/consent-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/core/consent-manager.md",tags:[],version:"current",frontMatter:{title:"<ConsentManager />"},sidebar:"someSidebar",previous:{title:"Create React App",permalink:"/consent-manager/docs/frameworks/create-react-app"},next:{title:"<ConsentManagerForm />",permalink:"/consent-manager/docs/core/consent-manager-form"}},d={},i=[{value:"Props",id:"props",level:2},{value:"Example Usage",id:"example-usage",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"consentmanager-",children:(0,r.jsx)(n.code,{children:"<ConsentManager />"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ConsentManager"})," is the core component that provides context and state management for all consent-related functionality. It should wrap the root of your application."]}),"\n",(0,r.jsxs)(n.p,{children:["The actual layout is provided by the ",(0,r.jsx)(n.a,{href:"/consent-manager/docs/core/consent-manager-form",children:"Form Component"}),", while ",(0,r.jsx)(n.a,{href:"/consent-manager/docs/interface-default/interface",children:"the Default Interface is implementing this component on its own"}),", you dont need to set it up when you use the default interface."]}),"\n",(0,r.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Prop"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"config"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/consent-manager/docs/configuration",children:(0,r.jsx)(n.code,{children:"ConsentManagerConfig"})})}),(0,r.jsx)(n.td,{children:"Configuration object for Consent Manager."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"store"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/hashbite/consent-manager/blob/main/packages/core/src/storage.ts",children:(0,r.jsx)(n.code,{children:"ConsentManagerStore"})})}),(0,r.jsx)(n.td,{children:"Storage mechanism for consent decisions."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"fallbackComponent"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"React.FC<FallbackComponentProps>"})}),(0,r.jsx)(n.td,{children:"Optional. Custom fallback component for unconsented integrations."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"children"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"React.ReactNode"})}),(0,r.jsx)(n.td,{children:"The application's components."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { ConsentManager } from '@consent-manager/core'\n\nconst App = () => (\n  <ConsentManager config={myConfig} store={myStore}>\n    {/* Rest of your application */}\n  </ConsentManager>\n)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);