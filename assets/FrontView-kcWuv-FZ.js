import{m as h,a as g,_ as i,r as o,o as l,c as r,b as t,d as s,w as e,e as n,t as f,F as x,f as k}from"./index-NklN4SGY.js";import{c}from"./cartStore-IJcsBc1S.js";import"./axios-G2rPRu76.js";import"./sweetalert2.all-zV7tkLJG.js";const y={computed:{...h(c,["cart"])},methods:{...g(c,["getCart"])},mounted(){this.getCart()}},$={class:"navbar navbar-expand-lg navbar-light bg-light px-sm-1 px-md-2"},N={class:"container-fluid"},w={class:"m-0"},C=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),V={class:"collapse navbar-collapse flex justify-content-end",id:"navbarNavAltMarkup"},A={class:"navbar-body my-2"},B={class:"navbar-nav text-center text-nowrap"},R={class:"nav-item me-3"},S={class:"nav-item me-3"},T={class:"nav-item-icon me-3 position-relative"},F={class:"bi bi-cart-fill"},M={class:"nav-icon badge rounded-pill fw-normal translate-middle bg-danger"},j=t("span",{class:"visually-hidden"},"unread messages",-1);function L(d,_,p,v,m,u){const a=o("RouterLink");return l(),r("nav",$,[t("div",N,[t("h4",w,[s(a,{class:"router-link nav-link active navbar-brand",to:"/"},{default:e(()=>[n("TeaTime")]),_:1})]),C,t("div",V,[t("div",A,[t("ul",B,[t("li",R,[s(a,{class:"nav-link",to:"/about"},{default:e(()=>[n("關於本店 ")]),_:1})]),t("li",S,[s(a,{class:"nav-link",to:"/merchandise"},{default:e(()=>[n("尋找甜點")]),_:1})]),t("li",T,[s(a,{class:"nav-link py-1",to:"/cart"},{default:e(()=>[t("i",F,[t("span",M,[n(f(this.cart.length)+" ",1),j])])]),_:1})])])])])])])}const D=i(y,[["render",L]]),E={components:{NavbarComponents:D}},q=k('<div class="footer" style="background-color:#A98B73;"><div class="container"><div class="d-flex align-items-center justify-content-center text-white py-5"><ul class="d-flex list-unstyled h4 pe-3"><li><i class="bi bi-github"></i></li></ul><p class="mb-0">僅供個人練習使用，非商業用途</p></div></div></div>',1);function z(d,_,p,v,m,u){const a=o("NavbarComponents"),b=o("RouterView");return l(),r(x,null,[s(a),s(b),q],64)}const K=i(E,[["render",z]]);export{K as default};