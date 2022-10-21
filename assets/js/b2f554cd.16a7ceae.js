"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"transaction-geography","metadata":{"permalink":"/blog/transaction-geography","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-10-21-tx-geo/index.md","source":"@site/blog/2022-10-21-tx-geo/index.md","title":"Tracing the geographic origin of Ethereum transactions","description":"In our journey of creating the ideal network topology for our Fiber nodes, we had to determine the critical geographical","date":"2022-10-21T00:00:00.000Z","formattedDate":"October 21, 2022","tags":[],"readingTime":4.325,"hasTruncateMarker":false,"authors":[{"name":"Jonas Bostoen","title":"Chainbound CTO","url":"https://github.com/jonasbostoen","imageURL":"https://github.com/jonasbostoen.png","key":"jonas"}],"frontMatter":{"slug":"transaction-geography","title":"Tracing the geographic origin of Ethereum transactions","authors":["jonas"]}},"content":"In our journey of creating the ideal network topology for our Fiber nodes, we had to determine the critical geographical\\nregions of the Ethereum p2p network. We will define these \\"hot spots\\" as regions where the most transactions are originally\\nbroadcasted from.\\n\\nBecause Fiber is a mempool service, we need to be able to deliver transactions to users as fast as possible, which also means making sure we sufficiently cover these hotspots. This article will go over our findings.\\n\\n## The setup\\nThe setup will be a number of Ethereum nodes deployed globally that **keep track of when they received a certain transaction, but also\\nfrom which peer it came**. \\nLater on, we\'ll be able to inspect these timestamps to see which node heard about the transaction first. \\nWe\'ll also be able to use the peer IP addresses to find which hosting providers are responsible for broadcasting\\nthe most transactions.\\n\\nEach node will be connected to a significant amount of peers (400), **for a theoretical\\nmaximum reach of 6000 peers**. In practice, this number will be a lot lower due to duplicate peers.\\nNow where do we deploy these nodes?\\n\\nIt\'s no secret that **most critical Ethereum infrastructure runs on AWS** [[1]](#references):\\n\\n![](./hosting-chart.png)\\n\\nWhich is why we deployed our nodes in the following 13 AWS regions:\\n* us-east-1 (N. Virginia)\\n* us-east-2 (Ohio)\\n* us-west-1 (N. California)\\n* us-west-2 (Oregon)\\n* ap-east-1 (Hong Kong)\\n* ap-northeast-2 (Seoul)\\n* ap-northeast-1 (Tokyo)\\n* ap-southeast-1 (Singapore)\\n* eu-west-1 (Ireland)\\n* eu-west-2 (London)\\n* eu-west-3 (Paris)\\n* eu-north-1 (Stockholm) \\n\\nThis obviously doesn\'t cover the whole world, but since they\'re located at backbone hotspots, it will do.\\n\\nWith this setup, we\'ve recorded 5.5 million Ethereum transactions over the period of a couple of days. Let\'s look at the results.\\n\\n## The results\\n\\n#### Geography\\n![](./tx_geo.png)\\nMost transactions are seen first in the US in the North Virginia area, which is\\nwhere the notorious **us-east-1** AWS region sits. Ohio is a hotspot as well, seeing\\na little more than 8% of transactions first. Regions on the West Coast are less active:\\nOregon and North California combined only see a little more than 5% of transactions first.\\n\\nIn **Europe**, Frankfurt is by far the most active region. Paris and London are also important\\nregions, both seeing close to 6% of recorded transactions first. In the **Asia Pacific** region, Tokyo and Singapore are the most active.\\n\\n\\nInterestingly, looking at the activity per \\"continent\\", we can see that the EU and the US lead by a wide margin:\\n![](./tx_geo_continent.png)\\n\\nBased on these results, we\'ve determined the number of nodes to deploy in each of these regions.\\n\\n#### Hosting providers\\nSince we recorded the sending peer of every transaction, we can take a closer look at the different hosting\\nproviders that originate the most transactions. We know that AWS hosts a lot of full nodes, but is that actually where\\ninfrastructure that belongs to the largest *transaction broadcasters* is?\\n\\nTo figure that out, we\'ll look at the most \\"active\\" peer (peer from which we received the most transactions first) per region, and identify the hosting provider based on their IP address.\\n\\n| Region | Hosting Provider |\\n| ------ | ---------------- |\\n| us-east-1    | AWS, Virginia     |\\n| eu-central-1 | Hetzner, Falkenstein |\\n| us-east-2 | AWS, Ohio |\\n| eu-west-3 | Google Cloud, Brussels |\\n| eu-west-2 | OVH, UK |\\n| ap-northeast-1 | AWS, Tokyo |\\n| ap-southeast-1 | Contabo, Singapore |\\n| eu-west-1 | AWS, Dublin |\\n| us-west-2 | Telus Communications, Vancouver |\\n| ap-east-1 | Google Cloud, Hong Kong |\\n| ap-northeast-2 | AWS, Seoul |\\n| eu-north-1 | Hetzner, Falkenstein |\\n| us-west-1 | AWS, Virginia |\\n\\nTurns out that **AWS wins only in 6 of the 13 regions**. In Virginia and in Ohio, both very important regions, it has been the biggest broadcaster. But we also see Google Cloud winning in Hong Kong as well as in Paris (from their datacenter in Brussels, Belgium). Hetzner wins in Frankfurt by a wide margin, perhaps not surprisingly. It also wins in Stockholm, Sweden,\\neven though the broadcaster was in Frankfurt. This tells us that the eu-north area does not seem to have a lot of\\nactivity. In Oregon, the biggest broadcaster was in Vancouver, Canada. In Singapore, it came from Contabo.\\n\\nAnother interesting observation is that there\'s almost never one broadcaster that stands out per region. The second and\\nthird biggest broadcasters are never far behind. This suggests that providers like [Alchemy](https://www.alchemy.com/)\\nand [Infura](https://infura.io/), who send the largest part of Ethereum transactions, use a lot of nodes, possibly\\ndistributed across geographic areas.\\n\\n## Conclusion\\nWhen milliseconds matter, this is all information that has to be taken into consideration, and that\'s what we did\\nwith Fiber. Listening to transactions is only one aspect of high frequency trading on blockchains, but it\'s a very important one that one needs to get right by carefully choosing the regions, concentration, and cloud providers\\nacross which to deploy nodes.\\n\\nIf you\'re interested in learning more about Fiber, check out the [documentation](/docs/intro) or\\njoin the [Discord](https://discord.gg/J4KNdeCYGX). We will be posting more stories like these,\\nfollow us on Twitter for updates [@chainbound_](https://twitter.com/chainbound_).\\n\\n## References\\n1. https://ethernodes.org/networkType/Hosting"}]}')}}]);