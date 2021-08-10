/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{220:function(t,e,n){!function(t){"use strict";var e={defaultContainerElement:null,defaultIconPack:"mdi",defaultIconComponent:null,defaultIconPrev:"chevron-left",defaultIconNext:"chevron-right",defaultLocale:void 0,defaultDialogConfirmText:null,defaultDialogCancelText:null,defaultSnackbarDuration:3500,defaultSnackbarPosition:null,defaultToastDuration:2e3,defaultToastPosition:null,defaultNotificationDuration:2e3,defaultNotificationPosition:null,defaultTooltipType:"is-primary",defaultTooltipDelay:null,defaultSidebarDelay:null,defaultInputAutocomplete:"on",defaultDateFormatter:null,defaultDateParser:null,defaultDateCreator:null,defaultTimeCreator:null,defaultDayNames:null,defaultMonthNames:null,defaultFirstDayOfWeek:null,defaultUnselectableDaysOfWeek:null,defaultTimeFormatter:null,defaultTimeParser:null,defaultModalCanCancel:["escape","x","outside","button"],defaultModalScroll:null,defaultDatepickerMobileNative:!0,defaultTimepickerMobileNative:!0,defaultNoticeQueue:!0,defaultInputHasCounter:!0,defaultTaginputHasCounter:!0,defaultUseHtml5Validation:!0,defaultDropdownMobileModal:!0,defaultFieldLabelPosition:null,defaultDatepickerYearsRange:[-100,10],defaultDatepickerNearbyMonthDays:!0,defaultDatepickerNearbySelectableMonthDays:!1,defaultDatepickerShowWeekNumber:!1,defaultDatepickerWeekNumberClickable:!1,defaultDatepickerMobileModal:!0,defaultTrapFocus:!0,defaultAutoFocus:!0,defaultButtonRounded:!1,defaultSwitchRounded:!0,defaultCarouselInterval:3500,defaultTabsExpanded:!1,defaultTabsAnimated:!0,defaultTabsType:null,defaultStatusIcon:!0,defaultProgrammaticPromise:!1,defaultLinkTags:["a","button","input","router-link","nuxt-link","n-link","RouterLink","NuxtLink","NLink"],defaultImageWebpFallback:null,defaultImageLazy:!0,defaultImageResponsive:!0,defaultImageRatio:null,defaultImageSrcsetFormatter:null,customIconPacks:null};function n(){return new Promise((function(t){var image=new Image;image.onerror=function(){return t(!1)},image.onload=function(){return t(1===image.width)},image.src="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA="})).catch((function(){return!1}))}var script={name:"BImage",props:{src:String,alt:String,srcFallback:String,webpFallback:{type:String,default:function(){return e.defaultImageWebpFallback}},lazy:{type:Boolean,default:function(){return e.defaultImageLazy}},responsive:{type:Boolean,default:function(){return e.defaultImageResponsive}},ratio:{type:String,default:function(){return e.defaultImageRatio}},placeholder:String,srcset:String,srcsetSizes:Array,srcsetFormatter:{type:Function,default:function(t,n,r){return"function"==typeof e.defaultImageSrcsetFormatter?e.defaultImageSrcsetFormatter(t,n):r.formatSrcset(t,n)}},rounded:{type:Boolean,default:!1},captionFirst:{type:Boolean,default:!1}},data:function(){return{clientWidth:0,webpSupportVerified:!1,webpSupported:!1,useNativeLazy:!1,observer:null,inViewPort:!1,bulmaKnownRatio:["square","1by1","5by4","4by3","3by2","5by3","16by9","b2y1","3by1","4by5","3by4","2by3","3by5","9by16","1by2","1by3"],loaded:!1,failed:!1}},computed:{ratioPattern:function(){return new RegExp(/([0-9]+)by([0-9]+)/)},hasRatio:function(){return this.ratio&&this.ratioPattern.test(this.ratio)},figureClasses:function(){var t={image:this.responsive};return this.hasRatio&&this.bulmaKnownRatio.indexOf(this.ratio)>=0&&(t["is-".concat(this.ratio)]=!0),t},figureStyles:function(){if(this.hasRatio&&this.bulmaKnownRatio.indexOf(this.ratio)<0){var t=this.ratioPattern.exec(this.ratio);return{paddingTop:"".concat(t[2]/t[1]*100,"%")}}},imgClasses:function(){return{"is-rounded":this.rounded,"has-ratio":this.hasRatio}},srcExt:function(){return this.getExt(this.src)},isWepb:function(){return"webp"===this.srcExt},computedSrc:function(){var t=this.src;return this.failed&&this.srcFallback&&(t=this.srcFallback),!this.webpSupported&&this.isWepb&&this.webpFallback?this.webpFallback.startsWith(".")?t.replace(/\.webp/gi,"".concat(this.webpFallback)):this.webpFallback:t},computedWidth:function(){if(this.responsive&&this.clientWidth>0)return this.clientWidth},computedNativeLazy:function(){if(this.lazy&&this.useNativeLazy)return"lazy"},isDisplayed:function(){return(this.webpSupportVerified||!this.isWepb)&&(!this.lazy||this.useNativeLazy||this.inViewPort)},placeholderExt:function(){if(this.placeholder)return this.getExt(this.placeholder)},isPlaceholderWepb:function(){if(this.placeholder)return"webp"===this.placeholderExt},computedPlaceholder:function(){return!this.webpSupported&&this.isPlaceholderWepb&&this.webpFallback&&this.webpFallback.startsWith(".")?this.placeholder.replace(/\.webp/gi,"".concat(this.webpFallback)):this.placeholder},isPlaceholderDisplayed:function(){return!this.loaded&&(this.$slots.placeholder||this.placeholder&&(this.webpSupportVerified||!this.isPlaceholderWepb))},computedSrcset:function(){var t=this;return this.srcset?!this.webpSupported&&this.isWepb&&this.webpFallback&&this.webpFallback.startsWith(".")?this.srcset.replace(/\.webp/gi,"".concat(this.webpFallback)):this.srcset:this.srcsetSizes&&Array.isArray(this.srcsetSizes)&&this.srcsetSizes.length>0?this.srcsetSizes.map((function(e){return"".concat(t.srcsetFormatter(t.computedSrc,e,t)," ").concat(e,"w")})).join(","):void 0},computedSizes:function(){if(this.computedSrcset&&this.computedWidth)return"".concat(this.computedWidth,"px")},isCaptionFirst:function(){return this.$slots.caption&&this.captionFirst},isCaptionLast:function(){return this.$slots.caption&&!this.captionFirst}},methods:{getExt:function(t){return t?(arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?t:t.split("?")[0]).split(".").pop():""},setWidth:function(){this.clientWidth=this.$el.clientWidth},formatSrcset:function(t,e){var n=this.getExt(t,!1),r=t.split(".").slice(0,-1).join(".");return"".concat(r,"-").concat(e,".").concat(n)},onLoad:function(t){this.loaded=!0,this.emit("load",t)},onError:function(t){this.emit("error",t),this.failed||(this.failed=!0)},emit:function(t,e){var n=e.target;this.$emit(t,e,n.currentSrc||n.src||this.computedSrc)}},created:function(){var t=this;if(this.isWepb&&n().then((function(e){t.webpSupportVerified=!0,t.webpSupported=e})),this.lazy){var e="undefined"!=typeof window&&"HTMLImageElement"in window&&"loading"in HTMLImageElement.prototype,r="undefined"!=typeof window&&"IntersectionObserver"in window;!e&&r?this.observer=new IntersectionObserver((function(e){var n=e[0],r=n.target;n.isIntersecting&&!t.inViewPort&&(t.inViewPort=!0,t.observer.unobserve(r))})):this.useNativeLazy=!0}},mounted:function(){this.lazy&&this.observer&&this.observer.observe(this.$el),this.setWidth(),"undefined"!=typeof window&&window.addEventListener("resize",this.setWidth)},beforeDestroy:function(){this.observer&&this.observer.disconnect(),"undefined"!=typeof window&&window.removeEventListener("resize",this.setWidth)}};function r(template,style,script,t,e,n,r,o,l,c){"boolean"!=typeof r&&(l=o,o=r,r=!1);var d,f="function"==typeof script?script.options:script;if(template&&template.render&&(f.render=template.render,f.staticRenderFns=template.staticRenderFns,f._compiled=!0,e&&(f.functional=!0)),t&&(f._scopeId=t),n?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},f._ssrRegister=d):style&&(d=r?function(){style.call(this,c(this.$root.$options.shadowRoot))}:function(t){style.call(this,o(t))}),d)if(f.functional){var h=f.render;f.render=function(t,e){return d.call(e),h(t,e)}}else{var m=f.beforeCreate;f.beforeCreate=m?[].concat(m,d):[d]}return script}const o=void 0,l=void 0,c=void 0;var d,f=r({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"b-image-wrapper",class:t.figureClasses,style:t.figureStyles},[t.isCaptionFirst?n("figcaption",[t._t("caption")],2):t._e(),n("transition",{attrs:{name:"fade"}},[t.isDisplayed?n("img",{class:t.imgClasses,attrs:{srcset:t.computedSrcset,src:t.computedSrc,alt:t.alt,width:t.computedWidth,sizes:t.computedSizes,loading:t.computedNativeLazy},on:{load:t.onLoad,error:t.onError}}):t._e()]),n("transition",{attrs:{name:"fade"}},[t.isPlaceholderDisplayed?t._t("placeholder",[n("img",{staticClass:"placeholder",class:t.imgClasses,attrs:{src:t.computedPlaceholder,alt:t.alt}})]):t._e()],2),t.isCaptionLast?n("figcaption",[t._t("caption")],2):t._e()],1)},staticRenderFns:[]},o,script,l,!1,c,void 0,void 0),h=function(t,component){t.component(component.name,component)},m={install:function(t){h(t,f)}};d=m,"undefined"!=typeof window&&window.Vue&&window.Vue.use(d),t.BImage=f,t.default=m,Object.defineProperty(t,"__esModule",{value:!0})}(e)}}]);