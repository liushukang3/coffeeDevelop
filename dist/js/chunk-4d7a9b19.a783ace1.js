(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d7a9b19"],{"498a":function(t,e,n){"use strict";var o=n("23e7"),i=n("58a8").trim,r=n("c8d2");o({target:"String",proto:!0,forced:r("trim")},{trim:function(){return i(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var o=n("1d80"),i=n("5899"),r="["+i+"]",a=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),f=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},"73cf":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Register"},[n("van-nav-bar",{attrs:{title:"注册","left-text":"登录","right-text":"关闭"},on:{"click-left":function(e){return t.Gopage("Login")},"click-right":function(e){return t.Gopage("Homepage")}}}),t._m(0),n("van-form",{on:{submit:t.register}},[n("div",{ref:"form_box",staticClass:"form_box"},[n("van-field",{attrs:{type:"text",name:"用户名",label:"用户名",placeholder:"支持数字字母下划线(1-10位)",maxlength:"10"},scopedSlots:t._u([{key:"left-icon",fn:function(){return[n("i",{staticClass:"fa fa-user fa-fw fa-lg"})]},proxy:!0}]),model:{value:t.userInfo.nickName,callback:function(e){t.$set(t.userInfo,"nickName",e)},expression:"userInfo.nickName"}}),n("van-field",{attrs:{type:"text",name:"手机号",label:"手机号",placeholder:"请输入手机号",maxlength:"11"},scopedSlots:t._u([{key:"left-icon",fn:function(){return[n("i",{staticClass:"fa fa-phone-square fa-fw fa-lg"})]},proxy:!0}]),model:{value:t.userInfo.phone,callback:function(e){t.$set(t.userInfo,"phone",e)},expression:"userInfo.phone"}}),n("van-field",{attrs:{type:t.IsShow?"text":"password",name:"密码",label:"密码",placeholder:"请以字母开头(6-16位)",maxlength:"16"},on:{"click-right-icon":function(e){return t.showPas()}},scopedSlots:t._u([{key:"left-icon",fn:function(){return[n("i",{staticClass:"fa fa-lock fa-fw fa-lg"})]},proxy:!0},{key:"right-icon",fn:function(){return[n("i",{class:["fa","fa-fw","fa-lg",t.IsShow?"fa-eye":"fa-eye-slash"]})]},proxy:!0}]),model:{value:t.userInfo.password,callback:function(e){t.$set(t.userInfo,"password",e)},expression:"userInfo.password"}}),n("van-field",{attrs:{type:"text",name:"验证码",label:"验证码",placeholder:"请输入验证码",maxlength:"4"},scopedSlots:t._u([{key:"left-icon",fn:function(){return[n("i",{staticClass:"fa fa-envelope fa-fw fa-m"})]},proxy:!0},{key:"extra",fn:function(){return[n("div",{staticClass:"code-box",on:{click:t.refreshCode}},[n("s-identify",{attrs:{identifyCode:t.identifyCode}})],1)]},proxy:!0}]),model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),n("div",{staticClass:"btn_box"},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v(" 立 即 注 册 ")])],1)],1)])],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logo_box"},[o("img",{attrs:{src:n("9d64"),alt:"logo"}})])}],r=(n("498a"),n("cf13"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{attrs:{id:"s-canvas",width:t.contentWidth,height:t.contentHeight}})}),a=[],s=(n("cb29"),n("a9e3"),{name:"SIdentify",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:28},fontSizeMax:{type:Number,default:30},backgroundColorMin:{type:Number,default:255},backgroundColorMax:{type:Number,default:255},colorMin:{type:Number,default:0},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:100},lineColorMax:{type:Number,default:255},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:76},contentHeight:{type:Number,default:32}},methods:{randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},randomColor:function(t,e){var n=this.randomNum(t,e),o=this.randomNum(t,e),i=this.randomNum(t,e);return"rgb("+n+","+o+","+i+")"},drawPic:function(){var t=document.getElementById("s-canvas"),e=t.getContext("2d");e.textBaseline="bottom",e.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),e.fillRect(0,0,this.contentWidth,this.contentHeight);for(var n=0;n<this.identifyCode.length;n++)this.drawText(e,this.identifyCode[n],n);this.drawLine(e),this.drawDot(e)},drawText:function(t,e,n){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var o=(n+1)*(this.contentWidth/(this.identifyCode.length+1)),i=this.randomNum(this.fontSizeMax,this.contentHeight-4),r=this.randomNum(-20,20);t.translate(o,i),t.rotate(r*Math.PI/180),t.fillText(e,0,0),t.rotate(-r*Math.PI/180),t.translate(-o,-i)},drawLine:function(t){for(var e=0;e<5;e++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()},drawDot:function(t){for(var e=0;e<30;e++)t.fillStyle=this.randomColor(0,255),t.beginPath(),t.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),t.fill()}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()}}),f=s,c=n("2877"),l=Object(c["a"])(f,r,a,!1,null,"177fc978",null),u=l.exports,d=n("e3a8"),h={name:"Register",components:{SIdentify:u},data:function(){return{userInfo:{nickName:"",phone:"",password:""},IsShow:!1,identifyCodes:"1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz",identifyCode:"",code:""}},mounted:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4);for(var t=document.querySelectorAll(".van-field__control"),e=0;e<t.length;e++)t[e].autocomplete="off"},created:function(){this.refreshCode()},methods:{showPas:function(){this.IsShow=!this.IsShow},Gopage:function(t){this.$router.push({name:t})},randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},refreshCode:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},makeCode:function(t,e){for(var n=0;n<e;n++)this.identifyCode+=this.identifyCodes[this.randomNum(0,this.identifyCodes.length)]},register:function(){var t=this;if(d["a"].ValidFormFn(this.userInfo))if(this.code.trim().toLowerCase()==this.identifyCode.toLowerCase()){var e=Object.assign({},this.userInfo);e.appkey=this.appkey,this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/register",data:e}).then((function(e){t.$toast.clear(),100==e.data.code?(t.$toast.success({message:"注册成功,已自动跳转至登录页面...",forbidClick:!0,duration:1200}),t.$router.push({name:"Login"})):(t.$toast(e.data.msg),t.code="",t.userInfo.nickName="",t.userInfo.phone="",t.userInfo.password="",t.refreshCode())})).catch((function(e){t.$toast.clear(),t.$toast.fail({message:"注册失败...\n"+e,forbidClick:!0,duration:1200})}))}else this.$toast({message:"验证码不正确"}),this.code="",this.refreshCode()}}},m=h,p=Object(c["a"])(m,o,i,!1,null,null,null);e["default"]=p.exports},"81d5":function(t,e,n){"use strict";var o=n("7b0b"),i=n("23cb"),r=n("50c4");t.exports=function(t){var e=o(this),n=r(e.length),a=arguments.length,s=i(a>1?arguments[1]:void 0,n),f=a>2?arguments[2]:void 0,c=void 0===f?n:i(f,n);while(c>s)e[s++]=t;return e}},"9d64":function(t,e,n){t.exports=n.p+"img/logo.60eeb298.png"},a9e3:function(t,e,n){"use strict";var o=n("83ab"),i=n("da84"),r=n("94ca"),a=n("6eeb"),s=n("5135"),f=n("c6b6"),c=n("7156"),l=n("c04e"),u=n("d039"),d=n("7c73"),h=n("241c").f,m=n("06cf").f,p=n("9bf2").f,g=n("58a8").trim,b="Number",y=i[b],v=y.prototype,C=f(d(v))==b,w=function(t){var e,n,o,i,r,a,s,f,c=l(t,!1);if("string"==typeof c&&c.length>2)if(c=g(c),e=c.charCodeAt(0),43===e||45===e){if(n=c.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+c}for(r=c.slice(2),a=r.length,s=0;s<a;s++)if(f=r.charCodeAt(s),f<48||f>i)return NaN;return parseInt(r,o)}return+c};if(r(b,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var x,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(C?u((function(){v.valueOf.call(n)})):f(n)!=b)?c(new y(w(e)),n,N):w(e)},I=o?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;I.length>k;k++)s(y,x=I[k])&&!s(N,x)&&p(N,x,m(y,x));N.prototype=v,v.constructor=N,a(i,b,N)}},c8d2:function(t,e,n){var o=n("d039"),i=n("5899"),r="​᠎";t.exports=function(t){return o((function(){return!!i[t]()||r[t]()!=r||i[t].name!==t}))}},cb29:function(t,e,n){var o=n("23e7"),i=n("81d5"),r=n("44d2");o({target:"Array",proto:!0},{fill:i}),r("fill")},cf13:function(t,e,n){},e3a8:function(t,e,n){"use strict";n("e7e5");var o=n("d399");function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}var s=function(){function t(){i(this,t),this.validFromObj={nickName:{reg:/^[\u4e00-\u9fa5\w]{1,10}$/,msg:"用户名格式不正确"},phone:{reg:/^1[3-9]\d{9}$/,msg:"手机号格式不正确"},password:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"密码格式不正确"},oldPassword:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"密码格式不正确"},email:{reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,msg:"邮箱格式不正确"},code:{reg:/^\d{6}$/,msg:"验证格式正确"}}}return a(t,[{key:"ValidFormFn",value:function(t){for(var e in t)if(!this.validFromObj[e].reg.test(t[e]))return Object(o["a"])(this.validFromObj[e].msg),!1;return!0}}]),t}();e["a"]=new s}}]);
//# sourceMappingURL=chunk-4d7a9b19.a783ace1.js.map