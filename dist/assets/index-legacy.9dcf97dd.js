!function(){function e(e,r,t,n,i,a,c){try{var o=e[a](c),u=o.value}catch(s){return void t(s)}o.done?r(u):Promise.resolve(u).then(n,i)}function r(r){return function(){var t=this,n=arguments;return new Promise((function(i,a){var c=r.apply(t,n);function o(r){e(c,i,a,o,u,"next",r)}function u(r){e(c,i,a,o,u,"throw",r)}o(void 0)}))}}function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,i,a=[],c=!0,o=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);c=!0);}catch(u){o=!0,i=u}finally{try{c||null==t.return||t.return()}finally{if(o)throw i}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var i=document.createElement("style");i.innerHTML=".u3-cxx-98a2dad4{display:flex;height:auto;width:100%;flex-direction:column;align-items:center;justify-content:center;flex-grow:1}.u3-cxx-98a2dad4 .u3-cxx-1872b512{display:inline-flex;width:14rem;flex-direction:column;align-items:center}.u3-cxx-98a2dad4 .u3-cxx-1872b512 svg{width:8rem;background-color:transparent;fill:none;stroke:#e5e5e5;stroke-linecap:round;stroke-width:8%}.u3-cxx-98a2dad4 .u3-cxx-1872b512 use{stroke:var(--u3-chat-primary-color);animation:u3-cxx-c1bb4c25 2s linear infinite}@keyframes u3-cxx-c1bb4c25{to{stroke-dashoffset:0px}}.u3-cxx-98a2dad4 p{font-size:1rem;line-height:1.5rem;font-weight:400}.u3-cxx-98a2dad4 .u3-cxx-c1ece912{margin-top:.5rem;width:50%;text-align:center}.u3-cxx-98a2dad4 .u3-cxx-c1ece912 p{margin-top:.5rem;margin-bottom:.5rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgba(64,64,64,var(--tw-text-opacity))}.u3-cxx-98a2dad4 .u3-cxx-c1ece912 .u3-cxx-bb85169a{border-radius:.25rem;background-color:var(--u3-chat-secondary-color);padding:.5rem .75rem;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}\n",document.head.appendChild(i),System.register(["./vendor-legacy.27bb4c33.js","./index-legacy.8f281785.js","./index-legacy.2625986c.js"],(function(e){"use strict";var n,i,a,c,o,u,s,l,f,d;return{setters:[function(e){n=e.B,i=e.A,a=e.y,c=e.x,o=e.G,u=e.H},function(e){s=e.V,l=e.a_},function(e){f=e.b,d=e.d}],execute:function(){var x="u3-cxx-98a2dad4",m="u3-cxx-1872b512",h="u3-cxx-c1ece912",p="u3-cxx-bb85169a";var y=["/connect","/error","/initial"],g=function(e){var o=t(n.exports.useState(!1),2),u=o[0],s=o[1],l=t(n.exports.useState(""),2),d=l[0],g=l[1],v=e.currentUser,b=e.actions,w=e.location,k=e.history,S=function(){var e=r(regeneratorRuntime.mark((function e(){var r,t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""!==d&&g(""),e.next=3,b.userConnect();case 3:if(r=e.sent,t=r.data,n=r.error,!t){e.next=11;break}if(a=w.search,!(i=new URLSearchParams(a).get("next")||"")||-1!==y.indexOf(i)){e.next=10;break}return e.abrupt("return",k.replace(i));case 10:return e.abrupt("return",A());case 11:n&&g(n.message);case 12:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var t=r(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s(!0),r.next=3,f(e.history);case 3:case"end":return r.stop()}}),r)})));return function(){return t.apply(this,arguments)}}();return n.exports.useEffect((function(){if(e.initializing||!v){if(e.initializing||v&&u)return function(){};S()}else A()}),[]),i("div",{className:a(x),children:[i("div",{className:m,children:[i("svg",{viewBox:"-2000 -1000 4000 2000",children:[c("path",{id:"inf",d:"M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"}),c("use",{xlinkHref:"#inf",strokeDasharray:"1570 5143",strokeDashoffset:"6713px"})]}),c("p",{children:"Kết nối tài khoản"})]}),d?i("div",{className:h,children:[c("p",{children:d}),c("button",{className:p,onClick:S,children:"Thử lại"})]}):null]})};e("default",o((function(e){return{initializing:e.requests.users.logout.status===s.SUCCESS||!e.storage.initialized,currentUser:l(e)}}),(function(e){return{actions:u({userConnect:d},e)}}))(g))}}}))}();
