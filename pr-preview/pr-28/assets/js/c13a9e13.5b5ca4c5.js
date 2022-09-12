"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2465],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(s,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),l=a(7294),s=a(6010),o=a(2389),i=a(7392),r=a(7094),u=a(2466);const d="tabList__CuJ",p="tabItem_LNqP";function h(e){var t;const{lazy:a,block:o,defaultValue:h,values:m,groupId:c,className:f}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===h?h:h??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,r.U)(),[w,C]=(0,l.useState)(g),U=[],{blockElementScrollPositionUntilNextRender:B}=(0,u.o5)();if(null!=c){const e=v[c];null!=e&&e!==w&&k.some((t=>t.value===e))&&C(e)}const S=e=>{const t=e.currentTarget,a=U.indexOf(t),n=k[a].value;n!==w&&(B(t),C(n),null!=c&&N(c,String(n)))},T=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=U.indexOf(e.currentTarget)+1;a=U[t]??U[0];break}case"ArrowLeft":{const t=U.indexOf(e.currentTarget)-1;a=U[t]??U[U.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},f)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>U.push(e),onKeyDown:T,onFocus:S,onClick:S},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,l.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return l.createElement(h,(0,n.Z)({key:String(t)},e))}},5103:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(814),s=a(3612),o=a(143);function i(e){let{children:t,uppyCssName:a="uppy.min.css",uppyJsName:i="uppy.min.js"}=e;const r=(0,o.yW)();console.log(r);let u=[];n.Children.toArray(t).forEach((e=>{u=[...u,...String(e).trim().split("\n").map((e=>e.trim()))]}));const d=u.map((e=>`  ${e}`)).join("\n"),p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v2.9.0/${a}" rel="stylesheet">\n\n\x3c!-- 2. Add JS before the closing \`</body>\` --\x3e\n<script src="https://releases.transloadit.com/uppy/v2.9.0/${i}"><\/script>\n\n\x3c!-- 3. Initialize --\x3e\n<div id="uppy"></div>\n\n<script>\n  var uppy = new Uppy.Core()${d.length>0?`\n\n${d}`:""}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(s.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),n.createElement(l.Z,{language:"html"},p))}},1589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var n=a(7462),l=(a(7294),a(3905)),s=a(5488),o=a(5162),i=a(5103);const r={sidebar_position:4},u="Status bar",d={unversionedId:"user-interfaces/elements/status-bar",id:"user-interfaces/elements/status-bar",title:"Status bar",description:"The @uppy/status-bar plugin shows upload progress and speed, estimated time, pre- and post-processing information,",source:"@site/docs/user-interfaces/elements/status-bar.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/status-bar",permalink:"/uppy.io/pr-preview/pr-28/docs/user-interfaces/elements/status-bar",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/status-bar.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Informer",permalink:"/uppy.io/pr-preview/pr-28/docs/user-interfaces/elements/informer"},next:{title:"Progress bar",permalink:"/uppy.io/pr-preview/pr-28/docs/user-interfaces/elements/progress-bar"}},p={},h=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>hideAfterFinish</code>",id:"hideafterfinish",level:4},{value:"<code>showProgressDetails</code>",id:"showprogressdetails",level:4},{value:"<code>hideUploadButton</code>",id:"hideuploadbutton",level:4},{value:"<code>hideRetryButton</code>",id:"hideretrybutton",level:4},{value:"<code>hidePauseResumeButton</code>",id:"hidepauseresumebutton",level:4},{value:"<code>hideCancelButton</code>",id:"hidecancelbutton",level:4},{value:"<code>doneButtonHandler</code>",id:"donebuttonhandler",level:4},{value:"<code>locale</code>",id:"locale",level:4}],m={toc:h};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"status-bar"},"Status bar"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@uppy/status-bar")," plugin shows upload progress and speed, estimated time, pre- and post-processing information,\nand allows users to control (pause/resume/cancel) the upload."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Try it out together with ",(0,l.kt)("a",{parentName:"p",href:"/docs/user-interfaces/drag-drop"},(0,l.kt)("inlineCode",{parentName:"a"},"@uppy/drag-drop")),"\nin ",(0,l.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-drag-drop-gyewzx?file=/src/index.js"},"CodeSandbox"))),(0,l.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,l.kt)("p",null,"When you use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," it\u2019s already included by default.\nThis plugin is published separately but made specifically for the Dashboard.\nYou can still use it without it but it may need some (CSS) tweaking for your use case."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/status-bar\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/status-bar\n"))),(0,l.kt)(o.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,l.kt)(i.Z,{mdxType:"UppyCdnExample"},"uppy.use(Uppy.StatusBar, { target: '#status-bar' })"))),(0,l.kt)("h2",{id:"use"},"Use"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core'\nimport StatusBar from '@uppy/status-bar'\n\n// The `@uppy/status-bar` plugin includes some basic styles.\n// You can also choose not to use it and provide your own styles instead.\nimport '@uppy/core/dist/style.min.css'\nimport '@uppy/status-bar/dist/style.min.css'\n\n// Example of setting all the options to their defaults.\n// Not passing anything to `StatusBar` is therefor the same as the example below.\nnew Uppy().use(StatusBar, {\n  id: 'StatusBar',\n  target: null,\n})\n")),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(StatusBar, {\n  id: 'StatusBar',\n  target: 'body',\n  hideAfterFinish: true,\n  showProgressDetails: false,\n  hideUploadButton: false,\n  hideRetryButton: false,\n  hidePauseResumeButton: false,\n  hideCancelButton: false,\n  doneButtonHandler: null,\n  locale: {},\n})\n")),(0,l.kt)("h4",{id:"id"},(0,l.kt)("inlineCode",{parentName:"h4"},"id")),(0,l.kt)("p",null,"A unique identifier for this Status Bar (",(0,l.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"'StatusBar'"),"). "),(0,l.kt)("p",null,"Use this if you need to add several StatusBar instances."),(0,l.kt)("h4",{id:"target"},(0,l.kt)("inlineCode",{parentName:"h4"},"target")),(0,l.kt)("p",null,"DOM element, CSS selector, or plugin to mount the Status Bar into (",(0,l.kt)("inlineCode",{parentName:"p"},"Element"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"UIPlugin"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"'body'"),")."),(0,l.kt)("h4",{id:"hideafterfinish"},(0,l.kt)("inlineCode",{parentName:"h4"},"hideAfterFinish")),(0,l.kt)("p",null,"Hide the Status Bar after the upload is complete (",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,l.kt)("h4",{id:"showprogressdetails"},(0,l.kt)("inlineCode",{parentName:"h4"},"showProgressDetails")),(0,l.kt)("p",null,"Display remaining upload size and estimated time (",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"false"),": Uploading: 45%"),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"true"),": Uploading: 45%\u30fb43 MB of 101 MB\u30fb8s left")),(0,l.kt)("h4",{id:"hideuploadbutton"},(0,l.kt)("inlineCode",{parentName:"h4"},"hideUploadButton")),(0,l.kt)("p",null,"Hide the upload button (",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,l.kt)("p",null,"Use this if you are providing a custom upload button somewhere, and using the ",(0,l.kt)("inlineCode",{parentName:"p"},"uppy.upload()")," API."),(0,l.kt)("h4",{id:"hideretrybutton"},(0,l.kt)("inlineCode",{parentName:"h4"},"hideRetryButton")),(0,l.kt)("p",null,"Hide the retry button (",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,l.kt)("p",null,"Use this if you are providing a custom retry button somewhere, and using the ",(0,l.kt)("inlineCode",{parentName:"p"},"uppy.retryAll()")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"uppy.retryUpload(fileID)")," API."),(0,l.kt)("h4",{id:"hidepauseresumebutton"},(0,l.kt)("inlineCode",{parentName:"h4"},"hidePauseResumeButton")),(0,l.kt)("p",null,"Hide pause/resume buttons (for resumable uploads, via ",(0,l.kt)("a",{parentName:"p",href:"http://tus.io"},"tus"),", for example) (",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,l.kt)("p",null,"Use this if you are providing custom cancel or pause/resume buttons somewhere, and using the ",(0,l.kt)("inlineCode",{parentName:"p"},"uppy.pauseResume(fileID)")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"uppy.removeFile(fileID)")," API."),(0,l.kt)("h4",{id:"hidecancelbutton"},(0,l.kt)("inlineCode",{parentName:"h4"},"hideCancelButton")),(0,l.kt)("p",null,"Hide the cancel button (",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,l.kt)("p",null,"Use this if you are providing a custom retry button somewhere, and using the ",(0,l.kt)("inlineCode",{parentName:"p"},"uppy.cancelAll()")," API."),(0,l.kt)("h4",{id:"donebuttonhandler"},(0,l.kt)("inlineCode",{parentName:"h4"},"doneButtonHandler")),(0,l.kt)("p",null,"Status Bar will render a \u201cDone\u201d button in place of pause/resume/cancel buttons, once the upload/encoding is done (",(0,l.kt)("inlineCode",{parentName:"p"},"Function"),", default: ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,l.kt)("p",null,"The behaviour of this \u201cDone\u201d button is defined by the handler function \u2014 can be used to close file picker modals or clear the upload state.\nThis is what the Dashboard plugin, which uses Status Bar internally, sets:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const doneButtonHandler = () => {\n  this.uppy.reset()\n  this.requestCloseModal()\n}\n")),(0,l.kt)("h4",{id:"locale"},(0,l.kt)("inlineCode",{parentName:"h4"},"locale")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  strings: {\n    // Shown in the status bar while files are being uploaded.\n    uploading: 'Uploading',\n    // Shown in the status bar once all files have been uploaded.\n    complete: 'Complete',\n    // Shown in the status bar if an upload failed.\n    uploadFailed: 'Upload failed',\n    // Shown in the status bar while the upload is paused.\n    paused: 'Paused',\n    // Used as the label for the button that retries an upload.\n    retry: 'Retry',\n    // Used as the label for the button that cancels an upload.\n    cancel: 'Cancel',\n    // Used as the label for the button that pauses an upload.\n    pause: 'Pause',\n    // Used as the label for the button that resumes an upload.\n    resume: 'Resume',\n    // Used as the label for the button that resets the upload state after an upload\n    done: 'Done',\n    // When `showProgressDetails` is set, shows the number of files that have been fully uploaded so far.\n    filesUploadedOfTotal: {\n      0: '%{complete} of %{smart_count} file uploaded',\n      1: '%{complete} of %{smart_count} files uploaded',\n    },\n    // When `showProgressDetails` is set, shows the amount of bytes that have been uploaded so far.\n    dataUploadedOfTotal: '%{complete} of %{total}',\n    // When `showProgressDetails` is set, shows an estimation of how long the upload will take to complete.\n    xTimeLeft: '%{time} left',\n    // Used as the label for the button that starts an upload.\n    uploadXFiles: {\n      0: 'Upload %{smart_count} file',\n      1: 'Upload %{smart_count} files',\n    },\n    // Used as the label for the button that starts an upload, if another upload has been started in the past\n    // and new files were added later.\n    uploadXNewFiles: {\n      0: 'Upload +%{smart_count} file',\n      1: 'Upload +%{smart_count} files',\n    },\n    upload: 'Upload',\n    retryUpload: 'Retry upload',\n    xMoreFilesAdded: {\n      0: '%{smart_count} more file added',\n      1: '%{smart_count} more files added',\n    },\n    showErrorDetails: 'Show error details',\n  },\n}\n")))}c.isMDXComponent=!0}}]);