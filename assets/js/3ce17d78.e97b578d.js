"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[40770],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,u=c["".concat(s,".").concat(d)]||c[d]||h[d]||l;return a?r.createElement(u,i(i({ref:t},m),{},{components:a})):r.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19886:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"TRG 5.02 - Chart structure"},i=void 0,o={unversionedId:"release/trg-5/trg-5-02",id:"release/trg-5/trg-5-02",title:"TRG 5.02 - Chart structure",description:"| Status | Created     | Post-History                                           |",source:"@site/docs/release/trg-5/trg-5-02.md",sourceDirName:"release/trg-5",slug:"/release/trg-5/trg-5-02",permalink:"/docs/release/trg-5/trg-5-02",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-5/trg-5-02.md",tags:[],version:"current",frontMatter:{title:"TRG 5.02 - Chart structure"},sidebar:"docs",previous:{title:"TRG 5.01 - Helm Chart requirements",permalink:"/docs/release/trg-5/trg-5-01"},next:{title:"TRG 5.03 - Version strategy",permalink:"/docs/release/trg-5/trg-5-03"}},s={},p=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2},{value:"Chart Location",id:"chart-location",level:3},{value:"Chart File Structure",id:"chart-file-structure",level:3},{value:"The <code>Chart.yaml</code> File",id:"the-chartyaml-file",level:4},{value:"The <code>LICENSE</code> File",id:"the-license-file",level:4},{value:"The <code>README.md</code> File",id:"the-readmemd-file",level:4},{value:"The <code>values.yaml</code> File",id:"the-valuesyaml-file",level:4},{value:"The <code>crds</code> Directory",id:"the-crds-directory",level:4},{value:"The <code>templates</code> Directory",id:"the-templates-directory",level:4},{value:"The <code>templates/NOTES.txt</code> File",id:"the-templatesnotestxt-file",level:4},{value:"<code>.helmignore</code>",id:"helmignore",level:4}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Created"),(0,n.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Draft"),(0,n.kt)("td",{parentName:"tr",align:null},"17-Jul-2023"),(0,n.kt)("td",{parentName:"tr",align:null},"templates/NOTES.txt made optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Active"),(0,n.kt)("td",{parentName:"tr",align:null},"10-Jan-2023"),(0,n.kt)("td",{parentName:"tr",align:null},"add prerequisite and TL;DR as requirement in README.md")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Active"),(0,n.kt)("td",{parentName:"tr",align:null},"10-Nov-2022"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial release")))),(0,n.kt)("h2",{id:"why"},"Why"),(0,n.kt)("p",null,"Following best practices when creating the chart helps everyone better understand, deploy and test the product. Having\nsimilar structure for every Helm chart enables easy understand, simple implementation of testing and deployment workflows."),(0,n.kt)("p",null,"Having the helm chart in the same directory than everyone else allows for easy finding the right helm chart."),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Each Helm chart ",(0,n.kt)("strong",{parentName:"p"},"should")," follow a specific structure. Helm\nprovides ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/getting_started/"},"recommendations for creating charts"),"."),(0,n.kt)("p",null,"For Eclipse Tractus-X Helm charts the following requirements ",(0,n.kt)("strong",{parentName:"p"},"must")," be met:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Helm chart location inside Git repository"),(0,n.kt)("li",{parentName:"ul"},"Helm chart file structure defined below")),(0,n.kt)("h3",{id:"chart-location"},"Chart Location"),(0,n.kt)("p",null,"Helm charts ",(0,n.kt)("strong",{parentName:"p"},"must")," be located inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"/charts")," directory of the Git repository."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"charts/\n  chartNameA/\n    Chart.yaml\n    ...\n  chartNameB/\n    Chart.yaml\n    ...\nAUTHORS.md\nDEPENDENCIES.md\nLICENSE\nREADME.md\n")),(0,n.kt)("p",null,"For further details about the Git repository structure, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/release/trg-2/trg-2-3"},"TRG 2.03 - Repo\nStructure"),"."),(0,n.kt)("h3",{id:"chart-file-structure"},"Chart File Structure"),(0,n.kt)("admonition",{title:"License/Copyright Headers required",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"It is ",(0,n.kt)("strong",{parentName:"p"},"mandatory to add a valid license/copyright header")," to each file (except of rendered files, e.g. Markdown files) in the\nGit repository!"),(0,n.kt)("p",{parentName:"admonition"},"For further details, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/foss-example#how-to-make-your-catenax-product-oss-ready"},"How to make your Catena-X product OSS\nready"),".")),(0,n.kt)("p",null,"For Eclipse Tractus-X Helm charts we expect the following charts structure as a minimal set (except of optional parts):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"chartName/\n  .helmignore          # mandatory\n  Chart.yaml           # mandatory\n  LICENSE              # mandatory\n  README.md            # mandatory\n  values.yaml          # mandatory\n  crds/                # optional\n  templates/           # mandatory, except of umbrella Helm charts\n  templates/NOTES.txt  # optional \n")),(0,n.kt)("p",null,"For further details on Helm chart basics, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/"},"Helm documentation"),"."),(0,n.kt)("h4",{id:"the-chartyaml-file"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"Chart.yaml")," File"),(0,n.kt)("p",null,"The following represents the minimum set of expected fields in ",(0,n.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: The chart API Version\nname: The name of the chart\nappVersion: The application version the chart will install\nversion: A SemVer 2 version of the chart\ndescription: A brief description of the chart\nhome: The URL of the product home page\nsources:\n  - A list of URLs to source code of this project\ndependencies: # A list of the chart requirements (if any)\n  - name: The name of the chart\n    version: The version of the chart\n    repository: The repository URL\nmaintainers: # Optional, could become mandatory in Eclipse repositories\n  - name: Maintainers name\n    email: optional\n    url: A URL for the maintainer, optional\n")),(0,n.kt)("p",null,"For further details about the ",(0,n.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," file please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/#the-chartyaml-file"},"Helm\ndocumentation"),"."),(0,n.kt)("h4",{id:"the-license-file"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"LICENSE")," File"),(0,n.kt)("p",null,"The file ",(0,n.kt)("strong",{parentName:"p"},"must")," contain the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/foss-example/blob/main/general/LICENSE"},"Apache 2.0 License"),"."),(0,n.kt)("h4",{id:"the-readmemd-file"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"README.md")," File"),(0,n.kt)("p",null,"The README.md file ",(0,n.kt)("strong",{parentName:"p"},"must")," contain:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"a brief explanation of what the Helm chart will install")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'a section of "Prerequisites" includes the required kubernetes version, helm version and other necessary prerequisites and their versions. Example:'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-markdown"},"- Kubernetes 1.19+\n- Helm 3.2.0+\n- PV provisioner support in the underlying infrastructure\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'a section of "TL;DR" that includes the helm commands to add and install the helm chart, Example:'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add my-repo https://charts.bitnami.com/bitnami\nhelm install my-release my-repo/postgresql\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"documentation of default values for this Helm chart (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/norwoodj/helm-docs#helm-docs"},(0,n.kt)("em",{parentName:"a"},"helm-docs")),"\nmay help)."))),(0,n.kt)("h4",{id:"the-valuesyaml-file"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"values.yaml")," File"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," file contains all necessary variables the Helm chart requires for successful installation. At the same\ntime this enables users to override the default values."),(0,n.kt)("p",null,"For best practices on ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," files, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/release/trg-5/trg-5-05"},"TRG 5.05 - Chart Values")," or ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/values_files/"},"Helm\ndocumentation"),"."),(0,n.kt)("admonition",{title:"multiple values files not allowed",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"All default values ",(0,n.kt)("strong",{parentName:"p"},"must")," be introduced with ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," file to successfully install the Helm chart."),(0,n.kt)("p",{parentName:"admonition"},"There ",(0,n.kt)("strong",{parentName:"p"},"must")," be no additional ",(0,n.kt)("inlineCode",{parentName:"p"},"values-xyz.yaml")," files, e.g. to specify environment specific values. Only ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," file\nis allowed!")),(0,n.kt)("h4",{id:"the-crds-directory"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"crds")," Directory"),(0,n.kt)("p",null,"If the Helm chart installs custom resource definitions, this directory is the place to locate the manifest files in."),(0,n.kt)("p",null,"For further details, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/#custom-resource-definitions-crds"},"Helm\ndocumentation"),"."),(0,n.kt)("h4",{id:"the-templates-directory"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"templates")," Directory"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"templates")," directory contains manifest files, which will be deployed during Helm chart installation. For further\ndetails, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/#template-files"},"Helm documentation"),"."),(0,n.kt)("h4",{id:"the-templatesnotestxt-file"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"templates/NOTES.txt")," File"),(0,n.kt)("p",null,"The content of ",(0,n.kt)("inlineCode",{parentName:"p"},"templates/NOTES.txt")," will be printed after Helm chart installation. The file is evaluated as a template\nfile with all possibilities of templating."),(0,n.kt)("h4",{id:"helmignore"},(0,n.kt)("inlineCode",{parentName:"h4"},".helmignore")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".helmignore")," file should contain as a minimal set the following entries:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-gitignore"},"# Accept only values.yaml\nvalues?*.yaml\nvalues?*.yml\n")))}c.isMDXComponent=!0}}]);