import{B as e,A as s,y as a,x as t,F as i,G as r}from"./vendor.7d70a647.js";import{C as n,y as o,aX as d,bH as c,aY as l,gq as m,b5 as u,b6 as p,gr as f,aM as h,gc as T}from"./index.702251d2.js";import{F as _}from"./index.e39a8875.js";var x="u3-cxx-d3bc89b9",b="u3-cxx-35f23b7d",g="u3-cxx-72f1a839",v="u3-cxx-1a5b411c";var M=i=>{const[r,o]=e.exports.useState(""),[d,c]=e.exports.useState(!1),l=async()=>{c(!0);const{data:e,error:s}=await i.actions.getTeams(0,10,!1);s?o(s.message):(void 0!==i.currentUserRoles&&await i.actions.loadRolesIfNeeded(i.currentUserRoles.split(" ")),m(e))},m=async e=>{const{currentUserRoles:s,siteURL:a}=i,r=e||i.listableTeams[0];if(!r[0])return o("Có lỗi không xác định. Hãy thử lại!");const d=r[0],{data:c,error:l}=await i.actions.addUserToTeam(r[0].id,i.currentUserId);if(c&&void 0!==i.history)i.history.replace(`/${d.name}`);else if(l){let e=l.message;"api.team.add_members.user_denied"===l.server_error_id&&(e=void 0!==s&&s.includes(n.PERMISSIONS_SYSTEM_ADMIN)?t(_,{id:"join_team_group_constrained_denied_admin",defaultMessage:`You need to be a member of a linked group to join this team. You can add a group to this team [here](${a}/admin_console/user_management/groups).`,values:{siteURL:a}}):t(_,{id:"join_team_group_constrained_denied",defaultMessage:"You need to be a member of a linked group to join this team."})),o(e)}};return e.exports.useEffect((()=>{d||l()}),[]),s("div",{className:a(x),children:[s("div",{className:b,children:[s("svg",{viewBox:"-2000 -1000 4000 2000",children:[t("path",{id:"inf",d:"M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"}),t("use",{xlinkHref:"#inf",strokeDasharray:"1570 5143",strokeDashoffset:"6713px"})]}),t("p",{children:"Kết nối tài khoản"})]}),r?s("div",{className:g,children:[t("p",{children:r}),t("button",{className:v,onClick:l,children:"Thử lại"})]}):null]})};var S=i((function(e){const s=o(e),a=d(e),t=Object.values(c(e));return{currentUserId:a.id,currentUserRoles:a.roles||"",currentUserIsGuest:l(a),customDescriptionText:s.CustomDescriptionText,isMemberOfTeam:t&&t.length>0,listableTeams:m(e,a.locale),siteName:s.SiteName,canCreateTeams:u(e,{permission:p.CREATE_TEAM}),canManageSystem:u(e,{permission:p.MANAGE_SYSTEM}),canJoinPublicTeams:u(e,{permission:p.JOIN_PUBLIC_TEAMS}),canJoinPrivateTeams:u(e,{permission:p.JOIN_PRIVATE_TEAMS}),siteURL:s.SiteURL,totalTeamsCount:e.entities.teams.totalCount||0,publicChannel:s.ChannelPublic}}),(function(e){return{actions:r({getTeams:f,loadRolesIfNeeded:h,addUserToTeam:T},e)}}))(M);export{S as default};
