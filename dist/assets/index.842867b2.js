import{B as e,A as s,y as a,x as t,I as r,J as i}from"./vendor.b4a3f96f.js";import{C as n,y as o,aX as c,bH as d,aY as l,c7 as m,b5 as u,b6 as f,c8 as p,aM as h,c9 as T}from"./index.365c4468.js";import{F as _}from"./FormattedMarkdownMessage.84b68eef.js";var b="u3-cxx-d3bc89b9",x="u3-cxx-35f23b7d",g="u3-cxx-72f1a839",v="u3-cxx-1a5b411c";var M=r=>{const[i,o]=e.exports.useState(""),[c,d]=e.exports.useState(!1),l=async()=>{d(!0);const{data:e,error:s}=await r.actions.getTeams(0,10,!1);s?o(s.message):(void 0!==r.currentUserRoles&&await r.actions.loadRolesIfNeeded(r.currentUserRoles.split(" ")),m(e))},m=async e=>{const{currentUserRoles:s,siteURL:a}=r,i=e||r.listableTeams[0];if(!i[0])return o("Có lỗi không xác định. Hãy thử lại!");const c=i[0],{data:d,error:l}=await r.actions.addUserToTeam(i[0].id,r.currentUserId);if(d&&void 0!==r.history)r.history.replace(`/${c.name}`);else if(l){let e=l.message;"api.team.add_members.user_denied"===l.server_error_id&&(e=void 0!==s&&s.includes(n.PERMISSIONS_SYSTEM_ADMIN)?t(_,{id:"join_team_group_constrained_denied_admin",defaultMessage:`You need to be a member of a linked group to join this team. You can add a group to this team [here](${a}/admin_console/user_management/groups).`,values:{siteURL:a}}):t(_,{id:"join_team_group_constrained_denied",defaultMessage:"You need to be a member of a linked group to join this team."})),o(e)}};return e.exports.useEffect((()=>{c||l()}),[]),s("div",{className:a(b),children:[s("div",{className:x,children:[s("svg",{viewBox:"-2000 -1000 4000 2000",children:[t("path",{id:"inf",d:"M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"}),t("use",{xlinkHref:"#inf",strokeDasharray:"1570 5143",strokeDashoffset:"6713px"})]}),t("p",{children:"Kết nối tài khoản"})]}),i?s("div",{className:g,children:[t("p",{children:i}),t("button",{className:v,onClick:l,children:"Thử lại"})]}):null]})};var S=r((function(e){const s=o(e),a=c(e),t=Object.values(d(e));return{currentUserId:a.id,currentUserRoles:a.roles||"",currentUserIsGuest:l(a),customDescriptionText:s.CustomDescriptionText,isMemberOfTeam:t&&t.length>0,listableTeams:m(e,a.locale),siteName:s.SiteName,canCreateTeams:u(e,{permission:f.CREATE_TEAM}),canManageSystem:u(e,{permission:f.MANAGE_SYSTEM}),canJoinPublicTeams:u(e,{permission:f.JOIN_PUBLIC_TEAMS}),canJoinPrivateTeams:u(e,{permission:f.JOIN_PRIVATE_TEAMS}),siteURL:s.SiteURL,totalTeamsCount:e.entities.teams.totalCount||0,publicChannel:s.ChannelPublic}}),(function(e){return{actions:i({getTeams:p,loadRolesIfNeeded:h,addUserToTeam:T},e)}}))(M);export{S as default};
