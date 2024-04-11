import{a as u}from"./axios-G2rPRu76.js";import{S as d}from"./sweetalert2.all-B3CQUdxR.js";import{_ as V,a as j,r as w,o as a,c,d as p,b as t,k as m,F as x,h as B,j as I,l as T,t as r,w as f,e as v,p as S,g as E}from"./index-GGCiqbao.js";import{c as L}from"./cartStore-dvmxoGAi.js";var N={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"reirei",BASE_URL:"/week8_teatime/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h,VITE_PATH:_}=N,R={data(){return{cart:{},voucher:{code:"PUFFY123"},useCode:!1,isloading:!1}},methods:{...j(L,["getCart"]),getCart(){this.isloading=!0,u.get(`${h}/api/${_}/cart`).then(s=>{this.isloading=!1,this.cart=s.data.data}).catch(s=>{this.isloading=!1,d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:s.response.data.message})})},delCart(s){this.cart.id=s,this.isloading=!0,u.delete(`${h}/api/${_}/cart/${s}`).then(()=>{this.isloading=!1,this.getCart(),d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"success",title:"已刪除"})}).catch(n=>{this.isloading=!1,d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:n.response.data.message})})},delItems(){this.isloading=!0,u.delete(`${h}/api/${_}/carts`).then(()=>{this.isloading=!1,this.getCart(),d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"success",title:"已刪除全部購物車"})}).catch(s=>{this.isloading=!1,d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:s.response.data.message})})},reviseCart(s,n){const y={product_id:s.product_id,qty:n};u.put(`${h}/api/${_}/cart/${s.id}`,{data:y}).then(()=>{this.getCart()}).catch(g=>{d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:g.response.data.message})})},useVoucher(){u.post(`${h}/api/${_}/coupon`,{data:this.voucher}).then(()=>{this.getCart(),this.voucher.code="",this.useCode=!0}).catch(s=>{d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:s.response.data.message})})}},mounted(){this.getCart(),this.useCode=!1}},i=s=>(S("data-v-8d51dacf"),s=s(),E(),s),U={key:0,class:"container pb-5"},$=i(()=>t("div",{class:"row justify-content-center mb-5"},[t("div",{class:"col-9 col-md-8 position-relative mt-6"},[t("div",{class:"progress",style:{height:"5px"}},[t("div",{class:"progress-bar",role:"progressbar",style:{width:"0%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})]),t("div",{type:"button",class:"position-absolute top-0 start-0 translate-middle btn btn-sm btn-dark rounded-pill",style:{width:"2rem",height:"2rem"}},[t("div",null,[t("i",{class:"bi bi-cart"})])]),t("button",{type:"button",class:"position-absolute top-0 start-50 translate-middle btn btn-sm btn-secondary rounded-pill d-flex",style:{width:"2rem",height:"2rem"}},[t("i",{class:"bi bi-clipboard"})]),t("button",{type:"button",class:"position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill",style:{width:"2rem",height:"2rem"}},[t("i",{class:"bi bi-credit-card-2-back"})])])],-1)),q={class:"row justify-content-center"},D={class:"col-md-8 bg-white",style:{"min-height":"calc(100vh - 56px - 76px)"}},A={class:"d-flex justify-content-center"},F={key:0,class:"my-4"},O={class:"d-flex flex-column justify-content-center"},P={class:"row align-items-center"},H={class:"col-12 col-md-4"},M=["src"],z={class:"col-12 col-md-8"},Y={class:"p-3"},G={class:"d-flex justify-content-between"},J={class:"lh-lg"},K=["onClick"],Q=i(()=>t("i",{class:"bi-icon bi bi-trash"},null,-1)),W=[Q],X={class:"fs-8 mb-3"},Z={class:"row"},tt={class:"col-md-8"},st={class:"input-group d-flex"},et=["onClick","disabled"],ot=i(()=>t("i",{class:"bi bi-dash fs-7"},null,-1)),it=[ot],nt={class:"form-control text-center",style:{"border-color":"black"},placeholder:"",min:"1"},at=["onClick"],ct=i(()=>t("i",{class:"bi bi-plus fs-7"},null,-1)),lt=[ct],dt={class:"col-md-4 mt-3"},rt={class:"fs-6"},ut={key:0,class:"order"},ht={class:"card-total d-flex justify-content-end"},_t={class:"col-6"},pt={class:"input-group input-group-sm mb-3"},bt={key:0,class:"card-total d-flex justify-content-end"},mt={class:"fs-9 fw-bold"},ft={class:"card-total d-flex justify-content-end"},vt=i(()=>t("p",{class:"mb-0 h6 fw-bold"},"總金額：",-1)),yt={class:"mb-0 h6 fw-bold"},gt={class:"d-flex justify-content-between mt-5"},Ct={class:"bt"},wt=i(()=>t("i",{class:"bi bi-caret-left"},null,-1)),xt={class:"bt mx-2"},kt={class:"order"},Vt=i(()=>t("i",{class:"bi bi-caret-right"},null,-1)),jt={key:1,class:"py-7"},Bt=i(()=>t("h5",{class:"text-center"},"你的購物車是空的喔，快去選購吃甜點吧！",-1)),It={class:"d-flex justify-content-center mt-5"},Tt={class:"bt"},St=i(()=>t("i",{class:"bi bi-caret-left"},null,-1)),Et=i(()=>t("i",{class:"bi bi-caret-left"},null,-1)),Lt=i(()=>t("i",{class:"bi bi-caret-left"},null,-1));function Nt(s,n,y,g,o,l){const k=w("VueLoading"),b=w("RouterLink");return a(),c(x,null,[p(k,{active:o.isloading,"z-index":1060},null,8,["active"]),o.cart.total!==0?(a(),c("div",U,[$,t("div",q,[t("div",D,[t("div",A,[o.cart.total!==0?(a(),c("h2",F,"購物車")):m("",!0)]),t("div",O,[(a(!0),c(x,null,B(o.cart.carts,e=>(a(),c("div",{class:"shadow-sm mb-5 bg-body rounded border overflow-hidden",key:e.id},[t("div",P,[t("div",H,[t("img",{src:e.product.imageUrl,alt:"商品圖片",class:"img-product w-100"},null,8,M)]),t("div",z,[t("div",Y,[t("div",G,[t("span",J,r(e.product.title),1),t("a",{type:"button",onClick:C=>l.delCart(e.id)},W,8,K)]),t("div",X,"售價 NT$"+r(e.total/e.qty),1),t("div",Z,[t("div",tt,[t("div",st,[t("button",{class:"btn d-flex rounded-0",style:{"border-color":"black"},type:"button",onClick:C=>l.reviseCart(e,e.qty-1),disabled:e.qty===1},it,8,et),t("span",nt,r(e.qty),1),t("button",{class:"btn d-flex rounded-0",style:{"border-color":"black"},type:"button",onClick:C=>l.reviseCart(e,e.qty+1)},lt,8,at)])]),t("div",dt,[t("div",rt,"總計 NT$"+r(e.total),1)])])])])])]))),128))]),o.cart.total!==0?(a(),c("div",ut,[t("div",ht,[t("div",_t,[t("div",pt,[I(t("input",{type:"text",class:"form-control rounded-0","onUpdate:modelValue":n[0]||(n[0]=e=>o.voucher.code=e),placeholder:"請輸入折扣碼","aria-label":"voucher","aria-describedby":"basic-addon1"},null,512),[[T,o.voucher.code]]),t("button",{type:"button",class:"btn btn-outline-success input-group-text rounded-0",onClick:n[1]||(n[1]=(...e)=>l.useVoucher&&l.useVoucher(...e))},"套用優惠券")])])]),o.useCode?(a(),c("div",bt,[t("p",mt,"-優惠卷折扣 "+r(s.$filter.currency(o.cart.total-o.cart.final_total)),1)])):m("",!0),t("div",ft,[vt,t("p",yt,"NT$"+r(s.$filter.currency(o.cart.final_total)),1)]),t("div",gt,[t("div",Ct,[p(b,{to:"/merchandise",class:"btn btn-outline-secondary rounded-0"},{default:f(()=>[wt,v(" 繼續選購 ")]),_:1})]),t("div",xt,[t("button",{type:"button",class:"btn btn-outline-secondary rounded-0",onClick:n[2]||(n[2]=(...e)=>l.delItems&&l.delItems(...e))},"清空")]),t("div",kt,[p(b,{to:"/orderOut",class:"order btn btn-danger rounded-0"},{default:f(()=>[v("結帳帶回家 "),Vt]),_:1})])])])):m("",!0)])])])):(a(),c("div",jt,[Bt,t("div",It,[t("div",Tt,[p(b,{to:"/merchandise",class:"btn btn-outline-primary rounded-0"},{default:f(()=>[St,Et,Lt,v(" 來去選購 ")]),_:1})])])]))],64)}const Dt=V(R,[["render",Nt],["__scopeId","data-v-8d51dacf"]]);export{Dt as default};