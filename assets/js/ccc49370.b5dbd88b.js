"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[46103],{65203:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(67294),l=a(86010),o=a(10833),i=a(35281),s=a(9460),r=a(39058),c=a(30390),m=a(87462),d=a(95999),g=a(32244);function p(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(g.Z,(0,m.Z)({},a,{subLabel:n.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(g.Z,(0,m.Z)({},t,{subLabel:n.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function u(){const{assets:e,metadata:t}=(0,s.C)(),{title:a,description:l,date:i,tags:r,authors:c,frontMatter:m}=t,{keywords:d}=m,g=e.image??m.image;return n.createElement(o.d,{title:a,description:l,keywords:d,image:g},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:i}),c.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&n.createElement("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")}))}var b=a(39407);function v(e){let{sidebar:t,children:a}=e;const{metadata:l,toc:o}=(0,s.C)(),{nextItem:i,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:g,toc_min_heading_level:u,toc_max_heading_level:v}=d;return n.createElement(r.Z,{sidebar:t,toc:!g&&o.length>0?n.createElement(b.Z,{toc:o,minHeadingLevel:u,maxHeadingLevel:v}):void 0},n.createElement(c.Z,null,a),(i||m)&&n.createElement(p,{nextItem:i,prevItem:m}))}function h(e){const t=e.content;return n.createElement(s.n,{content:e.content,isBlogPostPage:!0},n.createElement(o.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},n.createElement(u,null),n.createElement(v,{sidebar:e.sidebar},n.createElement(t,null))))}},39407:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(87462),l=a(67294),o=a(86010),i=a(38011);const s="tableOfContents_bqdL";function r(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,o.Z)(s,"thin-scrollbar",t)},l.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},38011:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),o=a(86668),i=a(39665),s=a(96841);function r(e){let{toc:t,className:a,linkClassName:n,isChild:o}=e;return t.length?l.createElement("ul",{className:o?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(r,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const c=l.memo(r);function m(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:d,maxHeadingLevel:g,...p}=e;const u=(0,o.L)(),b=d??u.tableOfContents.minHeadingLevel,v=g??u.tableOfContents.maxHeadingLevel,h=(0,i.b)({toc:t,minHeadingLevel:b,maxHeadingLevel:v}),_=(0,l.useMemo)((()=>{if(r&&m)return{linkClassName:r,linkActiveClassName:m,minHeadingLevel:b,maxHeadingLevel:v}}),[r,m,b,v]);return(0,s.S)(_),l.createElement(c,(0,n.Z)({toc:h,className:a,linkClassName:r},p))}}}]);