(this["webpackJsonpgithub-language-state"]=this["webpackJsonpgithub-language-state"]||[]).push([[0],{22:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(17),s=a.n(c),i=(a(22),a(4)),o=a.n(i),u=a(5),l=a(6),d=a(3),j=function(e,t){switch(t.type){case"REQUEST_FETCH":return Object(d.a)(Object(d.a)({},e),{},{stats:Object(d.a)(Object(d.a)({},e.stats),{},{languages:t.payload.tmp,total:t.payload.total})});case"LOADING_START":return Object(d.a)(Object(d.a)({},e),{},{stats:Object(d.a)(Object(d.a)({},e.stats),{},{isLoading:!0})});case"LOADING_END":return Object(d.a)(Object(d.a)({},e),{},{stats:Object(d.a)(Object(d.a)({},e.stats),{},{isLoading:!1})});default:return e}},b=a(8),p=a.n(b),h=a(0),m={stats:{repo:[],languages:[],isLoading:!1,total:0}},x=r.a.createContext(m),f=function(e){var t=e.children,a=Object(n.useReducer)(j,m),r=Object(l.a)(a,2),c=r[0],s=r[1],i=function(e,t){for(var a,n=0;n<e.length;n++){if(e[n].name===t)return n;a=!1}return a},d=function(){var e=Object(u.a)(o.a.mark((function e(t,a,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(n.data.map(function(){var e=Object(u.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==n.fork){e.next=3;break}return e.next=3,p.a.get("".concat(n.languages_url),{auth:{username:"1875799c1e99a7f5e94a",password:"c5aa344add0d7cc3a11611b694a13b67f663847b"}}).then((function(e){Object.keys(e.data).map(function(){var n=Object(u.a)(o.a.mark((function n(r){var c,s,u;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a+=e.data[r],!(t.length>0)){n.next=8;break}return n.next=4,i(t,r);case 4:!1!==(c=n.sent)?(t[c].value+=e.data[r],t[c].repo++):((s={}).name=r,s.value=e.data[r],s.repo=1,t.push(s)),n.next=13;break;case 8:(u={}).name=r,u.value=e.data[r],u.repo=1,t.push(u);case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())})).catch((function(e){return console.log(e)}));case 3:return e.abrupt("return",n.name);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return e.sent,console.log(t),e.abrupt("return",{tmp:t,total:a});case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0,a=[],e.next=4,p.a.get("https://api.github.com/users/".concat(t,"/repos?per_page=100"),{auth:{username:"1875799c1e99a7f5e94a",password:"c5aa344add0d7cc3a11611b694a13b67f663847b"}}).then(function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(a,0,t);case 2:n=e.sent,s({type:"REQUEST_FETCH",payload:{tmp:n.tmp,total:n.total}}),s({type:"LOADING_END"});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),alert("Please Check user Name")}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(x.Provider,{value:{stats:c.stats,fetchRepo:b,LoadingStart:function(){s({type:"LOADING_START"})}},children:t})},O=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(x),s=c.fetchRepo,i=c.LoadingStart;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{style:{width:"80%"},className:"form-group m-auto mb-4",children:[Object(h.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label mt-4",children:"Github Username"}),Object(h.jsx)("input",{value:a,onChange:function(e){return r(e.target.value)},type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Github Username"})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"button",style:{width:"250px"},className:"btn btn-primary m-auto d-block",onClick:function(e){e.preventDefault(),""!==a?(i(),s(a)):alert("Please Enter Username")},children:"Show Stats"})})]})},g=a.p+"static/media/spinner.11d9cde8.gif",v=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:g,alt:"Loading..",style:{width:"250px",margin:"40px auto",display:"block"}})})},y=function(e){var t=e.item,a=e.total;return Object(h.jsxs)("div",{className:"card border-primary mb-4 card-container",style:{width:"20rem"},children:[Object(h.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[t.name," ",Object(h.jsx)("i",{className:"devicon-github-original-wordmark ",style:{fontSize:"30px"}})]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("h4",{className:"card-title",children:[Object(h.jsxs)("p",{className:"text-white",children:["Usage: ",Math.round(t.value/a*100*10)/10,"%"]}),Object(h.jsx)("div",{className:"progress bg-dark",children:Object(h.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated  bg-info",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(t.value/a*100,"%")}})})]}),Object(h.jsxs)("p",{className:"card-text",children:["No of Projects Build Using ",t.name,": ",t.repo]})]})]})},N=function(e){var t=e.item,a=e.total;return Object(h.jsxs)("div",{className:"card border-success m-auto mt-4 pro-card-container",style:{width:"80%"},children:[Object(h.jsx)("div",{className:"card-header",children:"Expertice"}),Object(h.jsxs)("div",{className:"card-body d-flex justify-content-between",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"card-title",children:t.name}),Object(h.jsxs)("p",{className:"card-text",children:["You have used ","".concat(Math.round(t.value/a*100*10)/10,"%")," of ",t.name," in your Github Projects."]})]}),Object(h.jsx)("div",{children:Object(h.jsx)("i",{className:"devicon-devicon-plain",style:{fontSize:"50px"}})})]})]})},w=function(){var e=Object(n.useContext)(x).stats;return Object(h.jsx)("div",{children:e.isLoading?Object(h.jsx)(v,{}):0===e.languages.length?Object(h.jsx)("h3",{className:"text-center mt-5",children:"Enter the User Name"}):Object(h.jsxs)("div",{className:"mt-5",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"text-center",children:"Your Pro Effecient Language"}),Object(h.jsx)(N,{item:e.languages.reduce((function(e,t){return e.value>t.value?e:t})),total:e.total})]}),Object(h.jsx)("div",{className:"d-flex flex-wrap justify-content-around m-auto mt-5",style:{width:"80%"},children:e.languages.map((function(t,a){return Object(h.jsx)(y,{item:t,total:e.total},a)}))})]})})};var k=function(){return Object(h.jsx)(f,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"mt-2 mb-2 text-center text-primary",children:"Github Language Stater"}),Object(h.jsx)(O,{}),Object(h.jsx)(w,{})]})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),L()}},[[43,1,2]]]);
//# sourceMappingURL=main.39d35b6a.chunk.js.map