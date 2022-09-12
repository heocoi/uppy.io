"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7435],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),i=a(7294),o=a(6010),r=a(2389),l=a(7392),s=a(7094),p=a(2466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:a,block:r,defaultValue:c,values:m,groupId:h,className:k}=e,b=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,l.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,C]=(0,i.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&f.some((t=>t.value===e))&&C(e)}const S=e=>{const t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==N&&(x(t),C(n),null!=h&&w(h,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},k)},f.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:I,onFocus:S,onClick:S},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,i.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,r.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},5103:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),i=a(814),o=a(3612),r=a(143);function l(e){let{children:t,uppyCssName:a="uppy.min.css",uppyJsName:l="uppy.min.js"}=e;const s=(0,r.yW)();console.log(s);let p=[];n.Children.toArray(t).forEach((e=>{p=[...p,...String(e).trim().split("\n").map((e=>e.trim()))]}));const d=p.map((e=>`  ${e}`)).join("\n"),u=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v2.9.0/${a}" rel="stylesheet">\n\n\x3c!-- 2. Add JS before the closing \`</body>\` --\x3e\n<script src="https://releases.transloadit.com/uppy/v2.9.0/${l}"><\/script>\n\n\x3c!-- 3. Initialize --\x3e\n<div id="uppy"></div>\n\n<script>\n  var uppy = new Uppy.Core()${d.length>0?`\n\n${d}`:""}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(o.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),n.createElement(i.Z,{language:"html"},u))}},828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),o=a(5488),r=a(5162),l=a(5103);const s={sidebar_position:1},p="Webcam",d={unversionedId:"sources/webcam",id:"sources/webcam",title:"Webcam",description:"The @uppy/webcam plugin lets you take photos and record videos with a built-in camera on desktop and mobile devices.",source:"@site/docs/sources/webcam.mdx",sourceDirName:"sources",slug:"/sources/webcam",permalink:"/uppy.io/pr-preview/pr-28/docs/sources/webcam",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/webcam.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Progress bar",permalink:"/uppy.io/pr-preview/pr-28/docs/user-interfaces/elements/progress-bar"},next:{title:"Screen capture",permalink:"/uppy.io/pr-preview/pr-28/docs/sources/screen-capture"}},u={},c=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>countdown</code>",id:"countdown",level:4},{value:"<code>onBeforeSnapshot</code>",id:"onbeforesnapshot",level:4},{value:"<code>modes</code>",id:"modes",level:4},{value:"<code>mirror</code>",id:"mirror",level:4},{value:"<code>videoConstraints</code>",id:"videoconstraints",level:4},{value:"<code>showVideoSourceDropdown</code>",id:"showvideosourcedropdown",level:4},{value:"<code>showRecordingLength</code>",id:"showrecordinglength",level:4},{value:"<code>preferredVideoMimeType</code>",id:"preferredvideomimetype",level:4},{value:"<code>preferredImageMimeType</code>",id:"preferredimagemimetype",level:4},{value:"<code>mobileNativeCamera</code>",id:"mobilenativecamera",level:4},{value:"<code>locale</code>",id:"locale",level:4}],m={toc:c};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"webcam"},"Webcam"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@uppy/webcam")," plugin lets you take photos and record videos with a built-in camera on desktop and mobile devices."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in ",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,i.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,i.kt)("p",null,"When you want your users to able to use their camera.\nThis plugin is published separately but made specifically for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard"),".\nYou can technically use it without it, but it\u2019s not officially supported."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/webcam\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/webcam\n"))),(0,i.kt)(r.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"UppyCdnExample"},"\n        uppy.use(Uppy.Dashboard, { inline: true, target: 'body' })\n        uppy.use(Uppy.Webcam, { target: Uppy.Dashboard })\n      "))),(0,i.kt)("h2",{id:"use"},"Use"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To use the Webcam plugin in Chrome, ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2015/10/chrome-47-webrtc#public_service_announcements"},"your site must be served over https"),". This restriction does not apply on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),", so you don\u2019t have to jump through many hoops during development.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core'\nimport Dashboard from '@uppy/dashboard'\nimport Webcam from '@uppy/webcam'\n\nimport '@uppy/core/dist/style.min.css'\nimport '@uppy/dashboard/dist/style.min.css'\nimport '@uppy/webcam/dist/style.min.css'\n\nnew Uppy\n  .use(Dashboard, { inline: true, target: 'body' })\n  // Example of setting all the options to their defaults.\n  // Not passing anything to `Webcam` is therefor the same as the example below.\n  .use(Webcam, {\n    onBeforeSnapshot: () => Promise.resolve(),\n    countdown: false,\n    modes: [\n      'video-audio',\n      'video-only',\n      'audio-only',\n      'picture',\n    ],\n    mirror: true,\n    videoConstraints: {\n      facingMode: 'user',\n      width: { min: 720, ideal: 1280, max: 1920 },\n      height: { min: 480, ideal: 800, max: 1080 },\n    },\n    showRecordingLength: false,\n    preferredVideoMimeType: null,\n    preferredImageMimeType: null,\n    mobileNativeCamera: isMobile(),\n    locale: {},\n  })\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("h4",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")),(0,i.kt)("p",null,"A unique identifier for this plugin (",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'Webcam'"),")."),(0,i.kt)("h4",{id:"target"},(0,i.kt)("inlineCode",{parentName:"h4"},"target")),(0,i.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into (",(0,i.kt)("inlineCode",{parentName:"p"},"String")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,i.kt)("h4",{id:"countdown"},(0,i.kt)("inlineCode",{parentName:"h4"},"countdown")),(0,i.kt)("p",null,"When taking a picture: the amount of seconds to wait before actually taking a snapshot (",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,i.kt)("p",null,"If set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," or 0, the snapshot is taken right away.\nThis also shows a ",(0,i.kt)("inlineCode",{parentName:"p"},"Smile!")," message through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/informer"},"Informer")," before the picture is taken."),(0,i.kt)("h4",{id:"onbeforesnapshot"},(0,i.kt)("inlineCode",{parentName:"h4"},"onBeforeSnapshot")),(0,i.kt)("p",null,"A hook function to call before a snapshot is taken (",(0,i.kt)("inlineCode",{parentName:"p"},"Function"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.resolve"),")."),(0,i.kt)("p",null,"The Webcam plugin will wait for the returned Promise to resolve before taking the snapshot.\nThis can be used to carry out variations on the ",(0,i.kt)("inlineCode",{parentName:"p"},"countdown")," option for example."),(0,i.kt)("h4",{id:"modes"},(0,i.kt)("inlineCode",{parentName:"h4"},"modes")),(0,i.kt)("p",null,"The types of recording modes to allow (",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"video-audio")," - Record a video file, capturing both audio and video."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"video-only")," - Record a video file with the webcam, but don\u2019t record audio."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"audio-only")," - Record an audio file with the user\u2019s microphone."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"picture")," - Take a picture with the webcam.")),(0,i.kt)("p",null,"By default, all modes are allowed, and the Webcam plugin will show controls for recording video as well as taking pictures."),(0,i.kt)("h4",{id:"mirror"},(0,i.kt)("inlineCode",{parentName:"h4"},"mirror")),(0,i.kt)("p",null,"Configures whether to mirror preview image from the camera (",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,i.kt)("p",null,"This option is useful when taking a selfie with a front camera: when you wave your right hand,\nyou will see your hand on the right on the preview screen, like in the mirror.\nBut when you actually take a picture, it will not be mirrored. This is how smartphone selfie cameras behave."),(0,i.kt)("h4",{id:"videoconstraints"},(0,i.kt)("inlineCode",{parentName:"h4"},"videoConstraints")),(0,i.kt)("p",null,"Configure the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#Properties_of_video_tracks"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaTrackConstraints"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,i.kt)("p",null,"You can specify acceptable ranges for the resolution of the video stream using the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/aspectRatio"},(0,i.kt)("inlineCode",{parentName:"a"},"aspectRatio")),", ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/width"},(0,i.kt)("inlineCode",{parentName:"a"},"width")),", and ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/height"},(0,i.kt)("inlineCode",{parentName:"a"},"height"))," properties. Each property takes an object with ",(0,i.kt)("inlineCode",{parentName:"p"},"{ min, ideal, max }")," properties. For example, use ",(0,i.kt)("inlineCode",{parentName:"p"},"width: { min: 720, max: 1920, ideal: 1920 }")," to allow any width between 720 and 1920 pixels wide, while preferring the highest resolution."),(0,i.kt)("p",null,"Devices sometimes have several cameras, front and back, for example. ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/facingMode"},(0,i.kt)("inlineCode",{parentName:"a"},"facingMode"))," lets you specify which should be used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user"),": The video source is facing toward the user; this includes, for example, the front-facing camera on a smartphone."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"environment"),":  The video source is facing away from the user, thereby viewing their environment. This is the back camera on a smartphone."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"left"),": The video source is facing toward the user but to their left, such as a camera aimed toward the user but over their left shoulder."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"right"),": The video source is facing toward the user but to their right, such as a camera aimed toward the user but over their right shoulder.")),(0,i.kt)("p",null,"For a full list of available properties, check out MDN documentation for ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#Properties_of_video_tracks"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaTrackConstraints")),"."),(0,i.kt)("h4",{id:"showvideosourcedropdown"},(0,i.kt)("inlineCode",{parentName:"h4"},"showVideoSourceDropdown")),(0,i.kt)("p",null,"Configures whether to show a dropdown which enables to choose the video device to use (",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,i.kt)("p",null,"This option will have priority over ",(0,i.kt)("inlineCode",{parentName:"p"},"facingMode")," if enabled."),(0,i.kt)("h4",{id:"showrecordinglength"},(0,i.kt)("inlineCode",{parentName:"h4"},"showRecordingLength")),(0,i.kt)("p",null,"Configures whether to show the length of the recording while the recording is in progress (",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,i.kt)("h4",{id:"preferredvideomimetype"},(0,i.kt)("inlineCode",{parentName:"h4"},"preferredVideoMimeType")),(0,i.kt)("p",null,"Set the preferred mime type for video recordings, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"'video/webm'")," (",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,i.kt)("p",null,"If the browser supports the given mime type, the video will be recorded in this format.\nIf the browser does not support it, it will use the browser default.\nIf no preferred video mime type is given, the Webcam plugin will prefer types listed in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy/#restrictions"},(0,i.kt)("inlineCode",{parentName:"a"},"allowedFileTypes")," restriction"),", if any."),(0,i.kt)("h4",{id:"preferredimagemimetype"},(0,i.kt)("inlineCode",{parentName:"h4"},"preferredImageMimeType")),(0,i.kt)("p",null,"Set the preferred mime type for images, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"'image/png'")," (",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"image/jpeg"),"). "),(0,i.kt)("p",null,"If the browser supports rendering the given mime type, the image will be stored in this format.\nElse ",(0,i.kt)("inlineCode",{parentName:"p"},"image/jpeg")," is used by default.\nIf no preferred image mime type is given, the Webcam plugin will prefer types listed in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy/#restrictions"},(0,i.kt)("inlineCode",{parentName:"a"},"allowedFileTypes")," restriction"),", if any."),(0,i.kt)("h4",{id:"mobilenativecamera"},(0,i.kt)("inlineCode",{parentName:"h4"},"mobileNativeCamera")),(0,i.kt)("p",null,"Replaces Uppy\u2019s custom camera UI on mobile and tablet with the native device camera (",(0,i.kt)("inlineCode",{parentName:"p"},"Function: boolean")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"isMobile()"),")."),(0,i.kt)("p",null,"This will show the \u201cTake Picture\u201d and / or \u201cRecord Video\u201d buttons, which ones show depends on the ",(0,i.kt)("a",{parentName:"p",href:"#modes"},(0,i.kt)("inlineCode",{parentName:"a"},"modes"))," option."),(0,i.kt)("p",null,"You can set a boolean to forcefully enable / disable this feature,\nor a function which returns a boolean. By default we use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/juliangruber/is-mobile"},(0,i.kt)("inlineCode",{parentName:"a"},"is-mobile"))," package."),(0,i.kt)("h4",{id:"locale"},(0,i.kt)("inlineCode",{parentName:"h4"},"locale")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  strings: {\n    pluginNameCamera: 'Camera',\n    noCameraTitle: 'Camera Not Available',\n    noCameraDescription: 'In order to take pictures or record video, please connect a camera device',\n    recordingStoppedMaxSize: 'Recording stopped because the file size is about to exceed the limit',\n    submitRecordedFile: 'Submit recorded file',\n    discardRecordedFile: 'Discard recorded file',\n    // Shown before a picture is taken when the `countdown` option is set.\n    smile: 'Smile!',\n    // Used as the label for the button that takes a picture.\n    // This is not visibly rendered but is picked up by screen readers.\n    takePicture: 'Take a picture',\n    // Used as the label for the button that starts a video recording.\n    // This is not visibly rendered but is picked up by screen readers.\n    startRecording: 'Begin video recording',\n    // Used as the label for the button that stops a video recording.\n    // This is not visibly rendered but is picked up by screen readers.\n    stopRecording: 'Stop video recording',\n    // Used as the label for the recording length counter. See the showRecordingLength option.\n    // This is not visibly rendered but is picked up by screen readers.\n    recordingLength: 'Recording length %{recording_length}',\n    // Title on the \u201callow access\u201d screen\n    allowAccessTitle: 'Please allow access to your camera',\n    // Description on the \u201callow access\u201d screen\n    allowAccessDescription: 'In order to take pictures or record video with your camera, please allow camera access for this site.',\n  },\n}\n")))}h.isMDXComponent=!0}}]);