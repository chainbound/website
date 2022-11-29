"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,g=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"Introduction"},i=void 0,s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Fiber Network is a global network of nodes that connect to the Ethereum p2p networking layer. These Fiber Nodes are connected to each other with a high-speed connection, allowing them to quickly send Ethereum messages from one part of the world to the other. This can be leveraged into a global and almost real-time overview of new transactions and blocks.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/usage/getting-started"}},l={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Principles",id:"principles",level:2},{value:"Fairness",id:"fairness",level:4},{value:"Visibility",id:"visibility",level:4},{value:"Concepts",id:"concepts",level:2},{value:"Fiber Nodes",id:"fiber-nodes",level:3},{value:"Fiber Network",id:"fiber-network",level:3},{value:"Indexing",id:"indexing",level:3},{value:"Footnotes",id:"footnotes",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fiber Network")," is a global network of nodes that connect to the Ethereum p2p networking layer. These Fiber Nodes are connected to each other with a high-speed connection, allowing them to quickly send Ethereum messages from one part of the world to the other. This can be leveraged into a global and almost real-time overview of new transactions and blocks."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you're interested in trying it out, join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/J4KNdeCYGX"},"Discord"),".")),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"A lot of DeFi strategies require low latency to transactions, since they represent a pending state change that could\nresult in financial opportunities. We will group together these strategies, which include ",(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/mev/"},"MEV")," like\narbitrage and liquidations, but also things like market making, as ",(0,a.kt)("strong",{parentName:"p"},"High Frequency Trading")," (HFT)."),(0,a.kt)("p",null,"There are a lot of differences with HFT in traditional markets however. Firstly, in traditional markets, all financial data\ngoes through a centralized exchange. This centralized exchange is usually located in a single geographical area, which means\nthat organizations wanting fast access to market data will need to ",(0,a.kt)("strong",{parentName:"p"},"co-locate")," with the exchange servers. This is often\nprohibitively expensive, and usually reserved only for the big players."),(0,a.kt)("p",null,"On blockchains, it doesn't work like that. A low latency strategy on a blockchain usually consists of 3 steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Listening"),": this step is concerned with listening to the p2p network for opportunities which come in the form of\ntransactions or blocks."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Processing"),": this step processes transactions and blocks, and decides whether there are opportunities that can\nbe captured or not. For example: an arbitrage bot looking for price discrepancies across different DEXes."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Broadcasting"),": if the previous step produced a transaction to capture\nan opportunity, this transaction needs to be broadcasted to the network.")),(0,a.kt)("p",null,"Each of these steps needs to happen as quickly as possible to get the highest chance of capturing the opportunity.\nThe special thing about HFT on blockchains is that an opportunity (",(0,a.kt)("em",{parentName:"p"},"target transaction"),") ",(0,a.kt)("strong",{parentName:"p"},"can\ncome from anywhere in the world"),", in contrast with traditional HFT. It's true that these transactions will often come from centralized services like Infura\nand Alchemy, which have servers in known locations, but that's not always the case. So for step 1, it's crucial\nthat we are connected to as many peers as possible across the globe, to make sure we receive the target transactions ASAP."),(0,a.kt)("p",null,"This is where Fiber Network steps in. We have deployed ",(0,a.kt)("a",{parentName:"p",href:"#fiber-nodes"},"Fiber Nodes")," distributed ",(0,a.kt)("strong",{parentName:"p"},"across the globe"),", as well as ",(0,a.kt)("strong",{parentName:"p"},"concentrated\nin high-activity regions"),", to make sure our users receive any target transactions before anyone else. A simplified\noverview can be seen in the diagram below:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3221).Z,width:"3676",height:"2376"})),(0,a.kt)("p",null,"In step 3, after a user is done processing a transaction and has found an opportunity, ",(0,a.kt)("strong",{parentName:"p"},"they need their transaction broadcasted as fast as possible"),", to arrive at the block builder / block producer before the competition. Again,\n",(0,a.kt)("strong",{parentName:"p"},"we don't know where the final block builder / producer is going to be"),", and especially with Proof of Stake, a validator\ncan be anywhere.\nThis is basically step 1 in reverse, and the global connectivity of Fiber Network to a high amount of peers will make\nsure the user has the lowest latency to the builder / producer as possible."),(0,a.kt)("h2",{id:"principles"},"Principles"),(0,a.kt)("p",null,"Fiber Network was built with the following principles in mind:"),(0,a.kt)("h4",{id:"fairness"},"Fairness"),(0,a.kt)("p",null,"We will not introduce artificial latency based on price plans, nor unnecessarily cap the amount of transactions you can send."),(0,a.kt)("h4",{id:"visibility"},"Visibility"),(0,a.kt)("p",null,"We will offer a variety of tools to observe and troubleshoot any strategies."),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("h3",{id:"fiber-nodes"},"Fiber Nodes"),(0,a.kt)("p",null,"Fiber Nodes (FN) are the individual nodes that make up the Fiber Network. They essentially consist of 3 services:\na service for communication with the Ethereum network (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/devp2p"},"devp2p")," implementation),\na service for sharing messages internally over the Fibernet, and a ",(0,a.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," based API."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4987).Z,width:"2506",height:"972"})),(0,a.kt)("p",null,"Each node can connect to a considerable amount of peers (depending on the resources of the underlying machine / container), ensuring great visibility of new transactions (\u201dmempool\u201d) and newly produced blocks."),(0,a.kt)("h3",{id:"fiber-network"},"Fiber Network"),(0,a.kt)("p",null,"The crucial part to understand here is that the nodes are connected as a mesh network over high-speed cross-region links, and Ethereum messages are efficiently binary encoded for maximum speed. This ensures that when an Ethereum message (transaction or block) enters the Fibernet through ",(0,a.kt)("strong",{parentName:"p"},"node A in Virginia"),", and needs to get to ",(0,a.kt)("strong",{parentName:"p"},"node B in Frankfurt")," (for getting to the block producer for example), the link between these 2 nodes will be the best possible path for getting there. ","[1]"),(0,a.kt)("h3",{id:"indexing"},"Indexing"),(0,a.kt)("p",null,"Every transaction and every block that\u2019s seen on a node gets sent to a central indexing service along with the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Metadata about the Fiber Node (location)"),(0,a.kt)("li",{parentName:"ul"},"Timestamp"),(0,a.kt)("li",{parentName:"ul"},"What node the block / transaction came from (either a devp2p peer or another FN)")),(0,a.kt)("p",null,"All this information can be used for things like ",(0,a.kt)("strong",{parentName:"p"},"optimizing the p2p layer, tracing blocks and transactions, measuring latency, and anything else you can think of.")),(0,a.kt)("h2",{id:"footnotes"},"Footnotes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It is possible that the direct link between these 2 nodes is down / flaky, but because all Fiber Nodes relay all newly seen transactions, a third node (say in London) will relay the transaction itself, with only a tiny latency increase.")))}d.isMDXComponent=!0},3221:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fiber-network-ce6dd9982c41683d1dd7806af890df8b.png"},4987:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fiber-node-70a4be633757ae77c46599ba72560a35.png"}}]);