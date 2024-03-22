import{a as h,S as c}from"./sweetalert2.all-AVed2B3f.js";import{_ as y,r as m,o as u,c as f,e as l,a as e,F as b,j as E,t as n,q as k,f as C,n as _,b as T,v as U,g as p}from"./index-2Cn7rdsb.js";var B={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"reirei",BASE_URL:"/week8_teatime/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:v,VITE_PATH:x}=B,O={data(){return{cart:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},isloading:!1}},methods:{getCart(){this.isloading=!0,h.get(`${v}/api/${x}/cart`).then(r=>{this.isloading=!1,this.cart=r.data.data}).catch(r=>{this.isloading=!1,c.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:r.response.data.message})})},sendOutOrder(){if(this.cart.carts.length===0)c.fire({position:"top-end",icon:"warning",title:"你的購物車是空的，無法送出訂單",showConfirmButton:!1,timer:1500});else{const r=this.form;h.post(`${v}/api/${x}/order`,{data:r}).then(t=>{this.$refs.form.resetForm(),this.$router.push(`userOut/${t.data.orderId}`),c.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"success",title:"訂單已送出"})}).catch(t=>{c.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:t.response.data.message})})}}},mounted(){this.getCart()}},S={class:"pt-5 pb-7"},F={class:"container"},N={class:"row justify-content-center flex-md-row"},j={class:"col-md-4"},q={class:"border p-4 shadow-sm p-3 mb-5 bg-body rounded"},L=e("h4",{class:"mb-4 fw-bold text-center"},"訂單資訊",-1),D=["src","alt"],I={class:"w-100"},R={class:"d-flex justify-content-between"},M={class:"mb-0 fs-7"},A={class:"mb-0 fs-7"},P={class:"d-flex justify-content-between"},z={class:"text-muted mb-0 fs-8"},H={class:"table mt-4 border-top border-bottom text-muted"},G=e("th",{scope:"row",class:"border-0 px-0 pt-4"},"小計",-1),J={class:"text-end border-0 px-0 pt-4"},K={key:0},Q=e("th",{scope:"row",class:"px-0"},null,-1),W={class:"fs-9 text-end px-0 pt-1",style:{color:"red"}},X={class:"d-flex justify-content-between mt-4"},Y=e("p",{class:"mb-0 h4 fw-bold"},"總計金額",-1),Z={class:"mb-0 h4 fw-bold mb-3"},$={class:"col-md-6 mb-5 p-4 shadow-sm mb-5 bg-body border rounded"},ee={class:"p-4"},se={class:"row justify-content-center"},te=e("h4",{class:"fw-bold text-center mb-5"},"填寫訂單",-1),oe={class:"mb-4"},le=e("label",{for:"name",class:"form-label fs-7"},[p("姓名 "),e("span",{class:"text-danger"},"*")],-1),ae={class:"mb-4"},re=e("label",{for:"tel",class:"form-label fs-7"},[p("聯絡電話 "),e("span",{class:"text-danger"},"*")],-1),ne={class:"mb-4"},ie=e("label",{for:"email",class:"form-label fs-7"},[p("Email "),e("span",{class:"text-danger"},"*")],-1),de={class:"mb-4"},ce=e("label",{for:"address",class:"form-label fs-7"},[p("收件地址 "),e("span",{class:"text-danger"},"*")],-1),me={class:"mb-4"},ue=e("label",{for:"message",class:"form-label fs-7"},"留言",-1),fe=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-dark py-3 px-3 rounded-0"},"送出訂單")],-1);function _e(r,t,pe,he,s,g){const V=m("VueLoading"),i=m("VField"),d=m("ErrorMessage"),w=m("VForm");return u(),f(b,null,[l(V,{active:s.isloading,"z-index":1060},null,8,["active"]),e("div",S,[e("div",F,[e("div",N,[e("div",j,[e("div",q,[L,(u(!0),f(b,null,E(s.cart.carts,o=>(u(),f("div",{class:"d-flex mt-2",key:o.id},[e("img",{src:o.product.imageUrl,alt:o.imageUrl,class:"img me-2"},null,8,D),e("div",I,[e("div",R,[e("p",M,n(o.product.title),1),e("p",A,"x"+n(o.qty),1)]),e("div",P,[e("p",z,[e("small",null,"NT$ "+n(o.product.price)+" / "+n(o.product.unit),1)])])])]))),128)),e("table",H,[e("tbody",null,[e("tr",null,[G,e("td",J,"NT$ "+n(s.cart.total),1)]),s.cart.total!==s.cart.final_total?(u(),f("tr",K,[Q,e("td",W,"-優惠卷折扣 "+n(r.$filter.currency(s.cart.final_total)),1)])):k("",!0)])]),e("div",X,[Y,e("p",Z,"NT$"+n(s.cart.final_total),1)])])]),e("div",$,[e("div",ee,[e("div",se,[l(w,{ref:"form",class:"col",onSubmit:g.sendOutOrder},{default:C(({errors:o})=>[te,e("div",oe,[le,l(i,{id:"name",name:"姓名",type:"text",class:_(["form-control form-control-sm rounded-0",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:s.form.user.name,"onUpdate:modelValue":t[0]||(t[0]=a=>s.form.user.name=a)},null,8,["class","modelValue"]),l(d,{name:"姓名",class:"invalid-feedback"})]),e("div",ae,[re,l(i,{id:"tel",name:"電話",type:"text",class:_(["form-control form-control-sm rounded-0",{"is-invalid":o.電話}]),placeholder:"請輸入電話，ex:092345532",rules:"required|min:9|max:10",modelValue:s.form.user.tel,"onUpdate:modelValue":t[1]||(t[1]=a=>s.form.user.tel=a)},null,8,["class","modelValue"]),l(d,{name:"電話",class:"invalid-feedback"})]),e("div",ne,[ie,l(i,{id:"email",name:"email",type:"email",class:_(["form-control form-control-sm rounded-0",{"is-invalid":o.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:s.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=a=>s.form.user.email=a)},null,8,["class","modelValue"]),l(d,{name:"email",class:"invalid-feedback"})]),e("div",de,[ce,l(i,{id:"address",name:"地址",type:"text",class:_(["form-control form-control-sm rounded-0",{"is-invalid":o.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:s.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=a=>s.form.user.address=a)},null,8,["class","modelValue"]),l(d,{name:"地址",class:"invalid-feedback"})]),e("div",me,[ue,T(e("textarea",{id:"message",class:"form-control form-control-sm rounded-0",style:{height:"100px"},"onUpdate:modelValue":t[4]||(t[4]=a=>s.form.message=a)},null,512),[[U,s.form.message]])]),fe]),_:1},8,["onSubmit"])])])])])])])],64)}const xe=y(O,[["render",_e]]);export{xe as default};