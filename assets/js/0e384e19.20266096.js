"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,b=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?i.createElement(b,o(o({ref:t},p),{},{components:n})):i.createElement(b,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1,title:"Introduction"},o=void 0,s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Fiber Network is a global network of nodes that connect to the Ethereum p2p networking layer. Fiber nodes are connected to each other with a",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Use Cases",permalink:"/docs/use-cases"}},l={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Principles",id:"principles",level:2},{value:"Fairness",id:"fairness",level:4},{value:"Reliability",id:"reliability",level:4},{value:"Visibility",id:"visibility",level:4},{value:"Adaptiveness",id:"adaptiveness",level:4},{value:"Concepts",id:"concepts",level:2},{value:"Fiber Nodes",id:"fiber-nodes",level:3},{value:"Fiber Network",id:"fiber-network",level:3},{value:"Indexing",id:"indexing",level:3},{value:"Footnotes",id:"footnotes",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fiber Network")," is a global network of nodes that connect to the Ethereum p2p networking layer. Fiber nodes are connected to each other with a\nhigh-speed connection, optimizing the Ethereum messaging layer across the globe. ",(0,a.kt)("strong",{parentName:"p"},"Fiber")," can be leveraged for real-time ",(0,a.kt)("strong",{parentName:"p"},"monitoring"),"\nof pending transactions + validated states and for efficiently ",(0,a.kt)("strong",{parentName:"p"},"sending transactions")," on Ethereum."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you're interested in trying it out, join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/J4KNdeCYGX"},"Discord"),".")),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"Fiber aims to provide a faster and more stable network for transacting on EVM blockchains by optimizing how distributed networks (such as Ethereum) propagate transactions.\nThis service focuses on optimizing transactions propagation and building a global mempool.\nFiber caters to quant funds, searchers, research companies and in general anyone looking optimize blockchain execution."),(0,a.kt)("p",null,"To give a better idea of Fiber capabilities, we will go over the trade-flow of a classic HFT strategy in DeFi:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Pre Trade - State Upload"),": Upload current blockchain state and simulate pending transactions. "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Pre Trade - State Analysis"),": Scout opportunities given pending transactions and latest-block. For example: Scouting an arbitrage opportunity between two DeFi pools."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Execution"),": Given step 2 produced an opportunity - Trader X broadcasts a transaction to capture the alpha.")),(0,a.kt)("p",null,"Each of these steps require minimal latency to maximize Alpha generation.\nThe special thing about HFT on blockchains is that an opportunity (",(0,a.kt)("em",{parentName:"p"},"target transaction"),") ",(0,a.kt)("strong",{parentName:"p"},"can\ncome from anywhere in the world"),", in contrast with traditional HFT. So for step 1, it's crucial\nthat we are connected to as many peers as possible across the globe, to make sure we receive the target transactions as soon as possible."),(0,a.kt)("p",null,"Fiber Network does so by deploying ",(0,a.kt)("a",{parentName:"p",href:"#fiber-nodes"},"Fiber Nodes"),"  ",(0,a.kt)("strong",{parentName:"p"},"across the globe"),", with higher ",(0,a.kt)("strong",{parentName:"p"},"concentration\nin high-activity regions"),". Fiber setup aims to give users the most up-to-date blockchain state.  "),(0,a.kt)("p",null,"A simplified overview can be seen in the diagram below:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3221).Z,width:"3676",height:"2376"})),(0,a.kt)("p",null,"In step 3, after a user is done processing a transaction and has found an opportunity, ",(0,a.kt)("strong",{parentName:"p"},"they need their transaction broadcasted as fast as possible"),", to arrive at the block builder / block producer before the competition. Again,\n",(0,a.kt)("strong",{parentName:"p"},"we don't know where the final block builder / producer is going to be"),", and especially with Proof of Stake, a validator\ncan be anywhere.\nThis is basically step 1 in reverse, and the global connectivity of Fiber Network to a high amount of peers will make\nsure the user has the lowest latency to the builder / producer as possible."),(0,a.kt)("h2",{id:"principles"},"Principles"),(0,a.kt)("p",null,"Fiber Network was built with the following principles in mind:"),(0,a.kt)("h4",{id:"fairness"},"Fairness"),(0,a.kt)("p",null,"We will not introduce artificial latency based on price plans, nor unnecessarily cap the amount of transactions you can send."),(0,a.kt)("h4",{id:"reliability"},"Reliability"),(0,a.kt)("p",null,"Fiber is a fault-tolerant system, and we aim to be the most reliable player in the mempool service game."),(0,a.kt)("h4",{id:"visibility"},"Visibility"),(0,a.kt)("p",null,"We will offer a variety of tools to observe and troubleshoot any strategies."),(0,a.kt)("h4",{id:"adaptiveness"},"Adaptiveness"),(0,a.kt)("p",null,"The P2P network is always changing and adapting, and Fiber will change with it."),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("h3",{id:"fiber-nodes"},"Fiber Nodes"),(0,a.kt)("p",null,"Fiber Nodes (FN) are the individual nodes that make up the Fiber Network. They essentially consist of 3 services: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Communication service with the Ethereum network (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ethereum/devp2p"},"devp2p")),(0,a.kt)("li",{parentName:"ul"},"Internal messaging service: a service that shares messages internally over the Fibernet."),(0,a.kt)("li",{parentName:"ul"},"gRPC based API")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4987).Z,width:"2506",height:"972"})),(0,a.kt)("p",null,"Each node can connect to a considerable amount of peers (depending on the resources of the underlying machine / container), ensuring great visibility of new transactions (\u201dmempool\u201d) and newly produced blocks."),(0,a.kt)("h3",{id:"fiber-network"},"Fiber Network"),(0,a.kt)("p",null,"The crucial part to understand here is that the nodes are connected as a mesh network over high-speed cross-region links, and Ethereum messages are efficiently binary encoded for maximum speed.\nThis ensures that when an Ethereum message (transaction or block) enters the Fibernet through ",(0,a.kt)("strong",{parentName:"p"},"node A in Virginia"),", and needs to get to ",(0,a.kt)("strong",{parentName:"p"},"node B in Frankfurt"),"\n(for getting to the block producer for example), the link between these 2 nodes will be the best possible path for getting there. ","[1]"),(0,a.kt)("h3",{id:"indexing"},"Indexing"),(0,a.kt)("p",null,"Every transaction and every block that\u2019s seen on a node gets sent to a central indexing service along with the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Metadata about the Fiber Node (location)"),(0,a.kt)("li",{parentName:"ul"},"Timestamp"),(0,a.kt)("li",{parentName:"ul"},"What node the block / transaction came from (either a devp2p peer or another FN)")),(0,a.kt)("p",null,"All this information can be used for things like ",(0,a.kt)("strong",{parentName:"p"},"optimizing the p2p layer, tracing blocks and transactions, measuring latency, and anything else you can think of.")),(0,a.kt)("h2",{id:"footnotes"},"Footnotes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It is possible that the direct link between these 2 nodes is down / flaky, but because all Fiber Nodes relay all newly seen transactions,\na third node (say in London) will relay the transaction itself, with only a tiny latency increase.")))}d.isMDXComponent=!0},3221:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/fiber-network-ce6dd9982c41683d1dd7806af890df8b.png"},4987:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/fiber-node-70a4be633757ae77c46599ba72560a35.png"}}]);