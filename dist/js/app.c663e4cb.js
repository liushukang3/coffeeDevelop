(function(e){function n(n){for(var t,c,o=n[0],d=n[1],s=n[2],i=0,f=[];i<o.length;i++)c=o[i],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&f.push(u[c][0]),u[c]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);h&&h(n);while(f.length)f.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],t=!0,c=1;c<a.length;c++){var o=a[c];0!==u[o]&&(t=!1)}t&&(r.splice(n--,1),e=d(d.s=a[0]))}return e}var t={},c={app:0},u={app:0},r=[];function o(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-0612b641":"4ea0084e","chunk-284b464e":"4dc9bac3","chunk-2f5b1454":"9ff1ef5a","chunk-37d2b223":"6f10748b","chunk-45f40220":"9ca0ac30","chunk-4d7a9b19":"a783ace1","chunk-655d8caa":"d2c4c13c","chunk-6fae7778":"82d3faba","chunk-70de1ecc":"d39cbb70","chunk-79332a70":"7048c6fc","chunk-7def3c7c":"15c1e97d","chunk-7e042d94":"c4595b8e","chunk-83a1d9ae":"82e29541","chunk-b120ecf8":"668da363","chunk-d5d83d64":"b9ac2439"}[e]+".js"}function d(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.e=function(e){var n=[],a={"chunk-0612b641":1,"chunk-284b464e":1,"chunk-2f5b1454":1,"chunk-37d2b223":1,"chunk-45f40220":1,"chunk-4d7a9b19":1,"chunk-655d8caa":1,"chunk-6fae7778":1,"chunk-70de1ecc":1,"chunk-79332a70":1,"chunk-7def3c7c":1,"chunk-7e042d94":1,"chunk-83a1d9ae":1,"chunk-b120ecf8":1,"chunk-d5d83d64":1};c[e]?n.push(c[e]):0!==c[e]&&a[e]&&n.push(c[e]=new Promise((function(n,a){for(var t="css/"+({}[e]||e)+"."+{"chunk-0612b641":"e63c4672","chunk-284b464e":"bce52f2d","chunk-2f5b1454":"e09d31fd","chunk-37d2b223":"8c8e293e","chunk-45f40220":"797554ea","chunk-4d7a9b19":"d1e59b6d","chunk-655d8caa":"2192157d","chunk-6fae7778":"806d66cc","chunk-70de1ecc":"31bd86af","chunk-79332a70":"6612ebc6","chunk-7def3c7c":"ff3c6f94","chunk-7e042d94":"eff971a7","chunk-83a1d9ae":"bf568ab5","chunk-b120ecf8":"a5a4e9bb","chunk-d5d83d64":"d1e59b6d"}[e]+".css",u=d.p+t,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var s=r[o],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===t||i===u))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],i=s.getAttribute("data-href");if(i===t||i===u)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var t=n&&n.target&&n.target.src||u,r=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=t,delete c[e],h.parentNode.removeChild(h),a(r)},h.href=u;var l=document.getElementsByTagName("head")[0];l.appendChild(h)})).then((function(){c[e]=0})));var t=u[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,a){t=u[e]=[n,a]}));n.push(t[2]=r);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=o(e);var f=new Error;s=function(n){i.onerror=i.onload=null,clearTimeout(h);var a=u[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+t+": "+c+")",f.name="ChunkLoadError",f.type=t,f.request=c,a[1](f)}u[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(n)},d.m=e,d.c=t,d.d=function(e,n,a){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)d.d(a,t,function(n){return e[n]}.bind(null,t));return a},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="",d.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var h=i;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"56d7":function(e,n,a){"use strict";a.r(n);a("4de4"),a("fb6a"),a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("5246");var t=a("6b41"),c=(a("38d5"),a("772a")),u=(a("be7f"),a("565f")),r=(a("66b9"),a("b650")),o=(a("e7e5"),a("d399")),d=(a("537a"),a("ac28")),s=(a("a52c"),a("2ed4")),i=(a("c3a6"),a("ad06")),f=(a("7844"),a("5596")),h=(a("4b0a"),a("2bb1")),l=(a("66cf"),a("343b")),p=(a("570a"),a("1d36")),b=(a("a39e"),a("241e")),m=(a("4056"),a("44bf")),k=(a("0cc8"),a("3104")),g=(a("93ac"),a("bb33")),v=(a("591c"),a("7713")),y=(a("ef6f"),a("82a8")),w=(a("0209"),a("7d5e")),P=(a("f06a"),a("20fb")),j=(a("2994"),a("2bdd")),x=(a("acb7"),a("67bb")),E=(a("e17f"),a("2241")),O=(a("869a"),a("6869")),S=(a("91d5"),a("f0ca")),C=(a("9cb7"),a("66fd")),M=(a("3c32"),a("417e")),A=(a("a909"),a("3acc")),D=(a("da3c"),a("0b33")),T=(a("bda7"),a("5e46")),_=(a("4467"),a("c36e")),L=(a("be39"),a("efa0")),N=(a("2cbd"),a("ab2c")),R=(a("e930"),a("8f80")),B=(a("c194"),a("7744")),F=(a("0653"),a("34e9")),H=(a("8a58"),a("e41f")),U=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),V=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},$=[],q=(a("7c55"),a("2877")),I={},J=Object(q["a"])(I,V,$,!1,null,null,null),K=J.exports,G=(a("d3b7"),a("8c4f")),Q=G["a"].prototype.push;G["a"].prototype.push=function(e){return Q.call(this,e).catch((function(e){return e}))},U["a"].use(G["a"]);var W=[{path:"/register",name:"Register",component:function(){return a.e("chunk-4d7a9b19").then(a.bind(null,"73cf"))}},{path:"/login",name:"Login",component:function(){return a.e("chunk-d5d83d64").then(a.bind(null,"a55b"))}},{path:"/main",name:"Main",component:function(){return a.e("chunk-70de1ecc").then(a.bind(null,"cd56"))},children:[{path:"/homepage",name:"Homepage",component:function(){return a.e("chunk-7e042d94").then(a.bind(null,"dd16"))}},{path:"/shopcart",name:"Shopcart",component:function(){return a.e("chunk-b120ecf8").then(a.bind(null,"1e89"))}},{path:"/order",name:"Order",component:function(){return a.e("chunk-45f40220").then(a.bind(null,"62d5"))}},{path:"/mypage",name:"Mypage",component:function(){return a.e("chunk-655d8caa").then(a.bind(null,"6382"))}}]},{path:"/detail",name:"Detail",component:function(){return a.e("chunk-83a1d9ae").then(a.bind(null,"c84b"))}},{path:"/editAddress/:isPay?/:sids?/:aid?",name:"EditAddress",component:function(){return a.e("chunk-6fae7778").then(a.bind(null,"834d"))}},{path:"/myAddress/:choose?/:sids?:aid?/",name:"MyAddress",component:function(){return a.e("chunk-7def3c7c").then(a.bind(null,"a7e5"))}},{path:"/forget",name:"Forget",component:function(){return a.e("chunk-284b464e").then(a.bind(null,"4f3a"))}},{path:"/pay/:sids?/:aid?",name:"Pay",component:function(){return a.e("chunk-2f5b1454").then(a.bind(null,"76a1"))}},{path:"/useManage",name:"UseManage",component:function(){return a.e("chunk-37d2b223").then(a.bind(null,"d29d"))}},{path:"/collection",name:"Collection",component:function(){return a.e("chunk-79332a70").then(a.bind(null,"13a0"))}},{path:"/safeCenter",name:"SafeCenter",component:function(){return a.e("chunk-0612b641").then(a.bind(null,"4944"))}},{path:"*",redirect:{name:"Homepage"}}],X=new G["a"]({routes:W}),Y=X,Z=a("2f62"),z={bannerData:[],sideData:[],productsData:[],IsActiveKey:{}},ee={saveData:function(e,n){e[n.dataType]=n.dataValue},saveProData:function(e,n){e.productsData[n.dataType]=n.dataValue}},ne={namespaced:!0,state:z,mutations:ee};U["a"].use(Z["b"]);var ae=new Z["b"].Store({modules:{HomePageModule:ne}}),te=a("bc3a"),ce=a.n(te),ue=a("a7fe"),re=a.n(ue);a("1f54"),a("499a");U["a"].use(t["a"]).use(c["a"]).use(u["a"]).use(r["a"]).use(o["a"]).use(d["a"]).use(s["a"]).use(i["a"]).use(f["a"]).use(h["a"]).use(l["a"]).use(p["a"]).use(b["a"]).use(m["a"]).use(k["a"]).use(g["a"]).use(v["a"]).use(y["a"]).use(w["a"]).use(P["a"]).use(j["a"]).use(x["a"]).use(E["a"]).use(O["a"]).use(S["a"]).use(C["a"]).use(M["a"]).use(A["a"]).use(D["a"]).use(T["a"]).use(_["a"]).use(L["a"]).use(N["a"]).use(R["a"]).use(B["a"]).use(F["a"]).use(H["a"]),U["a"].use(re.a,ce.a),ce.a.defaults.baseURL="http://www.kangliuyong.com:10002",ce.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",ce.a.interceptors.request.use((function(e){if("post"==e.method){var n="";for(var a in e.data)n+=a+"="+e.data[a]+"&";e.data=n.slice(0,-1)}return e})),U["a"].config.productionTip=!1,U["a"].prototype.appkey="U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",U["a"].filter("formatDate",(function(e,n){var a=new Date(e),t=a.getFullYear();if(/(y+)/.test(n)){var c=RegExp.$1;n=n.replace(c,t)}var u={M:a.getMonth()+1,d:a.getDate(),h:a.getHours(),m:a.getMinutes(),s:a.getSeconds()};for(var r in u){var o=new RegExp("(".concat(r,"+)"));if(o.test(n)){var d=RegExp.$1,s=u[r]>=10?u[r]:2==d.length?"0"+u[r]:u[r];n=n.replace(d,s)}}return n})),new U["a"]({router:Y,store:ae,render:function(e){return e(K)}}).$mount("#app")},"5ba8":function(e,n,a){},"7c55":function(e,n,a){"use strict";var t=a("5ba8"),c=a.n(t);c.a}});
//# sourceMappingURL=app.c663e4cb.js.map