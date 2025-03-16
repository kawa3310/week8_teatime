<template>
  <VueLoading :active="isloading" :z-index="1060"/>
  <div class="container my-5">
    <div class="category-list d-md-flex justify-content-md-center">
      <ul class="list-group list-group-horizontal text-nowrap">
        <li class="list-group list-group-flush m-2 border rounded"
        v-for="(item,key) in filter.list" :key="key">
          <button type="button"
            class="list-group-item rounded"
            :class="activeClass == key ? 'active' : ''"
            @click.prevent="changeCategory(item,key)">{{ item }}</button>
        </li>
      </ul>
    </div>
    <div class="row row-cols-1 justify-content-center">
      <div class="col col-img my-4"
      v-for="item in products" :key="item.id">
        <div class="card bg-body border rounded">
          <div class="box">
            <RouterLink :to="`/product/${item.id}`" class="link">
              <img :src="item.imageUrl" :alt="item.imageUrl"
              class="img img-fluid card-img-top object-fit-cover rounded-top">
              <div class="info flex-row justify-content-center align-items-center">
                <p><i class="bi bi-search"></i>商品詳細</p>
              </div>
            </RouterLink>
          </div>
            <div class="p-3">
              <RouterLink :to="`/product/${item.id}`" class="link">
              <h6 class="fs-7">
                {{ item.title }}
              </h6>
              <span>NT${{ item.price }}</span>
              </RouterLink>
              <button type="button" class="btn btn-outline-danger w-100 mt-2 rounded-0"
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
a {
  cursor: pointer;
}
.col-img {
  width: 15rem;
}
.card-img-top {
  height: 160px;
  background-size: cover;
}
.list-group-item.active {
  background-color: #f85e5e;
}

.category-list {
  overflow-x: auto;
  &::-webkit-scrollbar{
      height: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: #ebcece;
      border-radius: 10px;
      margin: 10px 130px;
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background-color: #d84f4f;
    }
}
</style>
