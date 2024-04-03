import{a as k}from"./axios-G2rPRu76.js";import{S as a}from"./sweetalert2.all-WjRCQhhK.js";import{_ as C,a as S,r as T,o as d,c as i,d as L,b as t,t as o,F as V,h as O}from"./index-XTxDnD0T.js";import{c as R}from"./cartStore-bGPVnRQn.js";var A={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"reirei",BASE_URL:"/week8_teatime/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:E,VITE_PATH:I}=A,D={data(){return{orderId:"",order:{},isloading:!1}},methods:{...S(R,["getCart"]),getOrder(){this.orderId=this.$route.params.id,this.isloading=!0,k.get(`${E}/api/${I}/order/${this.orderId}`).then(r=>{this.isloading=!1,this.order=r.data.order}).catch(r=>{this.isloading=!1,a.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:r.response.data.message})})},checkout(){this.isloading=!0,this.orderId=this.$route.params.id,k.post(`${E}/api/${I}/pay/${this.orderId}`).then(()=>{this.isloading=!1,a.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"success",title:"結帳成功"}),this.getCart(),this.$router.push("/payment")}).catch(r=>{this.isloading=!1,a.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:r.response.data.message})})}},mounted(){this.getOrder()}},U={class:"container pb-5"},j=t("div",{class:"row justify-content-center mb-5"},[t("div",{class:"col-9 col-md-8 position-relative mt-6"},[t("div",{class:"progress",style:{height:"5px"}},[t("div",{class:"progress-bar",role:"progressbar",style:{width:"100%","background-color":"black"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})]),t("div",{type:"button",class:"position-absolute top-0 start-0 translate-middle btn btn-sm btn-dark rounded-pill",style:{width:"2rem",height:"2rem","background-color":"black"}},[t("i",{class:"bi bi-cart"})]),t("button",{type:"button",class:"position-absolute top-0 start-50 translate-middle btn btn-sm btn-secondary rounded-pill",style:{width:"2rem",height:"2rem","background-color":"black"}},[t("i",{class:"bi bi-clipboard"})]),t("button",{type:"button",class:"position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill",style:{width:"3rem",height:"3rem","background-color":"black"}},[t("i",{class:"bi bi-credit-card-2-back"})])])],-1),N={class:"row justify-content-center flex-md-row"},P={class:"col-md-7"},F=t("h2",{class:"order-color text-center my-5"},"訂單已成立",-1),H={class:"border p-4 shadow-sm p-3 mb-5 bg-body rounded"},$=t("h4",{class:"mb-4 fw-bold text-center my-5"},"您的訂單編號",-1),q={class:"fs-8 text-center text-danger"},z={class:"d-flex"},M={class:"w-100 px-4"},G={class:"table table-borderless custom-cart-table my-5"},J=t("th",{class:"fs-8 px-md-3 border",width:"30%"},"姓名",-1),K={class:"fs-8 px-md-3 border",width:"70%"},Q=t("th",{class:"fs-8 px-md-3 border",width:"30%"},"聯絡電話",-1),W={class:"fs-8 px-md-3 border",width:"70%"},X=t("th",{class:"fs-8 px-md-3 border",width:"30%"},"Email",-1),Y={class:"fs-8 px-md-3 border",width:"70%"},Z=t("th",{class:"fs-8 px-md-3 border",width:"30%"},"收件地址",-1),tt={class:"fs-8 px-md-3 border",width:"70%"},st=t("th",{class:"fs-8 px-md-3 border",width:"30%"},"備注",-1),et={key:0,class:"fs-8 px-md-3 border",width:"70%"},ot={key:1,class:"fs-8 px-md-3 border",width:"70%"},rt=t("h4",{class:"mb-4 fw-bold text-center"},"商品資訊",-1),dt={class:"table table-borderless custom-cart-table mt-5 border"},it=t("thead",null,[t("tr",null,[t("th",{class:"px-2 px-md-3 border text-center",width:"40%"},"商品名稱 "),t("th",{class:"px-2 px-md-3 border text-center",width:"20%"},"數量 "),t("th",{class:"px-2 px-md-3 border text-center",width:"30%"},"金額 ")])],-1),at={class:"px-2 px-md-3 border text-center",width:"40%"},nt={class:"px-2 px-md-3 border text-center",width:"20%"},ct={class:"px-2 px-md-3 border text-center",width:"30%"},lt={class:"d-flex justify-content-end mt-4 ps-2"},ht={class:"mb-0 h5 mb-3 text-end"},pt={class:"text-center"};function bt(r,n,_t,ut,e,c){var l,h,p,b,_,u,m,x,f,w,g,y;const B=T("VueLoading");return d(),i(V,null,[L(B,{active:e.isloading,"z-index":1060},null,8,["active"]),t("div",U,[j,t("div",N,[t("div",P,[F,t("div",H,[$,t("p",q,o((l=e.order)==null?void 0:l.id),1),t("div",z,[t("div",M,[t("table",G,[t("tbody",null,[t("tr",null,[J,t("td",K,o((p=(h=e.order)==null?void 0:h.user)==null?void 0:p.name),1)]),t("tr",null,[Q,t("td",W,o((_=(b=e.order)==null?void 0:b.user)==null?void 0:_.tel),1)]),t("tr",null,[X,t("td",Y,o((m=(u=e.order)==null?void 0:u.user)==null?void 0:m.email),1)]),t("tr",null,[Z,t("td",tt,o((f=(x=e.order)==null?void 0:x.user)==null?void 0:f.address),1)]),t("tr",null,[st,e.order.message?(d(),i("td",et,o((w=e.order)==null?void 0:w.message),1)):(d(),i("td",ot,"無"))])])]),rt,t("table",dt,[it,(d(!0),i(V,null,O((g=e.order)==null?void 0:g.products,s=>{var v;return d(),i("tbody",{key:s.id},[t("tr",null,[t("td",at,o((v=s==null?void 0:s.product)==null?void 0:v.title),1),t("td",nt,o(s==null?void 0:s.qty),1),t("td",ct,o(s==null?void 0:s.total),1)])])}),128))])])]),t("div",lt,[t("p",ht,"總金額: NT$"+o((y=e.order)==null?void 0:y.total),1)]),t("div",pt,[t("button",{type:"submit",class:"btn btn-secondary py-3 px-3 rounded-0",onClick:n[0]||(n[0]=(...s)=>c.checkout&&c.checkout(...s))},"去結帳")])])])])])],64)}const gt=C(D,[["render",bt]]);export{gt as default};
