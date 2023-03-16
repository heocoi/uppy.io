"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8532],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,c=m["".concat(s,".").concat(d)]||m[d]||h[d]||o;return a?r.createElement(c,i(i({ref:t},u),{},{components:a})):r.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Uppy 0.9: Making Progress, then pause & resume. Remote file uploads, Informer.",date:new Date("2016-08-26T00:00:00.000Z"),author:"hedgerh",published:!0,slug:"2016/08/0.9.0"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-69/blog/2016/08/0.9.0",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2016-08-0.9.0.md",source:"@site/blog/2016-08-0.9.0.md",title:"Uppy 0.9: Making Progress, then pause & resume. Remote file uploads, Informer.",description:"We have just released Uppy 0.9.0. This release features some changes that we",date:"2016-08-26T00:00:00.000Z",formattedDate:"August 26, 2016",tags:[],readingTime:3.225,hasTruncateMarker:!0,authors:[{name:"hedgerh"}],frontMatter:{title:"Uppy 0.9: Making Progress, then pause & resume. Remote file uploads, Informer.",date:"2016-08-26T00:00:00.000Z",author:"hedgerh",published:!0,slug:"2016/08/0.9.0"},prevItem:{title:"Uppy 0.10: Getting together, the future, Google Drive UI, exposed events",permalink:"/uppy.io/pr-preview/pr-69/blog/2016/09/0.10"},nextItem:{title:"Uppy version 0.8 released: The Webcam Edition and Meta Data",permalink:"/uppy.io/pr-preview/pr-69/blog/2016/08/0.8.0"}},s={authorsImageUrls:[void 0]},p=[{value:"Ability to pause uploads, progress indicators &amp; ETA",id:"ability-to-pause-uploads-progress-indicators--eta",level:2},{value:"Remote file uploads",id:"remote-file-uploads",level:2},{value:"Informer interface",id:"informer-interface",level:2},{value:"Webcam: Say Cheese!",id:"webcam-say-cheese",level:2},{value:"Under the hood: UI refactors",id:"under-the-hood-ui-refactors",level:2},{value:"Release Notes",id:"release-notes",level:2}],u={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We have just released Uppy 0.9.0. This release features some changes that we\nthink you will be very excited about. Let's see what's new!"),(0,n.kt)("h2",{id:"ability-to-pause-uploads-progress-indicators--eta"},"Ability to pause uploads, progress indicators & ETA"),(0,n.kt)("p",null,"The most visible feature that has been added is the ability to pause and resume\nfile uploads."),(0,n.kt)("img",{alt:"dashboard UI with paused uploads",src:"/img/blog/0.9/upload-pause.jpg",className:"border"}),(0,n.kt)("img",{alt:"dashboard UI with files uploading and a pause all button",src:"/img/blog/0.9/upload-resume.jpg",className:"border"}),(0,n.kt)("p",null,"The upload dashboard now contains more information about uploads, such as the\ntime remaining until an upload is finished. We have also added circular progress\nindicators to give better visual feedback on an upload's progress."),(0,n.kt)("h2",{id:"remote-file-uploads"},"Remote file uploads"),(0,n.kt)("p",null,"Remote file uploading is now working again."),(0,n.kt)("h2",{id:"informer-interface"},"Informer interface"),(0,n.kt)("p",null,"We have added a new ",(0,n.kt)("inlineCode",{parentName:"p"},"Informer")," plugin (tested with ",(0,n.kt)("inlineCode",{parentName:"p"},"Dashboard"),", should also work\nanywhere else) that listens to ",(0,n.kt)("inlineCode",{parentName:"p"},"informer")," events, like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"bus.emit('informer', message, type, duration);\n")),(0,n.kt)("p",null,"and displays a message bubble for a certain amount of time. It will be useful to\nnotify you when the internet connection is (a licky boom-boom) down (or back\nup):"),(0,n.kt)("img",{alt:"info: no connection",src:"/img/blog/0.9/info-no-connection.jpg",className:"border"}),(0,n.kt)("p",null,"Or when Uppy has successfully uploaded your files:"),(0,n.kt)("img",{alt:"info: upload successful",src:"/img/blog/0.9/info-upload-success.jpg",className:"border"}),(0,n.kt)("h2",{id:"webcam-say-cheese"},"Webcam: Say Cheese!"),(0,n.kt)("p",null,"The Webcam plugin can now take snapshots and add them to the file dashboard in\nUppy's modal. We have also added Flash support for Safari/IE users. The UI has\nalso been cleaned up in the dashboard. We have temporarily disabled video\nrecording in order to focus on rolling out the snapshot feature."),(0,n.kt)("h2",{id:"under-the-hood-ui-refactors"},"Under the hood: UI refactors"),(0,n.kt)("p",null,"Under the hood, we have made some changes to how the UI is structured. We are\ntaking a more componentized approach. For example, the rendering of Google\nDrive's UI has been separated into multiple smaller components that can be found\nin the ",(0,n.kt)("inlineCode",{parentName:"p"},"plugins/GoogleDrive")," folder."),(0,n.kt)("h2",{id:"release-notes"},"Release Notes"),(0,n.kt)("p",null,"Here is the full list of changes for version 0.9.0.:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'dashboard: informer interface: message when all uploads are "done"\n(',(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"dashboard: improve file paste \u2014 not really possible \u2014 no file names, weird\nAPI, Chrome-only ",(0,n.kt)("a",{parentName:"li",href:"http://stackoverflow.com/a/22940020"},"http://stackoverflow.com/a/22940020"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"meta: add google demo account ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kvz"},"@kvz"),")"),(0,n.kt)("li",{parentName:"ul"},"meta: Set up a Google testing account that people can use to try the demo\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hedgerh"},"@hedgerh"),")"),(0,n.kt)("li",{parentName:"ul"},"meta: write 0.9 release blog post (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hedgerh"},"@hedgerh"),")"),(0,n.kt)("li",{parentName:"ul"},"webcam: a barely working webcam snapshot & upload\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hedgerh"},"@hedgerh"),")"),(0,n.kt)("li",{parentName:"ul"},"metadata: Uppy + tus empty metadata value issue in Safari\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tus/tus-js-client/issues/41"},"https://github.com/tus/tus-js-client/issues/41")," --\x3e tus issue \u2014 nailed down,\npassed to @account (@arturi, @account)"),(0,n.kt)("li",{parentName:"ul"},"core: experiment with switching to ",(0,n.kt)("inlineCode",{parentName:"li"},"virtual-dom")," in a separate branch;\nexperiment with rollup again (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"core: figure out race conditions (animations not completing because file div\ngets re-added to the dom each time) with ",(0,n.kt)("inlineCode",{parentName:"li"},"yo-yo"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"morphdom"),(0,n.kt)("a",{parentName:"li",href:"https://github.com/shama/bel/issues/26#issuecomment-238004130"},"https://github.com/shama/bel/issues/26#issuecomment-238004130"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"core: switch to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/sethvincent/namespace-emitter"},"https://github.com/sethvincent/namespace-emitter")," \u2014 smaller,\nallows for ",(0,n.kt)("inlineCode",{parentName:"li"},"on('*')")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"dashboard: add aria-labels and titles everywhere to improve accessibility #114\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"dashboard: file name + extension should fit on two lines, truncate in the\nmiddle (maybe\n",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/measureText"},"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/measureText"),")\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"dashboard: implement a circular progress indicator on top of the fileItem with\nplay/pause (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"dashboard: refactor to smaller components, as discussed in #110\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"google drive: refactor to smaller components, as discussed in #110\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hedgerh"},"@hedgerh"),")"),(0,n.kt)("li",{parentName:"ul"},"google drive: add demo account (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hedgerh"},"@hedgerh"),")"),(0,n.kt)("li",{parentName:"ul"},"metadata: add labels to fields in fileCard\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"metadata: the aftermath \u2014 better UI (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"test: Get IE6 on Win XP to run Uppy and see it fall back to regular form\nupload #108 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"test: refactor tests, add DragDrop back (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"tus: update uppy to ",(0,n.kt)("inlineCode",{parentName:"li"},"tus-js-client@1.2.1"),", test on requirebin\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"tus: add ability to pause/resume all uploads at once\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")"),(0,n.kt)("li",{parentName:"ul"},"tus: add ability to pause/resume upload (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/arturi"},"@arturi"),")")),(0,n.kt)("p",null,"We hope you will enjoy this latest release. Uppy is still improving every day\nand we hope to bring you more news about our progress soon!"),(0,n.kt)("p",null,"The Uppy Team"))}h.isMDXComponent=!0}}]);