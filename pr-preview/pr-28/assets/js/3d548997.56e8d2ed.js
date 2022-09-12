"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5356],{5162:(e,n,a)=>{a.d(n,{Z:()=>s});var t=a(7294),l=a(6010);const o="tabItem_Ymn6";function s(e){let{children:n,hidden:a,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,s),hidden:a},n)}},5488:(e,n,a)=>{a.d(n,{Z:()=>m});var t=a(7462),l=a(7294),o=a(6010),s=a(2389),i=a(7392),p=a(7094),r=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var n;const{lazy:a,block:s,defaultValue:c,values:m,groupId:h,className:k}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??v.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),y=(0,i.l)(f,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=(0,p.U)(),[C,U]=(0,l.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,r.o5)();if(null!=h){const e=N[h];null!=e&&e!==C&&f.some((n=>n.value===e))&&U(e)}const x=e=>{const n=e.currentTarget,a=w.indexOf(n),t=f[a].value;t!==C&&(T(n),U(t),null!=h&&b(h,String(t)))},A=e=>{var n;let a=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;a=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;a=w[n]??w[w.length-1];break}}null==(n=a)||n.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},k)},f.map((e=>{let{value:n,label:a,attributes:s}=e;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>w.push(e),onKeyDown:A,onFocus:x,onClick:x},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":C===n})}),a??n)}))),a?(0,l.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function m(e){const n=(0,s.Z)();return l.createElement(c,(0,t.Z)({key:String(n)},e))}},5103:(e,n,a)=>{a.d(n,{Z:()=>i});var t=a(7294),l=a(814),o=a(3612),s=a(143);function i(e){let{children:n,uppyCssName:a="uppy.min.css",uppyJsName:i="uppy.min.js"}=e;const p=(0,s.yW)();console.log(p);let r=[];t.Children.toArray(n).forEach((e=>{r=[...r,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=r.map((e=>`  ${e}`)).join("\n"),d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v2.9.0/${a}" rel="stylesheet">\n\n\x3c!-- 2. Add JS before the closing \`</body>\` --\x3e\n<script src="https://releases.transloadit.com/uppy/v2.9.0/${i}"><\/script>\n\n\x3c!-- 3. Initialize --\x3e\n<div id="uppy"></div>\n\n<script>\n  var uppy = new Uppy.Core()${u.length>0?`\n\n${u}`:""}\n<\/script>\n`;return t.createElement(t.Fragment,null,t.createElement(o.Z,{type:"caution"},t.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),t.createElement(l.Z,{language:"html"},d))}},4852:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>c});var t=a(7462),l=(a(7294),a(3905)),o=a(5488),s=a(5162),i=a(5103);const p={},r="Unsplash",u={unversionedId:"sources/companion-plugins/unsplash",id:"sources/companion-plugins/unsplash",title:"Unsplash",description:"The @uppy/unsplash plugin lets users import files from their Unsplash account.",source:"@site/docs/sources/companion-plugins/unsplash.mdx",sourceDirName:"sources/companion-plugins",slug:"/sources/companion-plugins/unsplash",permalink:"/uppy.io/pr-preview/pr-28/docs/sources/companion-plugins/unsplash",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/unsplash.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OneDrive",permalink:"/uppy.io/pr-preview/pr-28/docs/sources/companion-plugins/onedrive"},next:{title:"Import from URL",permalink:"/uppy.io/pr-preview/pr-28/docs/sources/companion-plugins/url"}},d={},c=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}],m={toc:c};function h(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"unsplash"},"Unsplash"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@uppy/unsplash")," plugin lets users import files from their ",(0,l.kt)("a",{parentName:"p",href:"https://unsplash.com"},"Unsplash")," account."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in ",(0,l.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,l.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,l.kt)("p",null,"When you want to let users import files from their ",(0,l.kt)("a",{parentName:"p",href:"https://unsplash.com"},"Unsplash")," account."),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance is required for the Unsplash plugin to work.\nCompanion handles authentication with Unsplash, downloads the files, and uploads them to the destination.\nThis saves the user bandwidth, especially helpful if they are on a mobile connection."),(0,l.kt)("p",null,"You can self-host Companion or get a hosted version with any ",(0,l.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Transloadit plan"),"."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/unsplash\n"))),(0,l.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/unsplash\n"))),(0,l.kt)(s.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,l.kt)(i.Z,{mdxType:"UppyCdnExample"},"\n        uppy.use(Uppy.Unsplash, {\n          // Options\n        })\n      "))),(0,l.kt)("h2",{id:"use"},"Use"),(0,l.kt)("p",null,"Using Unsplash requires setup in both Uppy and Companion."),(0,l.kt)("h3",{id:"use-in-uppy"},"Use in Uppy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"{12-19} showLineNumbers","{12-19}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core'\nimport Dashboard from '@uppy/dashboard'\nimport Unsplash from '@uppy/unsplash'\n\nimport '@uppy/core/dist/style.min.css'\nimport '@uppy/dashboard/dist/style.min.css'\n\nnew Uppy\n  .use(Dashboard, { inline: true, target: 'body' })\n  // Example of setting all the options to their defaults.\n  // Not passing anything to `Unsplash` is therefor the same as the example below.\n  .use(Unsplash, {\n    id: 'Unsplash',\n    title: 'Unsplash',\n    target: null,\n    companionUrl: null,\n    companionHeaders: null,\n    companionAllowedHosts: null,\n  })\n")),(0,l.kt)("h3",{id:"use-in-companion"},"Use in Companion"),(0,l.kt)("p",null,"You can create a Unsplash App on the ",(0,l.kt)("a",{parentName:"p",href:"https://unsplash.com/developers"},"Unsplash Developers site"),".\nYou\u2019ll be redirected to the app page, this page lists the app key and app secret."),(0,l.kt)("p",null,"Configure the Unsplash key and secret. With the standalone Companion server, specify environment variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'export COMPANION_UNSPLASH_KEY="Unsplash API key"\nexport COMPANION_UNSPLASH_SECRET="Unsplash API secret"\n')),(0,l.kt)("p",null,"When using the Companion Node.js API, configure these options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"companion.app({\n  providerOptions: {\n    unsplash: {\n      key: 'Unsplash API key',\n      secret: 'Unsplash API secret',\n    },\n  },\n})\n")),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("h4",{id:"id"},(0,l.kt)("inlineCode",{parentName:"h4"},"id")),(0,l.kt)("p",null,"A unique identifier for this plugin (",(0,l.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"'Unsplash'"),")."),(0,l.kt)("h4",{id:"title"},(0,l.kt)("inlineCode",{parentName:"h4"},"title")),(0,l.kt)("p",null,"Title / name shown in the UI, such as Dashboard tabs (",(0,l.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"'Unsplash'"),")."),(0,l.kt)("h4",{id:"target"},(0,l.kt)("inlineCode",{parentName:"h4"},"target")),(0,l.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into (",(0,l.kt)("inlineCode",{parentName:"p"},"String")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,l.kt)("h4",{id:"companionurl"},(0,l.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,l.kt)("p",null,"URL to a ",(0,l.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,l.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,l.kt)("h4",{id:"companionheaders"},(0,l.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,l.kt)("p",null,"Custom headers that should be sent along to ",(0,l.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on every request (",(0,l.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,l.kt)("h4",{id:"companionallowedhosts"},(0,l.kt)("inlineCode",{parentName:"h4"},"companionAllowedHosts")),(0,l.kt)("p",null,"The valid and authorised URL(s) from which OAuth responses should be accepted (",(0,l.kt)("inlineCode",{parentName:"p"},"String")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Regex")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"companionUrl"),")."),(0,l.kt)("p",null,"This value can be a ",(0,l.kt)("inlineCode",{parentName:"p"},"String"),", a ",(0,l.kt)("inlineCode",{parentName:"p"},"Regex")," pattern, or an ",(0,l.kt)("inlineCode",{parentName:"p"},"Array")," of both.\nThis is useful when you have your ",(0,l.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," running on several hosts. Otherwise, the default value should do fine."),(0,l.kt)("h4",{id:"companioncookiesrule"},(0,l.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,l.kt)("p",null,"This option correlates to the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value")," (",(0,l.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,l.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,l.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,l.kt)("h4",{id:"locale"},(0,l.kt)("inlineCode",{parentName:"h4"},"locale")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  strings: {\n    pluginNameUnsplash: 'Unsplash',\n  },\n}\n")))}h.isMDXComponent=!0}}]);