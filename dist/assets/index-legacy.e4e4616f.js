!function(){function e(e,r,t,n,i,a,c){try{var o=e[a](c),u=o.value}catch(s){return void t(s)}o.done?r(u):Promise.resolve(u).then(n,i)}function r(r){return function(){var t=this,n=arguments;return new Promise((function(i,a){var c=r.apply(t,n);function o(r){e(c,i,a,o,u,"next",r)}function u(r){e(c,i,a,o,u,"throw",r)}o(void 0)}))}}function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,i,a=[],c=!0,o=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);c=!0);}catch(u){o=!0,i=u}finally{try{c||null==t.return||t.return()}finally{if(o)throw i}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var i=document.createElement("style");i.innerHTML=".u3-cxx-98a2dad4{display:flex;height:auto;width:100%;flex-direction:column;align-items:center;justify-content:center;flex-grow:1}.u3-cxx-98a2dad4 .u3-cxx-1872b512{display:inline-flex;width:14rem;flex-direction:column;align-items:center}.u3-cxx-98a2dad4 .u3-cxx-1872b512 svg{width:8rem;background-color:transparent;fill:none;stroke:#e5e5e5;stroke-linecap:round;stroke-width:8%}.u3-cxx-98a2dad4 .u3-cxx-1872b512 use{stroke:var(--u3-chat-primary-color);animation:u3-cxx-c1bb4c25 2s linear infinite}@keyframes u3-cxx-c1bb4c25{to{stroke-dashoffset:0px}}.u3-cxx-98a2dad4 p{font-size:1rem;line-height:1.5rem;font-weight:400}.u3-cxx-98a2dad4 .u3-cxx-c1ece912{margin-top:.5rem;width:50%;text-align:center}.u3-cxx-98a2dad4 .u3-cxx-c1ece912 p{margin-top:.5rem;margin-bottom:.5rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgba(64,64,64,var(--tw-text-opacity))}.u3-cxx-98a2dad4 .u3-cxx-c1ece912 .u3-cxx-bb85169a{border-radius:.25rem;background-color:var(--u3-chat-secondary-color);padding:.5rem .75rem;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}\n",document.head.appendChild(i),System.register(["./vendor-legacy.75f81643.js","./index-legacy.4b130122.js","./index-legacy.bfda30b8.js"],(function(e){"use strict";var n,i,a,c,o,u,s,l,f,d;return{setters:[function(e){n=e.B,i=e.A,a=e.y,c=e.x,o=e.F,u=e.G},function(e){s=e.V,l=e.a_},function(e){f=e.b,d=e.d}],execute:function(){var x="u3-cxx-98a2dad4",m="u3-cxx-1872b512",h="u3-cxx-c1ece912",p="u3-cxx-bb85169a";var y=["/connect","/error","/initial"],g=function(e){var o=t(n.exports.useState(!1),2),u=o[0],s=o[1],l=t(n.exports.useState(""),2),d=l[0],g=l[1],b=e.currentUser,v=e.actions,w=e.location,k=e.history,S=function(){var e=r(regeneratorRuntime.mark((function e(){var r,t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""!==d&&g(""),e.next=3,v.userConnect();case 3:if(r=e.sent,t=r.data,n=r.error,!t){e.next=11;break}if(a=w.search,!(i=new URLSearchParams(a).get("next")||"")||-1!==y.indexOf(i)){e.next=10;break}return e.abrupt("return",k.replace(i));case 10:return e.abrupt("return",A());case 11:n&&g(n.message);case 12:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var t=r(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s(!0),r.next=3,f(e.history);case 3:case"end":return r.stop()}}),r)})));return function(){return t.apply(this,arguments)}}();return n.exports.useEffect((function(){if(e.initializing||!b){if(e.initializing||b&&u)return function(){};S()}else A()}),[]),i("div",{className:a(x),children:[i("div",{className:m,children:[i("svg",{viewBox:"-2000 -1000 4000 2000",children:[c("path",{id:"inf",d:"M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"}),c("use",{xlinkHref:"#inf",strokeDasharray:"1570 5143",strokeDashoffset:"6713px"})]}),c("p",{children:"Kết nối tài khoản"})]}),d?i("div",{className:h,children:[c("p",{children:d}),c("button",{className:p,onClick:S,children:"Thử lại"})]}):null]})};e("default",o((function(e){return{initializing:e.requests.users.logout.status===s.SUCCESS||!e.storage.initialized,currentUser:l(e)}}),(function(e){return{actions:u({userConnect:d},e)}}))(g))}}}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtbGVnYWN5LmU0ZTQ2MTZmLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFnZXMvQ29ubmVjdC9Db25uZWN0LnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9Db25uZWN0L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZTogQ29ubmVjdC50c3hcbiAqIFByb2plY3Q6IGNoYXR0aW5nLW1pbmltYWxcbiAqIEZpbGUgQ3JlYXRlZDogMzAgU2VwIDIwMjEgMTQ6NTM6NDlcbiAqIEF1dGhvcjogdW5kM2ZpbmVkIChtZUB1bmQzZmluZWQuY29tKVxuICogLS0tLS1cbiAqIExhc3QgTW9kaWZpZWQ6IDAxIE5vdiAyMDIxIDEwOjU4OjEyXG4gKiBNb2RpZmllZCBCeTogdW5kM2ZpbmVkIChtZUB1bmQzZmluZWQuY29tKVxuICogLS0tLS1cbiAqIENvcHlyaWdodCAoYykgMjAyMSB1bmQzZmluZWQuY29tXG4gKi9cbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuXG5pbXBvcnQgKiBhcyBHbG9iYWxBY3Rpb25zIGZyb20gJyRhY3Rpb25zL2dsb2JhbF9hY3Rpb25zJztcblxuaW1wb3J0IHR5cGUge1Byb3BzLCBTdGF0ZX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmZ1bmN0aW9uIGdldE5leHQoc2VhcmNoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBVUkxRdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKTtcbiAgcmV0dXJuIFVSTFF1ZXJ5LmdldCgnbmV4dCcpIHx8ICcnO1xufVxuXG5jb25zdCByZWRpcmVjdEJhY2tsaXN0ID0gWycvY29ubmVjdCcsICcvZXJyb3InLCAnL2luaXRpYWwnXTtcblxuY29uc3QgQ29ubmVjdDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qge2N1cnJlbnRVc2VyLCBhY3Rpb25zLCBsb2NhdGlvbiwgaGlzdG9yeX0gPSBwcm9wcztcblxuICBjb25zdCBjb25uZWN0VXNlciA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoZXJyb3JNc2cgIT09ICcnKSBzZXRFcnJvck1zZygnJyk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IGF3YWl0IGFjdGlvbnMudXNlckNvbm5lY3QoKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgY29uc3QgbmV4dCA9IGdldE5leHQobG9jYXRpb24uc2VhcmNoKTtcbiAgICAgIGlmIChuZXh0ICYmIHJlZGlyZWN0QmFja2xpc3QuaW5kZXhPZihuZXh0KSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGhpc3RvcnkucmVwbGFjZShuZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlZGlyZWN0VXNlclRvRGVmYXVsdFRlYW0oKTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yTXNnKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWRpcmVjdFVzZXJUb0RlZmF1bHRUZWFtID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldENvbm5lY3RlZCh0cnVlKTtcbiAgICBhd2FpdCBHbG9iYWxBY3Rpb25zLnJlZGlyZWN0VXNlclRvRGVmYXVsdFRlYW0ocHJvcHMuaGlzdG9yeSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXByb3BzLmluaXRpYWxpemluZyAmJiBjdXJyZW50VXNlcikge1xuICAgICAgcmVkaXJlY3RVc2VyVG9EZWZhdWx0VGVhbSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXByb3BzLmluaXRpYWxpemluZyAmJiAoIWN1cnJlbnRVc2VyIHx8ICFjb25uZWN0ZWQpKSB7XG4gICAgICBjb25uZWN0VXNlcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuY29udGFpbmVyKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPHN2ZyB2aWV3Qm94PSctMjAwMCAtMTAwMCA0MDAwIDIwMDAnPlxuICAgICAgICAgIDxwYXRoIGlkPSdpbmYnIGQ9J00zNTQtMzU0QTUwMCA1MDAgMCAxIDEgMzU0IDM1NEwtMzU0LTM1NEE1MDAgNTAwIDAgMSAwLTM1NCAzNTR6Jz48L3BhdGg+XG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9JyNpbmYnIHN0cm9rZURhc2hhcnJheT0nMTU3MCA1MTQzJyBzdHJva2VEYXNob2Zmc2V0PSc2NzEzcHgnPjwvdXNlPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHA+S+G6v3QgbuG7kWkgdMOgaSBraG/huqNuPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICB7ZXJyb3JNc2cgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9yQm94fT5cbiAgICAgICAgICA8cD57ZXJyb3JNc2d9PC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0blJldHJ5fSBvbkNsaWNrPXtjb25uZWN0VXNlcn0+XG4gICAgICAgICAgICBUaOG7rSBs4bqhaVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdDtcbiIsIi8qKlxuICogRmlsZTogaW5kZXgudHN4XG4gKiBQcm9qZWN0OiBjaGF0dGluZy1taW5pbWFsXG4gKiBGaWxlIENyZWF0ZWQ6IDMwIFNlcCAyMDIxIDEwOjUwOjMyXG4gKiBBdXRob3I6IHVuZDNmaW5lZCAobWVAdW5kM2ZpbmVkLmNvbSlcbiAqIC0tLS0tXG4gKiBMYXN0IE1vZGlmaWVkOiAwNyBPY3QgMjAyMSAxNTowOToyMFxuICogTW9kaWZpZWQgQnk6IHVuZDNmaW5lZCAobWVAdW5kM2ZpbmVkLmNvbSlcbiAqIC0tLS0tXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjEgdW5kM2ZpbmVkLmNvbVxuICovXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7QWN0aW9uQ3JlYXRvcnNNYXBPYmplY3QsIGJpbmRBY3Rpb25DcmVhdG9ycywgRGlzcGF0Y2h9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7QWN0aW9uRnVuYywgR2VuZXJpY0FjdGlvbn0gZnJvbSAnY2hhdHRpbmctcmVkdXgvdHlwZXMvYWN0aW9ucyc7XG5pbXBvcnQge1JlcXVlc3RTdGF0dXN9IGZyb20gJ2NoYXR0aW5nLXJlZHV4L2NvbnN0YW50cyc7XG5pbXBvcnQge2dldEN1cnJlbnRVc2VyfSBmcm9tICdjaGF0dGluZy1yZWR1eC9zZWxlY3RvcnMvZW50aXRpZXMvdXNlcnMnO1xuXG5pbXBvcnQge2Nvbm5lY3QgYXMgdXNlckNvbm5lY3R9IGZyb20gJyRhY3Rpb25zL3ZpZXdzL2Nvbm5lY3QnO1xuXG5pbXBvcnQge0dsb2JhbFN0YXRlfSBmcm9tICckdHlwZXMvc3RvcmUnO1xuXG5pbXBvcnQgdHlwZSB7U3RhdGVQcm9wcywgRGlzcGF0Y2hQcm9wcywgT3duUHJvcHMsIEFjdGlvbnN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IENvbm5lY3QgZnJvbSAnLi9Db25uZWN0JztcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBHbG9iYWxTdGF0ZSkge1xuICBjb25zdCBpbml0aWFsaXppbmcgPSBzdGF0ZS5yZXF1ZXN0cy51c2Vycy5sb2dvdXQuc3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLlNVQ0NFU1MgfHwgIXN0YXRlLnN0b3JhZ2UuaW5pdGlhbGl6ZWQ7XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsaXppbmcsXG4gICAgY3VycmVudFVzZXI6IGdldEN1cnJlbnRVc2VyKHN0YXRlKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBEaXNwYXRjaDxHZW5lcmljQWN0aW9uPikge1xuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9yczxBY3Rpb25DcmVhdG9yc01hcE9iamVjdDxBY3Rpb25GdW5jPiwgQWN0aW9ucz4oXG4gICAgICB7XG4gICAgICAgIHVzZXJDb25uZWN0LFxuICAgICAgfSxcbiAgICAgIGRpc3BhdGNoXG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDxTdGF0ZVByb3BzLCBEaXNwYXRjaFByb3BzLCBPd25Qcm9wcywgR2xvYmFsU3RhdGU+KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb25uZWN0KTtcbiJdLCJuYW1lcyI6WyJyZWRpcmVjdEJhY2tsaXN0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJjdXJyZW50VXNlciIsImFjdGlvbnMiLCJsb2NhdGlvbiIsImhpc3RvcnkiLCJjb25uZWN0VXNlciIsIl9jb250ZXh0IiwidXNlckNvbm5lY3QiLCJkYXRhIiwiZXJyb3IiLCJzZWFyY2giLCJuZXh0IiwiVVJMU2VhcmNoUGFyYW1zIiwiZ2V0IiwiaW5kZXhPZiIsInJlcGxhY2UiLCJyZWRpcmVjdFVzZXJUb0RlZmF1bHRUZWFtIiwibWVzc2FnZSIsIl9jb250ZXh0MiIsIkdsb2JhbEFjdGlvbnMiLCJpbml0aWFsaXppbmciLCJjbGFzc05hbWUiLCJjbHN4IiwiY2xhc3NlcyIsInZpZXdCb3giLCJpZCIsImQiLCJ4bGlua0hyZWYiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNob2Zmc2V0Iiwib25DbGljayIsImNvbm5lY3QiLCJzdGF0ZSIsInJlcXVlc3RzIiwidXNlcnMiLCJsb2dvdXQiLCJzdGF0dXMiLCJSZXF1ZXN0U3RhdHVzIiwiU1VDQ0VTUyIsInN0b3JhZ2UiLCJpbml0aWFsaXplZCIsImdldEN1cnJlbnRVc2VyIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJDb25uZWN0Il0sIm1hcHBpbmdzIjoiNnhGQXdCQSxJQUFNQSxFQUFtQixDQUFDLFdBQVksU0FBVSxjQUVmLFNBQUNDLFdBQ0VDLG9CQUFTLE1BQXBDQyxPQUFXQyxXQUNjRixtQkFBUyxPQUFsQ0csT0FBVUMsT0FDVkMsRUFBMkNOLEVBQTNDTSxZQUFhQyxFQUE4QlAsRUFBOUJPLFFBQVNDLEVBQXFCUixFQUFyQlEsU0FBVUMsRUFBV1QsRUFBWFMsUUFFakNDLDhDQUFjLCtHQUNELEtBQWJOLEtBQTZCLElBRGZPLFNBSVVKLEVBQVFLLGlDQUE3QkMsSUFBQUEsS0FBTUMsSUFBQUEsT0FDVEQsc0JBakJTRSxFQWtCVVAsRUFBU08sU0FBeEJDLEVBakJPLElBQUlDLGdCQUFnQkYsR0FDckJHLElBQUksU0FBVyxVQWlCZm5CLEVBQWlCb0IsUUFBUUgsNkNBQzVCUCxFQUFRVyxRQUFRSixxQ0FHbEJLLGFBR0xQLEtBQ1VBLEVBQU1RLFNBZkYsa0NBWnRCLElBQWlCUCxnRUErQlRNLDhDQUE0Qix1R0FDbkIsR0FEbUJFLFNBRTFCQyxFQUF3Q3hCLEVBQU1TLHFJQUc1QyxjQUNIVCxFQUFNeUIsZUFBZ0JuQixNQUl0Qk4sRUFBTXlCLGNBQWtCbkIsR0FBZ0JKLHFDQUs1QyxhQUdJd0IsVUFBV0MsRUFBS0Msc0JBQ2RGLFVBQVdFLHFCQUNUQyxRQUFRLDRDQUNMQyxHQUFHLE1BQU1DLEVBQUUsNEVBQ1pDLFVBQVUsT0FBT0MsZ0JBQWdCLFlBQVlDLGlCQUFpQix1REFJdEU5QixXQUNNc0IsVUFBV0UsNEJBQ1Z4QixnQkFDSXNCLFVBQVdFLEVBQWtCTyxRQUFTekIsMEJBSTlDLHFCQ3ZDSzBCLEdBcEJmLFNBQXlCQyxTQUdoQixDQUNMWixhQUhtQlksRUFBTUMsU0FBU0MsTUFBTUMsT0FBT0MsU0FBV0MsRUFBY0MsVUFBWU4sRUFBTU8sUUFBUUMsWUFJbEd2QyxZQUFhd0MsRUFBZVQsT0FJaEMsU0FBNEJVLFNBQ25CLENBQ0x4QyxRQUFTeUMsRUFDUCxhQUNFcEMsR0FFRm1DLE1BS1NYLENBQStGYSJ9
