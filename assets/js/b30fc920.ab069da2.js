"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[620],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>f,default:()=>N,frontMatter:()=>k,metadata:()=>T,toc:()=>x});var a=t(7462),r=t(7294),i=t(3905),o=t(6010),s=t(2389),l=t(7392),c=t(7094),u=t(2466);const p="tabList__CuJ",m="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:s,values:d,groupId:g,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,l.l)(k,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const T=null===s?s:s??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==T&&!k.some((e=>e.value===T)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${T}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:x}=(0,c.U)(),[w,N]=(0,r.useState)(T),v=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=g){const e=y[g];null!=e&&e!==w&&k.some((n=>n.value===e))&&N(e)}const I=e=>{const n=e.currentTarget,t=v.indexOf(n),a=k[t].value;a!==w&&(C(n),N(a),null!=g&&x(g,String(a)))},R=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=v.indexOf(e.currentTarget)+1;t=v[n]??v[0];break}case"ArrowLeft":{const n=v.indexOf(e.currentTarget)-1;t=v[n]??v[v.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},k.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>v.push(e),onKeyDown:R,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function g(e){const n=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}const h="tabItem_Ymn6";function b(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(h,a),hidden:t},n)}const k={sidebar_position:1,title:"Getting Started"},f=void 0,T={unversionedId:"usage/getting-started",id:"usage/getting-started",title:"Getting Started",description:"Users can connect to the API at fiberapi.io:8080, providing their API key in the process.",source:"@site/docs/usage/getting-started.mdx",sourceDirName:"usage",slug:"/usage/getting-started",permalink:"/docs/usage/getting-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"API Design",permalink:"/docs/usage/api"}},y={},x=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Connecting",id:"connecting",level:3},{value:"Subscribing",id:"subscribing",level:3},{value:"Transactions",id:"transactions",level:4},{value:"Filtering",id:"filtering",level:4},{value:"Blocks",id:"blocks",level:4},{value:"Sending / Backrunning Transactions",id:"sending--backrunning-transactions",level:3},{value:"SendTransaction",id:"sendtransaction",level:4},{value:"SendRawTransaction",id:"sendrawtransaction",level:4},{value:"BackrunTransaction",id:"backruntransaction",level:4},{value:"RawBackrunTransaction",id:"rawbackruntransaction",level:4}],w={toc:x};function N(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Users can connect to the API at ",(0,i.kt)("inlineCode",{parentName:"p"},"fiberapi.io:8080"),", providing their API key in the process.\nThe domain will resolve to the closest node to the client, based on latency (check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/regions"},"regions")," for where this will be). To check this latency, just ",(0,i.kt)("inlineCode",{parentName:"p"},"ping fiberapi.io")," from the same machine as your client."),(0,i.kt)("p",null,"The API uses gRPC. We offer a number of client packages to make this connection process as easy as possible:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Programming Language"),(0,i.kt)("th",{parentName:"tr",align:null},"Package"),(0,i.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JavaScript / TypeScript"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/chainbound/fiber-ts"},"fiber-ts")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/chainbound/fiber-ts#readme"},"README"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Golang"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/chainbound/fiber-go"},"fiber-go")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/chainbound/fiber-go#readme"},"README"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Python"),(0,i.kt)("td",{parentName:"tr",align:null},"fiber-py (WIP)"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rust"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/chainbound/fiber-rs"},"fiber-rs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/chainbound/fiber-rs#readme"},"README"))))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you want to build your own client (or help with the WIP implementations), all you need are the protobuf / gRPC files and a compiler for your language. Documentation for different gRPC language implementations can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/"},"https://grpc.io/docs/languages"),". The Fiber protobuf definitions are at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chainbound/fiber-proto"},"https://github.com/chainbound/fiber-proto"),". For examples of how to actually use it (API authentication), please refer to the already implemented packages.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We highly recommend using either the ",(0,i.kt)("strong",{parentName:"p"},"Go")," or ",(0,i.kt)("strong",{parentName:"p"},"Rust")," packages if you're looking for the best performance.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(g,{mdxType:"Tabs"},(0,i.kt)(b,{value:"go",label:"Golang",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/chainbound/fiber-go\n"))),(0,i.kt)(b,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cargo add --git https://github.com/chainbound/fiber-rs\n"))),(0,i.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i fiber-ts\n# or\nyarn add fiber-ts\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"connecting"},"Connecting"),(0,i.kt)("p",null,"The first step is connecting to a Fiber Node API. As we've seen above, there's one URL configured with latency based routing\nto always resolve to the closest instance to your client. Here's how to use the different packages to connect to Fiber:"),(0,i.kt)(g,{mdxType:"Tabs"},(0,i.kt)(b,{value:"go",label:"Golang",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "log"\n    "time"\n\n    fiber "github.com/chainbound/fiber-go"\n)\n\nfunc main() {\n    client := fiber.NewClient("fiberapi.io:8080", "YOUR_API_KEY")\n    // Close the client when you\'re done to make sure API accounting is done correctly\n    defer client.Close()\n\n    // Configure a timeout for establishing connection\n    ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)\n    defer cancel()\n    if err := client.Connect(ctx); err != nil {\n        log.Fatal(err)\n    }\n}\n'))),(0,i.kt)(b,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use fiber::Client;\n\n#[tokio::main]\nasync fn main() {\n    let mut client = Client::connect("fiberapi.io:8080".to_string(), "YOUR_API_KEY".to_string()).await.unwrap();\n}\n'))),(0,i.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Client } from 'fiber-ts';\n\nconst client = new Client('fiberapi.io:8080', 'YOUR_API_KEY');\n\n// Wait 3 seconds for the client to connect\nawait client.waitForReady(3);\n")))),(0,i.kt)("h3",{id:"subscribing"},"Subscribing"),(0,i.kt)("h4",{id:"transactions"},"Transactions"),(0,i.kt)("p",null,"Next, let's look at how we can subscribe to transactions. We're omitting the code above, but your client needs to be connected to Fiber first."),(0,i.kt)(g,{mdxType:"Tabs"},(0,i.kt)(b,{value:"go",label:"Golang",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "log"\n    "time"\n\n    fiber "github.com/chainbound/fiber-go"\n)\n\nfunc main() {\n    ...\n\n    // First make a sink channel on which to receive the transactions\n    ch := make(chan *fiber.Transaction)\n    go func() {\n        // This is a blocking call, so it needs to run in a Goroutine\n        if err := client.SubscribeNewTxs(nil, ch); err != nil {\n            log.Fatal(err)\n        }\n    }()\n\n    // Listen for incoming transactions\n    for tx := range ch {\n        handleTransaction(tx)\n    }\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The transaction type we use here (",(0,i.kt)("inlineCode",{parentName:"p"},"fiber.Transaction"),"), contains all possible fields of all the different transaction types. You can differentiate them\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field. There's also a helper method to convert this transaction to a ",(0,i.kt)("inlineCode",{parentName:"p"},"go-ethereum.types.Transaction")," type, which you can do with\n",(0,i.kt)("inlineCode",{parentName:"p"},"toNative()"),". ",(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"...\n\nfor tx := range ch {\n    nativeTx := tx.ToNative()\n    handleGethTransaction(nativeTx)\n}\n")))),(0,i.kt)(b,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use fiber::Client;\n\n#[tokio::main]\nasync fn main() {\n    // Client needs to be mutable\n    let mut client = Client::connect("fiberapi.io:8080".to_string(), "YOUR_API_KEY".to_string()).await.unwrap();\n\n    let mut sub = client.subscribe_new_txs(None).await;\n\n    // Consume the stream\n    while let Some(tx) = sub.next().await {\n        handle_transaction(tx);\n    }\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The stream yields transactions that are ",(0,i.kt)("inlineCode",{parentName:"p"},"ethers::types::Transaction")," types from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gakonst/ethers-rs"},"ethers-rs")," crate."))),(0,i.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Client, TxFilter, hexToBytes } from 'fiber-ts';\nimport { TypedTransaction } from '@ethereumjs/tx';\n\n...\n\nconst sub = client.subscribeNewTxs();\n\nsub.on('tx', (tx: TypedTransaction) => {\n    handleTx(tx);\n});\n")))),(0,i.kt)("h4",{id:"filtering"},"Filtering"),(0,i.kt)("p",null,"You might have noticed that the ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe")," methods take a parameter that we've left undefined for now: ",(0,i.kt)("strong",{parentName:"p"},"the filter"),".\nCurrently, we support filtering on the following transaction fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sender"),(0,i.kt)("li",{parentName:"ul"},"Receiver"),(0,i.kt)("li",{parentName:"ul"},"MethodID"),(0,i.kt)("li",{parentName:"ul"},"Value (greater than)")),(0,i.kt)("p",null,"Let's look at how we can filter transactions so that we don't receive all of them:"),(0,i.kt)(g,{mdxType:"Tabs"},(0,i.kt)(b,{value:"go",label:"Golang",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "log"\n    "time"\n\n    fiber "github.com/chainbound/fiber-go"\n)\n\nfunc main() {\n    ...\n\n    // Construct filter\n    // example 1: all transactions with either of these addresses as the receiver\n    f := filter.New(filter.Or(\n        filter.To("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"),\n        filter.To("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"),\n    ))\n\n    // example 2: all transactions with a value greater than 1 ETH\n    f := filter.New(filter.Value(big.NewInt(1) * big.NewInt(1e18)))\n\n    // example 3: all ERC20 transfers on the 2 tokens below\n    f := filter.New(filter.And(\n        filter.MethodID("0xa9059cbb"),\n        filter.Or(\n            filter.To("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"),\n            filter.To("0xdAC17F958D2ee523a2206206994597C13D831ec7"),\n        ),\n    ))\n\n    ch := make(chan *fiber.Transaction)\n    go func() {\n        // apply filter\n        if err := client.SubscribeNewTxs(f, ch); err != nil {\n            log.Fatal(err)\n        }\n    }()\n\n    // Listen for incoming transactions\n    for tx := range ch {\n        handleTransaction(tx)\n    }\n}\n'))),(0,i.kt)(b,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Constructing filters with the Rust package is not very ergonomic yet. We're working on using macros to improve this process.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use fiber::Client;\n\n#[tokio::main]\nasync fn main() {\n    // Client needs to be mutable\n    let mut client = Client::connect("fiberapi.io:8080".to_string(), "YOUR_API_KEY".to_string()).await.unwrap();\n\n    // Construct filter\n    // example 1: simple receiver filter\n    let f = Filter::new()\n                .to("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");\n    \n    // example 2: all transactions with either of these addresses as the receiver\n    let f = Filter::new()\n                .or() // creates a new \'OR\' level\n                  .to("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")\n                  .to("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");\n\n    // example 3: all ERC20 transfers on the 2 tokens below\n    let f = Filter::new()\n                .and()\n                  .method_id("0xa9059cbb")\n                  .or()\n                    .to("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")\n                    .to("0xdAC17F958D2ee523a2206206994597C13D831ec7");\n\n    // Encode the filter\n    let mut sub = client.subscribe_new_txs(f.encode().unwrap()).await;\n\n    // Consume the stream\n    while let Some(tx) = sub.next().await {\n        handle_transaction(tx);\n    }\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The stream yields transactions that are ",(0,i.kt)("inlineCode",{parentName:"p"},"ethers::types::Transaction")," types from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gakonst/ethers-rs"},"ethers-rs")," crate."))),(0,i.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("p",null,"\ud83d\udea7 WIP \ud83d\udea7"))),(0,i.kt)("h4",{id:"blocks"},"Blocks"),(0,i.kt)("p",null,"\ud83d\udea7 WIP \ud83d\udea7"),(0,i.kt)("h3",{id:"sending--backrunning-transactions"},"Sending / Backrunning Transactions"),(0,i.kt)("p",null,"We currently support 4 methods for sending transactions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SendTransaction"),": takes a signed transaction"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SendRawTransaction"),": takes a signed, RLP encoded transaction"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BackrunTransaction"),": takes the transaction hash of the transaction to backrun, and a signed transaction"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SendRawTransaction"),": takes the transaction hash of the transaction to backrun, and a signed, RLP encoded transaction")),(0,i.kt)("p",null,"Here's how to use these endpoints in the different packages:"),(0,i.kt)("h4",{id:"sendtransaction"},"SendTransaction"),(0,i.kt)(g,{mdxType:"Tabs"},(0,i.kt)(b,{value:"go",label:"Golang",mdxType:"TabItem"},(0,i.kt)("p",null,"In Go, the method takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"go-ethereum.types.Transaction")," as a parameter. This plays along nicely with any code\nthat's already using ",(0,i.kt)("inlineCode",{parentName:"p"},"go-ethereum")," as a library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "log"\n    "math/big"\n    "time"\n\n    fiber "github.com/chainbound/fiber-go"\n\n    "github.com/ethereum/go-ethereum/core/types"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/crypto"\n)\n\n\nfunc main() {\n    // Connection process omitted\n    ...\n\n    // Example transaction\n    tx := types.NewTx(&types.DynamicFeeTx{\n        Nonce:     nonce,\n        To:        common.HexToAddress("0x...."),\n        Value:     big.NewInt(100),\n        Gas:       21000,\n        GasFeeCap: big.NewInt(x),\n        GasTipCap: big.NewInt(y),\n        Data:      nil,\n    })\n\n    // Get your private key\n    pk, _ := crypto.HexToECDSA("YOUR_PRIVATE_KEY")\n    // Create a signer\n    signer := types.NewLondonSigner(common.Big1)\n\n    // Sign the transaction. Note that this doesn\'t RLP encode the transaction\n    signed, err := types.SignTx(tx, signer, pk)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Create a timeout for sending\n    ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)\n    defer cancel()\n\n    // Returns:\n    // * Transaction hash\n    // * Unix timestamp in microseconds at which the node saw the transaction (useful for debugging latency issues)\n    // * Any potential errors\n    hash, timestamp, err := client.SendTransaction(ctx, signed)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n}\n'))),(0,i.kt)(b,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,i.kt)("p",null,"In Rust, we again use ",(0,i.kt)("inlineCode",{parentName:"p"},"ethers-rs")," to construct and sign transactions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use ethers::{\n    signers::{LocalWallet, Signer},\n    types::{transaction::eip2718::TypedTransaction, Address, TransactionRequest}, utils::hex::ToHex,\n};\nuse fiber::Client;\n\n#[tokio::main]\nasync fn main() {\n    // Connection process omitted\n    ...\n\n    // Construct transaction\n    let tx: TypedTransaction = TransactionRequest::new()\n        .nonce(3)\n        .gas_price(1)\n        .gas(25000)\n        .to("b94f5374fce5edbc8e2a8697c15331677e6ebf0b".parse::<Address>().unwrap())\n        .value(10)\n        .data(vec![0x55, 0x44])\n        .chain_id(1)\n        .into();\n\n    // Parse private key\n    let wallet: LocalWallet = "PRIVATE_KEY".parse().unwrap();\n\n    let signed = wallet.sign_transaction(&tx.clone()).await.unwrap();\n\n    let (hash, timestamp) = client.send_transaction(&signed).await.unwrap();\n}\n'))),(0,i.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("p",null,"The JavaScript package uses ",(0,i.kt)("inlineCode",{parentName:"p"},"@ethereumjs/tx")," to construct and sign transactions. If you want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ethers.js")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"web3.js"),", you can do that with ",(0,i.kt)("a",{parentName:"p",href:"#sendrawtransaction"},"SendRawTransaction")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Client, TransactionResponse } from 'fiber-ts';\nimport { TypedTransaction, TransactionFactory } from '@ethereumjs/tx';\n\n// Connection process omitted\n...\n\nconst pk = Buffer.from('YOUR_PRIVATE_KEY', 'hex');\n\n// Build an EIP1559 TypedTransaction with ethereumjs\nconst tx = TransactionFactory.fromTxData({\n    chainId: 1,\n    type: 2,\n    to: '0x...',\n    gasLimit: 21000,\n    value: 0,\n    nonce: 21,\n    maxFeePerGas: 20 * 1e9,\n    maxPriorityFeePerGas: 2 * 1e9,\n});\n\n// Sign & encode the transaction\nconst signed = tx.sign(pk);\n\n// Result contains the timestamp (unix microseconds) and hash of the transaction\nconst result: TransactionResponse = await client.sendTransaction(signed);\n")))),(0,i.kt)("h4",{id:"sendrawtransaction"},"SendRawTransaction"),(0,i.kt)(g,{mdxType:"Tabs"},(0,i.kt)(b,{value:"go",label:"Golang",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "log"\n    "math/big"\n    "time"\n\n    fiber "github.com/chainbound/fiber-go"\n\n    "github.com/ethereum/go-ethereum/core/types"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/crypto"\n)\n\n\nfunc main() {\n    // Connection process omitted\n    ...\n\n    // Example transaction\n    tx := types.NewTx(&types.DynamicFeeTx{\n        Nonce:     nonce,\n        To:        common.HexToAddress("0x...."),\n        Value:     big.NewInt(100),\n        Gas:       21000,\n        GasFeeCap: big.NewInt(x),\n        GasTipCap: big.NewInt(y),\n        Data:      nil,\n    })\n\n    // Get your private key\n    pk, _ := crypto.HexToECDSA("YOUR_PRIVATE_KEY")\n    // Create a signer\n    signer := types.NewLondonSigner(common.Big1)\n\n    // Sign the transaction. Note that this doesn\'t RLP encode the transaction\n    signed, err := types.SignTx(tx, signer, pk)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Create a timeout for sending\n    ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)\n    defer cancel()\n\n    raw, err := signed.MarshalBinary()\n    if err != nil {\n        log.Fatal(err)\n    }\n\n\n    // Returns:\n    // * Transaction hash\n    // * Unix timestamp in microseconds at which the node saw the transaction (useful for debugging latency issues)\n    // * Any potential errors\n    hash, timestamp, err := client.SendRawTransaction(ctx, raw)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n}\n'))),(0,i.kt)(b,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,i.kt)("p",null,"In Rust, we again use ",(0,i.kt)("inlineCode",{parentName:"p"},"ethers-rs")," to construct and sign transactions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use ethers::{\n    signers::{LocalWallet, Signer},\n    types::{transaction::eip2718::TypedTransaction, Address, TransactionRequest}, utils::hex::ToHex,\n};\nuse fiber::Client;\n\n#[tokio::main]\nasync fn main() {\n    // Connection process omitted\n    ...\n\n    // Construct transaction\n    let tx: TypedTransaction = TransactionRequest::new()\n        .nonce(3)\n        .gas_price(1)\n        .gas(25000)\n        .to("b94f5374fce5edbc8e2a8697c15331677e6ebf0b".parse::<Address>().unwrap())\n        .value(10)\n        .data(vec![0x55, 0x44])\n        .chain_id(1)\n        .into();\n\n    // Parse private key\n    let wallet: LocalWallet = "PRIVATE_KEY".parse().unwrap();\n\n    let sig = wallet.sign_transaction(&tx.clone()).await.unwrap();\n\n    // Sign transaction\n    let signed = tx.rlp_signed(&sig);\n\n    let (hash, timestamp) = client.send_raw_transaction(&signed).await.unwrap();\n}\n'))),(0,i.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("p",null,"With this endpoint you can use any library for serializing transactions. In this example, we'll use ",(0,i.kt)("inlineCode",{parentName:"p"},"ethers.js"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Client } from 'fiber-ts';\nimport { ethers } from 'ethers';\n\n// Code omitted\n...\n\nconst wallet = new ethers.Wallet('PRIVATE_KEY');\n\nconst signedTx = await wallet.signTransaction({\n    chainId: 1,\n    type: 2,\n    to: '0x...',\n    gasLimit: 21000,\n    value: 0,\n    nonce: 21,\n    maxFeePerGas: 20 * 1e9,\n    maxPriorityFeePerGas: 2 * 1e9,\n});\n\nconst result = await client.sendRawTransaction(signedTx);\n")))),(0,i.kt)("h4",{id:"backruntransaction"},"BackrunTransaction"),(0,i.kt)("p",null,"Backruns a transaction at the p2p level. "),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This is not a bundle like in Flashbots. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/usage/api#backruntransaction"},"API Design section"),".")),(0,i.kt)(g,{mdxType:"Tabs"},(0,i.kt)(b,{value:"go",label:"Golang",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "log"\n    "math/big"\n    "time"\n\n    fiber "github.com/chainbound/fiber-go"\n\n    "github.com/ethereum/go-ethereum/core/types"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/crypto"\n)\n\n\nfunc main() {\n    // Connection process, signing transaction omitted\n    ...\n\n    target := common.HexToHash("0xabcd...")\n    // Returns:\n    // * Transaction hash\n    // * Unix timestamp in microseconds at which the node saw the transaction (useful for debugging latency issues)\n    // * Any potential errors\n    hash, timestamp, err := client.BackrunTransaction(ctx, target, signed)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n}\n'))),(0,i.kt)(b,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,i.kt)("p",null,"In Rust, we again use ",(0,i.kt)("inlineCode",{parentName:"p"},"ethers-rs")," to construct and sign transactions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use ethers::{\n    signers::{LocalWallet, Signer},\n    types::{transaction::eip2718::TypedTransaction, Address, TransactionRequest}, utils::hex::ToHex,\n};\nuse fiber::Client;\n\n#[tokio::main]\nasync fn main() {\n    // Connection process, signing transaction omitted\n    ...\n\n    let target = "0xabcd...".to_string();\n    let (hash, timestamp) = client.backrun_transaction(target, &signed).await.unwrap();\n}\n'))),(0,i.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("p",null,"The JavaScript package uses ",(0,i.kt)("inlineCode",{parentName:"p"},"@ethereumjs/tx")," to construct and sign transactions. If you want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ethers.js")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"web3.js"),", you can do that with ",(0,i.kt)("a",{parentName:"p",href:"#sendrawtransaction"},"SendRawTransaction")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Client, TransactionResponse } from 'fiber-ts';\nimport { TypedTransaction, TransactionFactory } from '@ethereumjs/tx';\n\n// Connection process, signing transaction omitted\n...\n\n\n// Result contains the timestamp (unix microseconds) and hash of the transaction\nconst result: TransactionResponse = await client.backrunTransaction(\"0xabcd...\", signed);\n")))),(0,i.kt)("h4",{id:"rawbackruntransaction"},"RawBackrunTransaction"),(0,i.kt)("p",null,"Exactly the same as above, but this time our transaction has to be RLP encoded. Check ",(0,i.kt)("a",{parentName:"p",href:"#sendrawtransaction"},"SendRawTransaction")," section\nfor full examples of signing and RLP encoding transactions."),(0,i.kt)(g,{mdxType:"Tabs"},(0,i.kt)(b,{value:"go",label:"Golang",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "log"\n    "math/big"\n    "time"\n\n    fiber "github.com/chainbound/fiber-go"\n\n    "github.com/ethereum/go-ethereum/core/types"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/crypto"\n)\n\n\nfunc main() {\n    // Connection process, signing transaction omitted\n    ...\n\n    target := common.HexToHash("0xabcd...")\n    // Returns:\n    // * Transaction hash\n    // * Unix timestamp in microseconds at which the node saw the transaction (useful for debugging latency issues)\n    // * Any potential errors\n    hash, timestamp, err := client.RawBackrunTransaction(ctx, target, raw)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n}\n'))),(0,i.kt)(b,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,i.kt)("p",null,"In Rust, we again use ",(0,i.kt)("inlineCode",{parentName:"p"},"ethers-rs")," to construct and sign transactions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use ethers::{\n    signers::{LocalWallet, Signer},\n    types::{transaction::eip2718::TypedTransaction, Address, TransactionRequest}, utils::hex::ToHex,\n};\nuse fiber::Client;\n\n#[tokio::main]\nasync fn main() {\n    // Connection process, signing transaction omitted\n    ...\n\n    let target = "0xabcd...".to_string();\n    let (hash, timestamp) = client.raw_backrun_transaction(target, &raw_signed).await.unwrap();\n}\n'))),(0,i.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("p",null,"The JavaScript package uses ",(0,i.kt)("inlineCode",{parentName:"p"},"@ethereumjs/tx")," to construct and sign transactions. If you want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ethers.js")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"web3.js"),", you can do that with ",(0,i.kt)("a",{parentName:"p",href:"#sendrawtransaction"},"SendRawTransaction")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Client, TransactionResponse } from 'fiber-ts';\nimport { TypedTransaction, TransactionFactory } from '@ethereumjs/tx';\n\n// Connection process, signing transaction omitted\n...\n\n\n// Result contains the timestamp (unix microseconds) and hash of the transaction\nconst result: TransactionResponse = await client.rawBackrunTransaction(\"0xabcd...\", rawSigned);\n")))))}N.isMDXComponent=!0}}]);