import{B as e,A as s,y as t,x as r,I as n,J as a}from"./vendor.b4a3f96f.js";import{b$ as i,Q as o,aQ as c}from"./index.feda0f07.js";import{g as l,b as u}from"./index.caf4b2b6.js";function d(){return async(e,s)=>{const{clientId:t,userToken:r}=l();return e(i(t,r))}}var f="styles-module-container-60f4e87e",h="styles-module-content-8589d34b",m="styles-module-error-box-1d18b684",p="styles-module-btn-retry-8bc66879";var x=n=>{const[a,i]=e.exports.useState(!1),[o,c]=e.exports.useState(!1),[l,d]=e.exports.useState(""),{currentUser:x,actions:y,location:b,history:v}=n,g=async()=>{const{data:e,error:s}=await y.userConnect();if(e){const e=(t=b.search,new URLSearchParams(t).get("next")||"");return e&&"/connect"!==e?v.replace(e):S()}var t;s&&(d(s.message),c(!0))},S=async()=>{i(!0),await u(n.history)};return e.exports.useEffect((()=>{if(n.initializing||!x){if(n.initializing||x&&a)return()=>{};g()}else S()}),[]),s("div",{className:t(f),children:[s("div",{className:h,children:[s("svg",{viewBox:"-2000 -1000 4000 2000",children:[r("path",{id:"inf",d:"M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"}),r("use",{xlinkHref:"#inf",strokeDasharray:"1570 5143",strokeDashoffset:"6713px"})]}),r("p",{children:"Kết nối tài khoản"})]}),l?s("div",{className:m,children:[r("p",{children:l}),r("button",{className:p,onClick:g,children:"Thử lại"})]}):null]})};var y=n((function(e){return{initializing:e.requests.users.logout.status===o.SUCCESS||!e.storage.initialized,currentUser:c(e)}}),(function(e){return{actions:a({userConnect:d},e)}}))(x);export{y as default};
