import{B as e,A as a,y as s,x as t,G as i,H as r}from"./vendor.f05f0ffc.js";import{C as n,E as o,a_ as c,bK as d,a$ as l,gH as m,b8 as u,b9 as f,gI as p,aP as h,gu as _}from"./index.16ef3e02.js";import{F as T}from"./index.c0eb1bab.js";var b="u3-cxx-7b3a68ba",x="u3-cxx-70356cac",g="u3-cxx-279e5a87",v="u3-cxx-80b49aae";var S=i=>{const[r,o]=e.exports.useState(""),[c,d]=e.exports.useState(!1),l=async()=>{d(!0);const{data:e,error:a}=await i.actions.getTeams(0,10,!1);a?o(a.message):(void 0!==i.currentUserRoles&&await i.actions.loadRolesIfNeeded(i.currentUserRoles.split(" ")),m(e))},m=async e=>{const{currentUserRoles:a,siteURL:s}=i,r=e||i.listableTeams[0];if(!r[0])return o("Có lỗi không xác định. Hãy thử lại!");const c=r[0],{data:d,error:l}=await i.actions.addUserToTeam(r[0].id,i.currentUserId);if(d&&void 0!==i.history)i.history.replace(`/${c.name}`);else if(l){let e=l.message;"api.team.add_members.user_denied"===l.server_error_id&&(e=void 0!==a&&a.includes(n.PERMISSIONS_SYSTEM_ADMIN)?t(T,{id:"join_team_group_constrained_denied_admin",defaultMessage:`You need to be a member of a linked group to join this team. You can add a group to this team [here](${s}/admin_console/user_management/groups).`,values:{siteURL:s}}):t(T,{id:"join_team_group_constrained_denied",defaultMessage:"You need to be a member of a linked group to join this team."})),o(e)}};return e.exports.useEffect((()=>{c||l()}),[]),a("div",{className:s(b),children:[a("div",{className:x,children:[a("svg",{viewBox:"-2000 -1000 4000 2000",children:[t("path",{id:"inf",d:"M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"}),t("use",{xlinkHref:"#inf",strokeDasharray:"1570 5143",strokeDashoffset:"6713px"})]}),t("p",{children:"Kết nối tài khoản"})]}),r?a("div",{className:g,children:[t("p",{children:r}),t("button",{className:v,onClick:l,children:"Thử lại"})]}):null]})};var U=i((function(e){const a=o(e),s=c(e),t=Object.values(d(e));return{currentUserId:s.id,currentUserRoles:s.roles||"",currentUserIsGuest:l(s),customDescriptionText:a.CustomDescriptionText,isMemberOfTeam:t&&t.length>0,listableTeams:m(e,s.locale),siteName:a.SiteName,canCreateTeams:u(e,{permission:f.CREATE_TEAM}),canManageSystem:u(e,{permission:f.MANAGE_SYSTEM}),canJoinPublicTeams:u(e,{permission:f.JOIN_PUBLIC_TEAMS}),canJoinPrivateTeams:u(e,{permission:f.JOIN_PRIVATE_TEAMS}),siteURL:a.SiteURL,totalTeamsCount:e.entities.teams.totalCount||0,publicChannel:a.ChannelPublic}}),(function(e){return{actions:r({getTeams:p,loadRolesIfNeeded:h,addUserToTeam:_},e)}}))(S);export{U as default};
