(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[196],{9038:function(t){var e;e=function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="dist/",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=(r(n(1)),n(6)),a=r(i),s=r(n(7)),u=r(n(8)),l=r(n(9)),c=r(n(10)),f=r(n(11)),d=r(n(14)),p=[],m=!1,h={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},b=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(t&&(m=!0),m)return p=(0,f.default)(p,h),(0,c.default)(p,h.once),p},v=function(){p=(0,d.default)(),b()},y=function(){p.forEach(function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay")})};t.exports={init:function(t){h=o(h,t),p=(0,d.default)();var e,n=document.all&&!window.atob;return!0===(e=h.disable)||"mobile"===e&&l.default.mobile()||"phone"===e&&l.default.phone()||"tablet"===e&&l.default.tablet()||"function"==typeof e&&!0===e()||n?y():(h.disableMutationObserver||u.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),h.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",h.easing),document.querySelector("body").setAttribute("data-aos-duration",h.duration),document.querySelector("body").setAttribute("data-aos-delay",h.delay),"DOMContentLoaded"===h.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?b(!0):"load"===h.startEvent?window.addEventListener(h.startEvent,function(){b(!0)}):document.addEventListener(h.startEvent,function(){b(!0)}),window.addEventListener("resize",(0,s.default)(b,h.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(b,h.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,c.default)(p,h.once)},h.throttleDelay)),h.disableMutationObserver||u.default.ready("[data-aos]",v),p)},refresh:b,refreshHard:v}},function(t,e){},,,,,function(t,e){(function(e){"use strict";function n(t){var e=void 0===t?"undefined":o(t);return!!t&&("object"==e||"function"==e)}function r(t){if("number"==typeof t)return t;if("symbol"==(void 0===(e=t)?"undefined":o(e))||e&&"object"==(void 0===e?"undefined":o(e))&&b.call(e)==s)return a;if(n(t)){var e,r="function"==typeof t.valueOf?t.valueOf():t;t=n(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;var i=c.test(t=t.replace(u,""));return i||f.test(t)?d(t.slice(2),i?2:8):l.test(t)?a:+t}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i="Expected a function",a=NaN,s="[object Symbol]",u=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,f=/^0o[0-7]+$/i,d=parseInt,p="object"==(void 0===e?"undefined":o(e))&&e&&e.Object===Object&&e,m="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,h=p||m||Function("return this")(),b=Object.prototype.toString,v=Math.max,y=Math.min,g=function(){return h.Date.now()};t.exports=function(t,e,o){var a=!0,s=!0;if("function"!=typeof t)throw TypeError(i);return n(o)&&(a="leading"in o?!!o.leading:a,s="trailing"in o?!!o.trailing:s),function(t,e,o){function a(e){var n=f,r=d;return f=d=void 0,w=e,m=t.apply(r,n)}function s(t){var n=t-b,r=t-w;return void 0===b||n>=e||n<0||k&&r>=p}function u(){var t,n,r,o=g();return s(o)?l(o):void(h=setTimeout(u,(t=o-b,n=o-w,r=e-t,k?y(r,p-n):r)))}function l(t){return h=void 0,E&&f?a(t):(f=d=void 0,m)}function c(){var t,n=g(),r=s(n);if(f=arguments,d=this,b=n,r){if(void 0===h)return w=t=b,h=setTimeout(u,e),O?a(t):m;if(k)return h=setTimeout(u,e),a(b)}return void 0===h&&(h=setTimeout(u,e)),m}var f,d,p,m,h,b,w=0,O=!1,k=!1,E=!0;if("function"!=typeof t)throw TypeError(i);return e=r(e)||0,n(o)&&(O=!!o.leading,p=(k="maxWait"in o)?v(r(o.maxWait)||0,e):p,E="trailing"in o?!!o.trailing:E),c.cancel=function(){void 0!==h&&clearTimeout(h),w=0,f=b=d=h=void 0},c.flush=function(){return void 0===h?m:l(g())},c}(t,e,{leading:a,maxWait:e,trailing:s})}}).call(e,function(){return this}())},function(t,e){(function(e){"use strict";function n(t){var e=void 0===t?"undefined":o(t);return!!t&&("object"==e||"function"==e)}function r(t){if("number"==typeof t)return t;if("symbol"==(void 0===(e=t)?"undefined":o(e))||e&&"object"==(void 0===e?"undefined":o(e))&&h.call(e)==a)return i;if(n(t)){var e,r="function"==typeof t.valueOf?t.valueOf():t;t=n(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;var d=l.test(t=t.replace(s,""));return d||c.test(t)?f(t.slice(2),d?2:8):u.test(t)?i:+t}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=NaN,a="[object Symbol]",s=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,d="object"==(void 0===e?"undefined":o(e))&&e&&e.Object===Object&&e,p="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,m=d||p||Function("return this")(),h=Object.prototype.toString,b=Math.max,v=Math.min,y=function(){return m.Date.now()};t.exports=function(t,e,o){function i(e){var n=c,r=f;return c=f=void 0,g=e,p=t.apply(r,n)}function a(t){var n=t-h,r=t-g;return void 0===h||n>=e||n<0||O&&r>=d}function s(){var t,n,r,o=y();return a(o)?u(o):void(m=setTimeout(s,(t=o-h,n=o-g,r=e-t,O?v(r,d-n):r)))}function u(t){return m=void 0,k&&c?i(t):(c=f=void 0,p)}function l(){var t,n=y(),r=a(n);if(c=arguments,f=this,h=n,r){if(void 0===m)return g=t=h,m=setTimeout(s,e),w?i(t):p;if(O)return m=setTimeout(s,e),i(h)}return void 0===m&&(m=setTimeout(s,e)),p}var c,f,d,p,m,h,g=0,w=!1,O=!1,k=!0;if("function"!=typeof t)throw TypeError("Expected a function");return e=r(e)||0,n(o)&&(w=!!o.leading,d=(O="maxWait"in o)?b(r(o.maxWait)||0,e):d,k="trailing"in o?!!o.trailing:k),l.cancel=function(){void 0!==m&&clearTimeout(m),g=0,c=h=f=m=void 0},l.flush=function(){return void 0===m?p:u(y())},l}}).call(e,function(){return this}())},function(t,e){"use strict";function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(t){t&&t.forEach(function(t){var e=Array.prototype.slice.call(t.addedNodes),n=Array.prototype.slice.call(t.removedNodes);if(function t(e){var n=void 0,r=void 0;for(n=0;n<e.length;n+=1)if((r=e[n]).dataset&&r.dataset.aos||r.children&&t(r.children))return!0;return!1}(e.concat(n)))return o()})}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){};e.default={isSupported:function(){return!!n()},ready:function(t,e){var i=window.document,a=new(n())(r);o=e,a.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(t,e){"use strict";function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function t(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t)}return r(t,[{key:"phone",value:function(){var t=n();return!(!o.test(t)&&!i.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=n();return!(!a.test(t)&&!s.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),t}();e.default=new u},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,n){var r=t.node.getAttribute("data-aos-once");e>t.position?t.node.classList.add("aos-animate"):void 0===r||"false"!==r&&(n||"true"===r)||t.node.classList.remove("aos-animate")};e.default=function(t,e){var r=window.pageYOffset,o=window.innerHeight;t.forEach(function(t,i){n(t,o+r,e)})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=(r=n(12))&&r.__esModule?r:{default:r};e.default=function(t,e){return t.forEach(function(t,n){t.node.classList.add("aos-init"),t.position=(0,o.default)(t.node,e.offset)}),t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=(r=n(13))&&r.__esModule?r:{default:r};e.default=function(t,e){var n=0,r=0,i=window.innerHeight,a={offset:t.getAttribute("data-aos-offset"),anchor:t.getAttribute("data-aos-anchor"),anchorPlacement:t.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(r=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(t=document.querySelectorAll(a.anchor)[0]),n=(0,o.default)(t).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=t.offsetHeight/2;break;case"bottom-bottom":n+=t.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+t.offsetHeight;break;case"center-center":n+=i/2+t.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=t.offsetHeight+i;break;case"center-top":n+=t.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(e)||(r=e),n+r}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),n+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:n,left:e}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(t){return{node:t}})}}])},t.exports=e()},9980:(t,e,n)=>{"use strict";n.r(e),n.d(e,{CountUp:()=>o});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=function(){function t(t,e,n){var o=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){o.startTime||(o.startTime=t);var e=t-o.startTime;o.remaining=o.duration-e,o.useEasing?o.countDown?o.frameVal=o.startVal-o.easingFn(e,0,o.startVal-o.endVal,o.duration):o.frameVal=o.easingFn(e,o.startVal,o.endVal-o.startVal,o.duration):o.frameVal=o.startVal+(o.endVal-o.startVal)*(e/o.duration);var n=o.countDown?o.frameVal<o.endVal:o.frameVal>o.endVal;o.frameVal=n?o.endVal:o.frameVal,o.frameVal=Number(o.frameVal.toFixed(o.options.decimalPlaces)),o.printValue(o.frameVal),e<o.duration?o.rAF=requestAnimationFrame(o.count):null!==o.finalEndVal?o.update(o.finalEndVal):o.options.onCompleteCallback&&o.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,i=(Math.abs(t).toFixed(o.options.decimalPlaces)+"").split(".");if(e=i[0],n=i.length>1?o.options.decimal+i[1]:"",o.options.useGrouping){r="";for(var a=3,s=0,u=0,l=e.length;u<l;++u)o.options.useIndianSeparators&&4===u&&(a=2,s=1),0!==u&&s%a==0&&(r=o.options.separator+r),s++,r=e[l-u-1]+r;e=r}return o.options.numerals&&o.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return o.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return o.options.numerals[+t]})),(t<0?"-":"")+o.options.prefix+e+n+o.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return o.handleScroll(o)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,o=n.top+n.height+window.pageYOffset;o<e&&o>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>o||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},4807:(t,e,n)=>{"use strict";var r=n(310),o=n(9980);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach(function(e){!function(t,e,n){var r;(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function f(t){var e=r.useRef(t);return c(function(){e.current=t}),r.useCallback(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)},[])}var d=function(t,e){var n=e.decimal,r=e.decimals,i=e.duration,a=e.easingFn,s=e.end,u=e.formattingFn,l=e.numerals,c=e.prefix,f=e.separator,d=e.start,p=e.suffix,m=e.useEasing,h=e.useGrouping,b=e.useIndianSeparators,v=e.enableScrollSpy,y=e.scrollSpyDelay,g=e.scrollSpyOnce,w=e.plugin;return new o.CountUp(t,s,{startVal:d,duration:i,decimal:n,decimalPlaces:r,easingFn:a,formattingFn:u,numerals:l,separator:f,prefix:c,suffix:p,plugin:w,useEasing:m,useIndianSeparators:b,useGrouping:h,enableScrollSpy:v,scrollSpyDelay:y,scrollSpyOnce:g})},p=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},h=function(t){var e=Object.fromEntries(Object.entries(t).filter(function(t){return void 0!==(function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,s=[],u=!0,l=!1;try{for(i=(n=n.call(t)).next;!(u=(r=i.call(n)).done)&&(s.push(r.value),2!==s.length);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}(t,2)||function(t,e){if(t){if("string"==typeof t)return l(t,2);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),n=r.useMemo(function(){return a(a({},m),e)},[t]),o=n.ref,i=n.startOnMount,s=n.enableReinitialize,c=n.delay,h=n.onEnd,b=n.onStart,v=n.onPauseResume,y=n.onReset,g=n.onUpdate,w=u(n,p),O=r.useRef(),k=r.useRef(),E=r.useRef(!1),S=f(function(){return d("string"==typeof o?o:o.current,w)}),x=f(function(t){var e=O.current;if(e&&!t)return e;var n=S();return O.current=n,n}),V=f(function(){var t=function(){return x(!0).start(function(){null==h||h({pauseResume:j,reset:A,start:F,update:P})})};c&&c>0?k.current=setTimeout(t,1e3*c):t(),null==b||b({pauseResume:j,reset:A,update:P})}),j=f(function(){x().pauseResume(),null==v||v({reset:A,start:F,update:P})}),A=f(function(){x().el&&(k.current&&clearTimeout(k.current),x().reset(),null==y||y({pauseResume:j,start:F,update:P}))}),P=f(function(t){x().update(t),null==g||g({pauseResume:j,reset:A,start:F})}),F=f(function(){A(),V()}),N=f(function(t){i&&(t&&A(),V())});return r.useEffect(function(){E.current?s&&N(!0):(E.current=!0,N())},[s,E,N,c,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect(function(){return function(){A()}},[A]),{start:F,pauseResume:j,reset:A,update:P,getCountUp:x}},b=["className","redraw","containerProps","children","style"];e.Ay=function(t){var e=t.className,n=t.redraw,o=t.containerProps,i=t.children,l=t.style,c=u(t,b),d=r.useRef(null),p=r.useRef(!1),m=h(a(a({},c),{},{ref:d,startOnMount:"function"!=typeof i||0===t.delay,enableReinitialize:!1})),v=m.start,y=m.reset,g=m.update,w=m.pauseResume,O=m.getCountUp,k=f(function(){v()}),E=f(function(e){t.preserveValue||y(),g(e)}),S=f(function(){if("function"==typeof t.children&&!(d.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}O()});r.useEffect(function(){S()},[S]),r.useEffect(function(){p.current&&E(t.end)},[t.end,E]);var x=n&&t;return(r.useEffect(function(){n&&p.current&&k()},[k,n,x]),r.useEffect(function(){!n&&p.current&&k()},[k,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect(function(){p.current=!0},[]),"function"==typeof i)?i({countUpRef:d,start:v,reset:y,update:g,pauseResume:w,getCountUp:O}):r.createElement("span",s({className:e,ref:d,style:l},o),void 0!==t.start?O().formattingFn(t.start):"")}},4677:()=>{},7129:()=>{},9537:()=>{}}]);