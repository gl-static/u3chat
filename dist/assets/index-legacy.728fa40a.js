!function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=o(e);if(t){var s=o(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=document.createElement("style");s.innerHTML=".u3-cxx-94f05ec6{display:flex;width:91.666667%;align-items:center;justify-content:center}@media (min-width: 480px){.u3-cxx-94f05ec6{width:60%}}.u3-cxx-94f05ec6 .u3-cxx-33cfbf8b{display:inline-flex;flex-direction:row;align-items:flex-start}.u3-cxx-94f05ec6 .u3-cxx-33cfbf8b .u3-cxx-b53e00af{height:6rem}.u3-cxx-94f05ec6 .u3-cxx-33cfbf8b .u3-cxx-9886d584 p{margin-bottom:.5rem;font-size:.875rem;line-height:1.25rem}.u3-cxx-94f05ec6 .u3-cxx-33cfbf8b .u3-cxx-9886d584 h2{font-size:2.25rem;line-height:2.5rem}\n",document.head.appendChild(s),System.register(["./vendor-legacy.974f73ac.js","./index-legacy.5e1dfa41.js"],(function(e){"use strict";var a,o,s,i,c,l,u,d,f,h,_,g;return{setters:[function(e){a=e.x,o=e.Z,s=e.A,i=e.R,c=e.a2,l=e.F},function(e){u=e.bV,d=e.bC,f=e.C,h=e.E,_=e.a_,g=e.a$}],execute:function(){var m=function(e){return a("svg",{xmlns:"http://www.w3.org/2000/svg",className:e.className||"u3-h-5 u3-w-5",viewBox:"0 0 20 20",fill:"currentColor",children:a("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})},N=function(e){var t=e.type,r=e.title,n=null;if(t)switch(t){case d.LOCAL_STORAGE:n=a(o,{id:"error.local_storage.title",defaultMessage:"Cannot Load Gomlo"});break;case d.PERMALINK_NOT_FOUND:n=a(o,{id:"permalink.error.title",defaultMessage:"Message Not Found"});break;case d.OAUTH_ACCESS_DENIED:n=a(o,{id:"error.oauth_access_denied.title",defaultMessage:"Authorization Error"});break;case d.OAUTH_MISSING_CODE:n=a(o,{id:"error.oauth_missing_code.title",defaultMessage:"Mattermost Needs Your Help"});break;case d.OAUTH_INVALID_REDIRECT_URL:case d.OAUTH_INVALID_PARAM:n=a(o,{id:"error.oauth_invalid_param.title",defaultMessage:"OAuth Parameter Error"});break;case d.TEAM_NOT_FOUND:n=a(o,{id:"error.team_not_found.title",defaultMessage:"Team Not Found"});break;case d.CHANNEL_NOT_FOUND:n=a(o,{id:"error.channel_not_found.title",defaultMessage:"Channel Not Found"});break;case d.GROUP_NOT_FOUND:n=a(o,{id:"error.group_not_found.title",defaultMessage:"Nhóm không tồn tại"});break;case d.CHANNEL_BANNED:n=a(o,{id:"error.channel_not_found.title",defaultMessage:"Không có quyền xem nhóm"});break;case d.PAGE_NOT_FOUND:default:n=a(o,{id:"error.not_found.title",defaultMessage:"Page Not Found"})}else n=r||u("error.generic.title","Error");return n},p=function(e){var t=e.type,r=e.message,n=e.service,i=e.isGuest,c=null;if(t)switch(t){case d.LOCAL_STORAGE:c=s("div",{children:[a(o,{id:"error.local_storage.message",defaultMessage:"Mattermost was unable to load because a setting in your browser prevents the use of its local storage features. To allow Mattermost to load, try the following actions:"}),s("ul",{children:[a("li",{children:a(o,{id:"error.local_storage.help1",defaultMessage:"Enable cookies"})}),a("li",{children:a(o,{id:"error.local_storage.help2",defaultMessage:"Turn off private browsing"})}),a("li",{children:a(o,{id:"error.local_storage.help3",defaultMessage:"Use a supported browser (IE 11, Chrome 61+, Firefox 60+, Safari 12+, Edge 42+)"})})]})]});break;case d.PERMALINK_NOT_FOUND:c=a("p",{children:a(o,{id:"permalink.error.access",defaultMessage:"Permalink belongs to a deleted message or to a channel to which you do not have access."})});break;case d.TEAM_NOT_FOUND:c=a("p",{children:a(o,{id:"error.team_not_found.message",defaultMessage:"The team you're requesting is private or does not exist. Please contact your Administrator for an invitation."})});break;case d.CHANNEL_NOT_FOUND:c=a("p",{children:a(o,i?{id:"error.channel_not_found.message_guest",defaultMessage:"Your guest account has no channels assigned. Please contact an administrator."}:{id:"error.channel_not_found.message",defaultMessage:"The channel you're requesting is private or does not exist. Please contact an Administrator to be added to the channel."})});break;case d.GROUP_NOT_FOUND:c=a("p",{children:a(o,i?{id:"error.group_not_found.message_guest",defaultMessage:"Nhóm không tồn tại hoặc không có quyền xem nhóm."}:{id:"error.group_not_found.message",defaultMessage:"Nhóm không tồn tại hoặc không có quyền xem nhóm."})});break;case d.CHANNEL_BANNED:c=a("p",{children:a(o,i?{id:"error.channel_banned.message_guest",defaultMessage:"Bạn đã bị chặn xem nhóm. Hãy liên hệ Admin để được hỗ trợ."}:{id:"error.channel_banned.message",defaultMessage:"Bạn đã bị chặn xem nhóm. Hãy liên hệ Admin để được hỗ trợ."})});break;case d.OAUTH_ACCESS_DENIED:c=a("p",{children:a(o,{id:"error.oauth_access_denied",defaultMessage:"You must authorize Mattermost to log in with {service}.",values:{service:n}})});break;case d.OAUTH_INVALID_REDIRECT_URL:case d.OAUTH_INVALID_PARAM:c=a("p",{children:r});break;case d.PAGE_NOT_FOUND:default:c=a("p",{children:a(o,{id:"error.not_found.message",defaultMessage:"The page you were trying to reach does not exist"})})}else c=a("p",r?{children:r}:{children:a(o,{id:"error.generic.message",defaultMessage:"An error has occurred."})});return c},b="u3-cxx-94f05ec6",y="u3-cxx-33cfbf8b",O="u3-cxx-b53e00af",A="u3-cxx-9886d584",x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(_,e);var i,l,u,h=n(_);function _(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_),h.call(this,e)}return i=_,(l=[{key:"componentDidMount",value:function(){var e;null===(e=document.getElementById("u3-chatting"))||void 0===e||e.setAttribute("class","sticky error")}},{key:"componentWillUnmount",value:function(){var e;null===(e=document.getElementById("u3-chatting"))||void 0===e||e.removeAttribute("class")}},{key:"render",value:function(){var e,t=this.props,r=t.isGuest,n=t.location,i=new URLSearchParams(n.search),l=i.get("type");return d.PERMALINK_NOT_FOUND,e=l===d.TEAM_NOT_FOUND?a(c,{to:"/",children:a(o,{id:"error.generic.link",defaultMessage:"Back to {siteName}",values:{siteName:this.props.siteName}})}):l===d.CHANNEL_NOT_FOUND&&r?a(c,{to:"/",children:a(o,{id:"error.channelNotFound.guest_link",defaultMessage:"Back"})}):l===d.CHANNEL_NOT_FOUND||l===d.GROUP_NOT_FOUND||l===d.CHANNEL_BANNED?a(c,{to:i.get("returnTo"),children:a(o,{id:"error.channelNotFound.link",defaultMessage:"Back to {defaultChannelName}",values:{defaultChannelName:f.DEFAULT_CHANNEL_UI_NAME}})}):l===d.OAUTH_ACCESS_DENIED||l===d.OAUTH_MISSING_CODE?a(c,{to:"/connect",children:a(o,{id:"error.generic.link_login",defaultMessage:"Back to Login Page"})}):l===d.OAUTH_INVALID_PARAM||l===d.OAUTH_INVALID_REDIRECT_URL?null:a(c,{to:"/",children:a(o,{id:"error.generic.link",defaultMessage:"Back to {siteName}",values:{siteName:this.props.siteName}})}),a("div",{className:b,children:s("div",{className:y,children:[a("div",{className:O,children:a(m,{className:"u3-w-20 u3-h-20 u3-text-secondary"})}),s("div",{className:A,children:[a("h2",{"data-testid":"errorMessageTitle",children:a(N,{type:l,title:""})}),a(p,{type:l,message:"",service:"",isGuest:r}),e]})]})})}}])&&t(i.prototype,l),u&&t(i,u),_}(i.Component);e("default",l((function(e){var t=h(e),r=_(e);return{siteName:t.SiteName,isGuest:Boolean(r&&g(r))}}),(function(e){return{}}))(x))}}}))}();
