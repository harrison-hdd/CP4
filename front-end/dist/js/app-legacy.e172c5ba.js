(function(){"use strict";var e={1815:function(e,t,r){r(6992),r(8674),r(9601),r(7727);var n=r(144),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav",[r("router-link",{attrs:{to:"/"}},[e._v("Login/Register")]),e._v(" | "),r("router-link",{attrs:{to:"/browse"}},[e._v("Browse")]),e._v(" | "),r("router-link",{attrs:{to:"/saved"}},[e._v("Saved")])],1),r("router-view"),r("div"),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer",attrs:{id:"footer-bar"}},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[r("a",{staticClass:"navbar-brand",attrs:{href:"https://github.com/hoandohdd/creative-project-3"}},[e._v("Source")])])])}],i=r(1001),s={},u=(0,i.Z)(s,a,o,!1,null,null,null),c=u.exports,l=(r(1539),r(8783),r(3948),r(8345)),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("LoginAndRegisterComponent")},p=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"login-page"}},[this.$root.$data.isLoggedIn?e._e():r("div",{attrs:{id:"input"}},[e._m(0),r("div"),e._m(1),r("button",{attrs:{id:"login-button"},on:{click:e.login}},[e._v("Login")]),r("button",{attrs:{id:"register-button"},on:{click:e.register}},[e._v("Register")])]),this.$root.$data.isLoggedIn?r("div",[e._v(" You are logged in. Enjoy browsing "),r("div",[r("button",{attrs:{id:"logout-button"},on:{click:e.logout}},[e._v("Logout")])])]):e._e()])},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"username-wrapper"}},[r("input",{attrs:{type:"text",id:"username",placeholder:"Username"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"password-wrapper"}},[r("input",{attrs:{type:"password",id:"password",placeholder:"Password"}})])}],m=r(6198),g=(r(5666),r(9669)),h=r.n(g),b={name:"LoginAndRegisterComponent",methods:{login:function(){var e=this;return(0,m.Z)(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,n=document.getElementById("username").value,a=document.getElementById("password").value,""!==n&&""!==a){t.next=6;break}return alert("Username and password cannot be blank"),t.abrupt("return");case 6:return t.next=8,h().post("/api/users/login",{username:n,password:a});case 8:r=t.sent,e.$root.$data.isLoggedIn=!0,e.$root.$data.currentUser=n,e.$root.$data.currentFavorites=r.data.favorites,document.getElementById("username").value="",document.getElementById("password").value="",t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](0),console.log(t.t0),alert("An error happened. Please check your credentials and/or try again later!");case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))()},register:function(){return(0,m.Z)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t=document.getElementById("username").value,r=document.getElementById("password").value,""!==t&&""!==r){e.next=6;break}return alert("Username and password cannot be blank"),e.abrupt("return");case 6:return e.next=8,h().post("/api/users/register",{username:t,password:r});case 8:alert("New user successfully registered"),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0),alert("An error happened. Please check your credentials and/or try again later!");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()},logout:function(){this.$root.$data.currentUser="",this.$root.$data.currentFavorites=[],this.$root.$data.currentDate="",this.$root.$data.isLoggedIn=!1}}},w=b,$=(0,i.Z)(w,v,f,!1,null,"2fba2078",null),y=$.exports,_={name:"LoginRegisterView",components:{LoginAndRegisterComponent:y}},x=_,k=(0,i.Z)(x,d,p,!1,null,"16191ea5",null),S=k.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ImageBrowser")],1)},E=[],D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[this.$root.$data.isLoggedIn?e._e():r("div",{attrs:{id:"login-prompt"}},[r("p",[e._v("You are not logged in yet. Please log in to browse.")])]),this.$root.$data.isLoggedIn?r("div",[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("APOD")]),e._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav mr-auto"}),r("label",{attrs:{id:"search-box-lable",for:"search-box"}},[e._v("Pick a date between 06/16/1995 and today")]),r("form",{staticClass:"form-inline my-2 my-lg-0"},[r("input",{staticClass:"form-control mr-sm-2",attrs:{type:"date",id:"search-box",name:"selector",min:"1995-06-16",placeholder:"Search","aria-label":"Search",max:this.$props.maxDate},domProps:{value:this.$root.$data.currentDate}}),r("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{id:"search-button",type:"submit"},on:{click:e.updateDate}},[e._v(" Explore! ")])])])]),r("div",{attrs:{id:"result"}},[r("h3",{attrs:{id:"result-header"}},[e._v(" Astronomy image of "+e._s(this.$root.$data.currentDate)+" "),r("button",{directives:[{name:"show",rawName:"v-show",value:!e.isSaved,expression:"!isSaved"}],attrs:{id:"save-button"},on:{click:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[e._v(" Save ")]),r("button",{directives:[{name:"show",rawName:"v-show",value:e.isSaved,expression:"isSaved"}],attrs:{id:"unsave-button"},on:{click:function(t){return t.preventDefault(),e.unsave.apply(null,arguments)}}},[e._v(" Unsave ")])]),r("h4",{attrs:{id:"media-title"}},[e._v(e._s(e.mediaTitle))]),r("div",{attrs:{id:"result-container"}},[r("div",{attrs:{id:"media-container"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:"image"===e.mediaType,expression:"mediaType === 'image'"}],attrs:{id:"image"}},[r("img",{attrs:{src:e.mediaURL}})]),r("div",{directives:[{name:"show",rawName:"v-show",value:"video"===e.mediaType,expression:"mediaType === 'video'"}],attrs:{id:"video"}},[r("iframe",{attrs:{src:e.mediaURL}})])]),r("div",{attrs:{id:"explanation-container"}},[r("p",[e._v(" "+e._s(e.explanation)+" ")])])])])]):e._e()])},L=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],I=(r(3112),r(2222),r(4553),r(561),r(9826),{name:"ImageBrowser",created:function(){this.setup()},props:{maxDate:String,mediaType:String,mediaTitle:String,mediaURL:String,explanation:String},data:function(){return{apiKey:"5NqF6jh9w3uVhB9rwEeUJfSIwBgcavPvzYEO7lH3"}},methods:{setup:function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear(),a="".concat(n,"-").concat(r,"-").concat(t);""===this.$root.$data.currentDate&&(this.$root.$data.currentDate=a),this.$props.maxDate=a,this.fetchMedia()},updateDate:function(e){e.preventDefault();var t=document.getElementById("search-box").value;this.$root.$data.currentDate=t,this.fetchMedia()},fetchMedia:function(){var e=this,t=this.$root.$data.currentDate,r="https://api.nasa.gov/planetary/apod?api_key=".concat(this.$data.apiKey,"&date=").concat(t);fetch(r).then((function(e){return e.json()})).then((function(t){console.log(t),e.$props.mediaType=t.media_type,e.$props.mediaTitle=t.title,e.$props.mediaURL=t.url,e.$props.explanation=t.explanation}))},save:function(){var e=this;return(0,m.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.$root.$data.currentFavorites.push(e.$root.$data.currentDate),t.next=4,h().put("/api/images/save",{username:e.$root.$data.currentUser,newImageDate:e.$root.$data.currentDate});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},unsave:function(){var e=this;return(0,m.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h().put("/api/images/unsave",{username:e.$root.$data.currentUser,toBeRemoved:e.$root.$data.currentDate});case 3:r=e.$root.$data.currentFavorites.findIndex((function(t){return t===e.$root.$data.currentDate})),console.log("index = ".concat(r)),-1!==r&&e.$root.$data.currentFavorites.splice(r,1),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},computed:{isSaved:function(){var e=this;return void 0!==this.$root.$data.currentFavorites.find((function(t){return t===e.$root.$data.currentDate}))}}}),R=I,T=(0,i.Z)(R,D,L,!1,null,"3a8181e2",null),j=T.exports,B={name:"BrowseView",components:{ImageBrowser:j}},A=B,O=(0,i.Z)(A,C,E,!1,null,"3ac64581",null),U=O.exports;n.Z.use(l.Z);var P=[{path:"/",name:"loginAndRegister",component:S},{path:"/saved",name:"saved",component:function(){return r.e(443).then(r.bind(r,1298))}},{path:"/browse",name:"browse",component:U}],Z=new l.Z({mode:"history",base:"/",routes:P}),F=Z;n.Z.config.productionTip=!1;var N={users:[{username:"admin",password:"1234"}],currentDate:"",currentImage:"",currentUser:"",currentFavorites:[],savedByUsers:[{username:"admin",favorites:["2022-03-15"]}],isLoggedIn:!1};new n.Z({router:F,data:N,render:function(e){return e(c)}}).$mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,o){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],o=e[l][2];for(var s=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/about-legacy.d97cf2b3.js"}}(),function(){r.miniCssF=function(e){return"css/about.0422274c.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="creative-project-4:";r.l=function(n,a,o,i){if(e[n])e[n].push(a);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+o),s.src=n),e[n]=[a];var p=function(t,r){s.onerror=s.onload=null,clearTimeout(v);var a=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(r)})),t)return t(r)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e=function(e,t,r,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode.removeChild(a),n(u)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){a=i[n],o=a.getAttribute("data-href");if(o===e||o===t)return a}},n=function(n){return new Promise((function(a,o){var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return a();e(n,s,a,o)}))},a={143:0};r.f.miniCss=function(e,t){var r={443:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,n){var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(r,n){a=e[t]=[r,n]}));n.push(a[2]=o);var i=r.p+r.u(t),s=new Error,u=function(n){if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};r.l(i,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,i=n[0],s=n[1],u=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(u)var l=u(r)}for(t&&t(n);c<i.length;c++)o=i[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(l)},n=self["webpackChunkcreative_project_4"]=self["webpackChunkcreative_project_4"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(1815)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.e172c5ba.js.map