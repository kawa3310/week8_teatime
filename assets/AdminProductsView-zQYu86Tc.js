import{a as _}from"./axios-G2rPRu76.js";import{_ as U,M as C,r as h,o as n,c as a,a as t,b as f,v as P,F as V,j as M,e as d,f as D,n as b,s as E,w as I,g as T,t as v}from"./index-Nu53Fjxf.js";import{S as p}from"./sweetalert2.all-TFXqDCL-.js";import{P as L,D as B}from"./DelProductModal-dD_LZOU8.js";var A={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"reirei",BASE_URL:"/week8_teatime/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:R,VITE_PATH:N}=A,S={data(){return{prodModal:null,emitProduct:{},status:{}}},props:["tempProducts","addProduct","addImg","isNew"],methods:{modelOpen(){this.prodModal.show()},modalClose(){this.prodModal.hide()},uploadPhotos(){const i=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",i),this.status.flie=!0,_.post(`${R}/api/${N}/admin/upload`,e).then(r=>{this.status.flie=!1,this.emitProduct.imageUrl=r.data.imageUrl,this.$refs.fileInput.value=""}).catch(r=>{this.status.flie=!1,p.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:r.response.data.message})})}},mounted(){this.prodModal=new C(this.$refs.productModal),this.emitProduct=this.tempProducts},watch:{tempProducts(){this.emitProduct=this.tempProducts}}},O={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},F={class:"modal-dialog modal-xl"},q={class:"modal-content border-0"},H={class:"modal-header bg-dark text-white"},$={id:"productModalLabel",class:"modal-title"},z={key:0},j={key:1},G=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),J={class:"modal-body"},K={class:"row"},Q={class:"col-sm-4"},W={class:"mb-3"},X=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),Y={class:"mb-3"},Z=t("label",{for:"file",class:"form-label"},[T("上傳圖片 "),t("i",{class:"fas fa-spinner fa-spin"})],-1),tt=["src","alt"],et=t("h3",{class:"mb-3"},"新增多圖",-1),ot={class:"mb-3"},st=t("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),lt=["onUpdate:modelValue"],it=["src"],dt={class:"col-sm-8"},nt={class:"mb-3"},at=t("label",{for:"title",class:"form-label"},"標題",-1),rt={class:"row"},ct={class:"mb-3 col-md-6"},ut=t("label",{for:"category",class:"form-label"},"分類",-1),mt={class:"mb-3 col-md-6"},pt=t("label",{for:"unit",class:"form-label"},"單位",-1),ht={class:"row"},_t={class:"mb-3 col-md-6"},ft=t("label",{for:"origin_price",class:"form-label"},"原價",-1),bt={class:"mb-3 col-md-6"},gt=t("label",{for:"price",class:"form-label"},"售價",-1),Pt=t("hr",null,null,-1),vt={class:"mb-3"},wt=t("label",{for:"description",class:"form-label"},"產品描述",-1),Vt={class:"mb-3"},kt=t("label",{for:"content",class:"form-label"},"說明內容",-1),yt={class:"mb-3"},Ut={class:"form-check"},Mt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),xt={class:"modal-footer"},Ct=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Dt(i,e,r,x,o,c){const u=h("VField"),m=h("ErrorMessage"),k=h("VForm");return n(),a("div",O,[t("div",F,[t("div",q,[t("div",H,[t("h5",$,[r.isNew?(n(),a("span",z,"新增產品")):(n(),a("span",j,"編輯產品"))]),G]),t("div",J,[t("div",K,[t("div",Q,[t("div",W,[X,f(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.emitProduct.imageUrl=s),id:"imageUrl",type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[P,o.emitProduct.imageUrl]])]),t("div",Y,[Z,t("input",{type:"file",class:"form-control mb-4",id:"file",ref:"fileInput",onChange:e[1]||(e[1]=(...s)=>c.uploadPhotos&&c.uploadPhotos(...s))},null,544)]),t("img",{class:"img-fluid",src:o.emitProduct.imageUrl,alt:o.emitProduct.imageUrl},null,8,tt),et,Array.isArray(o.emitProduct.imagesUrl)?(n(),a(V,{key:0},[(n(!0),a(V,null,M(o.emitProduct.imagesUrl,(s,l)=>(n(),a("div",{class:"mb-1",key:l},[t("div",ot,[st,f(t("input",{type:"text","onUpdate:modelValue":y=>o.emitProduct.imagesUrl[l]=y,class:"form-control",placeholder:"請輸入圖片連結"},null,8,lt),[[P,o.emitProduct.imagesUrl[l]]])]),t("img",{src:s,alt:"img",class:"img-fluid"},null,8,it)]))),128)),!o.emitProduct.imagesUrl.length||o.emitProduct.imagesUrl[o.emitProduct.imagesUrl.length-1]?(n(),a("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=s=>o.emitProduct.imagesUrl.push(""))},"新增圖片 ")):(n(),a("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=s=>o.emitProduct.imagesUrl.pop())}," 刪除圖片 "))],64)):(n(),a("button",{key:1,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=(...s)=>r.addImg&&r.addImg(...s))},"新增圖片 "))]),t("div",dt,[d(k,{ref:"form",class:"col-md-6"},{default:D(({errors:s})=>[t("div",nt,[at,d(u,{id:"title",name:"標題",type:"text",class:b(["form-control",{"is-invalid":s.標題}]),placeholder:"請輸入標題",rules:"required",modelValue:o.emitProduct.title,"onUpdate:modelValue":e[5]||(e[5]=l=>o.emitProduct.title=l)},null,8,["class","modelValue"]),d(m,{name:"標題",class:"invalid-feedback"})]),t("div",rt,[t("div",ct,[ut,d(u,{id:"category",name:"分類",type:"text",class:b(["form-control",{"is-invalid":s.分類}]),placeholder:"請輸入分類",rules:"required",modelValue:o.emitProduct.category,"onUpdate:modelValue":e[6]||(e[6]=l=>o.emitProduct.category=l)},null,8,["class","modelValue"]),d(m,{name:"分類",class:"invalid-feedback"})]),t("div",mt,[pt,d(u,{id:"unit",name:"單位",type:"text",class:b(["form-control",{"is-invalid":s.單位}]),placeholder:"請輸入單位",rules:"required",modelValue:o.emitProduct.unit,"onUpdate:modelValue":e[7]||(e[7]=l=>o.emitProduct.unit=l)},null,8,["class","modelValue"]),d(m,{name:"單位",class:"invalid-feedback"})])]),t("div",ht,[t("div",_t,[ft,d(u,{id:"origin_price",name:"原價",type:"number",min:"0",class:b(["form-control",{"is-invalid":s.原價}]),placeholder:"請輸入原價",rules:"required",modelValue:o.emitProduct.origin_price,"onUpdate:modelValue":e[8]||(e[8]=l=>o.emitProduct.origin_price=l),modelModifiers:{number:!0}},null,8,["class","modelValue"]),d(m,{name:"原價",class:"invalid-feedback"})]),t("div",bt,[gt,d(u,{id:"price",name:"售價",type:"number",min:"0",class:b(["form-control",{"is-invalid":s.售價}]),placeholder:"請輸入售價",rules:"required",modelValue:o.emitProduct.price,"onUpdate:modelValue":e[9]||(e[9]=l=>o.emitProduct.price=l),modelModifiers:{number:!0}},null,8,["class","modelValue"]),d(m,{name:"售價",class:"invalid-feedback"})])])]),_:1},512),Pt,t("div",vt,[wt,f(t("textarea",{"onUpdate:modelValue":e[10]||(e[10]=s=>o.emitProduct.description=s),id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述"},`
                `,512),[[P,o.emitProduct.description]])]),t("div",Vt,[kt,f(t("textarea",{"onUpdate:modelValue":e[11]||(e[11]=s=>o.emitProduct.content=s),id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容"},`
                `,512),[[P,o.emitProduct.content]])]),t("div",yt,[t("div",Ut,[f(t("input",{"onUpdate:modelValue":e[12]||(e[12]=s=>o.emitProduct.is_enabled=s),id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[E,o.emitProduct.is_enabled]]),Mt])])])])]),t("div",xt,[Ct,t("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=I((...s)=>r.addProduct&&r.addProduct(...s),["prevent"]))}," 確認 ")])])])],512)}const Et=U(S,[["render",Dt]]);var It={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"reirei",BASE_URL:"/week8_teatime/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:g,VITE_PATH:w}=It,Tt={data(){return{prodModal:null,delModal:null,products:[],pages:{},isNew:!1,isloading:!1,tempProducts:{imagesUrl:[]}}},methods:{cheakLongin(){_.post(`${g}/api/user/check`).then(()=>{this.getData()}).catch(i=>{p.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:i.response.data.message}),this.$router.push("/login")})},getData(i=1){this.isloading=!0,_.get(`${g}/api/${w}/admin/products?page=${i}`).then(e=>{this.isloading=!1,this.products=e.data.products,this.pages=e.data.pagination}).catch(e=>{this.isloading=!1,p.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:e.response.data.message})})},openModel(i,e){i==="new"?(this.tempProducts={imagesUrl:[]},this.isNew=!0,this.$refs.pduct.modelOpen()):i==="edit"?(this.isNew=!1,this.tempProducts={...e},this.$refs.pduct.modelOpen()):i==="delet"&&(this.tempProducts={...e},this.$refs.deModal.modelOpen())},delProduct(){this.isloading=!0,_.delete(`${g}/api/${w}/admin/product/${this.tempProducts.id}`).then(()=>{this.isloading=!1,this.$refs.deModal.modalClose(),this.getData(),p.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"success",title:"已刪除"})}).catch(i=>{this.isloading=!1,p.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:i.response.data.message})})},addProduct(){let i=`${g}/api/${w}/admin/product`,e="post";this.isNew||(i=`${g}/api/${w}/admin/product/${this.tempProducts.id}`,e="put"),this.isloading=!0,_[e](i,{data:this.tempProducts}).then(()=>{this.isloading=!1,this.$refs.pduct.modalClose(),this.getData(),p.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"success",title:"編輯成功"})}).catch(r=>{this.isloading=!1,p.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:r.response.data.message})})},addImg(){this.tempProducts.imagesUrl=[],this.tempProducts.imagesUrl.push("")}},mounted(){const i=document.cookie.replace(/(?:(?:^|.*;\s*)kawaToken\s*=\s*([^;]*).*$)|^.*$/,"$1");_.defaults.headers.common.Authorization=i,this.cheakLongin()},components:{PaginationModal:L,ProductModal:Et,DelProductModal:B}},Lt={class:"container px-6"},Bt={class:"text-end mt-4"},At={class:"table mt-4"},Rt=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120",class:"text-center"}," 編輯 ")])],-1),Nt={key:0,class:"text-success"},St={key:1},Ot={class:"btn-group"},Ft=["onClick"],qt=["onClick"];function Ht(i,e,r,x,o,c){const u=h("VueLoading"),m=h("PaginationModal"),k=h("ProductModal"),s=h("DelProductModal");return n(),a(V,null,[d(u,{active:o.isloading,"z-index":1060},null,8,["active"]),t("div",Lt,[t("div",Bt,[t("button",{class:"btn btn-outline-secondary",onClick:e[0]||(e[0]=l=>c.openModel("new"))}," 建立新的產品 ")]),t("table",At,[Rt,t("tbody",null,[(n(!0),a(V,null,M(o.products,l=>(n(),a("tr",{key:l.id},[t("td",null,v(l.category),1),t("td",null,v(l.title),1),t("td",null,v(l.origin_price),1),t("td",null,v(l.price),1),t("td",null,[l.is_enabled?(n(),a("span",Nt,"啟用")):(n(),a("span",St,"未啟用"))]),t("td",null,[t("div",Ot,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:y=>c.openModel("edit",l)}," 編輯 ",8,Ft),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:y=>c.openModel("delet",l)}," 刪除 ",8,qt)])])]))),128))])]),d(m,{pages:o.pages,onEmitPages:c.getData},null,8,["pages","onEmitPages"]),d(k,{"temp-products":o.tempProducts,"add-product":c.addProduct,"is-new":o.isNew,"add-img":c.addImg,ref:"pduct"},null,8,["temp-products","add-product","is-new","add-img"]),d(s,{"temp-products":o.tempProducts,onDelItem:c.delProduct,ref:"deModal"},null,8,["temp-products","onDelItem"])])],64)}const Jt=U(Tt,[["render",Ht]]);export{Jt as default};
