import{q as n}from"./index-GGCiqbao.js";import{a as e}from"./axios-G2rPRu76.js";import{S as o}from"./sweetalert2.all-B3CQUdxR.js";var c={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"reirei",BASE_URL:"/week8_teatime/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:r,VITE_PATH:i}=c,m=n("cartStore",{state:()=>({cart:[],final_total:0,total:0}),actions:{getCart(){e.get(`${r}/api/${i}/cart`).then(t=>{this.cart=t.data.data.carts,this.final_total=t.data.data.final_total,this.total=t.data.data.total}).catch(t=>{o.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:t.response.data.message})})},getProduct(){const{id:t}=this.$route.params;e.get(`${r}/api/${i}/product/${t}`).then(a=>{this.product=a.data.product,this.recommendProduct()}).catch(a=>{o.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:a.response.data.message})})},addCart(t){const a={product_id:t,qty:1};e.post(`${r}/api/${i}/cart`,{data:a}).then(()=>{this.getCart(),o.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"success",title:"已加入購物車"})}).catch(s=>{o.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:s.response.data.message})})}}});export{m as c};