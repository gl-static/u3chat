import{B as e,A as s,y as r,x as t,I as a,J as n}from"./vendor.b4a3f96f.js";import{b$ as i,Q as c,aQ as o}from"./index.a82357f8.js";import{g as u,b as l}from"./index.50d5f993.js";function d(){return async(e,s)=>{const{clientId:r,userToken:t}=u();return e(i(r,t))}}var f="u3-cxx-60f4e87e",x="u3-cxx-8589d34b",h="u3-cxx-1d18b684",p="u3-cxx-8bc66879";var m=a=>{const[n,i]=e.exports.useState(!1),[c,o]=e.exports.useState(!1),[u,d]=e.exports.useState(""),{currentUser:m,actions:v,location:g,history:b}=a,y=async()=>{const{data:e,error:s}=await v.userConnect();if(e){const e=(r=g.search,new URLSearchParams(r).get("next")||"");return e&&"/connect"!==e?b.replace(e):S()}var r;s&&(d(s.message),o(!0))},S=async()=>{i(!0),await l(a.history)};return e.exports.useEffect((()=>{if(a.initializing||!m){if(a.initializing||m&&n)return()=>{};y()}else S()}),[]),s("div",{className:r(f),children:[s("div",{className:x,children:[s("svg",{viewBox:"-2000 -1000 4000 2000",children:[t("path",{id:"inf",d:"M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"}),t("use",{xlinkHref:"#inf",strokeDasharray:"1570 5143",strokeDashoffset:"6713px"})]}),t("p",{children:"Kết nối tài khoản"})]}),u?s("div",{className:h,children:[t("p",{children:u}),t("button",{className:p,onClick:y,children:"Thử lại"})]}):null]})};var v=a((function(e){return{initializing:e.requests.users.logout.status===c.SUCCESS||!e.storage.initialized,currentUser:o(e)}}),(function(e){return{actions:n({userConnect:d},e)}}))(m);export{v as default};
