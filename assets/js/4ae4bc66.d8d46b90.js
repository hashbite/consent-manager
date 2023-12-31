"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[621],{63:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var s=t(2322),i=t(5392);const c={},o="PrivacyShield",r={id:"components/core/privacy-shield",title:"PrivacyShield",description:"PrivacyShield is a component that conditionally renders children based on the consent decision for a specific integration. It's typically used to wrap content that should only be displayed if the user has consented to the associated integration.",source:"@site/docs/components/core/privacy-shield.md",sourceDirName:"components/core",slug:"/components/core/privacy-shield",permalink:"/consent-manager/docs/components/core/privacy-shield",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/components/core/privacy-shield.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"ConsentManagerForm",permalink:"/consent-manager/docs/components/core/consent-manager-form"},next:{title:"This Page is Under Construction",permalink:"/consent-manager/docs/todo"}},d={},a=[{value:"Props",id:"props",level:2},{value:"Example Usage",id:"example-usage",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"privacyshield",children:"PrivacyShield"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PrivacyShield"})," is a component that conditionally renders children based on the consent decision for a specific integration. It's typically used to wrap content that should only be displayed if the user has consented to the associated integration."]}),"\n",(0,s.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Prop"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"id"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"The identifier for the integration to check consent for."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"children"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"React.ReactNode"})}),(0,s.jsx)(n.td,{children:"The content to render if consent is given."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"...props"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"unknown"})}),(0,s.jsx)(n.td,{children:"Additional props passed to the fallback component."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { PrivacyShield } from '@consent-manager/core';\n\nconst YouTubeEmbed = ({ videoId }) => (\n  <PrivacyShield id=\"youtube\">\n    {/* Your YouTube embed component */}\n  </PrivacyShield>\n);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);