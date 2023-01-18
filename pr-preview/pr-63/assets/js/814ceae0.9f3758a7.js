"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[747],{5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),o=n(7294),i=n(6010),r=n(2389),s=n(7392),l=n(7094),p=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:r,values:m,groupId:c,className:h}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===r?r:r??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=(0,l.U)(),[w,v]=(0,o.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=c){const e=N[c];null!=e&&e!==w&&g.some((t=>t.value===e))&&v(e)}const x=e=>{const t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==w&&(S(t),v(a),null!=c&&b(c,String(a)))},T=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:T,onClick:x},r,{className:(0,i.Z)("tabs__item",u,r?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,r.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},3068:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(814),i=n(3612);const r=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:s}=r;function l(e){let{children:t,uppyCssName:n="uppy.min.css",uppyJsName:r="uppy.min.js"}=e,l=[];a.Children.toArray(t).forEach((e=>{l=[...l,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=l.map((e=>`  ${e}`)).join("\n"),d=`https://releases.transloadit.com/uppy/v${s}/${r}`,u=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${s}/${n}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,d)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(i.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(o.Z,{language:"html"},u))}},1584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(7462),o=(n(7294),n(3905)),i=n(5488),r=n(5162),s=n(3068);const l={sidebar_position:3},p="AWS S3",d={unversionedId:"uploader/aws-s3",id:"uploader/aws-s3",title:"AWS S3",description:"The @uppy/aws-s3 plugin can be used to upload files directly to a S3 bucket or",source:"@site/docs/uploader/aws-s3.mdx",sourceDirName:"uploader",slug:"/uploader/aws-s3",permalink:"/uppy.io/pr-preview/pr-63/docs/uploader/aws-s3",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/uploader/aws-s3.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tus",permalink:"/uppy.io/pr-preview/pr-63/docs/uploader/tus"},next:{title:"AWS S3 Multipart",permalink:"/uppy.io/pr-preview/pr-63/docs/uploader/aws-s3-multipart"}},u={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"With a AWS S3 bucket",id:"with-a-aws-s3-bucket",level:3},{value:"With a DigitalOcean Spaces bucket",id:"with-a-digitalocean-spaces-bucket",level:3},{value:"With a Google Cloud Storage bucket",id:"with-a-google-cloud-storage-bucket",level:3},{value:"Use with your own server",id:"use-with-your-own-server",level:3},{value:"Use with Companion",id:"use-with-companion",level:3},{value:"Options",id:"options",level:2},{value:"<code>id</code>",id:"id",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>allowedMetaFields</code>",id:"allowedmetafields",level:4},{value:"<code>getUploadParameters(file)</code>",id:"getuploadparametersfile",level:4},{value:"<code>timeout</code>",id:"timeout",level:4},{value:"<code>limit</code>",id:"limit",level:4},{value:"<code>getResponseData(responseText, response)</code>",id:"getresponsedataresponsetext-response",level:4},{value:"<code>locale: {}</code>",id:"locale-",level:4},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"How can I generate a presigned URL server-side?",id:"how-can-i-generate-a-presigned-url-server-side",level:3},{value:"How can I retrieve the presigned parameters of the uploaded file?",id:"how-can-i-retrieve-the-presigned-parameters-of-the-uploaded-file",level:3}],c={toc:m};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws-s3"},"AWS S3"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3")," plugin can be used to upload files directly to a S3 bucket or\na S3-compatible provider, such as Google Cloud Storage or DigitalOcean Spaces.\nUploads can be signed using either ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," or a custom\nsigning function."),(0,o.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Not sure which uploader is best for you? Read\n\u201c",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/choosing-uploader"},"Choosing the uploader you need"),"\u201d.")),(0,o.kt)("p",null,"You can use this plugin when you prefer a ",(0,o.kt)("em",{parentName:"p"},"client-to-storage")," over a\n",(0,o.kt)("em",{parentName:"p"},"client-to-server-to-storage")," (such as\n",(0,o.kt)("a",{parentName:"p",href:"/docs/upload-strategies/transloadit"},"Transloadit")," or\n",(0,o.kt)("a",{parentName:"p",href:"/docs/upload-strategies/tus"},"Tus"),") setup. This may in some cases be preferable,\nfor instance, to reduce costs or the complexity of running a server and load\nbalancer with ",(0,o.kt)("a",{parentName:"p",href:"/docs/upload-strategies/tus"},"Tus"),"."),(0,o.kt)("p",null,"This plugin can be used with AWS S3, DigitalOcean Spaces, Google Cloud Storage,\nor any S3-compatible provider. Although all S3-compatible providers are\nsupported, we don\u2019t test against them, this plugin was developed against S3 so a\nsmall risk is involved in using the others."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3")," is best suited for small files and/or lots of files. If you are\nplanning to upload mostly large files (100","\xa0","MB+), consider using\n",(0,o.kt)("a",{parentName:"p",href:"/docs/upload-strategies/aws-s3-multipart"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3-multipart")),"."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/aws-s3\n"))),(0,o.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/aws-s3\n"))),(0,o.kt)(r.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,o.kt)(s.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, AwsS3 } from "{{UPPY_JS_URL}}"\n        new Uppy().use(AwsS3, { /* see options */ })\n      '))),(0,o.kt)("h2",{id:"use"},"Use"),(0,o.kt)("p",null,"A quick overview of the complete API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10} showLineNumbers","{10}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport AwsS3 from '@uppy/aws-s3';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nconst uppy = new Uppy()\n    .use(Dashboard, { inline: true, target: 'body' })\n    .use(AwsS3, { companionUrl: 'http://companion.uppy.io' });\n")),(0,o.kt)("h3",{id:"with-a-aws-s3-bucket"},"With a AWS S3 bucket"),(0,o.kt)("p",null,"To use this plugin with S3 we need to setup a bucket with the right permissions\nand CORS settings."),(0,o.kt)("p",null,"S3 buckets do not allow public uploads for security reasons. To allow Uppy and\nthe browser to upload directly to a bucket, its CORS permissions need to be\nconfigured."),(0,o.kt)("p",null,"CORS permissions can be found in the\n",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/s3/home"},"S3 Management Console"),". Click the\nbucket that will receive the uploads, then go into the ",(0,o.kt)("inlineCode",{parentName:"p"},"Permissions")," tab and\nselect the ",(0,o.kt)("inlineCode",{parentName:"p"},"CORS configuration")," button. A JSON document will be shown that\ndefines the CORS configuration. (AWS used to use XML but now only allow JSON).\nMore information about the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.amazonaws.cn/en_us/AmazonS3/latest/userguide/ManageCorsUsing.html"},"S3 CORS format here"),"."),(0,o.kt)("p",null,"The configuration required for Uppy and Companion is this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "AllowedOrigins": ["https://my-app.com"],\n        "AllowedMethods": ["GET", "POST"],\n        "MaxAgeSeconds": 3000,\n        "AllowedHeaders": [\n            "Authorization",\n            "x-amz-date",\n            "x-amz-content-sha256",\n            "content-type"\n        ]\n    },\n    {\n        "AllowedOrigins": ["*"],\n        "AllowedMethods": ["GET"],\n        "MaxAgeSeconds": 3000\n    }\n]\n')),(0,o.kt)("p",null,"A good practice is to use two CORS rules: one for viewing the uploaded files,\nand one for uploading files. This is done above where the first object in the\narray defines the rules for uploading, and the second for viewing. The example\nabove ",(0,o.kt)("strong",{parentName:"p"},"makes files publically viewable"),". You can change it according to your\nneeds."),(0,o.kt)("p",null,"If you are using an IAM policy to allow access to the S3 bucket, the policy must\nhave at least the ",(0,o.kt)("inlineCode",{parentName:"p"},"s3:PutObject")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"s3:PutObjectAcl")," permissions scoped to the\nbucket in question. In-depth documentation about CORS rules is available on the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html"},"AWS documentation site"),"."),(0,o.kt)("h3",{id:"with-a-digitalocean-spaces-bucket"},"With a DigitalOcean Spaces bucket"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Checkout the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/tree/main/examples/digitalocean-spaces"},"DigitalOcean Spaces example"),"\nin the Uppy repository for a complete, runnable example.")),(0,o.kt)("p",null,"DigitalOcean Spaces is S3-compatible so you only need to change the endpoint and\nbucket. Make sure you have a ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"secret"),". If not, refer to\n\u201c",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-create-a-digitalocean-space-and-api-key"},"How To Create a DigitalOcean Space and API Key"),"\u201d."),(0,o.kt)("p",null,"When using ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," as standalone, you can set these as\nenvironment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export COMPANION_AWS_KEY="xxx"\nexport COMPANION_AWS_SECRET="xxx"\nexport COMPANION_AWS_REGION="us-east-1"\nexport COMPANION_AWS_ENDPOINT="https://{region}.digitaloceanspaces.com"\nexport COMPANION_AWS_BUCKET="my-space-name"\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"{region}")," string will be replaced by the contents of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"COMPANION_AWS_REGION")," environment variable."),(0,o.kt)("p",null,"When using ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," as an Express integration, configure the\n",(0,o.kt)("inlineCode",{parentName:"p"},"s3")," options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const options = {\n    s3: {\n        key: 'xxx',\n        secret: 'xxx',\n        bucket: 'my-space-name',\n        region: 'us-east-1',\n        endpoint: 'https://{region}.digitaloceanspaces.com',\n    },\n};\n")),(0,o.kt)("h3",{id:"with-a-google-cloud-storage-bucket"},"With a Google Cloud Storage bucket"),(0,o.kt)("p",null,"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3")," plugin to be able to upload to a GCS bucket, it needs the\nInteroperability setting enabled. You can enable the Interoperability setting\nand\n",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/migrating#keys"},"generate interoperable storage access keys"),"\nby going to ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/storage"},"Google Cloud Storage")," \xbb\nSettings \xbb Interoperability. Then set the environment variables for Companion\nlike this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export COMPANION_AWS_ENDPOINT="https://storage.googleapis.com"\nexport COMPANION_AWS_BUCKET="YOUR-GCS-BUCKET-NAME"\nexport COMPANION_AWS_KEY="GOOGxxxxxxxxx" # The Access Key\nexport COMPANION_AWS_SECRET="YOUR-GCS-SECRET" # The Secret\n')),(0,o.kt)("p",null,"You do not need to configure the region with GCS."),(0,o.kt)("p",null,"You also need to configure CORS with their HTTP API. If you haven\u2019t done this\nalready, see\n",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/configuring-cors#Configuring-CORS-on-a-Bucket"},"Configuring CORS on a Bucket"),"\nin the GCS documentation, or follow the steps below to do it using Google\u2019s API\nplayground."),(0,o.kt)("p",null,"The JSON format consists of an array of CORS configuration objects. For\ninstance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "cors": [\n        {\n            "origin": ["https://my-app.com"],\n            "method": ["GET", "POST"],\n            "maxAgeSeconds": 3000\n        },\n        {\n            "origin": ["*"],\n            "method": ["GET"],\n            "maxAgeSeconds": 3000\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"When using presigned ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT")," uploads, replace the ",(0,o.kt)("inlineCode",{parentName:"p"},'"POST"')," method by ",(0,o.kt)("inlineCode",{parentName:"p"},'"PUT"')," in\nthe first entry."),(0,o.kt)("p",null,"If you have the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/gsutil"},"gsutil"),"\ncommand-line tool, you can apply this configuration using the\n",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/configuring-cors#configure-cors-bucket"},"gsutil cors"),"\ncommand."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gsutil cors set THAT-FILE.json gs://BUCKET-NAME\n")),(0,o.kt)("p",null,"Otherwise, you can manually apply it through the OAuth playground:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get a temporary API token from the\n",(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/oauthplayground/"},"Google OAuth2.0 playground")),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Cloud Storage JSON API v1")," \xbb ",(0,o.kt)("inlineCode",{parentName:"li"},"devstorage.full_control")," scope"),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorize APIs")," and allow access"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Step 3 - Configure request to API")),(0,o.kt)("li",{parentName:"ol"},"Configure it as follows:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"HTTP Method: PATCH"),(0,o.kt)("li",{parentName:"ol"},"Request URI: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://www.googleapis.com/storage/v1/b/YOUR_BUCKET_NAME")),(0,o.kt)("li",{parentName:"ol"},"Content-Type: application/json (should be the default)"),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"Enter request body")," and input your CORS configuration"))),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"Send the request"),".")),(0,o.kt)("h3",{id:"use-with-your-own-server"},"Use with your own server"),(0,o.kt)("p",null,"The recommended approach is to integrate ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3-multipart")," with your own\nserver. You will need to do the following things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Setup a bucket"),(0,o.kt)("li",{parentName:"ol"},"Create endpoints in your server. You can create them as edge functions (such\nas AWS Lambdas), inside Next.js as an API route, or wherever your server runs",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"POST")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"/uppy/s3"),": get upload parameters"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/blob/main/examples/aws-nodejs/public/index.html"},"Setup Uppy"))),(0,o.kt)("h3",{id:"use-with-companion"},"Use with Companion"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," has S3 routes built-in for a plug-and-play\nexperience with Uppy."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Generally it\u2019s better for access control, observability, and scaling to\nintegrate ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3")," with your own server. You may want to use\n",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," for creating, signing, and completing your S3\nuploads if you already need Companion for remote files (such as from Google\nDrive). Otherwise it\u2019s not worth the hosting effort.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10} showLineNumbers","{10}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport AwsS3 from '@uppy/aws-s3';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nconst uppy = new Uppy.use(Dashboard, { inline: true, target: 'body' }).use(\n    AwsS3,\n    { companionUrl: 'http://companion.uppy.io' },\n);\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3")," plugin has the following configurable options:"),(0,o.kt)("h4",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")),(0,o.kt)("p",null,"A unique identifier for this plugin (",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'AwsS3'"),")."),(0,o.kt)("h4",{id:"companionurl"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,o.kt)("p",null,"Companion instance to use for signing S3 uploads (",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)("h4",{id:"companionheaders"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,o.kt)("p",null,"Custom headers that should be sent along to ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on\nevery request (",(0,o.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,o.kt)("h4",{id:"allowedmetafields"},(0,o.kt)("inlineCode",{parentName:"h4"},"allowedMetaFields")),(0,o.kt)("p",null,"Pass an array of field names to limit the metadata fields that will be added to\nupload as query parameters (",(0,o.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set this to ",(0,o.kt)("inlineCode",{parentName:"li"},"['name']")," to only send the ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," field."),(0,o.kt)("li",{parentName:"ul"},"Set this to ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," (the default) to send ",(0,o.kt)("em",{parentName:"li"},"all")," metadata fields."),(0,o.kt)("li",{parentName:"ul"},"Set this to an empty array ",(0,o.kt)("inlineCode",{parentName:"li"},"[]")," to not send any fields.")),(0,o.kt)("h4",{id:"getuploadparametersfile"},(0,o.kt)("inlineCode",{parentName:"h4"},"getUploadParameters(file)")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When using ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," to sign S3 uploads, do not define this\noption.")),(0,o.kt)("p",null,"A function that returns upload parameters for a file (",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),", default:\n",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)("p",null,"Parameters should be returned as an object, or as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," that fulfills with\nan object, with keys ",(0,o.kt)("inlineCode",{parentName:"p"},"{ method, url, fields, headers }"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"method")," field is the HTTP method to be used for the upload. This should\nbe one of either ",(0,o.kt)("inlineCode",{parentName:"li"},"PUT")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"POST"),", depending on the type of upload used."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"url")," field is the URL to which the upload request will be sent. When\nusing a presigned PUT upload, this should be the URL to the S3 object with\nsigning parameters included in the query string. When using a POST upload with\na policy document, this should be the root URL of the bucket."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"fields")," field is an object with form fields to send along with the upload\nrequest. For presigned PUT uploads, this should be left empty."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"headers")," field is an object with request headers to send along with the\nupload request. When using a presigned PUT upload, it\u2019s a good idea to provide\n",(0,o.kt)("inlineCode",{parentName:"li"},"headers['content-type']"),". That will make sure that the request uses the same\ncontent-type that was used to generate the signature. Without it, the browser\nmay decide on a different content-type instead, causing S3 to reject the\nupload.")),(0,o.kt)("h4",{id:"timeout"},(0,o.kt)("inlineCode",{parentName:"h4"},"timeout")),(0,o.kt)("p",null,"When no upload progress events have been received for this amount of\nmilliseconds, assume the connection has an issue and abort the upload (",(0,o.kt)("inlineCode",{parentName:"p"},"number"),",\ndefault: ",(0,o.kt)("inlineCode",{parentName:"p"},"30_000"),")."),(0,o.kt)("p",null,"This is passed through to ",(0,o.kt)("a",{parentName:"p",href:"/docs/xhrupload#timeout-30-1000"},"XHRUpload"),"; see its\ndocumentation page for details. Set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to disable this check."),(0,o.kt)("h4",{id:"limit"},(0,o.kt)("inlineCode",{parentName:"h4"},"limit")),(0,o.kt)("p",null,"Limit the amount of uploads going on at the same time (",(0,o.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"5"),")."),(0,o.kt)("p",null,"Setting this to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," means no limit on concurrent uploads, but we recommend a\nvalue between ",(0,o.kt)("inlineCode",{parentName:"p"},"5")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"20"),"."),(0,o.kt)("h4",{id:"getresponsedataresponsetext-response"},(0,o.kt)("inlineCode",{parentName:"h4"},"getResponseData(responseText, response)")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This is an advanced option intended for use with ",(0,o.kt)("em",{parentName:"p"},"almost")," S3-compatible storage\nsolutions.")),(0,o.kt)("p",null,"Customize response handling once an upload is completed. This passes the\nfunction through to @uppy/xhr-upload, see its\n",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/xhr-upload/#getResponseData-responseText-response"},"documentation"),"\nfor API details."),(0,o.kt)("p",null,"This option is useful when uploading to an S3-like service that doesn\u2019t reply\nwith an XML document, but with something else such as JSON."),(0,o.kt)("h4",{id:"locale-"},(0,o.kt)("inlineCode",{parentName:"h4"},"locale: {}")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        timedOut: 'Upload stalled for %{seconds} seconds, aborting.',\n    },\n};\n")),(0,o.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("h3",{id:"how-can-i-generate-a-presigned-url-server-side"},"How can I generate a presigned URL server-side?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getUploadParameters")," function can return a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),", so upload parameters\ncan be prepared server-side. That way, no private keys to the S3 bucket need to\nbe shared on the client. For example, there could be a PHP server endpoint that\nprepares a presigned URL for a file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(AwsS3, {\n    getUploadParameters(file) {\n        // Send a request to our PHP signing endpoint.\n        return fetch('/s3-sign.php', {\n            method: 'post',\n            // Send and receive JSON.\n            headers: {\n                accept: 'application/json',\n                'content-type': 'application/json',\n            },\n            body: JSON.stringify({\n                filename: file.name,\n                contentType: file.type,\n            }),\n        })\n            .then((response) => {\n                // Parse the JSON response.\n                return response.json();\n            })\n            .then((data) => {\n                // Return an object in the correct shape.\n                return {\n                    method: data.method,\n                    url: data.url,\n                    fields: data.fields,\n                    // Provide content type header required by S3\n                    headers: {\n                        'Content-Type': file.type,\n                    },\n                };\n            });\n    },\n});\n")),(0,o.kt)("p",null,"See the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/tree/main/examples/aws-presigned-url"},"aws-presigned-url example in the uppy repository"),"\nfor a small example that implements both the server-side and the client-side."),(0,o.kt)("h3",{id:"how-can-i-retrieve-the-presigned-parameters-of-the-uploaded-file"},"How can I retrieve the presigned parameters of the uploaded file?"),(0,o.kt)("p",null,"Once the file is uploaded, it\u2019s possible to retrieve the parameters that were\ngenerated in ",(0,o.kt)("inlineCode",{parentName:"p"},"getUploadParameters(file)")," via the ",(0,o.kt)("inlineCode",{parentName:"p"},"file.meta")," field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('upload-success', (file, data) => {\n    const s3Key = file.meta['key']; // the S3 object key of the uploaded file\n});\n")))}h.isMDXComponent=!0}}]);