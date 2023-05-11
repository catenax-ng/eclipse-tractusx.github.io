"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[7142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"TRG 4.05 - Container registries"},i=void 0,s={unversionedId:"release/trg-4/trg-4-05",id:"release/trg-4/trg-4-05",title:"TRG 4.05 - Container registries",description:"Proposed release date 19th of May 2023",source:"@site/docs/release/trg-4/trg-4-05.md",sourceDirName:"release/trg-4",slug:"/release/trg-4/trg-4-05",permalink:"/docs/release/trg-4/trg-4-05",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-4/trg-4-05.md",tags:[],version:"current",frontMatter:{title:"TRG 4.05 - Container registries"},sidebar:"developer",previous:{title:"TRG 4.04 - Image signing",permalink:"/docs/release/trg-4/trg-4-04"},next:{title:"TRG 4.06 - Notice for docker images",permalink:"/docs/release/trg-4/trg-4-06"}},l={},c=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2},{value:"How",id:"how",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'Proposed release date: "mandatory after": 19th of May 2023')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Draft"),(0,a.kt)("td",{parentName:"tr",align:null},"04-May-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Place DockerHub as mandatory container registry; remove GHCR references")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Active"),(0,a.kt)("td",{parentName:"tr",align:null},"05-Jan-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial release")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Draft"),(0,a.kt)("td",{parentName:"tr",align:null},"14-Sept-2022"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a")))),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("p",null,"Using a central container registry greatly improves security and manageability of images. It also makes it easier for external parties to validate that images are correct if they are coming from the same source."),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"In Eclipse Tractus-X we are using one central container registry. This registry ist ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/tractusx"},"tractusx on DockerHub"),"."),(0,a.kt)("p",null,"All container images released for an Eclipse Tractus-X product ",(0,a.kt)("strong",{parentName:"p"},"must")," be present on ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/tractusx"},"DockerHub"),".\nAlso be aware of the necessary remarks for container images described in ",(0,a.kt)("a",{parentName:"p",href:"/docs/release/trg-4/trg-4-06"},"TRG 4-06")," and alignment on common base images\ndescribed in ",(0,a.kt)("a",{parentName:"p",href:"/docs/release/trg-4/trg-4-02"},"TRG 4.02"),"."),(0,a.kt)("h2",{id:"how"},"How"),(0,a.kt)("p",null,"Following example shows a simple workflow, that can be used to publish your Docker image(s) to ",(0,a.kt)("inlineCode",{parentName:"p"},"DockerHub"),".\nIt is using secrets, that contain credentials to authenticate at ",(0,a.kt)("inlineCode",{parentName:"p"},"DockerHub"),". These secrets are present at GitHub organization\nlevel and can therefore be used in any repository in our org."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Reference from https://github.com/eclipse-tractusx/app-dashboard/blob/main/.github/workflows/build-image.yaml\n# You might want to check the source for recent updates\nname: Build - Docker image (SemVer)\n\non:\n  push:\n    branches:\n      - main\n    # trigger events for SemVer like tags\n    tags:\n      - 'v*.*.*'\n      - 'v*.*.*-*'\n  pull_request:\n    branches:\n      - main\n\nenv:\n  IMAGE_NAMESPACE: \"tractusx\"\n  IMAGE_NAME: \"app-dashboard\"\n\njobs:\n  docker:\n    runs-on: ubuntu-latest\n    permissions:\n      packages: write\n\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n\n      # Create SemVer or ref tags dependent of trigger event\n      - name: Docker meta\n        id: meta\n        uses: docker/metadata-action@v4\n        with:\n          images: |\n            ${{ env.IMAGE_NAMESPACE }}/${{ env.IMAGE_NAME }}\n          # Automatically prepare image tags; See action docs for more examples. \n          # semver patter will generate tags like these for example :1 :1.2 :1.2.3\n          tags: |\n            type=ref,event=branch\n            type=ref,event=pr\n            type=semver,pattern={{version}}\n            type=semver,pattern={{major}}\n            type=semver,pattern={{major}}.{{minor}}\n\n      - name: DockerHub login\n        if: github.event_name != 'pull_request'\n        uses: docker/login-action@v2\n        with:\n          # Use existing DockerHub credentials present as secrets\n          username: ${{ secrets.DOCKER_HUB_USER }}\n          password: ${{ secrets.DOCKER_HUB_TOKEN }}\n\n      - name: Build and push\n        uses: docker/build-push-action@v3\n        with:\n          context: .\n          # Build image for verification purposes on every trigger event. Only push if event is not a PR\n          push: ${{ github.event_name != 'pull_request' }}\n          tags: ${{ steps.meta.outputs.tags }}\n          labels: ${{ steps.meta.outputs.labels }}\n\n      # https://github.com/peter-evans/dockerhub-description\n      # Important step to push image description to DockerHub \n      - name: Update Docker Hub description\n        if: github.event_name != 'pull_request'\n        uses: peter-evans/dockerhub-description@v3\n        with:\n        # readme-filepath defaults to toplevel README.md, Only necessary if you have a dedicated file with your 'Notice for docker images'   \n        # readme-filepath: path/to/dedicated/notice-for-docker-image.md \n          username: ${{ secrets.DOCKER_HUB_USER }}\n          password: ${{ secrets.DOCKER_HUB_TOKEN }}\n          repository: ${{ env.IMAGE_NAMESPACE }}/${{ env.IMAGE_NAME }}\n")))}u.isMDXComponent=!0}}]);