"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6103],{5203:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var l=a(7294),o=a(6010),n=a(1944),r=a(5281),s=a(9460),c=a(9058),i=a(401),m=a(7462),p=a(5999),u=a(2244);function g(e){const{nextItem:t,prevItem:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&l.createElement(u.Z,(0,m.Z)({},a,{subLabel:l.createElement(p.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&l.createElement(u.Z,(0,m.Z)({},t,{subLabel:l.createElement(p.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function d(){const{assets:e,metadata:t}=(0,s.C)(),{title:a,description:o,date:r,tags:c,authors:i,frontMatter:m}=t,{keywords:p}=m,u=e.image??m.image;return l.createElement(n.d,{title:a,description:o,keywords:p,image:u},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:r}),i.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:i.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&l.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var b=a(9407);function E(e){let{sidebar:t,children:a}=e;const{metadata:o,toc:n}=(0,s.C)(),{nextItem:r,prevItem:m,frontMatter:p}=o,{hide_table_of_contents:u,toc_min_heading_level:d,toc_max_heading_level:E}=p;return l.createElement(c.Z,{sidebar:t,toc:!u&&n.length>0?l.createElement(b.Z,{toc:n,minHeadingLevel:d,maxHeadingLevel:E}):void 0},l.createElement(i.Z,null,a),(r||m)&&l.createElement(g,{nextItem:r,prevItem:m}))}function h(e){const t=e.content;return l.createElement(s.n,{content:e.content,isBlogPostPage:!0},l.createElement(n.FG,{className:(0,o.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage)},l.createElement(d,null),l.createElement(E,{sidebar:e.sidebar},l.createElement(t,null))))}},4508:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7294),o=a(6010),n=a(9460),r=a(4881),s=a(6233),c=a(2584);const i="blogPostFooterDetailsFull_Wr5y";function m(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:a,title:m,editUrl:p,hasTruncateMarker:u}=e,g=!t&&u,d=a.length>0;return d||g||p?l.createElement("footer",{className:(0,o.Z)("row docusaurus-mt-lg",t&&i)},d&&l.createElement("div",{className:(0,o.Z)("col",{"col--9":g})},l.createElement(s.Z,{tags:a})),t&&p&&l.createElement("div",{className:"col margin-top--sm"},l.createElement("ul",{className:"blog__post-footer__follow"},l.createElement("li",null,l.createElement("a",{href:"https://twitter.com/uppy_io"},"Follow us on Twitter")),l.createElement("li",null,l.createElement("a",{className:"github-button",href:"https://github.com/transloadit/uppy","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star transloadit/uppy on GitHub"},"Star")))),t&&p&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(r.Z,{editUrl:p})),g&&l.createElement("div",{className:(0,o.Z)("col text--left",{"col--3":d})},l.createElement(c.Z,{blogPostTitle:m,to:e.permalink}))):null}}}]);