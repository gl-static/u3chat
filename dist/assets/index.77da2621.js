import{B as e,A as n,y as a,x as s,a7 as t,F as c,G as i}from"./vendor.5fb8f553.js";import{gn as o,ao as r,D as d,cF as l,m as u,L as m,b0 as h}from"./index.1d8c4b47.js";import{b as f,g as x,l as p,d as N}from"./index.a2f59e48.js";var v="u3-cxx-1b771820",I="u3-cxx-0536c7cf",g="u3-cxx-5d874e90",k="u3-cxx-eccefc2a";var A=c=>{const[i,d]=e.exports.useState(!1),[l,u]=e.exports.useState(!1),m=async e=>{const{location:n,history:a,noAccounts:s,currentUserId:t}=c;(s||!t&&!e)&&a.push(`/connect?next=${encodeURIComponent(n.pathname)}`),d(!0),o()(r.dispatch,r.getState)},h=async()=>{if(!c.siteName&&c.clientId){const[e,n,a,s]=await c.actions.loadMeAndConfig(c.clientId);s||await c.actions.userConnect(),s&&s.data&&f(c.history),m(s&&s.data)}c.siteName&&m(!1)};return e.exports.useEffect((()=>{h()}),[]),n("div",i?{className:a(v),children:[s("div",{className:I,children:s("p",{children:"Kết nối thành công"})}),s(t,{to:"/connect"})]}:{className:a(v),children:[n("div",{className:I,children:[n("svg",{viewBox:"-2000 -1000 4000 2000",children:[s("path",{id:"inf",d:"M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"}),s("use",{xlinkHref:"#inf",strokeDasharray:"1570 5143",strokeDashoffset:"6713px"})]}),s("p",{children:"Kết nối tài khoản"})]}),l?n("div",{className:g,children:[s("p",{children:"Kết nối có thể bị gián đoạn."}),s("button",{className:k,onClick:h,children:"Thử lại"})]}):null]})};var b=c((function(e){const n=x(),a=d(e),s=l(e),t=n.clientId===s.clientId,c=s.allowed,i=u(e),o=m.getPreviousTeamId(u(e)),r=h(e,o);return{siteName:a.SiteName,noAccounts:"true"===a.NoAccounts,clientValid:t,clientId:n.clientId,allowedDomains:c,hasUserToken:!!n.userToken,permalinkRedirectTeamName:r?r.name:"",currentUserId:i}}),(function(e){return{actions:i({loadMeAndConfig:p,userConnect:N},e)}}))(A);export{b as default};
