import{B as e,A as s,y as a,x as r,F as i,G as t}from"./vendor.458fa16b.js";import{V as n,a_ as c}from"./index.56607251.js";import{b as o,d as l}from"./index.81fb8e2d.js";var u="u3-cxx-98a2dad4",d="u3-cxx-1872b512",x="u3-cxx-c1ece912",f="u3-cxx-bb85169a";const h=["/connect","/error","/initial"];var m=i=>{const[t,n]=e.exports.useState(!1),[c,l]=e.exports.useState(""),{currentUser:m,actions:p,location:v,history:g}=i,b=async()=>{""!==c&&l("");const{data:e,error:s}=await p.userConnect();if(e){const e=(a=v.search,new URLSearchParams(a).get("next")||"");return e&&-1===h.indexOf(e)?g.replace(e):y()}var a;s&&l(s.message)},y=async()=>{n(!0),await o(i.history)};return e.exports.useEffect((()=>{if(i.initializing||!m){if(i.initializing||m&&t)return()=>{};b()}else y()}),[]),s("div",{className:a(u),children:[s("div",{className:d,children:[s("svg",{viewBox:"-2000 -1000 4000 2000",children:[r("path",{id:"inf",d:"M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"}),r("use",{xlinkHref:"#inf",strokeDasharray:"1570 5143",strokeDashoffset:"6713px"})]}),r("p",{children:"Kết nối tài khoản"})]}),c?s("div",{className:x,children:[r("p",{children:c}),r("button",{className:f,onClick:b,children:"Thử lại"})]}):null]})};var p=i((function(e){return{initializing:e.requests.users.logout.status===n.SUCCESS||!e.storage.initialized,currentUser:c(e)}}),(function(e){return{actions:t({userConnect:l},e)}}))(m);export{p as default};
