!function(){var e=document.createElement("style");e.innerHTML=".u3-cxx-d3bc89b9{display:flex;height:auto;width:100%;flex-direction:column;align-items:center;justify-content:center;flex-grow:1}.u3-cxx-d3bc89b9 .u3-cxx-35f23b7d{display:inline-flex;width:14rem;flex-direction:column;align-items:center}.u3-cxx-d3bc89b9 .u3-cxx-35f23b7d svg{width:8rem;background-color:transparent;fill:none;stroke:#e5e5e5;stroke-linecap:round;stroke-width:8%}.u3-cxx-d3bc89b9 .u3-cxx-35f23b7d use{stroke:var(--u3-chat-primary-color);animation:u3-cxx-f7329cfd 2s linear infinite}@keyframes u3-cxx-f7329cfd{to{stroke-dashoffset:0px}}.u3-cxx-d3bc89b9 p{font-size:1rem;line-height:1.5rem;font-weight:400}.u3-cxx-d3bc89b9 .u3-cxx-72f1a839{margin-top:.5rem;width:50%;text-align:center}.u3-cxx-d3bc89b9 .u3-cxx-72f1a839 p{margin-top:.5rem;margin-bottom:.5rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgba(64,64,64,var(--tw-text-opacity))}.u3-cxx-d3bc89b9 .u3-cxx-72f1a839 .u3-cxx-1a5b411c{border-radius:.25rem;background-color:var(--u3-chat-secondary-color);padding:.5rem .75rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy.318f07ff.js","./index-legacy.2f083522.js","./index-legacy.4a4b3291.js"],(function(e){"use strict";var t,n,a,r,i,s,o,c,d,u,l,m,x,f,b,h,g,p;return{setters:[function(e){t=e.B,n=e.A,a=e.y,r=e.x,i=e.F,s=e.G},function(e){o=e.C,c=e.y,d=e.aX,u=e.bH,l=e.aY,m=e.gq,x=e.b5,f=e.b6,b=e.gr,h=e.aM,g=e.gc},function(e){p=e.F}],execute:function(){var T="u3-cxx-d3bc89b9",_="u3-cxx-35f23b7d",y="u3-cxx-72f1a839",v="u3-cxx-1a5b411c";var k=e=>{const[i,s]=t.exports.useState(""),[c,d]=t.exports.useState(!1),u=async()=>{d(!0);const{data:t,error:n}=await e.actions.getTeams(0,10,!1);n?s(n.message):(void 0!==e.currentUserRoles&&await e.actions.loadRolesIfNeeded(e.currentUserRoles.split(" ")),l(t))},l=async t=>{const{currentUserRoles:n,siteURL:a}=e,i=t||e.listableTeams[0];if(!i[0])return s("Có lỗi không xác định. Hãy thử lại!");const c=i[0],{data:d,error:u}=await e.actions.addUserToTeam(i[0].id,e.currentUserId);if(d&&void 0!==e.history)e.history.replace(`/${c.name}`);else if(u){let e=u.message;"api.team.add_members.user_denied"===u.server_error_id&&(e=void 0!==n&&n.includes(o.PERMISSIONS_SYSTEM_ADMIN)?r(p,{id:"join_team_group_constrained_denied_admin",defaultMessage:`You need to be a member of a linked group to join this team. You can add a group to this team [here](${a}/admin_console/user_management/groups).`,values:{siteURL:a}}):r(p,{id:"join_team_group_constrained_denied",defaultMessage:"You need to be a member of a linked group to join this team."})),s(e)}};return t.exports.useEffect((()=>{c||u()}),[]),n("div",{className:a(T),children:[n("div",{className:_,children:[n("svg",{viewBox:"-2000 -1000 4000 2000",children:[r("path",{id:"inf",d:"M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"}),r("use",{xlinkHref:"#inf",strokeDasharray:"1570 5143",strokeDashoffset:"6713px"})]}),r("p",{children:"Kết nối tài khoản"})]}),i?n("div",{className:y,children:[r("p",{children:i}),r("button",{className:v,onClick:u,children:"Thử lại"})]}):null]})};e("default",i((function(e){const t=c(e),n=d(e),a=Object.values(u(e));return{currentUserId:n.id,currentUserRoles:n.roles||"",currentUserIsGuest:l(n),customDescriptionText:t.CustomDescriptionText,isMemberOfTeam:a&&a.length>0,listableTeams:m(e,n.locale),siteName:t.SiteName,canCreateTeams:x(e,{permission:f.CREATE_TEAM}),canManageSystem:x(e,{permission:f.MANAGE_SYSTEM}),canJoinPublicTeams:x(e,{permission:f.JOIN_PUBLIC_TEAMS}),canJoinPrivateTeams:x(e,{permission:f.JOIN_PRIVATE_TEAMS}),siteURL:t.SiteURL,totalTeamsCount:e.entities.teams.totalCount||0,publicChannel:t.ChannelPublic}}),(function(e){return{actions:s({getTeams:b,loadRolesIfNeeded:h,addUserToTeam:g},e)}}))(k))}}}))}();
