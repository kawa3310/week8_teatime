import{a as r}from"./axios-G2rPRu76.js";import{S as d}from"./sweetalert2.all-zV7tkLJG.js";import{_ as T,m as $,a as j,r as C,o as n,c as a,d as u,b as t,k as m,F as w,h as I,j as S,l as B,t as c,w as f,e as k,p as E,g as L}from"./index-NklN4SGY.js";import{c as x}from"./cartStore-IJcsBc1S.js";var N={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"reirei",BASE_URL:"/week8_teatime/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h,VITE_PATH:_}=N,R={data(){return{voucher:{code:"PUFFY123"},useCode:!1}},computed:{...$(x,["cart","cartsTotal","isloading"])},methods:{...j(x,["getCart"]),delCart(e){this.cart.id=e,this.isloading=!0,r.delete(`${h}/api/${_}/cart/${e}`).then(()=>{this.isloading=!1,this.getCart(),d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"success",title:"已刪除"})}).catch(i=>{this.isloading=!1,d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:i.response.data.message})})},delItems(){this.isloading=!0,r.delete(`${h}/api/${_}/carts`).then(()=>{this.isloading=!1,this.getCart(),d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"success",title:"已刪除全部購物車"})}).catch(e=>{this.isloading=!1,d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:e.response.data.message})})},reviseCart(e,i){const v={product_id:e.product_id,qty:i};r.put(`${h}/api/${_}/cart/${e.id}`,{data:v}).then(()=>{this.getCart()}).catch(y=>{d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:y.response.data.message})})},useVoucher(){r.post(`${h}/api/${_}/coupon`,{data:this.voucher}).then(()=>{this.getCart(),this.voucher.code="",this.useCode=!0}).catch(e=>{d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:e.response.data.message})})}},mounted(){this.getCart(),this.useCode=!1}},o=e=>(E("data-v-0ec0afd0"),e=e(),L(),e),U={key:0,class:"container pb-5"},q=o(()=>t("div",{class:"row justify-content-center mb-5"},[t("div",{class:"col-9 col-md-8 position-relative mt-6"},[t("div",{class:"progress",style:{height:"5px"}},[t("div",{class:"progress-bar",role:"progressbar",style:{width:"0%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})]),t("div",{type:"button",class:"position-absolute top-0 start-0 translate-middle btn btn-sm btn-dark rounded-pill",style:{width:"2rem",height:"2rem"}},[t("div",null,[t("i",{class:"bi bi-cart"})])]),t("button",{type:"button",class:"position-absolute top-0 start-50 translate-middle btn btn-sm btn-secondary rounded-pill d-flex",style:{width:"2rem",height:"2rem"}},[t("i",{class:"bi bi-clipboard"})]),t("button",{type:"button",class:"position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill",style:{width:"2rem",height:"2rem"}},[t("i",{class:"bi bi-credit-card-2-back"})])])],-1)),D={class:"row justify-content-center"},A={class:"col col-md-12 col-lg-9 bg-white",style:{"min-height":"calc(100vh - 56px - 76px)"}},F={class:"d-flex justify-content-center"},O={key:0,class:"my-4"},P={class:"d-flex flex-column justify-content-center"},H={class:"row align-items-center"},M={class:"col-12 col-md-4"},z=["src"],Y={class:"col-12 col-md-8"},G={class:"p-3"},J={class:"d-flex justify-content-between"},K={class:"lh-lg"},Q=["onClick"],W=o(()=>t("i",{class:"bi-icon bi bi-trash"},null,-1)),X=[W],Z={class:"fs-8 mb-3"},tt={class:"row"},et={class:"col-md-8"},st={class:"input-group d-flex"},ot=["onClick","disabled"],it=o(()=>t("i",{class:"bi bi-dash fs-7"},null,-1)),nt=[it],at={class:"form-control text-center",style:{"border-color":"black"},placeholder:"",min:"1"},lt=["onClick"],dt=o(()=>t("i",{class:"bi bi-plus fs-7"},null,-1)),ct=[dt],rt={class:"col-md-4 mt-3"},ut={class:"fs-6"},ht={key:0,class:"order"},_t={class:"card-total d-flex justify-content-end"},pt={class:"col-6"},bt={class:"input-group input-group-sm mb-3"},mt={key:0,class:"card-total d-flex justify-content-end"},ft={class:"fs-9 fw-bold"},vt={class:"card-total d-flex justify-content-end"},yt=o(()=>t("p",{class:"mb-0 h6 fw-bold"},"總金額：",-1)),gt={class:"mb-0 h6 fw-bold"},Ct={class:"d-flex justify-content-between mt-5"},wt={class:"bt"},kt=o(()=>t("i",{class:"bi bi-caret-left d-flex"},null,-1)),xt=o(()=>t("span",null,"繼續選購",-1)),Vt={class:"bt mx-2"},Tt={class:"order"},$t=o(()=>t("i",{class:"bi bi-caret-right d-flex"},null,-1)),jt={key:1,class:"py-7"},It=o(()=>t("h5",{class:"text-center"},"你的購物車是空的喔，快去選購吃甜點吧！",-1)),St={class:"d-flex justify-content-center mt-5"},Bt={class:"bt"},Et=o(()=>t("i",{class:"bi bi-caret-left"},null,-1)),Lt=o(()=>t("i",{class:"bi bi-caret-left"},null,-1)),Nt=o(()=>t("i",{class:"bi bi-caret-left"},null,-1));function Rt(e,i,v,y,p,l){const V=C("VueLoading"),b=C("RouterLink");return n(),a(w,null,[u(V,{active:e.isloading,"z-index":1060},null,8,["active"]),e.cart.length!==0?(n(),a("div",U,[q,t("div",D,[t("div",A,[t("div",F,[e.cart.final_total!==0?(n(),a("h2",O,"購物車")):m("",!0)]),t("div",P,[(n(!0),a(w,null,I(e.cart,s=>(n(),a("div",{class:"shadow-sm mb-4 bg-body rounded border overflow-hidden",key:s.id},[t("div",H,[t("div",M,[t("img",{src:s.product.imageUrl,alt:"商品圖片",class:"img-product w-100"},null,8,z)]),t("div",Y,[t("div",G,[t("div",J,[t("span",K,c(s.product.title),1),t("a",{type:"button",onClick:g=>l.delCart(s.id)},X,8,Q)]),t("div",Z,"售價 NT$"+c(s.total/s.qty),1),t("div",tt,[t("div",et,[t("div",st,[t("button",{class:"btn d-flex rounded-0",style:{"border-color":"black"},type:"button",onClick:g=>l.reviseCart(s,s.qty-1),disabled:s.qty===1},nt,8,ot),t("span",at,c(s.qty),1),t("button",{class:"btn d-flex rounded-0",style:{"border-color":"black"},type:"button",onClick:g=>l.reviseCart(s,s.qty+1)},ct,8,lt)])]),t("div",rt,[t("div",ut,"總計 NT$"+c(s.final_total),1)])])])])])]))),128))]),e.cart.total!==0?(n(),a("div",ht,[t("div",_t,[t("div",pt,[t("div",bt,[S(t("input",{type:"text",class:"form-control rounded-0","onUpdate:modelValue":i[0]||(i[0]=s=>p.voucher.code=s),placeholder:"請輸入折扣碼","aria-label":"voucher","aria-describedby":"basic-addon1"},null,512),[[B,p.voucher.code]]),t("button",{type:"button",class:"btn btn-outline-success input-group-text rounded-0",onClick:i[1]||(i[1]=(...s)=>l.useVoucher&&l.useVoucher(...s))},"套用優惠券")])])]),p.useCode?(n(),a("div",mt,[t("p",ft,"-優惠卷折扣 "+c(e.$filter.currency(e.cartsTotal.total-e.cartsTotal.final_total)),1)])):m("",!0),t("div",vt,[yt,t("p",gt,"NT$"+c(e.$filter.currency(e.cartsTotal.final_total)),1)]),t("div",Ct,[t("div",wt,[u(b,{to:"/merchandise",class:"btn btn-outline-secondary rounded-0 d-flex align-items-center"},{default:f(()=>[kt,xt]),_:1})]),t("div",Vt,[t("button",{type:"button",class:"btn btn-outline-secondary rounded-0",onClick:i[2]||(i[2]=(...s)=>l.delItems&&l.delItems(...s))},"清空")]),t("div",Tt,[u(b,{to:"/orderOut",class:"order btn btn-danger rounded-0 d-flex align-items-center"},{default:f(()=>[k(" 結帳帶回家 "),$t]),_:1})])])])):m("",!0)])])])):(n(),a("div",jt,[It,t("div",St,[t("div",Bt,[u(b,{to:"/merchandise",class:"btn btn-outline-primary rounded-0"},{default:f(()=>[Et,Lt,Nt,k(" 來去選購 ")]),_:1})])])]))],64)}const Ft=T(R,[["render",Rt],["__scopeId","data-v-0ec0afd0"]]);export{Ft as default};