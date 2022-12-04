"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[75],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3208:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:5,title:"Roadmap"},o=void 0,l={unversionedId:"roadmap",id:"roadmap",title:"Roadmap",description:"Phase 1: now",source:"@site/docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/docs/roadmap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/roadmap.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Roadmap"},sidebar:"tutorialSidebar",previous:{title:"Regions",permalink:"/docs/regions"},next:{title:"FAQ",permalink:"/docs/faq"}},s={},c=[{value:"Phase 1: now",id:"phase-1-now",level:2},{value:"Phase 2: private order flow",id:"phase-2-private-order-flow",level:2},{value:"Phase 3: block building",id:"phase-3-block-building",level:2},{value:"Phase 4: expand to rollups &amp; other chains",id:"phase-4-expand-to-rollups--other-chains",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"phase-1-now"},"Phase 1: now"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Done")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Working product on AWS with small user base"),(0,n.kt)("li",{parentName:"ul"},"Transaction stream that's about 5-10% faster than Bloxroute"),(0,n.kt)("li",{parentName:"ul"},"Basic transaction filtering"),(0,n.kt)("li",{parentName:"ul"},"API for sending transactions"),(0,n.kt)("li",{parentName:"ul"},"Deployed across 13 regions"),(0,n.kt)("li",{parentName:"ul"},"Database that indexes all transactions and a tool for tracing them (",(0,n.kt)("a",{parentName:"li",href:"/docs/usage/tracing"},"link"),")"),(0,n.kt)("li",{parentName:"ul"},"Stats dashboard (",(0,n.kt)("a",{parentName:"li",href:"http://fiber-stats.chainbound.io/d/h4zwdDK4z/fiber-stats?orgId=1&refresh=30s"},"link"),")"),(0,n.kt)("li",{parentName:"ul"},"High performance internal messaging network"),(0,n.kt)("li",{parentName:"ul"},"Tool for injecting fiber transactions into a local mempool (",(0,n.kt)("a",{parentName:"li",href:"/docs/usage/fiber-inject"},"link"),")")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To Do")),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Implement block propagation"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Rewrite in Rust for better performance, stability and resource efficiency"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Implement peer selection algorithm for best network topology"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Exclusive peering connections with builders for better propagation times"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," More observability tooling and metrics for debugging, research and overall better monitoring"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Tools for utilizing the index database:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Maps for tracing transactions"),(0,n.kt)("li",{parentName:"ul"},"Identifying heavy transaction broadcasters"),(0,n.kt)("li",{parentName:"ul"},"Seeing network hotspots")))),(0,n.kt)("h2",{id:"phase-2-private-order-flow"},"Phase 2: private order flow"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connecting to block builders and offering private transactions to our customers. Users would be able to send their transactions to builders of choice, with a couple of additional features:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Optional kickback rewards from MEV"),(0,n.kt)("li",{parentName:"ul"},"Transaction & bundle simulation"),(0,n.kt)("li",{parentName:"ul"},"Revert protection")))),(0,n.kt)("h2",{id:"phase-3-block-building"},"Phase 3: block building"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use the existing customer base and private transaction features as a base for our own block building solution")),(0,n.kt)("h2",{id:"phase-4-expand-to-rollups--other-chains"},"Phase 4: expand to rollups & other chains"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rollups are probably going to capture a large market share, because of their fast confirmation times, security and low transaction fees."),(0,n.kt)("li",{parentName:"ul"},"Currently, rollups are maintained by a single sequencer that takes in transactions. These transactions are then streamed on the sequencer API to anyone that\u2019s interested. For capturing MEV, people will co-locate with this sequencer."),(0,n.kt)("li",{parentName:"ul"},"In the future, sequencing will be a decentralized process, which means that there will be many sequencers across the world. Fiber could take a similar approach as it does now, and co-locate with the biggest sequencers to provide fast access to searchers everywhere."),(0,n.kt)("li",{parentName:"ul"},"We can also expand to other chains, re-using a large part of the already built technology stack."),(0,n.kt)("li",{parentName:"ul"},"Explore Cosmos ecosystem, specialized solution for dYdX market makers for example.")))}u.isMDXComponent=!0}}]);