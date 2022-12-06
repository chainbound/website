"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[234],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3135:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2,title:"Use Cases"},s=void 0,i={unversionedId:"use-cases",id:"use-cases",title:"Use Cases",description:"MEV",source:"@site/docs/use-cases.md",sourceDirName:".",slug:"/use-cases",permalink:"/docs/use-cases",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/use-cases.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Use Cases"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Getting Started",permalink:"/docs/usage/getting-started"}},l={},u=[{value:"MEV",id:"mev",level:2},{value:"Fast, reliable and wide mempool access without infrastructure",id:"fast-reliable-and-wide-mempool-access-without-infrastructure",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mev"},"MEV"),(0,a.kt)("p",null,"The main use case for Fiber today is using it as a tool for finding and capturing ",(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/mev/"},"MEV (Maximal Extractable Value)"),".\nHaving low latency access to mempool transactions gives you an edge over the competition, even with tools like ",(0,a.kt)("a",{parentName:"p",href:"https://boost.flashbots.net/"},"MEV-Boost")," becoming dominant.\nExample MEV strategies could be"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arbitrage"),(0,a.kt)("li",{parentName:"ul"},"Liquidity Sniping"),(0,a.kt)("li",{parentName:"ul"},"NFT Sniping"),(0,a.kt)("li",{parentName:"ul"},"Liquidations"),(0,a.kt)("li",{parentName:"ul"},"PGAs (Priority Gas Auctions)"),(0,a.kt)("li",{parentName:"ul"},"Long-tail MEV")),(0,a.kt)("p",null,"For long-tail MEV, it would be unwise to use a service like Flashbots, since the bundles are public and other searchers\nare constantly on the lookout for new strategies."),(0,a.kt)("h2",{id:"fast-reliable-and-wide-mempool-access-without-infrastructure"},"Fast, reliable and wide mempool access without infrastructure"),(0,a.kt)("p",null,"Because Fiber provides an API for streaming transactions, you don't need any infrastructure like full nodes yourself. On top of that,\nyou'll see more transactions than you usually would, and faster, because of the global reach of Fiber Network. "),(0,a.kt)("p",null,"One customer uses this feature to build Telegram bots that track the early stages of newly launched tokens on DEXes."))}p.isMDXComponent=!0}}]);