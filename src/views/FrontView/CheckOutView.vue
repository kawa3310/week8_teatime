<template>
  <VueLoading :active="isloading" :z-index="1060"/>
  <div class="container pb-5" v-if="cart.length !== 0">
    <div class="row justify-content-center mb-5">
      <div class="col-9 col-md-8 position-relative mt-6">
        <div class="progress" style="height: 5px;">
          <div class="progress-bar" role="progressbar"
            style="width: 0%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
          </div>
        </div>
        <div type="button" class="position-absolute top-0
        start-0 translate-middle btn btn-sm btn-dark rounded-pill"
        style="width: 2rem; height: 2rem;">
          <div>
            <i class="bi bi-cart"></i>
          </div>
        </div>
        <button type="button" class="position-absolute top-0
        start-50 translate-middle btn btn-sm btn-secondary rounded-pill d-flex "
        style="width: 2rem; height:2rem;">
          <i class="bi bi-clipboard"></i>
        </button>
        <button type="button" class="position-absolute top-0
        start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
        style="width: 2rem; height:2rem;">
          <i class="bi bi-credit-card-2-back"></i>
        </button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-md-12 col-lg-9 bg-white"
      style="min-height: calc(100vh - 56px - 76px);">
        <div class="d-flex justify-content-center">
          <h2 class="my-4" v-if="cart.final_total !== 0">購物車</h2>
        </div>
        <div class="d-flex flex-column justify-content-center">
          <div class="shadow-sm mb-4 bg-body rounded border overflow-hidden"
              v-for="cart in cart" :key="cart.id">
            <div class="row align-items-center">
              <div class="col-12 col-md-4">
                <img :src="cart.product.imageUrl"
                alt="商品圖片" class="img-product w-100">
              </div>
              <div class="col-12 col-md-8">
                <div class="p-3">
                  <div class="d-flex justify-content-between">
                    <span class=" lh-lg">
                      {{ cart.product.title }}
                    </span>
                    <a type="button"
                    @click="delCart(cart.id)">
                      <i class="bi-icon bi bi-trash"></i>
                    </a>
                  </div>
                  <div class="fs-8 mb-3">售價 NT${{ cart.total/cart.qty }}</div>
                  <div class="row">
                    <div class="col-md-8">
                      <div class="input-group d-flex">
                        <button class="btn d-flex rounded-0" style="border-color: black;"
                        type="button"
                        @click="reviseCart(cart, cart.qty - 1)" :disabled="cart.qty === 1">
                          <i class="bi bi-dash fs-7"></i>
                        </button>
                        <span class="form-control text-center" style="border-color: black;"
                          placeholder="" min="1">{{ cart.qty }}</span>
                        <button class="btn d-flex rounded-0" style="border-color: black;"
                        type="button"
                        @click="reviseCart(cart, cart.qty + 1)">
                          <i class="bi bi-plus fs-7"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col-md-4 mt-3">
                      <div class="fs-6">總計 NT${{ cart.final_total }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="order" v-if="cart.total !== 0">
          <div class="card-total d-flex justify-content-end">
            <div class="col-6">
              <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control rounded-0" v-model="voucher.code"
                  placeholder="請輸入折扣碼" aria-label="voucher" aria-describedby="basic-addon1"
                />
                <button type="button" class="btn btn-outline-success input-group-text rounded-0"
                @click="useVoucher">套用優惠券</button>
              </div>
            </div>
          </div>
          <div class="card-total d-flex justify-content-end" v-if="useCode">
            <p class="fs-9 fw-bold">-優惠卷折扣
              {{ $filter.currency(cartsTotal.total - cartsTotal.final_total) }}
            </p>
          </div>
          <div class="card-total d-flex justify-content-end">
            <p class="mb-0 h6 fw-bold">總金額：</p>
            <p class="mb-0 h6 fw-bold">NT${{ $filter.currency(cartsTotal.final_total) }}</p>
          </div>
          <div class="d-flex justify-content-between mt-5">
            <div class="bt">
              <RouterLink :to="`/merchandise`"
                class="btn btn-outline-secondary rounded-0 d-flex align-items-center">
                  <i class="bi bi-caret-left d-flex"></i>
                  <span>繼續選購</span>
              </RouterLink>
            </div>
            <div class="bt mx-2">
              <button type="button" class="btn btn-outline-secondary rounded-0" @click="delItems"
              >清空</button>
            </div>
            <div class="order">
              <RouterLink :to="`/orderOut`"
                class="order btn btn-danger rounded-0 d-flex align-items-center"
              >
                結帳帶回家
                <i class="bi bi-caret-right d-flex"></i>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-7" v-else>
    <h5 class="text-center">你的購物車是空的喔，快去選購吃甜點吧！</h5>
    <div class="d-flex justify-content-center mt-5">
      <div class="bt">
        <RouterLink :to="`/merchandise`" class="btn btn-outline-primary rounded-0">
          <i class="bi bi-caret-left"></i><i class="bi bi-caret-left"></i>
          <i class="bi bi-caret-left"></i> 來去選購
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cartStore';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      voucher: {
        code: 'PUFFY123',
      },
      useCode: false,
    };
  },
  computed: {
    ...mapState(cartStore, ['cart', 'cartsTotal', 'isloading']),
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    delCart(id) {
      this.cart.id = id;
      this.isloading = true;
      axios.delete(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`)
        .then(() => {
          this.isloading = false;
          this.getCart();
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '已刪除',
          });
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
    delItems() {
      this.isloading = true;
      axios.delete(`${VITE_URL}/api/${VITE_PATH}/carts`)
        .then(() => {
          this.isloading = false;
          this.getCart();
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '已刪除全部購物車',
          });
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
    reviseCart(carts, qty) {
      const cart = {
        product_id: carts.product_id,
        qty,
      };
      axios.put(`${VITE_URL}/api/${VITE_PATH}/cart/${carts.id}`, { data: cart })
        .then(() => {
          this.getCart();
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
    useVoucher() {
      axios.post(`${VITE_URL}/api/${VITE_PATH}/coupon`, { data: this.voucher })
        .then(() => {
          this.getCart();
          this.voucher.code = '';
          this.useCode = true;
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
    this.getCart();
    this.useCode = false;
  },
};
</script>

<style scoped>
.delete-icon {
  color: black;
}
.img-product {
  height: 180px;
  object-fit: cover;
}
</style>
