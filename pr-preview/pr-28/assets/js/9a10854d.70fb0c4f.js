"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2600],{5162:(e,n,o)=>{o.d(n,{Z:()=>i});var t=o(7294),a=o(6010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:o,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:o},n)}},5488:(e,n,o)=>{o.d(n,{Z:()=>m});var t=o(7462),a=o(7294),l=o(6010),i=o(2389),r=o(7392),p=o(7094),s=o(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var n;const{lazy:o,block:i,defaultValue:d,values:m,groupId:h,className:k}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:n,label:o,attributes:t}}=e;return{value:n,label:o,attributes:t}})),v=(0,r.l)(f,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,p.U)(),[C,w]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=h){const e=g[h];null!=e&&e!==C&&f.some((n=>n.value===e))&&w(e)}const F=e=>{const n=e.currentTarget,o=T.indexOf(n),t=f[o].value;t!==C&&(x(n),w(t),null!=h&&N(h,String(t)))},A=e=>{var n;let o=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;o=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;o=T[n]??T[T.length-1];break}}null==(n=o)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},k)},f.map((e=>{let{value:n,label:o,attributes:i}=e;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>T.push(e),onKeyDown:A,onFocus:F,onClick:F},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":C===n})}),o??n)}))),o?(0,a.cloneElement)(b.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function m(e){const n=(0,i.Z)();return a.createElement(d,(0,t.Z)({key:String(n)},e))}},5103:(e,n,o)=>{o.d(n,{Z:()=>r});var t=o(7294),a=o(814),l=o(3612),i=o(143);function r(e){let{children:n,uppyCssName:o="uppy.min.css",uppyJsName:r="uppy.min.js"}=e;const p=(0,i.yW)();console.log(p);let s=[];t.Children.toArray(n).forEach((e=>{s=[...s,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=s.map((e=>`  ${e}`)).join("\n"),c=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v2.9.0/${o}" rel="stylesheet">\n\n\x3c!-- 2. Add JS before the closing \`</body>\` --\x3e\n<script src="https://releases.transloadit.com/uppy/v2.9.0/${r}"><\/script>\n\n\x3c!-- 3. Initialize --\x3e\n<div id="uppy"></div>\n\n<script>\n  var uppy = new Uppy.Core()${u.length>0?`\n\n${u}`:""}\n<\/script>\n`;return t.createElement(t.Fragment,null,t.createElement(l.Z,{type:"caution"},t.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),t.createElement(a.Z,{language:"html"},c))}},4859:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var t=o(7462),a=(o(7294),o(3905)),l=o(5488),i=o(5162),r=o(5103);const p={},s="Facebook",u={unversionedId:"sources/companion-plugins/facebook",id:"sources/companion-plugins/facebook",title:"Facebook",description:"The @uppy/facebook plugin lets users import files from their Facebook account.",source:"@site/docs/sources/companion-plugins/facebook.mdx",sourceDirName:"sources/companion-plugins",slug:"/sources/companion-plugins/facebook",permalink:"/uppy.io/pr-preview/pr-28/docs/sources/companion-plugins/facebook",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/facebook.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dropbox",permalink:"/uppy.io/pr-preview/pr-28/docs/sources/companion-plugins/dropbox"},next:{title:"Google Drive",permalink:"/uppy.io/pr-preview/pr-28/docs/sources/companion-plugins/google-drive"}},c={},d=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}],m={toc:d};function h(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"facebook"},"Facebook"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/facebook")," plugin lets users import files from their ",(0,a.kt)("a",{parentName:"p",href:"https://www.facebook.com"},"Facebook")," account."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in ",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,a.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,a.kt)("p",null,"When you want to let users import files from their ",(0,a.kt)("a",{parentName:"p",href:"https://www.facebook.com"},"Facebook")," account."),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance is required for the Facebook plugin to work.\nCompanion handles authentication with Facebook, downloads the files, and uploads them to the destination.\nThis saves the user bandwidth, especially helpful if they are on a mobile connection."),(0,a.kt)("p",null,"You can self-host Companion or get a hosted version with any ",(0,a.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Transloadit plan"),"."),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/facebook\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/facebook\n"))),(0,a.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(r.Z,{mdxType:"UppyCdnExample"},"\n        uppy.use(Uppy.Facebook, {\n          // Options\n        })\n      "))),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"Using Facebook requires setup in both Uppy and Companion."),(0,a.kt)("h3",{id:"use-in-uppy"},"Use in Uppy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{12-19} showLineNumbers","{12-19}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core'\nimport Dashboard from '@uppy/dashboard'\nimport Facebook from '@uppy/facebook'\n\nimport '@uppy/core/dist/style.min.css'\nimport '@uppy/dashboard/dist/style.min.css'\n\nnew Uppy\n  .use(Dashboard, { inline: true, target: 'body' })\n  // Example of setting all the options to their defaults.\n  // Not passing anything to `Facebook` is therefor the same as the example below.\n  .use(Facebook, {\n    id: 'Facebook',\n    title: 'Facebook',\n    target: null,\n    companionUrl: null,\n    companionHeaders: null,\n    companionAllowedHosts: null,\n  })\n")),(0,a.kt)("h3",{id:"use-in-companion"},"Use in Companion"),(0,a.kt)("p",null,"You can create a Facebook App on the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.facebook.com/"},"Facebook Developers site"),"."),(0,a.kt)("p",null,"The app page has a \u201cRedirect URIs\u201d field. Here, add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://$YOUR_COMPANION_HOST_NAME/facebook/redirect\n")),(0,a.kt)("p",null,"You can only use the integration with your own account initially.\nMake sure to apply for production status on the app page before you publish your app, or your users will not be able to sign in!"),(0,a.kt)("p",null,"Configure the Facebook key and secret. With the standalone Companion server, specify environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'export COMPANION_FACEBOOK_KEY="Facebook API key"\nexport COMPANION_FACEBOOK_SECRET="Facebook API secret"\n')),(0,a.kt)("p",null,"When using the Companion Node.js API, configure these options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"companion.app({\n  providerOptions: {\n    facebook: {\n      key: 'Facebook API key',\n      secret: 'Facebook API secret',\n    },\n  },\n})\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("h4",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")),(0,a.kt)("p",null,"A unique identifier for this plugin (",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'Facebook'"),")."),(0,a.kt)("h4",{id:"title"},(0,a.kt)("inlineCode",{parentName:"h4"},"title")),(0,a.kt)("p",null,"Title / name shown in the UI, such as Dashboard tabs (",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'Facebook'"),")."),(0,a.kt)("h4",{id:"target"},(0,a.kt)("inlineCode",{parentName:"h4"},"target")),(0,a.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into (",(0,a.kt)("inlineCode",{parentName:"p"},"String")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,a.kt)("h4",{id:"companionurl"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,a.kt)("p",null,"URL to a ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,a.kt)("h4",{id:"companionheaders"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,a.kt)("p",null,"Custom headers that should be sent along to ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on every request (",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,a.kt)("h4",{id:"companionallowedhosts"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionAllowedHosts")),(0,a.kt)("p",null,"The valid and authorised URL(s) from which OAuth responses should be accepted (",(0,a.kt)("inlineCode",{parentName:"p"},"String")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"companionUrl"),")."),(0,a.kt)("p",null,"This value can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex")," pattern, or an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," of both.\nThis is useful when you have your ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," running on several hosts. Otherwise, the default value should do fine."),(0,a.kt)("h4",{id:"companioncookiesrule"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,a.kt)("p",null,"This option correlates to the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value")," (",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,a.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,a.kt)("h4",{id:"locale"},(0,a.kt)("inlineCode",{parentName:"h4"},"locale")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  strings: {\n    pluginNameFacebook: 'Facebook',\n  },\n}\n")))}h.isMDXComponent=!0}}]);