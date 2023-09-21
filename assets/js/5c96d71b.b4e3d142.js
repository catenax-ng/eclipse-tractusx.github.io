"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[28974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},20889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),i=(n(67294),n(3905));const r={},a="Eclipse Tractus-X EDC Code Style Guide",l={unversionedId:"kits/tractusx-edc/styleguide",id:"kits/tractusx-edc/styleguide",title:"Eclipse Tractus-X EDC Code Style Guide",description:"In order to maintain a coherent code style throughout the project we ask every contributor to adhere to a few simple",source:"@site/docs-kits/kits/tractusx-edc/styleguide.md",sourceDirName:"kits/tractusx-edc",slug:"/kits/tractusx-edc/styleguide",permalink:"/docs-kits/next/kits/tractusx-edc/styleguide",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"Etiquette for pull requests",permalink:"/docs-kits/next/kits/tractusx-edc/pr_etiquette"},next:{title:"Data Chain KIT",permalink:"/docs-kits/next/category/data-chain-kit"}},c={},s=[{value:"Checkstyle configuration",id:"checkstyle-configuration",level:2},{value:"Running Checkstyle",id:"running-checkstyle",level:2},{value:"Checkstyle as PR validation",id:"checkstyle-as-pr-validation",level:3},{value:"Recommended IntelliJ Code Style Configuration",id:"recommended-intellij-code-style-configuration",level:2},{value:"Optional Intellij SaveActions Plugin",id:"optional-intellij-saveactions-plugin",level:2},{value:"Optional Generic <code>.editorConfig</code>",id:"optional-generic-editorconfig",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"eclipse-tractus-x-edc-code-style-guide"},"Eclipse Tractus-X EDC Code Style Guide"),(0,i.kt)("p",null,"In order to maintain a coherent code style throughout the project we ask every contributor to adhere to a few simple\nstyle guidelines. We assume most developers will use at least something like ",(0,i.kt)("inlineCode",{parentName:"p"},"vim")," and therefore have support for\nautomatic code formatting, we are not going to list the guidelines here. If you absolutely want to take a look, checkout\nthe ",(0,i.kt)("a",{parentName:"p",href:"resources/tx-checkstyle-config.xml"},"config written in XML"),"."),(0,i.kt)("h2",{id:"checkstyle-configuration"},"Checkstyle configuration"),(0,i.kt)("p",null,"Checkstyle is a ",(0,i.kt)("a",{parentName:"p",href:"https://checkstyle.sourceforge.io/"},"tool")," that can statically analyze your source code to check against\na set of given rules. Those rules are formulated in an ",(0,i.kt)("a",{parentName:"p",href:"resources/tx-checkstyle-config.xml"},"XML document"),". Many modern\nIDEs have a plugin available for download that runs in the background and does code analysis."),(0,i.kt)("p",null,"Our checkstyle config is based off of the ",(0,i.kt)("a",{parentName:"p",href:"https://checkstyle.sourceforge.io/google_style.html"},"Google Style")," with a few\nadditional rules such as the naming of constants and Types."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: currently we do ",(0,i.kt)("strong",{parentName:"em"},"not")," enforce the generation of Javadoc comments, even though documenting code is ",(0,i.kt)("strong",{parentName:"em"},"highly"),"\nrecommended. We might enable this in the future, such that at least interfaces and public methods are commented.")),(0,i.kt)("h2",{id:"running-checkstyle"},"Running Checkstyle"),(0,i.kt)("p",null,"Checkstyle can be run in different ways: implicitly we run it through the ",(0,i.kt)("inlineCode",{parentName:"p"},"checkstyle")," Gradle Plugin\nduring ",(0,i.kt)("inlineCode",{parentName:"p"},"gradle build")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"gradle check"),". That will cause the build to fail if any violations are found. But in order to get better\nusability and on-the-fly reporting, Checkstyle is also available as IDE plugins for many modern IDEs, and it can run\neither on-demand or continuously in the background:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/1065-checkstyle-idea"},"IntelliJ IDEA plugin [recommended]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://checkstyle.org/eclipse-cs/#!/"},"Eclipse IDE [recommended]"))),(0,i.kt)("h3",{id:"checkstyle-as-pr-validation"},"Checkstyle as PR validation"),(0,i.kt)("p",null,"Apart from running Checkstyle locally as IDE plugin, we do run it on\nour GitHub Actions pipeline. At this time, Checkstyle will only spew out warnings, but\nwe may tighten the rules at a future time and without notice. This will result in failing GitHub Action pipelines. Also,\ncommitters might reject PRs due to Checkstyle warnings."),(0,i.kt)("p",null,"It is therefore ",(0,i.kt)("strong",{parentName:"p"},"highly")," recommended running Checkstyle locally as well."),(0,i.kt)("p",null,"If you ",(0,i.kt)("strong",{parentName:"p"},"do not wish")," to run Checkstyle on you local machine, that's fine, but be prepared to get your PRs rejected\nsimply because of a naming or formatting error."),(0,i.kt)("h2",{id:"recommended-intellij-code-style-configuration"},"[Recommended]"," IntelliJ Code Style Configuration"),(0,i.kt)("p",null,"If you are using Jetbrains IntelliJ IDEA, we have created a specific code style configuration that will automatically\nformat your source code according to that style guide. This should eliminate most of the potential Checkstyle violations\nright from the get-go. You will need to reformat your code manually or in a pre-commit hook though."),(0,i.kt)("h2",{id:"optional-intellij-saveactions-plugin"},"[Optional]"," Intellij SaveActions Plugin"),(0,i.kt)("p",null,"If you absolutely want to make sure that no piece of ever-so-slightly misformatted code even hits your hard disk, we\nadvise you to use the ",(0,i.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/7642-save-actions"},"SaveActions plugin")," for IntelliJ IDEA. It\ntakes care that your code is always correctly formatted. Unfortunately SaveActions has no export feature, so please just\ncopy this configuration:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SaveActions configuration",src:n(72134).Z,width:"1123",height:"1399"})),(0,i.kt)("h2",{id:"optional-generic-editorconfig"},"[Optional]"," Generic ",(0,i.kt)("inlineCode",{parentName:"h2"},".editorConfig")),(0,i.kt)("p",null,"For most other editors and IDEs we've supplied an ",(0,i.kt)("a",{parentName:"p",href:"resources/tx-codestyle.editorconfig"},".editorConfig")," file that can be\nplaced at the appropriate location. The specific location will largely depend on your editor and your OS, please refer\nto the\n",(0,i.kt)("a",{parentName:"p",href:"https://editorconfig.org"},"official documentation")," for details."))}d.isMDXComponent=!0},72134:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/save_actions_scr-5fc2511d2b0ecf777a4604fb1b31fa42.png"}}]);