(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70de1ecc"],{1276:function(t,e,n){"use strict";var a=n("d784"),i=n("44e7"),s=n("825a"),l=n("1d80"),c=n("4840"),r=n("8aa5"),o=n("50c4"),u=n("14c3"),v=n("9263"),h=n("d039"),f=[].push,d=Math.min,p=4294967295,g=!h((function(){return!RegExp(p,"y")}));a("split",2,(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=String(l(this)),s=void 0===n?p:n>>>0;if(0===s)return[];if(void 0===t)return[a];if(!i(t))return e.call(a,t,s);var c,r,o,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=new RegExp(t.source,h+"g");while(c=v.call(g,a)){if(r=g.lastIndex,r>d&&(u.push(a.slice(d,c.index)),c.length>1&&c.index<a.length&&f.apply(u,c.slice(1)),o=c[0].length,d=r,u.length>=s))break;g.lastIndex===c.index&&g.lastIndex++}return d===a.length?!o&&g.test("")||u.push(""):u.push(a.slice(d)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=l(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,i,n):a.call(String(i),e,n)},function(t,i){var l=n(a,t,this,i,a!==e);if(l.done)return l.value;var v=s(t),h=String(this),f=c(v,RegExp),m=v.unicode,b=(v.ignoreCase?"i":"")+(v.multiline?"m":"")+(v.unicode?"u":"")+(g?"y":"g"),A=new f(g?v:"^(?:"+v.source+")",b),x=void 0===i?p:i>>>0;if(0===x)return[];if(0===h.length)return null===u(A,h)?[h]:[];var w=0,y=0,C=[];while(y<h.length){A.lastIndex=g?y:0;var D,R=u(A,g?h:h.slice(y));if(null===R||(D=d(o(A.lastIndex+(g?0:y)),h.length))===w)y=r(h,y,m);else{if(C.push(h.slice(w,y)),C.length===x)return C;for(var k=1;k<=R.length-1;k++)if(C.push(R[k]),C.length===x)return C;y=w=D}}return C.push(h.slice(w)),C}]}),!g)},"4c23":function(t,e,n){},"85d5":function(t,e,n){"use strict";var a=n("4c23"),i=n.n(a);i.a},cd56:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"main-body"},[n("router-view")],1),n("div",{staticClass:"main-bottom"},[n("van-tabbar",{attrs:{"active-color":"#1d807b","inactive-color":"#666666"},on:{change:t.onChange},model:{value:t.navActive,callback:function(e){t.navActive=e},expression:"navActive"}},t._l(t.navData,(function(e,a){return n("van-tabbar-item",{key:a,class:{isActive:e.isActive},attrs:{name:e.Routename},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{class:["fa","fa-fw",e.className]})]},proxy:!0}],null,!0)},[n("span",[t._v(t._s(e.title))])])})),1)],1)])},i=[],s=(n("fb6a"),n("ac1f"),n("1276"),{name:"Main",data:function(){return{navActive:"",navData:[{title:"首页",Routename:"Homepage",className:"fa-home",isActive:!0},{title:"购物车",Routename:"Shopcart",className:"fa-shopping-cart",isActive:!1},{title:"订单",Routename:"Order",className:"fa-file-text f-order",isActive:!1},{title:"我的",Routename:"Mypage",className:"fa-user",isActive:!1}]}},created:function(){var t=location.hash,e=t.split("/"),n=e[e.length-1];this.navActive=n.slice(0,1).toUpperCase()+n.slice(1);for(var a=0;a<this.navData.length;a++)this.navData[a].isActive=!1,n.toLowerCase()!=this.navData[a].Routename.toLowerCase()||(this.navData[a].isActive=!0)},methods:{onChange:function(t){for(var e=0;e<this.navData.length;e++)this.navData[e].isActive=!1,this.navData[e].Routename==this.navActive&&(this.navData[e].isActive=!0,this.navActive=t,this.$router.push({name:this.navActive}))}}}),l=s,c=(n("85d5"),n("2877")),r=Object(c["a"])(l,a,i,!1,null,"33efa444",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-70de1ecc.d39cbb70.js.map