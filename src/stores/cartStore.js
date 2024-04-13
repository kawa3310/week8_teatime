import { defineStore } from 'pinia';

import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('cartStore', {
  state: () => ({
    cart: {},
    cartsTotal: {},
    final_total: 0,
    total: 0,
    isloading: false,
  }),
  actions: {
    getCart() {
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.isloading = false;
          this.cart = res.data.data.carts;
          this.cartsTotal = res.data.data;
          this.final_total = res.data.data.final_total;
          this.total = res.data.data.total;
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
    getProduct() {
      const { id } = this.$route.params;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          this.recommendProduct();
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
    addCart(id) {
      const cart = {
        product_id: id,
        qty: 1,
      };
      axios.post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data: cart })
        .then(() => {
          this.getCart();
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '已加入購物車',
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
  },
});
