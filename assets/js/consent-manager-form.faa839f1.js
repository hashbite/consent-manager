"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[996],{4690:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(4648),r=n(2784),c=(n(8162),n(489)),o=(n(3096),n(6001),n(1362)),l=(n(4522),n(7696)),i=function(e){var t=e.children,n=e.privacyPolicyUrl;return r.createElement(r.Fragment,null,r.createElement("a",{href:n,rel:"noreferrer",target:"_blank"},t))},s=function(e){var t=e.styles,n=e.Switch,s=void 0===n?o.S:n,m=e.id,u=e.category,d=e.title,g=e.description,f=e.privacyPolicyUrl,p=e.color,y=e.contrastColor,E=e.Icon;return r.createElement(r.Fragment,null,r.createElement(l.gN,{className:(0,c.Z)(t.integrationFieldTrigger),name:m,component:s,type:"checkbox",styles:t},r.createElement("h2",{className:(0,c.Z)(t.integrationFieldCategory)},r.createElement(a.T,{id:"consent-manager.integration."+m+".category",fallbackId:"consent-manager.integration.default.category",props:{category:u}})),r.createElement("div",{className:(0,c.Z)(t.integrationFieldCompany)},r.createElement(a.T,{id:"consent-manager.integration."+m+".company",fallbackId:"consent-manager.integration.default.company",props:{IntegrationLabel:function(){return r.createElement(a.I,{styles:t,integration:{id:m,category:u,title:d,description:g,privacyPolicyUrl:f,color:p,contrastColor:y,Icon:E}})}}}))),r.createElement("div",{className:(0,c.Z)(t.integrationFieldDetails)},r.createElement(a.T,{id:"consent-manager.integration."+m+".description",fallbackId:"consent-manager.integration.default.description",props:{description:g,PrivacyPolicyLink:function(){return r.createElement(a.T,{id:"consent-manager.integration."+m+".privacy-policy",fallbackId:"consent-manager.integration.default.privacy-policy",props:{Link:i,title:d}})}}})))};const m=function(e){var t=e.integrations,n=e.initialValues,o=e.onSubmit,i=e.CloseIcon,m=e.ToggleIcon,u=e.styles,d=e.Switch,g=e.Button,f=(0,r.useContext)(a.a).setFormVisible,p=(0,r.useCallback)((function(e){for(var t=[],n=0,a=Object.entries(e);n<a.length;n++){var r=a[n],c=r[0];r[1]&&t.push(c)}f(!1),o({enabled:t})}),[o,f]),y=(0,r.useMemo)((function(){for(var e,r={},c=(0,a.c)(t);!(e=c()).done;){var o=e.value;r[o.id]=n.enabled.includes(o.id)}return r}),[t,n]),E=(0,r.useCallback)((function(){return f(!1)}),[f]);return r.createElement(r.Fragment,null,r.createElement(l.l0,{onSubmit:p,initialValues:y,render:function(e){var n=e.handleSubmit,o=e.form,l=r.createElement("div",{className:(0,c.Z)(u.formControls)},r.createElement(g,{type:"button",onClick:o.reset},r.createElement(a.T,{id:"consent-manager.form.reset"})),r.createElement(g,{type:"button",onClick:function(){return o.batch((function(){for(var e=0,t=Object.keys(y);e<t.length;e++){var n=t[e];o.change(n,!1)}}))}},r.createElement(a.T,{id:"consent-manager.form.disable-all"})),r.createElement(g,{type:"button",onClick:function(){return o.batch((function(){for(var e=0,t=Object.keys(y);e<t.length;e++){var n=t[e];o.change(n,!0)}}))}},r.createElement(a.T,{id:"consent-manager.form.enable-all"})),r.createElement(g,{type:"submit","data-button-style":"primary"},r.createElement(a.T,{id:"consent-manager.form.save"})));return r.createElement("form",{onSubmit:n},r.createElement("div",{className:(0,c.Z)(u.formIntro)},r.createElement("div",{className:(0,c.Z)(u.formContent)},r.createElement("h1",{className:(0,c.Z)(u.formTitle)},r.createElement(m,{className:(0,c.Z)(u.icon,u.formIcon)}),r.createElement(a.T,{id:"consent-manager.form.headline"})),r.createElement(a.T,{id:"consent-manager.form.description"}))),l,r.createElement("div",{className:(0,c.Z)(u.formIntegrations)},r.createElement("div",{className:(0,c.Z)(u.formIntegrationsList)},t.map((function(e){return r.createElement(s,Object.assign({styles:u,key:e.id,Switch:d},e))})))),l)}}),r.createElement(a.T,{id:"consent-manager.close",render:function(e){var t=e.message;return r.createElement("button",{className:(0,c.Z)(u.buttonReset,u.buttonClose,u.formButtonClose),onClick:E,title:t},r.createElement(i,{className:(0,c.Z)(u.buttonCloseIcon)}))}}))}}}]);