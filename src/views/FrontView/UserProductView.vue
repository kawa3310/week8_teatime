<template>
  <VueLoading :active="isloading" :z-index="1060"/>
  <div class="container my-5">
    <div class="row justify-content-end">
      <div class="col-md-11">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb px-0 mb-0 py-2 fs-7 justify-content-start">
              <li class="breadcrumb-item">
                <RouterLink class="text-muted" :to="`/`">首頁</RouterLink>
              </li>
              <li class="breadcrumb-item">
                <RouterLink class="text-muted" :to="`/merchandise`">產品列表</RouterLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
            </ol>
        </nav>
      </div>
      <div class="col-md-11">
        <div class="row">
          <div class="col-md-6">
            <div class="d-flex bd-highlight" style="height: 400px;">
                <img :src="product.imageUrl"
                class="w-100 img-fluid object-fit-cover"
                  :alt="product.imageUrl">
            </div>
          </div>
          <div class="col-md-5">
            <div class="col">
              <h5>{{ product.title }}
                <span class="badge fs-8 rounded-3 bg-success text-light"
                >{{ product.category }}</span>
              </h5>
                <div class="mb-4 fs-7">
                  <span>{{ product.description }}</span>
                  <hr>
                  <p class="fw-bold fs-7">NT$
                    <span class="price fs-3">{{ product.price }}</span> 元
                  </p>
                </div>
                <div>
                  <div class="row justify-content-center">
                    <div class="col d-flex align-items-center">
                      <span class="fs-7">數量：</span>
                    <div class="col">
                      <select class="form-select" aria-labe="數量"
                        name="number" id="number" v-model.number="qty">
                          <option v-for="index in 10" :key="index" :value="index"
                          e>{{index}}</option>
                        </select>
                    </div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-danger rounded-0 w-100 py-2 mt-4"
                  @click="addCart(product.id)">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid img-say-color">
    <div class="row">
      <div class="col mb-2">
        <h4 class="text-say text-center pt-3">【 師傅有話要說 】</h4>
        <div class="row justify-content-center p-5">
            <div class="col-0 col-md-5 offset-md-3 align-self-center">
              <h4 class="text-back text-center lh-lg">{{ product.content }}</h4>
          </div>
          <div class="col-0 col-md-4">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1710159844724.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DJbPP3CWlMkamBFQ79A7FhY0JlPf2g1maCPSEwOrQsUCojIM%2BSrm%2FqFts3SCB%2BbhoWx8TUu3RJiI9qbtyJnMqLTdxAbarnch5H%2FWzm%2BcWdrfoNEdPlc7ILcgs%2FTQsAS1S3oi1JfeMplBk4zjpQJFQun%2BnvQXPavUnua5KxFI7rLAfh5skkUlv6m9q1wKlHFXg5W5yPO9RhsEbCGR8R0LIvrhGKEgyBlg7eJ6sPaz%2FsHzcEmTJP8wbfUTPfIK3WbHVAxm2BvN%2Fhx7pzkF0fxx73Wh6%2BwJQIBMsPjKzo%2Blo2ejwQktfRsElmJNFIT%2B6Iok22nKAC2xJY0C0u%2F3cTkcZw%3D%3D"
            class="img-say-img img-fluid object-fit-cover"
              :alt="product.imageUrl">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-8">
    <div class="row justify-content-center">
      <span class="h4 text-start">螞蟻人還喜歡</span>
      <hr>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div class="col col-img my-4" v-for="item in recommend" :key="item.id">
            <div class="card border rounded">
              <div class="box">
                <img :src="item.imageUrl" :alt="item.imageUrl"
                class="img img-fluid card-img-top object-fit-cover rounded-0">
              </div>
                <div class="p-3">
                  <h6 class="card-title">
                    {{ item.title }}
                  </h6>
                  <span>NT${{ item.price }}</span>
                  <RouterLink :to="`/product/${item.id}`" class="link">
                    <button type="button" class="btn btn-outline-success w-100 mt-2 rounded-0"
                    >商品詳細</button>
                  </RouterLink>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      product: {},
      recommend: [],
      qty: 1,
      isloading: false,
    };
  },
  methods: {
    ...mapActions(cartStore, ['addCart']),
    getProduct() {
      this.isloading = true;
      const { id } = this.$route.params;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.isloading = false;
          this.product = res.data.product;
          this.recommendProduct();
        })
        .catch((error) => {
          this.isloading = false;
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            icon: 'error',
            title: error.response.data.message,
          });
        });
    },
    recommendProduct() {
      axios.get(`${VITE_URL}/api/${VITE_PATH}/products/All`)
        .then((res) => {
          if (res.data.success) {
            this.recommend = res.data.products.filter((item) => item.id !== this.product.id)
              .sort(() => Math.random() - 0.5)
              .slice(0, 4);
          }
        })
        .catch((error) => {
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            icon: 'error',
            title: error.response.data.message,
          });
        });
    },
  },
  mounted() {
    this.getProduct();
  },
  watch: {
    $route() {
      this.getProduct();
    },
  },
};
</script>

<style scoped>
@import '@/assets/css/hoverStyle.scss';
span {
  color: rgba(33, 37, 41, 0.75);
}
.breadcrumb-item.active {
  color: #373232;
}
.price {
  color: #FB7070;
}
.card-img-top {
  height: 160px;
  max-height: 100%;
  background-size: cover;
}
.img-say-color {
  background-color: #DDDCDC;
}
.text-say {
  color: #685E5E;
}
.text-back {
  color: #A07575;
}
.img-product {
  border: 1px solid red;
}

@media (max-width: 365px) {
  .box {
  height: 150px;
}
}
</style>
