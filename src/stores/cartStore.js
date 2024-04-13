import { defineStore } from 'pinia';

import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('cartStore', {
  state: () => ({
    cart: {},
    carts: {},
    final_total: 0,
    total: 0,
  }),
  actions: {
    getCart() {
      axios.get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data.carts;
          this.final_total = res.data.data.final_total;
          this.total = res.data.data.total;
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
