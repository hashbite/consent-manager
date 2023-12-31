"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[168],{309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=t(2322),o=t(5392);const a={},r="Client-Side Routing in SPAs",s={id:"guides/client-side-routing",title:"Client-Side Routing in SPAs",description:"Single Page Applications (SPAs) update the content without reloading the entire page, which can make traditional page view tracking challenging. To accurately track page views in such applications, you can use the trackPageViewSPA method provided by some of our integrations.",source:"@site/docs/guides/client-side-routing.md",sourceDirName:"guides",slug:"/guides/client-side-routing",permalink:"/consent-manager/docs/guides/client-side-routing",draft:!1,unlisted:!1,editUrl:"https://github.com/hashbite/consent-manager/edit/master/packages/docs/docs/guides/client-side-routing.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Translation and i18n Support",permalink:"/consent-manager/docs/guides/i18n"},next:{title:"Custom (Tracking) Integration",permalink:"/consent-manager/docs/guides/create-custom-integration"}},c={},d=[{value:"Enhanced Guide for Client-Side Routing and Tracking in SPAs",id:"enhanced-guide-for-client-side-routing-and-tracking-in-spas",level:3},{value:"Implementing Enhanced Routing Event Listener",id:"implementing-enhanced-routing-event-listener",level:4},{value:"Notes:",id:"notes",level:4}];function u(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"client-side-routing-in-spas",children:"Client-Side Routing in SPAs"}),"\n",(0,i.jsxs)(n.p,{children:["Single Page Applications (SPAs) update the content without reloading the entire page, which can make traditional page view tracking challenging. To accurately track page views in such applications, you can use the ",(0,i.jsx)(n.code,{children:"trackPageViewSPA"})," method provided by some of our integrations."]}),"\n",(0,i.jsx)(n.p,{children:"Your adjusted guide for client-side routing and tracking in SPAs is well-structured and provides a clear example using the Matomo integration. Here's an enhancement to include the tracking of both old and new locations:"}),"\n",(0,i.jsx)(n.h3,{id:"enhanced-guide-for-client-side-routing-and-tracking-in-spas",children:"Enhanced Guide for Client-Side Routing and Tracking in SPAs"}),"\n",(0,i.jsx)(n.h4,{id:"implementing-enhanced-routing-event-listener",children:"Implementing Enhanced Routing Event Listener"}),"\n",(0,i.jsx)(n.p,{children:"When using client-side routing in your SPA, it's important to track both the new and previous locations to understand user navigation paths accurately. Here's how you can implement this with the Matomo integration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"import React, { useEffect, useState } from 'react';\nimport { useRouter } from 'next/router'; // or your specific routing library\nimport { getMatomoTracker } from '@consent-manager/integration-matomo';\n\nconst App = () => {\n  const router = useRouter(); // Hook from your routing library\n  const { trackPageViewSPA } = getMatomoTracker();\n  const [prevLocation, setPrevLocation] = useState(\n    typeof window !== \"undefined\" ? window.location : undefined\n  );\n\n  useEffect(() => {\n    // Function to handle route changes\n    const handleRouteChange = () => {\n      const { location } = window;\n\n      // Track the page view with current and previous locations\n      trackPageViewSPA && trackPageViewSPA({ location, prevLocation });\n\n      // Update the previous location\n      setPrevLocation(location);\n    };\n\n    // Set up a listener for route changes\n    router.events.on('routeChangeComplete', handleRouteChange);\n\n    // Clean up the listener when the component unmounts\n    return () => {\n      router.events.off('routeChangeComplete', handleRouteChange);\n    };\n  }, [prevLocation, router.events, trackPageViewSPA]);\n\n  // Your app's rendering logic\n  return (\n    // Your routes/components\n  );\n};\n\nexport default App;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"notes",children:"Notes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"useState"})," hook is used to keep track of the previous location."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"useEffect"})," hook sets up a listener on route changes and updates the tracking information accordingly."]}),"\n",(0,i.jsx)(n.li,{children:"This approach provides more detailed analytics on how users navigate through your SPA."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This enhanced guide ensures that your SPA's client-side routing and tracking accurately reflect user interactions."})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);