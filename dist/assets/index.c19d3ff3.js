var e=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,c=(a,s,i)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[s]=i;import{x as n,A as l,y as u,B as t,F as o,G as m}from"./vendor.458fa16b.js";import{x as h,N as v,K as p,gI as N,U as x,b6 as b}from"./index.3a9d8da3.js";import{u as f,P as g,T as y,U as k}from"./index.9b618469.js";const I={day:"1",week:"7",month:"30"};function P(e){return async(a,s)=>{let i;const d=I[e]||"";try{i=await h.getRanks(d)}catch(r){return v(r,a,s),{error:r}}return a(p([{type:N.RECEIVED_RANKS,data:{period:e,ranks:i.ranks}},{type:x.RECEIVED_PROFILES_LIST,data:i.users}])),{data:i}}}var w="u3-cxx-0ab94e09",S="u3-cxx-37dabf16",_="u3-cxx-f7a30161",D="u3-cxx-55367d64",E="u3-cxx-eb978ca1",O="u3-cxx-cea3b1a4",j="u3-cxx-fbc5e2fd",T="u3-cxx-1836d1c0",C="u3-cxx-2e72d2ce",R="u3-cxx-c092ab8d",U="u3-cxx-c52e7e80",z="u3-cxx-e021896f",B="u3-cxx-3968f8fa",F="u3-cxx-8ef5dbbe",L="u3-cxx-23f30cba",M="u3-cxx-a571a93a",$="u3-cxx-434a3b0a",A="u3-cxx-4261c8a5",K="u3-cxx-894fe5eb",V="u3-cxx-ddc4fb6c",G="u3-cxx-b1822956",H="u3-cxx-490d4934";const X=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15}];var q=e=>{const a=(new Date).getTime();return n("div",{className:w,children:l("div",{className:S,children:[l("div",{className:_,children:[l("div",{className:D,children:[n("div",{className:E,children:n("h3",{children:"Bảng xếp hạng"})}),l("div",{className:O,children:[a>164097e7?n("button",{className:u(j,{[T]:"month"===e.period}),onClick:()=>e.onSelect("month"),children:"Tháng"}):null,a>16387236e5?n("button",{className:u(j,{[T]:"week"===e.period}),onClick:()=>e.onSelect("week"),children:"Tuần"}):null,n("button",{className:u(j,{[T]:"day"===e.period}),onClick:()=>e.onSelect("day"),children:"Ngày"})]})]}),n("div",{className:u(C),children:l("div",{className:u(R,F),children:[n("div",{className:"u3-w-20 u3-h-20 u3-bg-gray-300 u3-rounded-full u3-animate-pulse"}),n("div",{className:u(U,"u3-h-6 u3-animate-pulse")}),n("div",{className:u(z,"u3-h-5 u3-mt-1 u3-bg-gray-200 u3-rounded u3-animate-pulse")})]})}),n("div",{className:u(C),children:l("div",{className:u(R,B),children:[n("div",{className:"u3-w-24 u3-h-24 u3-bg-gray-300 u3-rounded-full u3-animate-pulse"}),n("div",{className:u(U,"u3-h-6 u3-animate-pulse")}),n("div",{className:u(z,"u3-h-5 u3-mt-1 u3-bg-gray-200 u3-rounded u3-animate-pulse")})]})}),n("div",{className:u(C),children:l("div",{className:u(R,L),children:[n("div",{className:"u3-w-20 u3-h-20 u3-bg-gray-300 u3-rounded-full u3-animate-pulse"}),n("div",{className:u(U,"u3-h-6 u3-animate-pulse")}),n("div",{className:u(z,"u3-h-5 u3-mt-1 u3-bg-gray-200 u3-rounded u3-animate-pulse")})]})})]}),n("div",{className:u(M,"u3-overflow-hidden"),children:n("div",{className:u($,"u3-overflow-hidden"),children:X.map(((e,a)=>a<3?n(t.exports.Fragment,{},`rank-${a}-${e.id}`):l("div",{className:A,children:[n("div",{className:K,children:a+1}),n("div",{className:u(V,"u3-pl-1"),children:n("div",{className:"u3-w-10 u3-h-10 u3-bg-gray-300 u3-rounded-full u3-animate-pulse"})}),n("div",{className:u(G,"u3-h-6 u3-bg-gray-300 u3-rounded u3-animate-pulse")}),n("div",{className:u(H,"u3-h-6 u3-w-8 u3-bg-gray-300 u3-rounded u3-animate-pulse")})]})))})})]})})};var J=e=>{const[a,s]=t.exports.useState("day"),[i,d]=t.exports.useState("day"),[r,c]=t.exports.useState(!0),o=f(),m=(new Date).getTime();function v(s){s!==a&&(c(!0),d(s),e.actions.fetchRanks(s))}if(t.exports.useEffect((()=>{o.setTitle("Bảng Xếp Hạng"),e.actions.fetchRanks("day")}),[]),t.exports.useEffect((()=>{s(e.period),c(!1)}),[e.period]),e.isLoading||r)return n(q,{period:i,onSelect:v});const p=e.ranksData[0],N=e.ranksData[1],x=e.ranksData[2];return n("div",{className:w,children:l("div",{className:S,children:[l("div",{className:_,children:[l("div",{className:D,children:[n("div",{className:E,children:n("h3",{children:"Bảng xếp hạng"})}),l("div",{className:O,children:[m>164097e7?n("button",{className:u(j,{[T]:"month"===a}),onClick:()=>v("month"),children:"Tháng"}):null,m>16387236e5?n("button",{className:u(j,{[T]:"week"===a}),onClick:()=>v("week"),children:"Tuần"}):null,n("button",{className:u(j,{[T]:"day"===a}),onClick:()=>v("day"),children:"Ngày"})]})]}),n("div",{className:u(C),children:l("div",{className:u(R,F),children:[n(g,{src:h.getProfilePictureUrl(N.id,N.last_picture_update),size:"6xl",userId:N.id,hasMention:!1,username:N.username}),n("div",{className:U,children:n(y,{placement:"top",content:n(k,{userId:N.id,channelId:"",hideStatus:!0,disablePopover:!0}),children:n(k,{userId:N.id,channelId:"",hideStatus:!0,disablePopover:!0})})}),n("div",{className:z,children:N.score})]})}),n("div",{className:u(C),children:l("div",{className:u(R,B),children:[n(g,{src:h.getProfilePictureUrl(p.id,p.last_picture_update),size:"7xl",userId:p.id,hasMention:!1,username:p.username}),n("div",{className:U,children:n(k,{userId:p.id,channelId:"",hideStatus:!0,disablePopover:!0})}),n("div",{className:z,children:p.score})]})}),n("div",{className:u(C),children:l("div",{className:u(R,L),children:[n(g,{src:h.getProfilePictureUrl(x.id,x.last_picture_update),size:"6xl",userId:x.id,hasMention:!1,username:x.username}),n("div",{className:U,children:n(k,{userId:x.id,channelId:"",hideStatus:!0,disablePopover:!0})}),n("div",{className:z,children:x.score})]})})]}),n("div",{className:M,children:n("div",{className:$,children:e.ranksData.map(((e,a)=>a<3?n(t.exports.Fragment,{},`rank-${a}-${e.id}`):l("div",{className:A,children:[n("div",{className:K,children:a+1}),n("div",{className:V,children:n(g,{src:h.getProfilePictureUrl(e.id,e.last_picture_update),size:"xl",userId:e.id,hasMention:!1,username:e.username})}),n("div",{className:G,children:n(k,{userId:e.id,channelId:"",hideStatus:!0,disablePopover:!0})}),n("div",{className:H,children:e.score})]})))})})]})})};var Q=o((function(e){const n=function(e){return e.entities.ranks.ranks}(e),l=n.current||"";let u=[];l&&(u=n[n.current]||[]);const t=!l;return!t&&u.length&&(u=u.map((n=>{const l=b(e,n.user_id);return u=((e,a)=>{for(var s in a||(a={}))d.call(a,s)&&c(e,s,a[s]);if(i)for(var s of i(a))r.call(a,s)&&c(e,s,a[s]);return e})({},l),t={score:n.score},a(u,s(t));var u,t}))),{ranksData:u,period:l,isLoading:t}}),(function(e){return{actions:m({fetchRanks:P},e)}}))(J);export{Q as default};
