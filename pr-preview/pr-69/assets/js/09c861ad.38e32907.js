"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={title:"Uppy 1.10.1: Facebook and OneDrive",date:new Date("2020-04-03T00:00:00.000Z"),author:"ife",published:!0,slug:"2020/04/1.10"},i=void 0,p={permalink:"/uppy.io/pr-preview/pr-69/blog/2020/04/1.10",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2020-04-1.10.md",source:"@site/blog/2020-04-1.10.md",title:"Uppy 1.10.1: Facebook and OneDrive",description:"Uppy 1.10.1 adds long-awaited support for Facebook and",date:"2020-04-03T00:00:00.000Z",formattedDate:"April 3, 2020",tags:[],readingTime:1.505,hasTruncateMarker:!0,authors:[{name:"ife"}],frontMatter:{title:"Uppy 1.10.1: Facebook and OneDrive",date:"2020-04-03T00:00:00.000Z",author:"ife",published:!0,slug:"2020/04/1.10"},prevItem:{title:"Uppy 1.11 \u2014 1.13: Dark Mode, custom meta fields and Google Docs in Companion",permalink:"/uppy.io/pr-preview/pr-69/blog/2020/04/1.13"},nextItem:{title:"Uppy 1.8 and 1.9: security, error handling and better types",permalink:"/uppy.io/pr-preview/pr-69/blog/2020/03/1.9"}},l={authorsImageUrls:[void 0]},s=[{value:"Misc",id:"misc",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Uppy ",(0,o.kt)("inlineCode",{parentName:"p"},"1.10.1")," adds long-awaited support for ",(0,o.kt)("a",{parentName:"p",href:"/docs/facebook/"},"Facebook")," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/onedrive/"},"OneDrive")," \ud83c\udf89"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot showing Uppy file uploader with Facebook and OneDrive options",src:n(6022).Z,width:"1218",height:"956"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const uppy = Uppy();\nuppy.use(Dashboard);\nuppy.use(Facebook, {\n    target: Dashboard,\n    companionUrl: 'https://companion.uppy.io/',\n});\nuppy.use(OneDrive, {\n    target: Dashboard,\n    companionUrl: 'https://companion.uppy.io/',\n});\n")),(0,o.kt)("p",null,"Try the live demos on ",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com"},"Transloadit.com"),": import your\nfiles from Facebook or OneDrive, and then:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://transloadit.com/demos/image-manipulation/text-watermarking/"},"Apply a watermark to an image")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://transloadit.com/demos/image-manipulation/convert-to-webp/"},"Convert an image to WebP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://transloadit.com/demos/file-exporting/store-encoding-and-thumbnails-on-s3/"},"Encode a video, extract 8 thumbnails and store everything in an S3 bucket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://transloadit.com/demos/video-encoding/encode-for-apple-iphone-11-pro-max/"},"Encode video for iPhone")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://transloadit.com/demos/file-compressing/create-one-zip-file-containing-all-uploaded-files/"},"Create a single Zip file containing all uploaded files"))),(0,o.kt)("p",null,"(Uppy demos are below the description and steps, under \u201cLive Demo. See for\nyourself\u201d ;-)"),(0,o.kt)("p",null,"You can also play with an interactive demo, enabling different Uppy options and\nproviders on the fly: ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/examples/dashboard"},"https://uppy.io/examples/dashboard")),(0,o.kt)("p",null,"OneDrive:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot showing Uppy file uploader with OneDrive file list",src:n(9257).Z,width:"1218",height:"954"})),(0,o.kt)("p",null,"Facebook:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot showing Uppy file uploader with Facebook file list",src:n(8446).Z,width:"1224",height:"962"})),(0,o.kt)("p",null,"As with Dropbox and Instagram, using the Facebook and OneDrive integrations\nrequires the client Plugins (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/facebook/"},"here for Facebook")," and see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/onedrive/"},"here for OneDrive"),"), and also your\n",(0,o.kt)("a",{parentName:"p",href:"/docs/companion/#Options"},"Companion")," integration."),(0,o.kt)("p",null,"This is an exciting release for us, and we can't wait to get some feedback\n(GitHub issues and PRs) on this! :)"),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: pass ",(0,o.kt)("inlineCode",{parentName:"li"},"endpoint")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"region")," to AWS SDK constructor (#2113 /\n@goto-bus-stop)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: Allow S3 ACL to be specified in Companion Standalone (#2111 /\n@jasonbosco)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: return 401 early if token is not set (#2118 /\n@ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: allow providing any S3 option, closes #1388 (#2030 /\n@goto-bus-stop)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion:: don\u2019t log redundant errors in production (#2112 /\n@ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"docs: Add S3 ACL option to companion docs (#2109 / @jasonbosco)")),(0,o.kt)("p",null,"As always, you can find the full list of changes and package versions, as well\nas future plans, in our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md"},"changelog"),"."))}u.isMDXComponent=!0},6022:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/uppy-facebook-onedrive-ea84dfbe7c340d85a265b6dfa67a929f.png"},8446:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/uppy-facebook-7355fc3660a84b7cf0ddf36dccf44986.png"},9257:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/uppy-onedrive-884d4d1a263da38127933f8d963aae20.png"}}]);