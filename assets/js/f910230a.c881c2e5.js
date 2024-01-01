"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[234],{3971:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(2322),s=t(5392);const i={},o="Internationalization (i18n) Support",r={id:"interface-default/i18n",title:"Internationalization (i18n) Support",description:"The Consent Manager default interface supports internationalization (i18n) with customizable text messages for various components and interfaces.",source:"@site/docs/interface-default/i18n.md",sourceDirName:"interface-default",slug:"/interface-default/i18n",permalink:"/consent-manager/docs/interface-default/i18n",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/interface-default/i18n.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Styling the Default Interface",permalink:"/consent-manager/docs/interface-default/styling"},next:{title:"Algolia Integration",permalink:"/consent-manager/docs/integrations/algolia"}},c={},l=[{value:"Default Messages",id:"default-messages",level:2},{value:"Example Customization",id:"example-customization",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"internationalization-i18n-support",children:"Internationalization (i18n) Support"}),"\n",(0,a.jsx)(n.p,{children:"The Consent Manager default interface supports internationalization (i18n) with customizable text messages for various components and interfaces."}),"\n",(0,a.jsx)(n.p,{children:"This format is designed to be compatible with popular React translation frameworks, including react-i18n, react-intl, LinguiJS, among others."}),"\n",(0,a.jsx)(n.h2,{id:"default-messages",children:"Default Messages"}),"\n",(0,a.jsx)(n.p,{children:"A set of default messages is provided, which can be overridden as needed. These include messages for general interface elements, forms, fallback components, and integration defaults."}),"\n",(0,a.jsxs)(n.p,{children:["You can find the ",(0,a.jsx)(n.a,{href:"https://github.com/hashbite/consent-manager/blob/main/packages/interface-default/src/i18n.tsx#L33",children:"latest default messages in the source code"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"example-customization",children:"Example Customization"}),"\n",(0,a.jsxs)(n.p,{children:["You can customize messages by passing a ",(0,a.jsx)(n.code,{children:"messages"})," prop to ",(0,a.jsx)(n.code,{children:"ConsentManagerDefaultInterface"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import { defaultMessages } from '@consent-manager/interface-default';\n\nconst customMessages = {\n  ...defaultMessages,\n  'consent-manager.close': 'Close',\n  // ... other customized messages\n};\n\n<ConsentManagerDefaultInterface messages={customMessages}>\n  {/* Rest of your application */}\n</ConsentManagerDefaultInterface>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);