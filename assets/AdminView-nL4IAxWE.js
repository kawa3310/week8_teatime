import{_,r as l,o as m,c as p,a as e,e as a,f as r,g as c,w as h,F as b}from"./index-omQM2LBf.js";import{a as g,S as d}from"./sweetalert2.all-VTsAtsNN.js";var k={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"reirei",BASE_URL:"/week8_teatime/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:x}=k,w={methods:{loginOut(){g.post(`${x}/logout`).then(()=>{document.cookie="kawaToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;",d.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"success",title:"已登出"}),this.$router.push("/user/home")}).catch(o=>{d.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:o.response.data.message})})}}},T={class:"navbar navbar-expand-lg bg-dark px-sm-1 px-md-2"},V=e("div",{class:"container-fluid"},[e("h4",{class:"m-0"},"後台管理")],-1),$=e("button",{class:"btn d-lg-none d-block",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),C={class:"collapse navbar-collapse flex justify-content-end",id:"navbarToggler"},R={class:"navbar-body my-2"},N={class:"navbar-nav text-center text-nowrap"},E={class:"nav-item me-3"},B={class:"nav-item me-3"},A={class:"nav-item-icon me-3 position-relative"},L={class:"nav-item-icon me-3 position-relative"};function O(o,s,u,v,f,n){const t=l("RouterLink");return m(),p("nav",T,[V,$,e("div",C,[e("div",R,[e("ul",N,[e("li",E,[a(t,{class:"nav-link",to:"/admin/products"},{default:r(()=>[c("產品區 ")]),_:1})]),e("li",B,[a(t,{class:"nav-link",to:"/admin/order"},{default:r(()=>[c("查看訂單")]),_:1})]),e("li",A,[a(t,{class:"nav-link",to:"/admin/voucher"},{default:r(()=>[c("優惠卷")]),_:1})]),e("li",L,[e("a",{href:"#",class:"btn nav-link",onClick:s[0]||(s[0]=h((...i)=>n.loginOut&&n.loginOut(...i),["prevent"]))},"登出")])])])])])}const S=_(w,[["render",O]]),y={components:{adminNavbarComponents:S}};function D(o,s,u,v,f,n){const t=l("adminNavbarComponents"),i=l("RouterView");return m(),p(b,null,[a(t),a(i)],64)}const I=_(y,[["render",D]]);export{I as default};
