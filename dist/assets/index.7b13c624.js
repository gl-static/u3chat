import{B as e,A as s,y as r,x as a,G as i,H as t}from"./vendor.b71a1134.js";import{V as n,a_ as c}from"./index.5fa7e194.js";import{b as o,d as l}from"./index.9a0d3519.js";var u="u3-cxx-60f4e87e",d="u3-cxx-8589d34b",x="u3-cxx-1d18b684",f="u3-cxx-8bc66879";const h=["/connect","/error","/initial"];var m=i=>{const[t,n]=e.exports.useState(!1),[c,l]=e.exports.useState(""),{currentUser:m,actions:p,location:v,history:g}=i,b=async()=>{""!==c&&l("");const{data:e,error:s}=await p.userConnect();if(e){const e=(r=v.search,new URLSearchParams(r).get("next")||"");return e&&-1===h.indexOf(e)?g.replace(e):y()}var r;s&&l(s.message)},y=async()=>{n(!0),await o(i.history)};return e.exports.useEffect((()=>{if(i.initializing||!m){if(i.initializing||m&&t)return()=>{};b()}else y()}),[]),s("div",{className:r(u),children:[s("div",{className:d,children:[s("svg",{viewBox:"-2000 -1000 4000 2000",children:[a("path",{id:"inf",d:"M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"}),a("use",{xlinkHref:"#inf",strokeDasharray:"1570 5143",strokeDashoffset:"6713px"})]}),a("p",{children:"Kết nối tài khoản"})]}),c?s("div",{className:x,children:[a("p",{children:c}),a("button",{className:f,onClick:b,children:"Thử lại"})]}):null]})};var p=i((function(e){return{initializing:e.requests.users.logout.status===n.SUCCESS||!e.storage.initialized,currentUser:c(e)}}),(function(e){return{actions:t({userConnect:l},e)}}))(m);export{p as default};
