(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{347:function(n,t,e){},377:function(n,t,e){"use strict";var o=e(347);e.n(o).a},402:function(n,t,e){"use strict";e.r(t);var o=e(400),a={name:"CarbonAds",watch:{$route:function(n,t){n.fullPath!==t.fullPath&&this.$el.querySelector("#carbonads")&&(this.$el.innerHTML="",this.load())}},mounted:function(){this.load()},methods:{load:function(){var n=document.createElement("script");n.id="_carbonads_js",n.src="//cdn.carbonads.com/carbon.js?serve=".concat("CE7IC27U","&placement=").concat("fusejsio"),this.$el.appendChild(n)}},render:function(n){return n("div",{class:"carbon-ads"})}},s=(e(377),e(5)),c=Object(s.a)(a,void 0,void 0,!1,null,null,null).exports,r={name:"Layout",components:{ParentLayout:o.a,CarbonAds:c}},u=Object(s.a)(r,(function(){var n=this.$createElement,t=this._self._c||n;return t("ParentLayout",{scopedSlots:this._u([{key:"sidebar-top",fn:function(){return[t("CarbonAds")]},proxy:!0}])})}),[],!1,null,null,null);t.default=u.exports}}]);