(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e042d94"],{"057f":function(t,e,a){var r=a("fc6a"),n=a("241c").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return n(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?o(t):n(r(t))}},"159b":function(t,e,a){var r=a("da84"),n=a("fdbc"),i=a("17c2"),s=a("9112");for(var o in n){var c=r[o],u=c&&c.prototype;if(u&&u.forEach!==i)try{s(u,"forEach",i)}catch(f){u.forEach=i}}},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,n=a("a640"),i=a("ae40"),s=n("forEach"),o=i("forEach");t.exports=s&&o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"3e4e":function(t,e,a){},4160:function(t,e,a){"use strict";var r=a("23e7"),n=a("17c2");r({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"746f":function(t,e,a){var r=a("428f"),n=a("5135"),i=a("e538"),s=a("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});n(e,t)||s(e,t,{value:i.f(t)})}},a4d3:function(t,e,a){"use strict";var r=a("23e7"),n=a("da84"),i=a("d066"),s=a("c430"),o=a("83ab"),c=a("4930"),u=a("fdbf"),f=a("d039"),l=a("5135"),d=a("e8b5"),p=a("861d"),b=a("825a"),h=a("7b0b"),y=a("fc6a"),v=a("c04e"),g=a("5c6c"),m=a("7c73"),O=a("df75"),S=a("241c"),w=a("057f"),D=a("7418"),k=a("06cf"),P=a("9bf2"),j=a("d1e7"),L=a("9112"),C=a("6eeb"),E=a("5692"),T=a("f772"),x=a("d012"),I=a("90e3"),N=a("b622"),$=a("e538"),M=a("746f"),A=a("d44e"),G=a("69f3"),V=a("b727").forEach,_=T("hidden"),H="Symbol",K="prototype",F=N("toPrimitive"),J=G.set,R=G.getterFor(H),B=Object[K],q=n.Symbol,z=i("JSON","stringify"),Q=k.f,W=P.f,U=w.f,X=j.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),at=E("wks"),rt=n.QObject,nt=!rt||!rt[K]||!rt[K].findChild,it=o&&f((function(){return 7!=m(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,a){var r=Q(B,e);r&&delete B[e],W(t,e,a),r&&t!==B&&W(B,e,r)}:W,st=function(t,e){var a=Y[t]=m(q[K]);return J(a,{type:H,tag:t,description:e}),o||(a.description=e),a},ot=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ct=function(t,e,a){t===B&&ct(Z,e,a),b(t);var r=v(e,!0);return b(a),l(Y,r)?(a.enumerable?(l(t,_)&&t[_][r]&&(t[_][r]=!1),a=m(a,{enumerable:g(0,!1)})):(l(t,_)||W(t,_,g(1,{})),t[_][r]=!0),it(t,r,a)):W(t,r,a)},ut=function(t,e){b(t);var a=y(e),r=O(a).concat(bt(a));return V(r,(function(e){o&&!lt.call(a,e)||ct(t,e,a[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=v(t,!0),a=X.call(this,e);return!(this===B&&l(Y,e)&&!l(Z,e))&&(!(a||!l(this,e)||!l(Y,e)||l(this,_)&&this[_][e])||a)},dt=function(t,e){var a=y(t),r=v(e,!0);if(a!==B||!l(Y,r)||l(Z,r)){var n=Q(a,r);return!n||!l(Y,r)||l(a,_)&&a[_][r]||(n.enumerable=!0),n}},pt=function(t){var e=U(y(t)),a=[];return V(e,(function(t){l(Y,t)||l(x,t)||a.push(t)})),a},bt=function(t){var e=t===B,a=U(e?Z:y(t)),r=[];return V(a,(function(t){!l(Y,t)||e&&!l(B,t)||r.push(Y[t])})),r};if(c||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),a=function(t){this===B&&a.call(Z,t),l(this,_)&&l(this[_],e)&&(this[_][e]=!1),it(this,e,g(1,t))};return o&&nt&&it(B,e,{configurable:!0,set:a}),st(e,t)},C(q[K],"toString",(function(){return R(this).tag})),C(q,"withoutSetter",(function(t){return st(I(t),t)})),j.f=lt,P.f=ct,k.f=dt,S.f=w.f=pt,D.f=bt,$.f=function(t){return st(N(t),t)},o&&(W(q[K],"description",{configurable:!0,get:function(){return R(this).description}}),s||C(B,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),V(O(at),(function(t){M(t)})),r({target:H,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var a=q(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!o},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),r({target:"Object",stat:!0,forced:f((function(){D.f(1)}))},{getOwnPropertySymbols:function(t){return D.f(h(t))}}),z){var ht=!c||f((function(){var t=q();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,a){var r,n=[t],i=1;while(arguments.length>i)n.push(arguments[i++]);if(r=e,(p(e)||void 0!==t)&&!ot(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ot(e))return e}),n[1]=e,z.apply(null,n)}})}q[K][F]||L(q[K],F,q[K].valueOf),A(q,H),x[_]=!0},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){throw 1},1)}))}},ade3:function(t,e,a){"use strict";function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return r}))},b64b:function(t,e,a){var r=a("23e7"),n=a("7b0b"),i=a("df75"),s=a("d039"),o=s((function(){i(1)}));r({target:"Object",stat:!0,forced:o},{keys:function(t){return i(n(t))}})},dbb4:function(t,e,a){var r=a("23e7"),n=a("83ab"),i=a("56ef"),s=a("fc6a"),o=a("06cf"),c=a("8418");r({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,a,r=s(t),n=o.f,u=i(r),f={},l=0;while(u.length>l)a=n(r,e=u[l++]),void 0!==a&&c(f,e,a);return f}})},dd16:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Homepage"},[a("div",{staticClass:"banner-box"},[a("van-swipe",{attrs:{"indicator-color":"#1d807b",autoplay:3e3}},t._l(t.bannerImages,(function(t,e){return a("van-swipe-item",{key:e},[a("img",0==e?{attrs:{src:t.bannerImg}}:{directives:[{name:"lazy",rawName:"v-lazy",value:t.bannerImg,expression:"item.bannerImg"}]})])})),1)],1),a("div",{staticClass:"menu-box"},[a("div",{staticClass:"left-nav"},[a("van-sidebar",{on:{change:t.getProducts},model:{value:t.IsActiveKey.key,callback:function(e){t.$set(t.IsActiveKey,"key",e)},expression:"IsActiveKey.key"}},t._l(t.sideNav,(function(t,e){return a("van-sidebar-item",{key:e,attrs:{title:t.typeDesc}})})),1)],1),a("div",{staticClass:"right-list"},[a("div",{staticClass:"right-list-box"},[a("ul",t._l(t.products,(function(e,r){return a("li",{key:r,class:["list-item-box",r==t.products.length-1&&t.products.length%2!=0?"last-list-item":""],on:{click:function(a){return t.GoDetail(e)}}},[a("div",{staticClass:"list-item"},[a("div",{staticClass:"img-box"},[a("span",{style:{background:"url("+e.smallImg+") center center / cover no-repeat"}})]),a("div",{staticClass:"list-item-titleCn"},[t._v(t._s(e.name))]),a("div",{staticClass:"list-item-titleEn"},[t._v(t._s(e.enname))]),a("div",{staticClass:"list-item-price"},[t._v("¥"+t._s(e.price))])])])})),0)])])])])},n=[],i=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3"));function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}a("3e4e");var c=a("2f62"),u=Object(c["a"])("HomePageModule"),f=u.mapState,l=u.mapMutations,d={name:"Homepage",data:function(){return{bannerImages:[],sideNav:[],products:[]}},created:function(){this.getBanner(),this.getSide()},computed:o({},f(["bannerData","sideData","productsData","IsActiveKey"])),methods:o(o({},l(["saveData","saveProData"])),{},{getBanner:function(){var t=this;this.bannerData.length>0&&(this.bannerImages=this.bannerData),this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/banner",params:{appkey:this.appkey}}).then((function(e){t.$toast.clear(),300==e.data.code&&(t.bannerImages=e.data.result,t.saveData({dataType:"bannerData",dataValue:e.data.result}))})).catch((function(e){t.$toast.clear(),t.$toast.fail({message:"轮播图加载失败...\n"+e,forbidClick:!0,duration:1200})}))},getSide:function(){var t=this;if(this.sideData.length>0)return this.sideNav=this.sideData,void this.getProducts(this.IsActiveKey.key);this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/type",params:{appkey:this.appkey}}).then((function(e){if(t.$toast.clear(),400==e.data.code){e.data.result.unshift({id:0,type:"isHot",typeDesc:"热销推荐"}),t.sideNav=e.data.result,t.saveData({dataType:"sideData",dataValue:e.data.result});var a=0;t.getProducts(a)}})).catch((function(e){t.$toast.clear(),t.$toast.fail({message:"商品类型加载失败...\n"+e,forbidClick:!0,duration:1200})}))},getProducts:function(t){var e=this;this.saveData({dataType:"IsActiveKey",dataValue:{key:t,type:this.sideData[t].type}});var a,r,n=this.IsActiveKey.type;this.productsData[n]?this.products=this.productsData[n]:(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),0==t?(a="isHot",r=1):(a="type",r=this.sideNav[t].type),this.axios({method:"GET",url:"/typeProducts",params:{appkey:this.appkey,key:a,value:r}}).then((function(t){e.$toast.clear(),500==t.data.code&&(e.products=t.data.result),e.saveProData({dataType:n,dataValue:t.data.result})})).catch((function(t){e.$toast.clear(),e.$toast.fail({message:"商品类型加载失败...\n"+t,forbidClick:!0,duration:1200})})))},GoDetail:function(t){this.$router.push({name:"Detail",query:{pid:t.pid}})}})},p=d,b=a("2877"),h=Object(b["a"])(p,r,n,!1,null,null,null);e["default"]=h.exports},e439:function(t,e,a){var r=a("23e7"),n=a("d039"),i=a("fc6a"),s=a("06cf").f,o=a("83ab"),c=n((function(){s(1)})),u=!o||c;r({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return s(i(t),e)}})},e538:function(t,e,a){var r=a("b622");e.f=r},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-7e042d94.c4595b8e.js.map