(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{348:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(63),core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(117),core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(45),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(82),core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3__),_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(42),_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(79),_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(401),_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(116),_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(131),_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(132),_dist_fuse_esm_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(379),_books_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(389),prismjs__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(390),prismjs__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_12__),prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(391),prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_13__),vue_codemirror__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(392),vue_codemirror__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(vue_codemirror__WEBPACK_IMPORTED_MODULE_14__),codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(393),codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_15__),codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(394),codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_16__),codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(395),codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_17__),keys=[];for(var key in _dist_fuse_esm_js__WEBPACK_IMPORTED_MODULE_10__.a.config)"function"!=typeof _dist_fuse_esm_js__WEBPACK_IMPORTED_MODULE_10__.a.config[key]&&"keys"!==key&&keys.push(key);var codify=function(e){return"const options = {\n".concat(keys.map((function(e){return"  // ".concat(e,": ").concat(_dist_fuse_esm_js__WEBPACK_IMPORTED_MODULE_10__.a.config[e],",")})).join("\n"),'\n  keys: [\n    "title",\n    "author.firstName"\n  ]\n};\n\nconst fuse = new Fuse(list, options);\n\n// Change the pattern\nconst pattern = "').concat(e,'"\n\nreturn fuse.search(pattern)')},DemoFuse=function(e){Object(_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__.a)(r,e);var t=Object(_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__.a)(r);function r(e,i,n){return Object(_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.a)(this,r),t.call(this,e,i,n)}return Object(_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.a)(r,[{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1},i=Object(_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.a)(r.prototype),"search",this).call(this,e,t);return{pattern:e,results:i}}}]),r}(_dist_fuse_esm_js__WEBPACK_IMPORTED_MODULE_10__.a);__webpack_exports__.a={name:"Demo",components:{codemirror:vue_codemirror__WEBPACK_IMPORTED_MODULE_14__.codemirror},data:function(){return{listJSON:JSON.stringify(_books_js__WEBPACK_IMPORTED_MODULE_11__.a,null,2),list:_books_js__WEBPACK_IMPORTED_MODULE_11__.a,code:codify(""),result:"",outputHtml:"",count:0,searchTime:0,listErrorMessage:"",codeErrorMessage:"",hasErrors:!1,pattern:"",showCode:!0,listOptions:{tabSize:2,mode:"text/javascript",theme:"default",lineNumbers:!0,line:!0},cmOptions:{tabSize:2,mode:"text/javascript",theme:"default",lineNumbers:!0,line:!0}}},methods:{toggleCode:function(){this.showCode=!this.showCode},onCmCodeChange:function(e){this.code=e;try{this.parse(),this.update()}catch(e){}},onCmListChange:function onCmListChange(newCode){try{this.list=eval(newCode),this.listErrorMessage=null,this.hasErrors=!!this.codeErrorMessage,this.update()}catch(e){throw this.listErrorMessage=e,this.hasErrors=!0,this.outputHtml="",e}},parse:function parse(){try{var func=eval("[function (Fuse, list){".concat(this.code,"}][0]")),start=(new Date).getTime(),_func=func(DemoFuse,this.list),pattern=_func.pattern,results=_func.results;this.result=results,this.pattern=pattern;var end=(new Date).getTime();this.searchTime=end-start+" ms",this.codeErrorMessage=null,this.hasErrors=!!this.listErrorMessage}catch(e){throw this.codeErrorMessage=e,this.hasErrors=!0,this.outputHtml="",e}},update:function(){if(!this.hasErrors){var e=prismjs__WEBPACK_IMPORTED_MODULE_12___default.a.highlight(JSON.stringify(this.result,null,2),prismjs__WEBPACK_IMPORTED_MODULE_12___default.a.languages.json,"json");this.count=this.result.length,this.outputHtml=e}},onPatternKeyUp:function(){this.code=codify(this.pattern)}},mounted:function(){this.parse(),this.update()}}},349:function(e,t,r){},379:function(e,t,r){"use strict";r(63),r(19),r(48),r(38),r(46),r(45),r(65),r(206),r(204),r(82),r(26),r(380),r(203),r(381),r(382),r(64),r(10),r(385),r(18),r(120),r(207),r(334),r(27),r(330),r(387),r(121),r(199),r(331),r(66),r(32);var i=r(14),n=r(131),s=r(132),a=r(37),o=r(61),_=r(42),c=r(79),u=r(43);function h(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}function l(e){return"string"==typeof e}function d(e){return"number"==typeof e}function f(e){return null!=e}function v(e){return!e.trim().length}var m=function(e){return"Invalid value for key ".concat(e)},p=function(e){return"Pattern length exceeds max of ".concat(e,".")},g=Object.prototype.hasOwnProperty,M=function(){function e(t){var r=this;Object(_.a)(this,e),this._keys={},this._keyNames=[];var i=0;t.forEach((function(e){var t,n=1;if(l(e))t=e;else{if(!g.call(e,"name"))throw new Error("Missing ".concat("name"," property in key"));if(t=e.name,g.call(e,"weight")&&(n=e.weight)<=0)throw new Error(function(e){return"Property 'weight' in key '".concat(e,"' must be a positive integer")}(t))}r._keyNames.push(t),r._keys[t]={weight:n},i+=n})),this._keyNames.forEach((function(e){r._keys[e].weight/=i}))}return Object(c.a)(e,[{key:"get",value:function(e,t){return this._keys[e]&&this._keys[e][t]}},{key:"keys",value:function(){return this._keyNames}},{key:"toJSON",value:function(){return JSON.stringify(this._keys)}}]),e}();var E={useExtendedSearch:!1,getFn:function(e,t){var r=[],i=!1;return function e(t,n){if(n){var s=n.indexOf("."),a=n,o=null;-1!==s&&(a=n.slice(0,s),o=n.slice(s+1));var _=t[a];if(!f(_))return;if(o||!l(_)&&!d(_))if(h(_)){i=!0;for(var c=0,u=_.length;c<u;c+=1)e(_[c],o)}else o&&e(_,o);else r.push(function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(_))}else r.push(t)}(e,t),i?r:r[0]},ignoreLocation:!1,ignoreFieldNorm:!1},O=Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:function(e,t){return e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1}}),{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1}),{location:0,threshold:.6,distance:100}),E),k=/[^ ]+/g;function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=new Map;return{get:function(r){var i=r.match(k).length;if(t.has(i))return t.get(i);var n=parseFloat((1/Math.sqrt(i)).toFixed(e));return t.set(i,n),n},clear:function(){t.clear()}}}var b=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.getFn,i=void 0===r?O.getFn:r;Object(_.a)(this,e),this.norm=y(3),this.getFn=i,this.isCreated=!1,this.setIndexRecords()}return Object(c.a)(e,[{key:"setSources",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.docs=e}},{key:"setIndexRecords",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.records=e}},{key:"setKeys",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.keys=e}},{key:"create",value:function(){var e=this;!this.isCreated&&this.docs.length&&(this.isCreated=!0,l(this.docs[0])?this.docs.forEach((function(t,r){e._addString(t,r)})):this.docs.forEach((function(t,r){e._addObject(t,r)})),this.norm.clear())}},{key:"add",value:function(e){var t=this.size();l(e)?this._addString(e,t):this._addObject(e,t)}},{key:"removeAt",value:function(e){this.records.splice(e,1);for(var t=e,r=this.size();t<r;t+=1)this.records[t].i-=1}},{key:"size",value:function(){return this.records.length}},{key:"_addString",value:function(e,t){if(f(e)&&!v(e)){var r={v:e,i:t,n:this.norm.get(e)};this.records.push(r)}}},{key:"_addObject",value:function(e,t){var r=this,i={i:t,$:{}};this.keys.forEach((function(t,n){var s=r.getFn(e,t);if(f(s))if(h(s))!function(){for(var e=[],t=[{nestedArrIndex:-1,value:s}];t.length;){var a=t.pop(),o=a.nestedArrIndex,_=a.value;if(f(_))if(l(_)&&!v(_)){var c={v:_,i:o,n:r.norm.get(_)};e.push(c)}else h(_)&&_.forEach((function(e,r){t.push({nestedArrIndex:r,value:e})}))}i.$[n]=e}();else if(!v(s)){var a={v:s,n:r.norm.get(s)};i.$[n]=a}})),this.records.push(i)}},{key:"toJSON",value:function(){return{keys:this.keys,records:this.records}}}]),e}();function C(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.getFn,n=void 0===i?O.getFn:i,s=new b({getFn:n}),a=new M(e);return s.setKeys(a.keys()),s.setSources(t),s.create(),s}function j(e,t){var r=e.matches;t.matches=[],f(r)&&r.forEach((function(e){if(f(e.indices)&&e.indices.length){var r={indices:e.indices,value:e.value};e.key&&(r.key=e.key),e.idx>-1&&(r.refIndex=e.idx),t.matches.push(r)}}))}function D(e,t){t.score=e.score}function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.errors,i=void 0===r?0:r,n=t.currentLocation,s=void 0===n?0:n,a=t.expectedLocation,o=void 0===a?0:a,_=t.distance,c=void 0===_?O.distance:_,u=t.ignoreLocation,h=void 0===u?O.ignoreLocation:u,l=i/e.length;if(h)return l;var d=Math.abs(o-s);return c?l+d/c:d?1:l}function L(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.minMatchCharLength,r=[],i=-1,n=-1,s=0,a=e.length;s<a;s+=1){var o=e[s];o&&-1===i?i=s:o||-1===i||((n=s-1)-i+1>=t&&r.push([i,n]),i=-1)}return e[s-1]&&s-i>=t&&r.push([i,s-1]),r}function w(e){for(var t={},r=0,i=e.length;r<i;r+=1){var n=e.charAt(r);t[n]=(t[n]||0)|1<<i-r-1}return t}var x=function(){function e(t){var r=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.location,s=void 0===n?O.location:n,a=i.threshold,o=void 0===a?O.threshold:a,c=i.distance,u=void 0===c?O.distance:c,h=i.includeMatches,l=void 0===h?O.includeMatches:h,d=i.findAllMatches,f=void 0===d?O.findAllMatches:d,v=i.minMatchCharLength,m=void 0===v?O.minMatchCharLength:v,p=i.isCaseSensitive,g=void 0===p?O.isCaseSensitive:p,M=i.ignoreLocation,E=void 0===M?O.ignoreLocation:M;if(Object(_.a)(this,e),this.options={location:s,threshold:o,distance:u,includeMatches:l,findAllMatches:f,minMatchCharLength:m,isCaseSensitive:g,ignoreLocation:E},this.pattern=g?t:t.toLowerCase(),this.chunks=[],this.pattern.length){var k=function(e,t){r.chunks.push({pattern:e,alphabet:w(e),startIndex:t})},y=this.pattern.length;if(y>32){for(var b=0,C=y%32,j=y-C;b<j;)k(this.pattern.substr(b,32),b),b+=32;if(C){var D=y-32;k(this.pattern.substr(D),D)}}else k(this.pattern,0)}}return Object(c.a)(e,[{key:"searchIn",value:function(e){var t=this.options,r=t.isCaseSensitive,i=t.includeMatches;if(r||(e=e.toLowerCase()),this.pattern===e){var n={isMatch:!0,score:0};return i&&(n.indices=[[0,e.length-1]]),n}var s=this.options,o=s.location,_=s.distance,c=s.threshold,u=s.findAllMatches,h=s.minMatchCharLength,l=s.ignoreLocation,d=[],f=0,v=!1;this.chunks.forEach((function(t){var r=t.pattern,n=t.alphabet,s=t.startIndex,m=function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i.location,s=void 0===n?O.location:n,a=i.distance,o=void 0===a?O.distance:a,_=i.threshold,c=void 0===_?O.threshold:_,u=i.findAllMatches,h=void 0===u?O.findAllMatches:u,l=i.minMatchCharLength,d=void 0===l?O.minMatchCharLength:l,f=i.includeMatches,v=void 0===f?O.includeMatches:f,m=i.ignoreLocation,g=void 0===m?O.ignoreLocation:m;if(t.length>32)throw new Error(p(32));for(var M,E=t.length,k=e.length,y=Math.max(0,Math.min(s,k)),b=c,C=y,j=d>1||v,D=j?Array(k):[];(M=e.indexOf(t,C))>-1;){var w=P(t,{currentLocation:M,expectedLocation:y,distance:o,ignoreLocation:g});if(b=Math.min(w,b),C=M+E,j)for(var x=0;x<E;)D[M+x]=1,x+=1}C=-1;for(var A=[],I=1,R=E+k,W=1<<E-1,T=0;T<E;T+=1){for(var N=0,U=R;N<U;){var B=P(t,{errors:T,currentLocation:y+U,expectedLocation:y,distance:o,ignoreLocation:g});B<=b?N=U:R=U,U=Math.floor((R-N)/2+N)}R=U;var S=Math.max(1,y-U+1),K=h?k:Math.min(y+U,k)+E,q=Array(K+2);q[K+1]=(1<<T)-1;for(var F=K;F>=S;F-=1){var $=F-1,J=r[e.charAt($)];if(j&&(D[$]=+!!J),q[F]=(q[F+1]<<1|1)&J,T&&(q[F]|=(A[F+1]|A[F])<<1|1|A[F+1]),q[F]&W&&(I=P(t,{errors:T,currentLocation:$,expectedLocation:y,distance:o,ignoreLocation:g}))<=b){if(b=I,(C=$)<=y)break;S=Math.max(1,2*y-C)}}var H=P(t,{errors:T+1,currentLocation:y,expectedLocation:y,distance:o,ignoreLocation:g});if(H>b)break;A=q}var z={isMatch:C>=0,score:Math.max(.001,I)};if(j){var G=L(D,d);G.length?v&&(z.indices=G):z.isMatch=!1}return z}(e,r,n,{location:o+s,distance:_,threshold:c,findAllMatches:u,minMatchCharLength:h,includeMatches:i,ignoreLocation:l}),g=m.isMatch,M=m.score,E=m.indices;g&&(v=!0),f+=M,g&&E&&(d=[].concat(Object(a.a)(d),Object(a.a)(E)))}));var m={isMatch:v,score:v?f/this.chunks.length:1};return v&&i&&(m.indices=d),m}}]),e}(),A=function(){function e(t){Object(_.a)(this,e),this.pattern=t}return Object(c.a)(e,[{key:"search",value:function(){}}],[{key:"isMultiMatch",value:function(e){return I(e,this.multiRegex)}},{key:"isSingleMatch",value:function(e){return I(e,this.singleRegex)}}]),e}();function I(e,t){var r=e.match(t);return r?r[1]:null}var R=function(e){Object(s.a)(r,e);var t=Object(n.a)(r);function r(e){return Object(_.a)(this,r),t.call(this,e)}return Object(c.a)(r,[{key:"search",value:function(e){for(var t,r=0,i=[],n=this.pattern.length;(t=e.indexOf(this.pattern,r))>-1;)r=t+n,i.push([t,r-1]);var s=!!i.length;return{isMatch:s,score:s?1:0,indices:i}}}],[{key:"type",get:function(){return"exact"}},{key:"multiRegex",get:function(){return/^'"(.*)"$/}},{key:"singleRegex",get:function(){return/^'(.*)$/}}]),r}(A),W=function(e){Object(s.a)(r,e);var t=Object(n.a)(r);function r(e){return Object(_.a)(this,r),t.call(this,e)}return Object(c.a)(r,[{key:"search",value:function(e){var t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-exact"}},{key:"multiRegex",get:function(){return/^!"(.*)"$/}},{key:"singleRegex",get:function(){return/^!(.*)$/}}]),r}(A),T=function(e){Object(s.a)(r,e);var t=Object(n.a)(r);function r(e){return Object(_.a)(this,r),t.call(this,e)}return Object(c.a)(r,[{key:"search",value:function(e){var t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}],[{key:"type",get:function(){return"prefix-exact"}},{key:"multiRegex",get:function(){return/^\^"(.*)"$/}},{key:"singleRegex",get:function(){return/^\^(.*)$/}}]),r}(A),N=function(e){Object(s.a)(r,e);var t=Object(n.a)(r);function r(e){return Object(_.a)(this,r),t.call(this,e)}return Object(c.a)(r,[{key:"search",value:function(e){var t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-prefix-exact"}},{key:"multiRegex",get:function(){return/^!\^"(.*)"$/}},{key:"singleRegex",get:function(){return/^!\^(.*)$/}}]),r}(A),U=function(e){Object(s.a)(r,e);var t=Object(n.a)(r);function r(e){return Object(_.a)(this,r),t.call(this,e)}return Object(c.a)(r,[{key:"search",value:function(e){var t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}],[{key:"type",get:function(){return"suffix-exact"}},{key:"multiRegex",get:function(){return/^"(.*)"\$$/}},{key:"singleRegex",get:function(){return/^(.*)\$$/}}]),r}(A),B=function(e){Object(s.a)(r,e);var t=Object(n.a)(r);function r(e){return Object(_.a)(this,r),t.call(this,e)}return Object(c.a)(r,[{key:"search",value:function(e){var t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-suffix-exact"}},{key:"multiRegex",get:function(){return/^!"(.*)"\$$/}},{key:"singleRegex",get:function(){return/^!(.*)\$$/}}]),r}(A),S=function(e){Object(s.a)(r,e);var t=Object(n.a)(r);function r(e){var i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=n.location,a=void 0===s?O.location:s,o=n.threshold,c=void 0===o?O.threshold:o,u=n.distance,h=void 0===u?O.distance:u,l=n.includeMatches,d=void 0===l?O.includeMatches:l,f=n.findAllMatches,v=void 0===f?O.findAllMatches:f,m=n.minMatchCharLength,p=void 0===m?O.minMatchCharLength:m,g=n.isCaseSensitive,M=void 0===g?O.isCaseSensitive:g;return Object(_.a)(this,r),(i=t.call(this,e))._bitapSearch=new x(e,{location:a,threshold:c,distance:h,includeMatches:d,findAllMatches:v,minMatchCharLength:p,isCaseSensitive:M}),i}return Object(c.a)(r,[{key:"search",value:function(e){return this._bitapSearch.searchIn(e)}}],[{key:"type",get:function(){return"fuzzy"}},{key:"multiRegex",get:function(){return/^"(.*)"$/}},{key:"singleRegex",get:function(){return/^(.*)$/}}]),r}(A),K=[R,T,N,B,U,W,S],q=K.length,F=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;function $(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.split("|").map((function(e){for(var r=e.trim().split(F).filter((function(e){return e&&!!e.trim()})),i=[],n=0,s=r.length;n<s;n+=1){for(var a=r[n],o=!1,_=-1;!o&&++_<q;){var c=K[_],u=c.isMultiMatch(a);u&&(i.push(new c(u,t)),o=!0)}if(!o)for(_=-1;++_<q;){var h=K[_],l=h.isSingleMatch(a);if(l){i.push(new h(l,t));break}}}return i}))}var J=new Set([S.type,R.type]),H=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.isCaseSensitive,n=void 0===i?O.isCaseSensitive:i,s=r.includeMatches,a=void 0===s?O.includeMatches:s,o=r.minMatchCharLength,c=void 0===o?O.minMatchCharLength:o,u=r.findAllMatches,h=void 0===u?O.findAllMatches:u,l=r.location,d=void 0===l?O.location:l,f=r.threshold,v=void 0===f?O.threshold:f,m=r.distance,p=void 0===m?O.distance:m;Object(_.a)(this,e),this.query=null,this.options={isCaseSensitive:n,includeMatches:a,minMatchCharLength:c,findAllMatches:h,location:d,threshold:v,distance:p},this.pattern=n?t:t.toLowerCase(),this.query=$(this.pattern,this.options)}return Object(c.a)(e,[{key:"searchIn",value:function(e){var t=this.query;if(!t)return{isMatch:!1,score:1};var r=this.options,i=r.includeMatches;e=r.isCaseSensitive?e:e.toLowerCase();for(var n=0,s=[],o=0,_=0,c=t.length;_<c;_+=1){var u=t[_];s.length=0,n=0;for(var h=0,l=u.length;h<l;h+=1){var d=u[h],f=d.search(e),v=f.isMatch,m=f.indices,p=f.score;if(!v){o=0,n=0,s.length=0;break}if(n+=1,o+=p,i){var g=d.constructor.type;J.has(g)?s=[].concat(Object(a.a)(s),Object(a.a)(m)):s.push(m)}}if(n){var M={isMatch:!0,score:o/n};return i&&(M.indices=s),M}}return{isMatch:!1,score:1}}}],[{key:"condition",value:function(e,t){return t.useExtendedSearch}}]),e}(),z=[];function G(e,t){for(var r=0,i=z.length;r<i;r+=1){var n=z[r];if(n.condition(e,t))return new n(e,t)}return new x(e,t)}var Q="$and",V="$or",Y=function(e){return!(!e[Q]&&!e[V])},X=function(e){return!h(e)&&(t=e,"object"===Object(u.a)(t))&&!Y(e);var t},Z=function(e){return Object(i.a)({},Q,Object.keys(e).map((function(t){return Object(i.a)({},t,e[t])})))};function ee(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.auto,n=void 0===i||i,s=function e(r){var i=Object.keys(r);if(i.length>1&&!Y(r))return e(Z(r));var s=i[0];if(X(r)){var a=r[s];if(!l(a))throw new Error(m(s));var o={key:s,pattern:a};return n&&(o.searcher=G(a,t)),o}var _={children:[],operator:s};return i.forEach((function(t){var i=r[t];h(i)&&i.forEach((function(t){_.children.push(e(t))}))})),_};return Y(e)||(e=Z(e)),s(e)}var te=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;Object(_.a)(this,e),this.options=Object(o.a)(Object(o.a)({},O),r),this.options.useExtendedSearch,this._keyStore=new M(this.options.keys),this.setCollection(t,i)}return Object(c.a)(e,[{key:"setCollection",value:function(e,t){if(this._docs=e,t&&!(t instanceof b))throw new Error("Incorrect 'index' type");this._myIndex=t||C(this._keyStore.keys(),this._docs,{getFn:this.options.getFn})}},{key:"add",value:function(e){f(e)&&(this._docs.push(e),this._myIndex.add(e))}},{key:"remove",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1},t=[],r=0,i=this._docs.length;r<i;r+=1){var n=this._docs[r];e(n,r)&&(this.removeAt(r),r-=1,t.push(n))}return t}},{key:"removeAt",value:function(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}},{key:"getIndex",value:function(){return this._myIndex}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.limit,i=void 0===r?-1:r,n=this.options,s=n.includeMatches,a=n.includeScore,o=n.shouldSort,_=n.sortFn,c=n.ignoreFieldNorm,u=l(e)?l(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return re(u,this._keyStore,{ignoreFieldNorm:c}),o&&u.sort(_),d(i)&&i>-1&&(u=u.slice(0,i)),ie(u,this._docs,{includeMatches:s,includeScore:a})}},{key:"_searchStringList",value:function(e){var t=G(e,this.options),r=this._myIndex.records,i=[];return r.forEach((function(e){var r=e.v,n=e.i,s=e.n;if(f(r)){var a=t.searchIn(r),o=a.isMatch,_=a.score,c=a.indices;o&&i.push({item:r,idx:n,matches:[{score:_,value:r,norm:s,indices:c}]})}})),i}},{key:"_searchLogical",value:function(e){var t=this,r=ee(e,this.options),i=this._myIndex,n=i.keys,s=i.records,o={},_=[];return s.forEach((function(e){var i=e.$,s=e.i;f(i)&&function e(r,i,s){if(!r.children){var c=r.key,u=r.searcher,h=i[n.indexOf(c)];return t._findMatches({key:c,value:h,searcher:u})}for(var l=r.operator,d=[],f=0;f<r.children.length;f+=1){var v=e(r.children[f],i,s);if(v&&v.length){if(d.push({idx:s,item:i,matches:v}),l===V)break}else if(l===Q){d.length=0;break}}d.length&&(o[s]||(o[s]={idx:s,item:i,matches:[]},_.push(o[s])),d.forEach((function(e){var t,r=e.matches;(t=o[s].matches).push.apply(t,Object(a.a)(r))})))}(r,i,s)})),_}},{key:"_searchObjectList",value:function(e){var t=this,r=G(e,this.options),i=this._myIndex,n=i.keys,s=i.records,o=[];return s.forEach((function(e){var i=e.$,s=e.i;if(f(i)){var _=[];n.forEach((function(e,n){_.push.apply(_,Object(a.a)(t._findMatches({key:e,value:i[n],searcher:r})))})),_.length&&o.push({idx:s,item:i,matches:_})}})),o}},{key:"_findMatches",value:function(e){var t=e.key,r=e.value,i=e.searcher;if(!f(r))return[];var n=[];if(h(r))r.forEach((function(e){var r=e.v,s=e.i,a=e.n;if(f(r)){var o=i.searchIn(r),_=o.isMatch,c=o.score,u=o.indices;_&&n.push({score:c,key:t,value:r,idx:s,norm:a,indices:u})}}));else{var s=r.v,a=r.n,o=i.searchIn(s),_=o.isMatch,c=o.score,u=o.indices;_&&n.push({score:c,key:t,value:s,norm:a,indices:u})}return n}}]),e}();function re(e,t,r){var i=r.ignoreFieldNorm,n=void 0===i?O.ignoreFieldNorm:i;e.forEach((function(e){var r=1;e.matches.forEach((function(e){var i=e.key,s=e.norm,a=e.score,o=t.get(i,"weight");r*=Math.pow(0===a&&o?Number.EPSILON:a,(o||1)*(n?1:s))})),e.score=r}))}function ie(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.includeMatches,n=void 0===i?O.includeMatches:i,s=r.includeScore,a=void 0===s?O.includeScore:s,o=[];return n&&o.push(j),a&&o.push(D),e.map((function(e){var r=e.idx,i={item:t[r],refIndex:r};return o.length&&o.forEach((function(t){t(e,i)})),i}))}te.version="6.2.0",te.createIndex=C,te.parseIndex=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getFn,i=void 0===r?O.getFn:r,n=e.keys,s=e.records,a=new b({getFn:i});return a.setKeys(n),a.setIndexRecords(s),a},te.config=O,te.parseQuery=ee,function(){z.push.apply(z,arguments)}(H),t.a=te},389:function(e,t,r){"use strict";t.a=[{title:"Old Man's War",author:{firstName:"John",lastName:"Scalzi"}},{title:"The Lock Artist",author:{firstName:"Steve",lastName:"Hamilton"}},{title:"HTML5",author:{firstName:"Remy",lastName:"Sharp"}},{title:"Right Ho Jeeves",author:{firstName:"P.D",lastName:"Woodhouse"}},{title:"The Code of the Wooster",author:{firstName:"P.D",lastName:"Woodhouse"}},{title:"Thank You Jeeves",author:{firstName:"P.D",lastName:"Woodhouse"}},{title:"The DaVinci Code",author:{firstName:"Dan",lastName:"Brown"}},{title:"Angels & Demons",author:{firstName:"Dan",lastName:"Brown"}},{title:"The Silmarillion",author:{firstName:"J.R.R",lastName:"Tolkien"}},{title:"Syrup",author:{firstName:"Max",lastName:"Barry"}},{title:"The Lost Symbol",author:{firstName:"Dan",lastName:"Brown"}},{title:"The Book of Lies",author:{firstName:"Brad",lastName:"Meltzer"}},{title:"Lamb",author:{firstName:"Christopher",lastName:"Moore"}},{title:"Fool",author:{firstName:"Christopher",lastName:"Moore"}},{title:"Incompetence",author:{firstName:"Rob",lastName:"Grant"}},{title:"Fat",author:{firstName:"Rob",lastName:"Grant"}},{title:"Colony",author:{firstName:"Rob",lastName:"Grant"}},{title:"Backwards, Red Dwarf",author:{firstName:"Rob",lastName:"Grant"}},{title:"The Grand Design",author:{firstName:"Stephen",lastName:"Hawking"}},{title:"The Book of Samson",author:{firstName:"David",lastName:"Maine"}},{title:"The Preservationist",author:{firstName:"David",lastName:"Maine"}},{title:"Fallen",author:{firstName:"David",lastName:"Maine"}},{title:"Monster 1959",author:{firstName:"David",lastName:"Maine"}}]},396:function(e,t,r){"use strict";var i=r(349);r.n(i).a},405:function(e,t,r){"use strict";r.r(t);var i=r(348).a,n=(r(396),r(5)),s=Object(n.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"live-demo"},[r("article",{staticClass:"code-container"},[e._m(0),e._v(" "),r("codemirror",{ref:"listEditor",staticClass:"cm-list-editor",attrs:{value:e.listJSON,options:e.listOptions},on:{input:e.onCmListChange}})],1),e._v(" "),e.listErrorMessage?r("span",{staticClass:"error-msg"},[e._v("\n    "+e._s(e.listErrorMessage)+"\n  ")]):e._e(),e._v(" "),r("section",{staticClass:"search-section"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.pattern,expression:"pattern"}],attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.pattern},on:{keyup:e.onPatternKeyUp,input:function(t){t.target.composing||(e.pattern=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"code-container-wrapper"},[r("Content",{attrs:{"slot-key":"middle"}}),e._v(" "),r("article",{staticClass:"code-container"},[e._m(1),e._v(" "),r("codemirror",{ref:"cmEditor",staticClass:"cm-code-editor",attrs:{value:e.code,options:e.cmOptions},on:{input:e.onCmCodeChange}})],1),e._v(" "),e.codeErrorMessage?r("span",{staticClass:"error-msg"},[e._v("\n      "+e._s(e.codeErrorMessage)+"\n    ")]):e._e()],1),e._v(" "),r("article",{staticClass:"code-container"},[r("span",{staticClass:"header"},[e.hasErrors?r("span",[e._v("--")]):r("span",[r("b",[e._v("Results:")]),e._v(" found "+e._s(e.count)+" items in "+e._s(e.searchTime)+"\n      ")])]),e._v(" "),r("pre",{staticClass:"output"},[r("code",{domProps:{innerHTML:e._s(e.outputHtml)}})])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"header"},[t("span",[this._v("list.json")]),this._v(" "),t("span",{staticClass:"instruction"},[this._v("(list of items to search)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"header"},[t("span",[this._v("main.js")]),this._v(" "),t("span",{staticClass:"instruction"},[this._v("(entry module)")])])}],!1,null,null,null);t.default=s.exports}}]);