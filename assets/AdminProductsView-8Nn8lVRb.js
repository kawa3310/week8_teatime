import{a as _,S as p}from"./sweetalert2.all-46QP9cOn.js";import{_ as U,M as C,r as h,o as n,c as a,a as e,b as f,v as P,F as V,j as M,e as d,f as D,n as b,s as E,w as I,g as T,t as v}from"./index-88fFbSyu.js";import{P as L,D as B}from"./DelProductModal-KD-_fDPR.js";var A={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"reirei",BASE_URL:"/week8_teatime_coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:R,VITE_PATH:N}=A,S={data(){return{prodModal:null,emitProduct:{},status:{}}},props:["tempProducts","addProduct","addImg","isNew"],methods:{modelOpen(){this.prodModal.show()},modalClose(){this.prodModal.hide()},uploadPhotos(){const i=this.$refs.fileInput.files[0],t=new FormData;t.append("file-to-upload",i),this.status.flie=!0,_.post(`${R}/api/${N}/admin/upload`,t).then(r=>{this.status.flie=!1,this.emitProduct.imageUrl=r.data.imageUrl,this.$refs.fileInput.value=""}).catch(r=>{this.status.flie=!1,p.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:r.response.data.message})})}},mounted(){this.prodModal=new C(this.$refs.productModal),this.emitProduct=this.tempProducts},watch:{tempProducts(){this.emitProduct=this.tempProducts}}},O={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},F={class:"modal-dialog modal-xl"},q={class:"modal-content border-0"},H={class:"modal-header bg-dark text-white"},$={id:"productModalLabel",class:"modal-title"},z={key:0},j={key:1},G=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),J={class:"modal-body"},K={class:"row"},Q={class:"col-sm-4"},W={class:"mb-3"},X=e("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),Y={class:"mb-3"},Z=e("label",{for:"file",class:"form-label"},[T("上傳圖片 "),e("i",{class:"fas fa-spinner fa-spin"})],-1),ee=["src","alt"],te=e("h3",{class:"mb-3"},"新增多圖",-1),oe={class:"mb-3"},se=e("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),le=["onUpdate:modelValue"],ie=["src"],de={class:"col-sm-8"},ne={class:"mb-3"},ae=e("label",{for:"title",class:"form-label"},"標題",-1),re={class:"row"},ce={class:"mb-3 col-md-6"},ue=e("label",{for:"category",class:"form-label"},"分類",-1),me={class:"mb-3 col-md-6"},pe=e("label",{for:"unit",class:"form-label"},"單位",-1),he={class:"row"},_e={class:"mb-3 col-md-6"},fe=e("label",{for:"origin_price",class:"form-label"},"原價",-1),be={class:"mb-3 col-md-6"},ge=e("label",{for:"price",class:"form-label"},"售價",-1),Pe=e("hr",null,null,-1),ve={class:"mb-3"},we=e("label",{for:"description",class:"form-label"},"產品描述",-1),Ve={class:"mb-3"},ke=e("label",{for:"content",class:"form-label"},"說明內容",-1),ye={class:"mb-3"},Ue={class:"form-check"},Me=e("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),xe={class:"modal-footer"},Ce=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function De(i,t,r,x,o,c){const u=h("VField"),m=h("ErrorMessage"),k=h("VForm");return n(),a("div",O,[e("div",F,[e("div",q,[e("div",H,[e("h5",$,[r.isNew?(n(),a("span",z,"新增產品")):(n(),a("span",j,"編輯產品"))]),G]),e("div",J,[e("div",K,[e("div",Q,[e("div",W,[X,f(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>o.emitProduct.imageUrl=s),id:"imageUrl",type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[P,o.emitProduct.imageUrl]])]),e("div",Y,[Z,e("input",{type:"file",class:"form-control mb-4",id:"file",ref:"fileInput",onChange:t[1]||(t[1]=(...s)=>c.uploadPhotos&&c.uploadPhotos(...s))},null,544)]),e("img",{class:"img-fluid",src:o.emitProduct.imageUrl,alt:o.emitProduct.imageUrl},null,8,ee),te,Array.isArray(o.emitProduct.imagesUrl)?(n(),a(V,{key:0},[(n(!0),a(V,null,M(o.emitProduct.imagesUrl,(s,l)=>(n(),a("div",{class:"mb-1",key:l},[e("div",oe,[se,f(e("input",{type:"text","onUpdate:modelValue":y=>o.emitProduct.imagesUrl[l]=y,class:"form-control",placeholder:"請輸入圖片連結"},null,8,le),[[P,o.emitProduct.imagesUrl[l]]])]),e("img",{src:s,alt:"img",class:"img-fluid"},null,8,ie)]))),128)),!o.emitProduct.imagesUrl.length||o.emitProduct.imagesUrl[o.emitProduct.imagesUrl.length-1]?(n(),a("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[2]||(t[2]=s=>o.emitProduct.imagesUrl.push(""))},"新增圖片 ")):(n(),a("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100",onClick:t[3]||(t[3]=s=>o.emitProduct.imagesUrl.pop())}," 刪除圖片 "))],64)):(n(),a("button",{key:1,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[4]||(t[4]=(...s)=>r.addImg&&r.addImg(...s))},"新增圖片 "))]),e("div",de,[d(k,{ref:"form",class:"col-md-6"},{default:D(({errors:s})=>[e("div",ne,[ae,d(u,{id:"title",name:"標題",type:"text",class:b(["form-control",{"is-invalid":s.標題}]),placeholder:"請輸入標題",rules:"required",modelValue:o.emitProduct.title,"onUpdate:modelValue":t[5]||(t[5]=l=>o.emitProduct.title=l)},null,8,["class","modelValue"]),d(m,{name:"標題",class:"invalid-feedback"})]),e("div",re,[e("div",ce,[ue,d(u,{id:"category",name:"分類",type:"text",class:b(["form-control",{"is-invalid":s.分類}]),placeholder:"請輸入分類",rules:"required",modelValue:o.emitProduct.category,"onUpdate:modelValue":t[6]||(t[6]=l=>o.emitProduct.category=l)},null,8,["class","modelValue"]),d(m,{name:"分類",class:"invalid-feedback"})]),e("div",me,[pe,d(u,{id:"unit",name:"單位",type:"text",class:b(["form-control",{"is-invalid":s.單位}]),placeholder:"請輸入單位",rules:"required",modelValue:o.emitProduct.unit,"onUpdate:modelValue":t[7]||(t[7]=l=>o.emitProduct.unit=l)},null,8,["class","modelValue"]),d(m,{name:"單位",class:"invalid-feedback"})])]),e("div",he,[e("div",_e,[fe,d(u,{id:"origin_price",name:"原價",type:"number",min:"0",class:b(["form-control",{"is-invalid":s.原價}]),placeholder:"請輸入原價",rules:"required",modelValue:o.emitProduct.origin_price,"onUpdate:modelValue":t[8]||(t[8]=l=>o.emitProduct.origin_price=l),modelModifiers:{number:!0}},null,8,["class","modelValue"]),d(m,{name:"原價",class:"invalid-feedback"})]),e("div",be,[ge,d(u,{id:"price",name:"售價",type:"number",min:"0",class:b(["form-control",{"is-invalid":s.售價}]),placeholder:"請輸入售價",rules:"required",modelValue:o.emitProduct.price,"onUpdate:modelValue":t[9]||(t[9]=l=>o.emitProduct.price=l),modelModifiers:{number:!0}},null,8,["class","modelValue"]),d(m,{name:"售價",class:"invalid-feedback"})])])]),_:1},512),Pe,e("div",ve,[we,f(e("textarea",{"onUpdate:modelValue":t[10]||(t[10]=s=>o.emitProduct.description=s),id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述"},`
                `,512),[[P,o.emitProduct.description]])]),e("div",Ve,[ke,f(e("textarea",{"onUpdate:modelValue":t[11]||(t[11]=s=>o.emitProduct.content=s),id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容"},`
                `,512),[[P,o.emitProduct.content]])]),e("div",ye,[e("div",Ue,[f(e("input",{"onUpdate:modelValue":t[12]||(t[12]=s=>o.emitProduct.is_enabled=s),id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[E,o.emitProduct.is_enabled]]),Me])])])])]),e("div",xe,[Ce,e("button",{type:"button",class:"btn btn-primary",onClick:t[13]||(t[13]=I((...s)=>r.addProduct&&r.addProduct(...s),["prevent"]))}," 確認 ")])])])],512)}const Ee=U(S,[["render",De]]);var Ie={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"reirei",BASE_URL:"/week8_teatime_coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:g,VITE_PATH:w}=Ie,Te={data(){return{prodModal:null,delModal:null,products:[],pages:{},isNew:!1,isloading:!1,tempProducts:{imagesUrl:[]}}},methods:{cheakLongin(){_.post(`${g}/api/user/check`).then(()=>{this.getData()}).catch(i=>{p.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:i.response.data.message}),this.$router.push("/login")})},getData(i=1){this.isloading=!0,_.get(`${g}/api/${w}/admin/products?page=${i}`).then(t=>{this.isloading=!1,this.products=t.data.products,this.pages=t.data.pagination}).catch(t=>{this.isloading=!1,p.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:t.response.data.message})})},openModel(i,t){i==="new"?(this.tempProducts={imagesUrl:[]},this.isNew=!0,this.$refs.pduct.modelOpen()):i==="edit"?(this.isNew=!1,this.tempProducts={...t},this.$refs.pduct.modelOpen()):i==="delet"&&(this.tempProducts={...t},this.$refs.deModal.modelOpen())},delProduct(){this.isloading=!0,_.delete(`${g}/api/${w}/admin/product/${this.tempProducts.id}`).then(()=>{this.isloading=!1,this.$refs.deModal.modalClose(),this.getData(),p.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"success",title:"已刪除"})}).catch(i=>{this.isloading=!1,p.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:i.response.data.message})})},addProduct(){let i=`${g}/api/${w}/admin/product`,t="post";this.isNew||(i=`${g}/api/${w}/admin/product/${this.tempProducts.id}`,t="put"),this.isloading=!0,_[t](i,{data:this.tempProducts}).then(()=>{this.isloading=!1,this.$refs.pduct.modalClose(),this.getData(),p.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"success",title:"編輯成功"})}).catch(r=>{this.isloading=!1,p.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:r.response.data.message})})},addImg(){this.tempProducts.imagesUrl=[],this.tempProducts.imagesUrl.push("")}},mounted(){const i=document.cookie.replace(/(?:(?:^|.*;\s*)kawaToken\s*=\s*([^;]*).*$)|^.*$/,"$1");_.defaults.headers.common.Authorization=i,this.cheakLongin()},components:{PaginationModal:L,ProductModal:Ee,DelProductModal:B}},Le={class:"container px-6"},Be={class:"text-end mt-4"},Ae={class:"table mt-4"},Re=e("thead",null,[e("tr",null,[e("th",{width:"120"}," 分類 "),e("th",null,"產品名稱"),e("th",{width:"120"}," 原價 "),e("th",{width:"120"}," 售價 "),e("th",{width:"100"}," 是否啟用 "),e("th",{width:"120",class:"text-center"}," 編輯 ")])],-1),Ne={key:0,class:"text-success"},Se={key:1},Oe={class:"btn-group"},Fe=["onClick"],qe=["onClick"];function He(i,t,r,x,o,c){const u=h("VueLoading"),m=h("PaginationModal"),k=h("ProductModal"),s=h("DelProductModal");return n(),a(V,null,[d(u,{active:o.isloading,"z-index":1060},null,8,["active"]),e("div",Le,[e("div",Be,[e("button",{class:"btn btn-outline-secondary",onClick:t[0]||(t[0]=l=>c.openModel("new"))}," 建立新的產品 ")]),e("table",Ae,[Re,e("tbody",null,[(n(!0),a(V,null,M(o.products,l=>(n(),a("tr",{key:l.id},[e("td",null,v(l.category),1),e("td",null,v(l.title),1),e("td",null,v(l.origin_price),1),e("td",null,v(l.price),1),e("td",null,[l.is_enabled?(n(),a("span",Ne,"啟用")):(n(),a("span",Se,"未啟用"))]),e("td",null,[e("div",Oe,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:y=>c.openModel("edit",l)}," 編輯 ",8,Fe),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:y=>c.openModel("delet",l)}," 刪除 ",8,qe)])])]))),128))])]),d(m,{pages:o.pages,onEmitPages:c.getData},null,8,["pages","onEmitPages"]),d(k,{"temp-products":o.tempProducts,"add-product":c.addProduct,"is-new":o.isNew,"add-img":c.addImg,ref:"pduct"},null,8,["temp-products","add-product","is-new","add-img"]),d(s,{"temp-products":o.tempProducts,onDelItem:c.delProduct,ref:"deModal"},null,8,["temp-products","onDelItem"])])],64)}const Ge=U(Te,[["render",He]]);export{Ge as default};
