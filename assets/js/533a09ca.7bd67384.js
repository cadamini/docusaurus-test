"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[607],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,p=m["".concat(s,".").concat(u)]||m[u]||h[u]||o;return a?i.createElement(p,n(n({ref:t},d),{},{components:a})):i.createElement(p,n({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,n[1]=l;for(var c=2;c<o;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3,title:"Work with charts",product_label:["essential","advanced","enterprise","classic"],description:"Learn how to work with charts in a dashboard.",related_articles:[{overwrite_title:"Add title for untranslated source",filepath:"features/monitoring/dashboards/dashboards-examples.md"}]},n=void 0,l={unversionedId:"tutorial-basics/create-a-blog-post",id:"tutorial-basics/create-a-blog-post",title:"Work with charts",description:"Learn how to work with charts in a dashboard.",source:"@site/docs/tutorial-basics/create-a-blog-post.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-blog-post",permalink:"/docusaurus-test/docs/tutorial-basics/create-a-blog-post",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create-a-blog-post.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Work with charts",product_label:["essential","advanced","enterprise","classic"],description:"Learn how to work with charts in a dashboard.",related_articles:[{overwrite_title:"Add title for untranslated source",filepath:"features/monitoring/dashboards/dashboards-examples.md"}]},sidebar:"tutorialSidebar",previous:{title:"Create a Document",permalink:"/docusaurus-test/docs/tutorial-basics/create-a-document"},next:{title:"Markdown Features",permalink:"/docusaurus-test/docs/tutorial-basics/markdown-features"}},s={},c=[{value:"Change the date range",id:"change-the-date-range",level:2},{value:"Zoom in and out",id:"zoom-in-and-out",level:2},{value:"Switch to the table view",id:"switch-to-the-table-view",level:2},{value:"Copy data to the clipboard",id:"copy-data-to-the-clipboard",level:3},{value:"Highlight time series",id:"highlight-time-series",level:2},{value:"Show and hide time series",id:"show-and-hide-time-series",level:2},{value:"Customize time series",id:"customize-time-series",level:2},{value:"Delete time series",id:"delete-time-series",level:2}],d={toc:c},m="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I can conveniently use ",(0,r.kt)("highlight",{color:"#25c2a0"},"Docusaurus green")," everywhere!"),(0,r.kt)("p",null,"In this article, you will learn:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"how to change the date range."),(0,r.kt)("li",{parentName:"ul"},"how to zoom in and out."),(0,r.kt)("li",{parentName:"ul"},"how to use the table view and copy data."),(0,r.kt)("li",{parentName:"ul"},"how to highlight or hide time series."),(0,r.kt)("li",{parentName:"ul"},"how to customize or delete time series.")),(0,r.kt)("p",null,"To use the described functions, you must select a dashboard. New to Dashboards? Learn {% link_new the basics | features/monitoring/dashboards/dashboards-overview.md %} first."),(0,r.kt)("h2",{id:"change-the-date-range"},"Change the date range"),(0,r.kt)("p",null,"Select a fixed ",(0,r.kt)("strong",{parentName:"p"},"date range")," to display data in the upper right corner of each chart, or additionally activate ",(0,r.kt)("strong",{parentName:"p"},"Use Rolling Dates"),". In this mode, the start date is shifted by one day every day."),(0,r.kt)("h2",{id:"zoom-in-and-out"},"Zoom in and out"),(0,r.kt)("p",null,"View charts in more detail using the zoom function. For this, simply mark the area of interest in a chart using the mouse. Click ",(0,r.kt)("em",{parentName:"p"},"Reset zoom"),"{: .doc-button} to see the entire time frame again."),(0,r.kt)("h2",{id:"switch-to-the-table-view"},"Switch to the table view"),(0,r.kt)("p",null,"As an alternative to the graph visualization, the table view displays timestamps and values for each chart. Switch between graph and table view with by clicking ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("img",{alt:"Table view",src:a(5945).Z,width:"46",height:"40"})),"{:.doc-button-icon} above a chart."),(0,r.kt)("h3",{id:"copy-data-to-the-clipboard"},"Copy data to the clipboard"),(0,r.kt)("p",null,"The table view offers a copy function. Click ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("img",{alt:"Copy a table",src:a(5945).Z,width:"46",height:"40"})),"{:.doc-button-icon}, next paste the data into your spreadsheet program using copy & paste. The first column contains date and time, you need to use formulas in your spreadsheet to separate them."),(0,r.kt)("p",null,"Note: The date and time information is localized according to your injixo language settings, which could be problematic when copying the data from your tenant into your Excel or Google Sheets version using another language."),(0,r.kt)("h2",{id:"highlight-time-series"},"Highlight time series"),(0,r.kt)("p",null,"To temporarily highlight a specific time series, hover over the ",(0,r.kt)("strong",{parentName:"p"},"name of the time series")," in the legend. All other time series will fade into the background."),(0,r.kt)("h2",{id:"show-and-hide-time-series"},"Show and hide time series"),(0,r.kt)("p",null,"Hide other time series by clicking ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("img",{alt:"Show and hide graphs",src:a(5945).Z,width:"46",height:"40"})),"{:.doc-button-icon} next to the name in the legend."),(0,r.kt)("h2",{id:"customize-time-series"},"Customize time series"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"context menu icon")," next to the name of the currently selected dashboard."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Edit")," to access the edit mode for the dashboard."),(0,r.kt)("li",{parentName:"ol"},"Hover over the ",(0,r.kt)("strong",{parentName:"li"},"time series name")," in the legend, next click the ",(0,r.kt)("strong",{parentName:"li"},"pencil icon"),"."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("em",{parentName:"li"},"Customize graph")," dialog window, change the time series properties. You can:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"edit the ",(0,r.kt)("strong",{parentName:"li"},"Name")," shown in the legend."),(0,r.kt)("li",{parentName:"ul"},"change the diagram ",(0,r.kt)("strong",{parentName:"li"},"Type"),". Choose from ",(0,r.kt)("strong",{parentName:"li"},"Step")," or ",(0,r.kt)("strong",{parentName:"li"},"Histogram")," (bar chart)."),(0,r.kt)("li",{parentName:"ul"},"select another predefined ",(0,r.kt)("strong",{parentName:"li"},"Color"),"."),(0,r.kt)("li",{parentName:"ul"},"change how data is aggregated in the chart. Choose from ",(0,r.kt)("strong",{parentName:"li"},"By interval")," (available for time ranges up to 8 days) to show interval values or ",(0,r.kt)("strong",{parentName:"li"},"By day")," to show the values for the day."),(0,r.kt)("li",{parentName:"ul"},"change where the y-axis is shown. Choose from ",(0,r.kt)("strong",{parentName:"li"},"Left (default)")," or ",(0,r.kt)("strong",{parentName:"li"},"Right"),"."))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},"Save"),"{:.doc-button}."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},"Close Edit mode"),"{:.doc-button} to return to the view mode.")),(0,r.kt)("p",null,"{{ 3 | image: \"Customize a Graph\", '40%' }}"),(0,r.kt)("h2",{id:"delete-time-series"},"Delete time series"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("img",{alt:"Context menu",src:a(5945).Z,width:"46",height:"40"})),"{:.doc-button-icon} next to the name of the currently selected dashboard."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Edit")," to access the edit mode for the dashboard."),(0,r.kt)("li",{parentName:"ol"},"Hover over the ",(0,r.kt)("strong",{parentName:"li"},"time series name")," in the legend, next click ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("img",{alt:"pencil icon",src:a(5945).Z,width:"46",height:"40"})),"{:.doc-button-icon}."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("em",{parentName:"li"},"Customize graph")," dialog window, click ",(0,r.kt)("em",{parentName:"li"},"Delete"),"{:.doc-button} to delete the selected time series. This will close the editing dialog."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},"Save"),"{:.doc-button}."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},"Close Edit mode"),"{:.doc-button} to return to the view mode.")))}h.isMDXComponent=!0},5945:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);