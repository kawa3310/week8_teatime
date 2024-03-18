<template>
  <VueLoading :active="isloading" :z-index="1060"></VueLoading>
  <div class="pt-5 pb-7">
    <div class="container">
      <div class="row justify-content-center flex-md-row">
        <div class="col-md-4">
          <div class="border p-4 shadow-sm p-3 mb-5 bg-body rounded">
            <h4 class="mb-4 fw-bold text-center">訂單資訊</h4>
            <div class="d-flex mt-2" v-for="cart in cart.carts" :key="cart.id">
              <img :src="cart.product.imageUrl"
                :alt="cart.imageUrl" class="img me-2">
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 fs-7">{{ cart.product.title }}</p>
                  <p class="mb-0 fs-7">x{{ cart.qty }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="text-muted mb-0 fs-8">
                    <small>NT$ {{ cart.product.price }} / {{ cart.product.unit }}</small>
                  </p>
                </div>
              </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4">小計</th>
                  <td class="text-end border-0 px-0 pt-4">NT$ {{ cart.total }}</td>
                </tr>
                <tr v-if="cart.total !== cart.final_total">
                  <th scope="row" class="px-0"></th>
                  <td class="fs-9 text-end px-0 pt-1" style="color: red">-優惠卷折扣
                    {{ $filter.currency(cart.final_total) }}</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總計金額</p>
              <p class="mb-0 h4 fw-bold mb-3">NT${{ cart.final_total }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-5 p-4 shadow-sm mb-5 bg-body border rounded">
          <div class="p-4">
            <div class="row justify-content-center">
            <VForm ref="form" class="col"
            v-slot="{ errors }" @submit="sendOutOrder">
              <h4 class="fw-bold text-center mb-5">填寫訂單</h4>
              <div class="mb-4">
                <label for="name" class="form-label fs-7">姓名
                  <span class="text-danger">*</span>
                </label>
                <VField id="name" name="姓名" type="text" class="form-control form-control-sm
                rounded-0"
                    :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required"
                    v-model="form.user.name"></VField>
                <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-4">
                <label for="tel" class="form-label fs-7">聯絡電話
                  <span class="text-danger">*</span>
                </label>
                <VField id="tel" name="電話" type="text" class="form-control form-control-sm
                rounded-0"
                    :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話，ex:092345532"
                    rules="required|min:9|max:10" v-model="form.user.tel"></VField>
                <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-4">
                  <label for="email" class="form-label fs-7">Email
                    <span class="text-danger">*</span>
                  </label>
                  <VField id="email" name="email" type="email" class="form-control form-control-sm
                  rounded-0"
                      :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email"
                      rules="email|required"
                      v-model="form.user.email"></VField>
                  <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-4">
                <label for="address" class="form-label fs-7">收件地址
                  <span class="text-danger">*</span>
                </label>
                <VField id="address" name="地址" type="text" class="form-control form-control-sm
                rounded-0"
                    :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" rules="required"
                    v-model="form.user.address"></VField>
                <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-4">
                <label for="message" class="form-label fs-7">留言</label>
                <textarea id="message" class="form-control form-control-sm rounded-0"
                style="height: 100px"
                v-model="form.message"></textarea>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-dark py-3 px-3
                  rounded-0">送出訂單</button>
                </div>
            </VForm>
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
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
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
    sendOutOrder() {
      if (this.cart.carts.length === 0) {
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: '你的購物車是空的，無法送出訂單',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        const order = this.form;
        axios.post(`${VITE_URL}/api/${VITE_PATH}/order`, { data: order })
          .then((res) => {
            this.$refs.form.resetForm();
            this.$router.push(`userOut/${res.data.orderId}`);
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              icon: 'success',
              title: '訂單已送出',
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
      }
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style>
.img {
  width: 48px;
  height: 48px;
  object-fit: cover;
}
.form-control:focus {
        border-color: #939799 ;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) ;
};
</style>
