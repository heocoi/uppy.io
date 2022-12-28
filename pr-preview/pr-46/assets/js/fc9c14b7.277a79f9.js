"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5724],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),d=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:i,values:c,groupId:m,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,s.U)(),[N,w]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=m){const e=y[m];null!=e&&e!==N&&g.some((t=>t.value===e))&&w(e)}const D=e=>{const t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==N&&(C(t),w(a),null!=m&&b(m,String(a)))},T=e=>{let t=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:T,onClick:D},i,{className:(0,l.Z)("tabs__item",u,i?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},3068:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(814),l=n(3612);const i=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","docusaurus":"docusaurus","lint:js":"eslint . --cache ","lint":"run-s --continue-on-error lint:js lint:md","prepare":"husky install","lint:md":"run-s --continue-on-error remark:md remark:mdx","remark:md":"remark docs -qf","remark:mdx":"remark docs -e mdx -u mdx -qf","serve":"docusaurus serve","dev":"docusaurus start","swizzle":"docusaurus swizzle","typecheck":"tsc","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.js":"eslint --fix --cache","*.{css,html,json,js,jsx,ts,tsx,yml}":["prettier --write"],"docs/*.md":["remark -qf --"],"docs/*.mdx":["remark -u mdx -qf --"]},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:o}=i;function s(e){let{children:t,uppyCssName:n="uppy.min.css",uppyJsName:i="uppy.min.js"}=e,s=[];a.Children.toArray(t).forEach((e=>{s=[...s,...String(e).trim().split("\n").map((e=>e.trim()))]}));const d=s.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${o}/${i}`,u=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${o}/${n}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${d.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(l.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),a.createElement(r.Z,{language:"html"},u))}},8500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162),o=n(3068);const s={sidebar_position:2},d="Drag & Drop",p={unversionedId:"user-interfaces/drag-drop",id:"user-interfaces/drag-drop",title:"Drag & Drop",description:"The @uppy/drag-drop plugin renders a drag and drop area for file selection.",source:"@site/docs/user-interfaces/drag-drop.mdx",sourceDirName:"user-interfaces",slug:"/user-interfaces/drag-drop",permalink:"/uppy.io/pr-preview/pr-46/docs/user-interfaces/drag-drop",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/drag-drop.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/uppy.io/pr-preview/pr-46/docs/user-interfaces/dashboard"},next:{title:"Image editor",permalink:"/uppy.io/pr-preview/pr-46/docs/user-interfaces/elements/image-editor"}},u={},c=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>width</code>",id:"width",level:4},{value:"<code>height</code>",id:"height",level:4},{value:"<code>note</code>",id:"note",level:4},{value:"<code>locale</code>",id:"locale",level:4},{value:"<code>onDragOver(event)</code>",id:"ondragoverevent",level:4},{value:"<code>onDragLeave(event)</code>",id:"ondragleaveevent",level:4},{value:"<code>onDrop(event)</code>",id:"ondropevent",level:4}],m={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"drag--drop"},"Drag & Drop"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/drag-drop")," plugin renders a drag and drop area for file selection."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in ",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-drag-drop-gyewzx?file=/src/index.js"},"CodeSandbox"),".")),(0,r.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,r.kt)("p",null,"It can be useful when you only want the local device as a file source, don\u2019t need file previews and a UI for metadata editing,\nor the ",(0,r.kt)("a",{parentName:"p",href:"/docs/dashboard/"},"Dashboard")," is too much. But it can be too minimal too.\nBy default it doesn\u2019t show that a file has been added nor is there a progress bar."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/core @uppy/drag-drop\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/core @uppy/drag-drop\n"))),(0,r.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, DragDrop } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(DragDrop, { target: '#uppy' })\n      "))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Certain ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy#restrictions"},"restrictions")," set in Uppy\u2019s options, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"maxNumberOfFiles")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"allowedFileTypes"),",\naffect the system file picker dialog. If ",(0,r.kt)("inlineCode",{parentName:"p"},"maxNumberOfFiles: 1"),", users will only be able to select one file,\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"allowedFileTypes: ['video/*', '.gif']")," means only videos or gifs (files with ",(0,r.kt)("inlineCode",{parentName:"p"},".gif")," extension) will be selectable.")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core';\nimport DragDrop from '@uppy/drag-drop';\n\n// The `@uppy/drag-drop` plugin includes some basic styles.\n// You can also choose not to use it and provide your own styles instead.\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/drag-drop/dist/style.min.css';\n\n// Example of setting all the options to their defaults.\n// Not passing anything to `DragDrop` is therefor the same as the example below.\nnew Uppy().use(DragDrop, {\n    id: 'DragDrop',\n    target: null,\n    width: '100%',\n    height: '100%',\n    note: null,\n    locale: {\n        strings: { dropHereOr: 'Drop here or %{browse}', browse: 'browse' },\n    },\n});\n")),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("p",null,"A unique identifier for this plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'DragDrop'"),")."),(0,r.kt)("p",null,"Use this if you need to add several DragDrop instances."),(0,r.kt)("h4",{id:"target"},(0,r.kt)("inlineCode",{parentName:"h4"},"target")),(0,r.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into (",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("h4",{id:"width"},(0,r.kt)("inlineCode",{parentName:"h4"},"width")),(0,r.kt)("p",null,"Drag and drop area width (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'100%'"),")."),(0,r.kt)("p",null,"Set in inline CSS, so feel free to use percentage, pixels or other values that you like."),(0,r.kt)("h4",{id:"height"},(0,r.kt)("inlineCode",{parentName:"h4"},"height")),(0,r.kt)("p",null,"Drag and drop area height (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'100%'"),")."),(0,r.kt)("p",null,"Set in inline CSS, so feel free to use percentage, pixels or other values that you like."),(0,r.kt)("h4",{id:"note"},(0,r.kt)("inlineCode",{parentName:"h4"},"note")),(0,r.kt)("p",null,"Optionally, specify a string of text that explains something about the upload for the user (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("p",null,"This is a place to explain any ",(0,r.kt)("inlineCode",{parentName:"p"},"restrictions")," that are put in place. For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"'Images and video only, 2\u20133 files, up to 1 MB'"),"."),(0,r.kt)("h4",{id:"locale"},(0,r.kt)("inlineCode",{parentName:"h4"},"locale")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        // Text to show on the droppable area.\n        // `%{browse}` is replaced with a link that opens the system file selection dialog.\n        dropHereOr: 'Drop here or %{browse}',\n        // Used as the label for the link that opens the system file selection dialog.\n        browse: 'browse',\n    },\n};\n")),(0,r.kt)("h4",{id:"ondragoverevent"},(0,r.kt)("inlineCode",{parentName:"h4"},"onDragOver(event)")),(0,r.kt)("p",null,"Callback for the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragover"},(0,r.kt)("inlineCode",{parentName:"a"},"ondragover"))," event handler."),(0,r.kt)("h4",{id:"ondragleaveevent"},(0,r.kt)("inlineCode",{parentName:"h4"},"onDragLeave(event)")),(0,r.kt)("p",null,"Callback for the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragleave"},(0,r.kt)("inlineCode",{parentName:"a"},"ondragleave"))," event handler."),(0,r.kt)("h4",{id:"ondropevent"},(0,r.kt)("inlineCode",{parentName:"h4"},"onDrop(event)")),(0,r.kt)("p",null,"Callback for the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrop"},(0,r.kt)("inlineCode",{parentName:"a"},"ondrop"))," event handler."))}h.isMDXComponent=!0}}]);