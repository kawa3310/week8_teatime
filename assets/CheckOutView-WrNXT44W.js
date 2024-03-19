import{a as l,S as c}from"./sweetalert2.all-46QP9cOn.js";import{_ as V,r as C,o as d,c as a,e as p,a as t,q as x,F as w,j,b as B,v as I,t as r,f as m,g as b,p as T,i as S}from"./index-88fFbSyu.js";var E={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"reirei",BASE_URL:"/week8_teatime_coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:u,VITE_PATH:_}=E,L={data(){return{cart:{},voucher:{code:"PUFFY123"},useCode:!1,isloading:!1}},methods:{getCart(){this.isloading=!0,l.get(`${u}/api/${_}/cart`).then(e=>{this.isloading=!1,this.cart=e.data.data}).catch(e=>{this.isloading=!1,c.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:e.response.data.message})})},delCart(e){this.cart.id=e,l.delete(`${u}/api/${_}/cart/${e}`).then(()=>{this.getCart(),c.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"success",title:"已刪除"})}).catch(o=>{c.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:o.response.data.message})})},delItems(){l.delete(`${u}/api/${_}/carts`).then(()=>{this.isloading=!1,this.getCart(),c.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"success",title:"已刪除全部購物車"})}).catch(e=>{this.isloading=!1,c.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:e.response.data.message})})},reviseCart(e,o){const v={product_id:e.product_id,qty:o};l.put(`${u}/api/${_}/cart/${e.id}`,{data:v}).then(()=>{this.getCart()}).catch(g=>{c.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:g.response.data.message})})},useVoucher(){l.post(`${u}/api/${_}/coupon`,{data:this.voucher}).then(()=>{this.getCart(),this.voucher.code="",this.useCode=!0}).catch(e=>{c.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:e.response.data.message})})}},mounted(){this.getCart(),this.useCode=!1}},h=e=>(T("data-v-1a717a2a"),e=e(),S(),e),R={class:"container"},N={class:"row justify-content-center"},U={class:"col-md-6 bg-white py-5",style:{"min-height":"calc(100vh - 56px - 76px)"}},$={class:"d-flex justify-content-center"},q={key:0,class:"mt-2"},D={class:"row justify-content-center"},F={class:"row"},O={class:"d-flex object-fit-cover w-100"},P=["src"],A={class:"ms-4 w-100 position-relative"},H=["onClick"],M=h(()=>t("i",{class:"bi-icon bi bi-trash"},null,-1)),z=[M],Y={class:"mb-0 lh-lg fw-bold"},G={class:"mb-1 fs-8 text-muted mb-3"},J={class:"d-flex justify-content-center align-items-center w-100"},K={class:"input-group"},Q=["onClick"],W=h(()=>t("i",{class:"bi bi-plus fs-7"},null,-1)),X=[W],Z={class:"form-control text-center",placeholder:"",min:"1"},tt=["onClick","disabled"],et=h(()=>t("i",{class:"bi bi-dash fs-7"},null,-1)),st=[et],ot={class:"text-price col-md-6 d-flex justify-content-end align-items-center pe-4 pt-md-0 pt-4"},it={class:"text-nowrap"},nt={key:0,class:"order"},ct={class:"card-total d-flex justify-content-end"},dt={class:"col-6"},at={class:"input-group input-group-sm mb-3"},rt={key:0,class:"card-total d-flex justify-content-end"},lt={class:"fs-9 fw-bold"},ut={class:"card-total d-flex justify-content-end"},_t=h(()=>t("p",{class:"mb-0 h6 fw-bold"},"總金額：",-1)),ht={class:"mb-0 h6 fw-bold"},pt={class:"d-flex justify-content-between mt-5"},ft={class:"bt"},mt={class:"bt"},bt={class:"order"},vt={key:1,class:"no-order"},gt=h(()=>t("h5",{class:"text-center"},"你的購物車是空的喔，快去選購吃甜點吧！",-1)),yt={class:"d-flex justify-content-center mt-5"},Ct={class:"bt"};function xt(e,o,v,g,i,n){const k=C("VueLoading"),f=C("RouterLink");return d(),a(w,null,[p(k,{active:i.isloading,"z-index":1060},null,8,["active"]),t("div",R,[t("div",N,[t("div",U,[t("div",$,[i.cart.total!==0?(d(),a("h2",q,"購物車")):x("",!0)]),t("div",D,[(d(!0),a(w,null,j(i.cart.carts,s=>(d(),a("div",{class:"card-body align-items-center d-inline-flex p-4 mt-4 shadow-sm p-3 mb-5 bg-body rounded border",key:s.id},[t("div",F,[t("div",O,[t("img",{src:s.product.imageUrl,class:"card-img-top"},null,8,P)])]),t("div",A,[t("a",{class:"delete-icon position-absolute",type:"button",onClick:y=>n.delCart(s.id)},z,8,H),t("p",Y,r(s.product.title),1),t("p",G,r(s.product.content),1),t("div",J,[t("div",K,[t("button",{class:"btn bg-success bg-gradient rounded-0 px-md-1 border-0",type:"button",onClick:y=>n.reviseCart(s,s.qty+1)},X,8,Q),t("span",Z,r(s.qty),1),t("button",{class:"btn bg-success bg-gradient rounded-0 px-md-1 border-0",type:"button",onClick:y=>n.reviseCart(s,s.qty-1),disabled:s.qty===1},st,8,tt)]),t("div",ot,[t("span",it,"NT $"+r(s.total),1)])])])]))),128))]),i.cart.total!==0?(d(),a("div",nt,[t("div",ct,[t("div",dt,[t("div",at,[B(t("input",{type:"text",class:"form-control rounded-0","onUpdate:modelValue":o[0]||(o[0]=s=>i.voucher.code=s),placeholder:"請輸入折扣碼","aria-label":"voucher","aria-describedby":"basic-addon1"},null,512),[[I,i.voucher.code]]),t("button",{type:"button",class:"btn btn-outline-success input-group-text rounded-0",onClick:o[1]||(o[1]=(...s)=>n.useVoucher&&n.useVoucher(...s))},"套用優惠券")])])]),i.useCode?(d(),a("div",rt,[t("p",lt,"-優惠卷折扣 "+r(e.$filter.currency(i.cart.total-i.cart.final_total)),1)])):x("",!0),t("div",ut,[_t,t("p",ht,"NT$"+r(e.$filter.currency(i.cart.final_total)),1)]),t("div",pt,[t("div",ft,[p(f,{to:"/user/merchandise",class:"btn btn-outline-secondary rounded-0"},{default:m(()=>[b(" ◁ 繼續選購 ")]),_:1})]),t("div",mt,[t("button",{class:"btn btn-outline-secondary rounded-0",onClick:o[2]||(o[2]=(...s)=>n.delItems&&n.delItems(...s))},"清空")]),t("div",bt,[p(f,{to:"/user/orderOut",class:"order btn btn-danger rounded-0"},{default:m(()=>[b("結帳帶回家 ▷")]),_:1})])])])):(d(),a("div",vt,[gt,t("div",yt,[t("div",Ct,[p(f,{to:"/user/merchandise",class:"btn btn-outline-primary rounded-0"},{default:m(()=>[b(" ◁ 來去選購 ")]),_:1})])])]))])])])],64)}const Vt=V(L,[["render",xt],["__scopeId","data-v-1a717a2a"]]);export{Vt as default};
