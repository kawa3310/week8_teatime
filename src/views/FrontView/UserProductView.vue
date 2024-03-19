<template>
  <VueLoading :active="isloading" :z-index="1060"></VueLoading>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb px-0 mb-0 py-2 fs-8 justify-content-start">
              <li class="breadcrumb-item">
                <RouterLink class="text-muted" :to="`/user/home`">首頁</RouterLink>
              </li>
              <li class="breadcrumb-item">
                <RouterLink class="text-muted" :to="`/user/merchandise`">產品列表</RouterLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
            </ol>
        </nav>
      </div>
      <div class="col-lg-11">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div id="carouselExampleControls" class="carousel slide"
            data-ride="carousel">
              <div class="carousel-inner">
                  <img :src="product.imageUrl"
                  class="img-product object-fit-cover ms-5 pt-1 pb-1"
                    :alt="product.imageUrl">
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="col">
              <h5 class="text-title">{{ product.title }}
                <span class="badge fs-9 rounded-3 bg-success text-light"
                >{{ product.category }}</span>
              </h5>
                <div class="mb-4 fs-8 text-title">
                  <span>{{ product.description }}</span>
                  <hr>
                  <p class="text-title-2 fw-bold fs-7">NT$
                    <span class="price fs-3">{{ product.price }}</span> 元
                  </p>
                </div>
                <div class="item-value text-title">
                  <span class="fs-8">數量：</span>
                    <label class="form-select-sm">
                      <select name="number" id="number" v-model.number="qty">
                        <option v-for="index in 10" :key="index" :value="index"
                        e>{{index}}</option>
                      </select>
                    </label>
                </div>
                <button type="button" class="btn btn-danger rounded-0 w-100 py-2 mt-4"
                  @click="addCart(product.id)">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div class="img-say-color col-lg border mt-5 mb-2 p-3">
      <div class="row justify-content-center">
        <h5 class="text-say text-center">【 師傅有話要說 】</h5>
          <div class="col-md-6 offset-md-3 align-self-center">
            <h4 class="text-back text-center lh-lg">{{ product.content }}</h4>
        </div>
        <div class="col-md-3">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1710159844724.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DJbPP3CWlMkamBFQ79A7FhY0JlPf2g1maCPSEwOrQsUCojIM%2BSrm%2FqFts3SCB%2BbhoWx8TUu3RJiI9qbtyJnMqLTdxAbarnch5H%2FWzm%2BcWdrfoNEdPlc7ILcgs%2FTQsAS1S3oi1JfeMplBk4zjpQJFQun%2BnvQXPavUnua5KxFI7rLAfh5skkUlv6m9q1wKlHFXg5W5yPO9RhsEbCGR8R0LIvrhGKEgyBlg7eJ6sPaz%2FsHzcEmTJP8wbfUTPfIK3WbHVAxm2BvN%2Fhx7pzkF0fxx73Wh6%2BwJQIBMsPjKzo%2Blo2ejwQktfRsElmJNFIT%2B6Iok22nKAC2xJY0C0u%2F3cTkcZw%3D%3D"
          class="img-say-img object-fit-cover"
            :alt="product.imageUrl">
        </div>
      </div>
    </div>
  </section>
    <div class="container-2 mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="row p-5">
          <span class="h4 text-start">螞蟻人還喜歡</span>
          <hr>
          <div class="col col-box" v-for="item in recommend" :key="item.id">
            <div class="card-body h-100 bg-body border rounded-0">
              <div class="box">
                <RouterLink :to="`/user/product/${item.id}`" class="link">
                  <img :src="item.imageUrl"
                  class="img card-img-top object-fit-cover rounded-0">
                  <div class="info flex-row justify-content-center align-items-center">
                    <p><i class="bi bi-search"></i>商品詳細</p>
                  </div>
                </RouterLink>
              </div>
              <RouterLink :to="`/user/product/${item.id}`" class="link">
                <div class="card-body p-3">
                  <h6 class="title text-top  fs-7">
                    {{ item.title }}
                  </h6>
                  <p class="card-text mt-1 fs-8">NT${{ item.price }}</p>
                </div>
              </RouterLink>
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
.img-product {
  height: 400px;
  width: 400px;
}
.price {
  color: #FB7070;
}
.card-img-top {
  height: 160px;
}
.img-say-img {
  height: 300px;
  width: 300px;
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

@media (max-width: 1140px) {
  .text-title-2 {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .breadcrumb {
    margin-left: 70px;
  }
  .img-product {
    width: 300px;
    height: 300px;
  }
  .img-say-img {
    padding-right: 120px
  }
  .card-img-top {
    height: 100px;
  }
}

@media (max-width: 375px) {
  .breadcrumb-item {
    font-size: 14px;
  }
  .col-item-img {
    margin: 0px 0px 30px 0px;
  }
  .text-title {
    text-align: center;
  }
  .text-title-2 {
    text-align: center;
  }
  .img-product {
    width: 230px;
    height: 240px;
    margin-bottom: 20px;
  }
  .img-say-img {
    padding-right: 0px
  }
  .container-2{
    display: none;
  }
  .col-box {
    display: none;
  }
}
</style>
