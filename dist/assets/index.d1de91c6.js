var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,r=(e,t,n)=>(i(e,"symbol"!=typeof t?t+"":t,n),n);import{R as c,x as d,w as u,F as l,G as p}from"./vendor.458fa16b.js";import{a_ as m,cH as h,gB as w,ap as v,gC as f,L as g,gy as b,S as L,aV as y,E as k,y as E,as as U,a3 as S,gD as I}from"./index.9d9d3fcb.js";import{i as O,e as z,a as B,B as T,c as j,W as C}from"./index.ed6e3617.js";function x(e){return async(r,c)=>{const d=m(c()),u=h(c(),d.id),l=u.automaticTimezone!==e;if(u.useAutomaticTimezone&&l){const l={useAutomaticTimezone:"true",automaticTimezone:e,manualTimezone:u.manualTimezone},m=(p=((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&i(e,n,t[n]);if(o)for(var n of o(t))a.call(t,n)&&i(e,n,t[n]);return e})({},d),t(p,n({timezone:l})));w(m)(r,c)}var p;return{}}}const D=v.dispatch,A=v.getState;class P extends c.PureComponent{constructor(e){super(e),r(this,"onDesktopMessageListener",(e=>{const{origin:t,data:{type:n,message:o={}}={}}=e;if(this.props.currentUser&&t===window.location.origin)switch(n){case"register-desktop":{const{version:e}=o;window.desktop||(window.desktop={}),window.desktop.version=u.valid(u.coerce(e));break}case"user-activity-update":{const{userIsActive:e,manual:t}=o;!0!==e&&!1!==e||C.userUpdateActiveStatus(e,t);break}case"notification-clicked":{const{channel:e,teamId:t}=o;window.focus(),this.props.actions.getChannelURLAction(e,t);break}}})),r(this,"handleBackSpace",(e=>{8!==e.which||["input","textarea"].includes(e.target.tagName.toLowerCase())||e.preventDefault()})),r(this,"handleBeforeUnload",(()=>{window.removeEventListener("beforeunload",this.handleBeforeUnload),document.cookie.indexOf(`${L.COOKIE.SESSION_USER}=`)>-1&&y("",this.props.currentChannelId||"")(D,A),j()}));const t=document.getElementById("u3-chatting");t&&(t.className+=" channel-view")}isValidState(){return null!=this.props.currentUser}componentDidMount(){const{currentUser:e,enableTimezone:t,actions:n,location:o,history:s,clientId:a}=this.props;if(O(),t&&n.autoUpdateTimezone(f()),window.addEventListener("beforeunload",this.handleBeforeUnload),window.addEventListener("focus",this.onFocusListener),window.addEventListener("blur",this.onBlurListener),document.hasFocus()||z(!1),window.addEventListener("message",this.onDesktopMessageListener),window.postMessage({type:"webapp-ready"},window.location.origin),!e)return g.removeUserId(a),g.removeToken(a),void B("/error?type=no-auth&redirect_to="+encodeURIComponent(o.pathname),!0,!1,s);window.addEventListener("keydown",this.handleBackSpace),this.isValidState()&&T.signalLogin()}componentWillUnmount(){j(),window.removeEventListener("keydown",this.handleBackSpace),window.removeEventListener("focus",this.onFocusListener),window.removeEventListener("blur",this.onBlurListener),window.removeEventListener("message",this.onDesktopMessageListener)}render(){return this.isValidState()?this.props.children:d(b,{message:"Xác thực tài khoản"})}onFocusListener(){z(!0)}onBlurListener(){z(!1)}}var F=P;const M=(e,t)=>(n,o)=>S.push(I(o(),e,t));var R=l((function(e){const t=k(e),n=E();return{currentUser:m(e),currentChannelId:U(e),enableTimezone:"true"===t.ExperimentalTimezone,clientId:n.clientId}}),(function(e){return{actions:p({autoUpdateTimezone:x,getChannelURLAction:M},e)}}))(F);export{R as default};
