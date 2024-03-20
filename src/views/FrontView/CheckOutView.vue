<template>
  <VueLoading :active="isloading" :z-index="1060"></VueLoading>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 bg-white py-5"
        style="min-height: calc(100vh - 56px - 76px);">
          <div class="d-flex justify-content-center">
            <h2 class="mt-2" v-if="cart.total !== 0">購物車</h2>
          </div>
          <div class="row justify-content-center">
            <div class="card-body align-items-center d-inline-flex p-4 mt-4
            shadow-sm p-3 mb-5 bg-body rounded border"
              v-for="cart in cart.carts" :key="cart.id">
              <div class="row">
                <div class="d-flex object-fit-cover w-100">
                  <img :src="cart.product.imageUrl" class="card-img-top">
                </div>
              </div>
              <div class="ms-4 w-100 position-relative">
                <a class="delete-icon position-absolute" type="button"
                @click="delCart(cart.id)">
                  <i class="bi-icon bi bi-trash"></i>
                </a>
                <p class="mb-0 lh-lg fw-bold">
                  {{ cart.product.title }}</p>
                <p class="mb-1 fs-8 text-muted mb-3">{{ cart.product.content }}</p>
                <div class="d-flex justify-content-center align-items-center w-100">
                  <div class="input-group">
                    <button class="btn bg-success bg-gradient rounded-0 px-md-1 border-0"
                    type="button"
                    @click="reviseCart(cart, cart.qty + 1)">
                      <i class="bi bi-plus fs-7"></i>
                    </button>
                    <span class="form-control text-center"
                    placeholder="" min="1">{{ cart.qty }}</span>
                    <button class="btn bg-success bg-gradient rounded-0 px-md-1 border-0"
                    type="button"
                    @click="reviseCart(cart, cart.qty - 1)" :disabled="cart.qty === 1">
                      <i class="bi bi-dash fs-7"></i>
                    </button>
                  </div>
                  <div class="text-price col-md-6 d-flex justify-content-end align-items-center
                  pe-4 pt-md-0 pt-4">
                    <span class="text-nowrap">NT ${{ cart.total }}</span>
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
                {{ $filter.currency(cart.total - cart.final_total) }}
              </p>
            </div>
            <div class="card-total d-flex justify-content-end">
              <p class="mb-0 h6 fw-bold">總金額：</p>
              <p class="mb-0 h6 fw-bold">NT${{ $filter.currency(cart.final_total) }}</p>
            </div>
            <div class="d-flex justify-content-between mt-5">
              <div class="bt">
              <RouterLink :to="`/user/merchandise`" class="btn btn-outline-secondary rounded-0">
              ◁ 繼續選購
              </RouterLink>
              </div>
              <div class="bt">
                <button class="btn btn-outline-secondary rounded-0" @click="delItems"
                >清空</button>
              </div>
              <div class="order">
                <RouterLink :to="`/user/orderOut`" class="order btn btn-danger rounded-0"
                >結帳帶回家 ▷</RouterLink>
              </div>
            </div>
          </div>
          <div class="no-order" v-else>
              <h5 class="text-center">你的購物車是空的喔，快去選購吃甜點吧！</h5>
              <div class="d-flex justify-content-center mt-5">
                <div class="bt">
                  <RouterLink :to="`/user/merchandise`" class="btn btn-outline-primary rounded-0">
                  ◁ 來去選購
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

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      cart: {},
      voucher: {
        code: 'PUFFY123',
      },
      useCode: false,
      isloading: false,
    };
  },
  methods: {
    getCart() {
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.isloading = false;
          this.cart = res.data.data;
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
    delCart(id) {
      this.cart.id = id;
      axios.delete(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`)
        .then(() => {
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
.card-body {
  width: 500px;
}
.delete-icon {
  bottom: 100px; right: 22px;
  color: black;
}
.card-img-top {
  width: 60px;
  height: 60px;
}

@media (max-width: 768px) {
  .delete-icon {
    margin: 0px 0px 30px 10px;
  }
}

@media (max-width: 375px) {
  .delete-icon {
    padding: 0px 0px 50px 0px;
  }
}
</style>
