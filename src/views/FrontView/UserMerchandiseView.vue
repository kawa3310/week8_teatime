<template>
  <VueLoading :active="isloading" :z-index="1060"></VueLoading>
  <div class="container mt-md-5 mt-3 mb-5">
    <ul class="category list-unstyled d-flex justify-content-center mt-4 mb-5">
      <li class="list-change list-group list-group-flush border"
      v-for="(item,key) in filter.list" :key="key">
        <a
        class="list-group-item px-3 py-1 rounded-0"
        :class="activeClass == key ? 'active' : ''"
        @click.prevent="changeCategory(item,key)">{{ item }}</a>
      </li>
    </ul>
    <div class="row row-cols-3 row-cols-md-3 g-4 mt-2 justify-content-center">
      <div class="col-img col"
      v-for="item in products" :key="item.id">
        <div class="card-body bg-body border rounded-0">
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
            <div class="p-3">
              <h6 class="title text-top fs-7">
                {{ item.title }}
              </h6>
              <p class="card-text mt-1 fs-8">NT${{ item.price }}</p>
            </div>
          </RouterLink>
          <div class="mb-4" style="text-align:center">
            <button type="button" class="btn btn-outline-danger rounded-0"
            @click="addCart(item.id)">加入購物車</button>
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
      products: [],
      filter: {
        list: ['全部', '泡芙', '蛋糕', '餅乾', '布丁', '飲品'],
        str: '全部',
      },
      activeClass: -0,
      isloading: false,
    };
  },
  methods: {
    ...mapActions(cartStore, ['addCart']),
    getDatas() {
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/products/All`)
        .then((res) => {
          this.isloading = false;
          if (this.filter.str !== '全部') {
            const filterPro = res.data.products.filter((item) => item.category === this.filter.str);
            this.products = filterPro;
          } else {
            this.products = res.data.products;
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
    changeCategory(str, key) {
      this.filter.str = str;
      this.activeClass = key;
      this.getDatas();
    },
  },
  mounted() {
    this.getDatas();
  },
  watch: {
    '$route.query': {
      handler() {
        this.getDatas();
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
@import '@/assets/css/hoverStyle.scss';
.col-img {
  width: 15rem;
}
.card-img-top {
  height: 200px;
}
.list-group-item.active {
  background-color: #FFB2B2;
}
.cart {
  outline: none;
}

@media (max-width: 1400px) {
  .list-change {
    padding: 0 auto;
    margin: 0px 0px 0px 30px;
  }
}

@media (max-width: 768px) {
  .list-change {
    padding: 0 auto;
    margin: 0px 0px 0px 20px;
  }
}

@media (max-width: 365px) {
  .list-change {
    padding: 0 auto;
    margin: 0px 0px 0px -10px;
  }
}
</style>
