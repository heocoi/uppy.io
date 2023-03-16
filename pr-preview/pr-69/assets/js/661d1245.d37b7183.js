"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5857],{3068:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(814),i=r(3612);const s=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check","prepare":"husky install","format:check":"prettier -c .","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","@uppy/audio":"latest","@uppy/box":"latest","@uppy/core":"latest","@uppy/dashboard":"latest","@uppy/dropbox":"latest","@uppy/google-drive":"latest","@uppy/image-editor":"latest","@uppy/instagram":"latest","@uppy/onedrive":"latest","@uppy/react":"latest","@uppy/remote-sources":"latest","@uppy/screen-capture":"latest","@uppy/tus":"latest","@uppy/unsplash":"latest","@uppy/url":"latest","@uppy/webcam":"latest","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:p}=s;function o(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:s="uppy.min.js"}=e,o=[];n.Children.toArray(t).forEach((e=>{o=[...o,...String(e).trim().split("\n").map((e=>e.trim()))]}));const l=o.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${p}/${s}`,m=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${p}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${l.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(i.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),n.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),n.createElement(a.Z,{language:"html"},m))}},1355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),i=r(4866),s=r(5162),p=r(3068);const o={},l="React",u={unversionedId:"framework-integrations/react",id:"framework-integrations/react",title:"React",description:"React components for the Uppy UI plugins.",source:"@site/docs/framework-integrations/react.mdx",sourceDirName:"framework-integrations",slug:"/framework-integrations/react",permalink:"/uppy.io/pr-preview/pr-69/docs/framework-integrations/react",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/framework-integrations/react.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Angular",permalink:"/uppy.io/pr-preview/pr-69/docs/framework-integrations/angular"},next:{title:"Svelte",permalink:"/uppy.io/pr-preview/pr-69/docs/framework-integrations/svelte"}},m={},d=[{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2}],c={toc:d},k="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react"},"React"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/react"},"React")," components for the Uppy UI plugins."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/react\n"))),(0,a.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/react\n"))),(0,a.kt)(s.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(p.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Box } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Box, {\n          // Options\n        })\n      '))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You also need to install the UI plugin you want to use. For instance,\n",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard"),".")),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/react")," exposes component wrappers for ",(0,a.kt)("inlineCode",{parentName:"p"},"Dashboard"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DragDrop"),", and all\nother UI elements. The components can be used with either ",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/react"},"React")," or\nAPI-compatible alternatives such as ",(0,a.kt)("a",{parentName:"p",href:"https://preactjs.com/"},"Preact"),"."),(0,a.kt)("p",null,"The following plugins are available as React component wrappers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<Dashboard />")," renders ",(0,a.kt)("a",{parentName:"li",href:"/docs/user-interfaces/dashboard"},(0,a.kt)("inlineCode",{parentName:"a"},"@uppy/dashboard"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<DragDrop />")," renders ",(0,a.kt)("a",{parentName:"li",href:"/docs/user-interfaces/drag-drop"},(0,a.kt)("inlineCode",{parentName:"a"},"@uppy/drag-drop"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<ProgressBar />")," renders\n",(0,a.kt)("a",{parentName:"li",href:"/docs/user-interfaces/progress-bar"},(0,a.kt)("inlineCode",{parentName:"a"},"@uppy/progress-bar"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<StatusBar />")," renders ",(0,a.kt)("a",{parentName:"li",href:"/docs/user-interfaces/status-bar"},(0,a.kt)("inlineCode",{parentName:"a"},"@uppy/status-bar")))),(0,a.kt)("p",null,"A couple things to keep in mind when using Uppy with React:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Instead of adding a UI plugin to an Uppy instance with ",(0,a.kt)("inlineCode",{parentName:"li"},".use()"),", the Uppy\ninstance can be passed into components as an ",(0,a.kt)("inlineCode",{parentName:"li"},"uppy")," prop."),(0,a.kt)("li",{parentName:"ul"},"All other props are passed as options to the plugin."),(0,a.kt)("li",{parentName:"ul"},"The Uppy instance ",(0,a.kt)("strong",{parentName:"li"},"should not live inside the component")," but outside of it\n(for class components, it should not be instantiated inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"render()"),"\nmethod)."),(0,a.kt)("li",{parentName:"ul"},"You have to pass the IDs of your ",(0,a.kt)("inlineCode",{parentName:"li"},"use"),"d plugins to the ",(0,a.kt)("inlineCode",{parentName:"li"},"plugins")," array prop so\nDashboard knows it needs to render them."),(0,a.kt)("li",{parentName:"ul"},"An Uppy instance can\u2019t be used by more than one component. Make sure you are\nusing a unique Uppy instance per component.")),(0,a.kt)("p",null,"Here is a basic example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect } from 'react';\nimport Uppy from '@uppy/core';\nimport Webcam from '@uppy/webcam';\nimport { Dashboard } from '@uppy/react';\n\n// Don't forget the CSS: core and the UI components + plugins you are using.\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\nimport '@uppy/webcam/dist/style.min.css';\n\n// Don\u2019t forget to keep the Uppy instance outside of your component.\nconst uppy = new Uppy().use(Webcam);\n\nfunction Component() {\n    return <Dashboard uppy={uppy} plugins={['Webcam']} />;\n}\n")))}y.isMDXComponent=!0}}]);