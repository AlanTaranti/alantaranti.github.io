(function(e){function t(t){for(var r,i,c=t[0],s=t[1],l=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1100:function(e,t,n){e.exports=n.p+"img/background.edf93d61.jpg"},"218e":function(e,t,n){"use strict";var r=n("b3b9"),a=n.n(r);a.a},"5d90":function(e,t,n){e.exports=n.p+"img/alan.ef63fb22.jpg"},b3b9:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("router-view")],1)],1)},o=[],i=r["a"].extend({name:"App"}),c=i,s=n("2877"),l=n("6544"),u=n.n(l),f=n("7496"),p=n("a75b"),d=Object(s["a"])(c,a,o,!1,null,null,null),v=d.exports;u()(d,{VApp:f["a"],VContent:p["a"]});var b=n("9483");Object(b["a"])("".concat("/","service-worker.js"),{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var g=n("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-parallax",{staticClass:"h100",attrs:{height:"100%",dark:"",src:n("1100")}},[r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[r("cartao-visita")],1)],1)],1)],1)},m=[],w=n("9ab4"),y=n("2fe1"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"elevation-12 pa-3"},[r("v-card-title",[r("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[r("v-col",{attrs:{cols:"4"}},[r("v-avatar",{attrs:{height:"120",width:"120"}},[r("v-img",{attrs:{src:n("5d90")}})],1)],1)],1)],1),r("v-card-text",{staticClass:"text-center"},[r("p",{staticClass:"headline font-weight-bold"},[e._v(" ALAN TARANTI ")]),r("p",{staticClass:"title"},[e._v(" Desenvolvedor Web ")])]),r("v-card-actions",[r("v-row",{staticClass:"mb-4",attrs:{align:"center",justify:"center"}},e._l(e.botoes,(function(t,n){return r("v-col",{key:n,staticClass:"text-center"},[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var a=n.hover;return[r("v-btn",{attrs:{fab:"",outlined:"",target:"_blank",elevation:a?6:0,color:t.cor,href:t.link}},[r("v-icon",{attrs:{large:"",color:t.cor}},[e._v(" "+e._s(t.icone)+" ")])],1)]}}],null,!0)})],1)})),1)],1)],1)},j=[],x=(n("e260"),n("ddb0"),class extends r["a"]{constructor(){super(...arguments),this.botoes=[{icone:"fab fa-whatsapp",cor:"green",link:"https://wa.me/5567993401782?text=Oi%20Alan"},{icone:"fas fa-envelope",cor:"light-blue",link:"mailto:alan.taranti@gmail.com"},{icone:"fab fa-github",cor:"grey darken-3",link:"https://github.com/AlanTaranti"},{icone:"fab fa-linkedin-in",cor:"blue darken-3",link:"https://www.linkedin.com/in/alan-taranti/"},{icone:"fab fa-instagram",cor:"purple darken-2",link:"https://instagram.com/alantaranti"}]}});x=Object(w["a"])([y["a"]],x);var C=x,O=C,_=n("8212"),V=n("8336"),A=n("b0af"),F=n("99d9"),P=n("62ad"),S=n("ce87"),T=n("132d"),N=n("adda"),E=n("0fd9"),M=Object(s["a"])(O,k,j,!1,null,null,null),$=M.exports;u()(M,{VAvatar:_["a"],VBtn:V["a"],VCard:A["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:F["c"],VCol:P["a"],VHover:S["a"],VIcon:T["a"],VImg:N["a"],VRow:E["a"]});var B=class extends r["a"]{};B=Object(w["a"])([Object(y["a"])({components:{CartaoVisita:$}})],B);var I=B,R=I,H=(n("218e"),n("a523")),J=n("8b9c"),q=Object(s["a"])(R,h,m,!1,null,"78d76f32",null),D=q.exports;u()(q,{VCol:P["a"],VContainer:H["a"],VParallax:J["a"],VRow:E["a"]}),r["a"].use(g["a"]);var L=[{path:"/",name:"Home",component:D}],W=new g["a"]({mode:"history",base:"/",routes:L}),z=W,G=n("2f62");r["a"].use(G["a"]);var K=new G["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Q=n("f309"),U=n("df7f");r["a"].use(Q["a"]);var X=new Q["a"]({theme:{themes:{light:{primary:"#4CAF50",secondary:"#455A64",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{pt:U["a"]},current:"pt"},icons:{iconfont:"fa"}});r["a"].config.productionTip=!1,new r["a"]({router:z,store:K,vuetify:X,render:e=>e(v)}).$mount("#app")}});
//# sourceMappingURL=app.01ff7bdf.js.map