<template>
  <VueLoading :active="isloading" :z-index="1060"></VueLoading>
  <div class="pb-5">
    <div class="container">
      <div class="row justify-content-center flex-md-row">
        <div class="col-md-7">
          <h2 class="order-color text-center my-5">訂單已成立</h2>
          <div class="border p-4 shadow-sm p-3 mb-5 bg-body rounded">
            <h4 class="mb-4 fw-bold text-center my-5">您的訂單編號</h4>
            <p class="fs-8 text-center text-danger">{{ order?.id }}</p>
            <div class="d-flex">
              <div class="w-100 px-4">
                <table class="table table-borderless custom-cart-table my-5">
                  <tbody>
                    <tr>
                      <th class="fs-8 px-md-3 border"
                      width="30%">姓名</th>
                      <td class="fs-8 px-md-3 border"
                      width="70%">{{ order?.user?.name }}</td>
                    </tr>
                    <tr>
                      <th class="fs-8 px-md-3 border"
                      width="30%">聯絡電話</th>
                      <td class="fs-8 px-md-3 border"
                      width="70%">{{ order?.user?.tel }}</td>
                    </tr>
                    <tr>
                      <th class="fs-8 px-md-3 border"
                      width="30%">Email</th>
                      <td class="fs-8 px-md-3 border"
                      width="70%">{{ order?.user?.email }}</td>
                    </tr>
                    <tr>
                      <th class="fs-8 px-md-3 border"
                      width="30%">收件地址</th>
                      <td class="fs-8 px-md-3 border"
                      width="70%">{{ order?.user?.address  }}</td>
                    </tr>
                  </tbody>
                </table>
                <h4 class="mb-4 fw-bold text-center">商品資訊</h4>
                <table class="table table-borderless custom-cart-table mt-5 border">
                  <thead>
                    <tr>
                      <th class="px-2 px-md-3 border text-center"
                      width="40%">商品名稱
                      </th>
                      <th class="px-2 px-md-3 border text-center"
                      width="20%">數量
                      </th>
                      <th class="px-2 px-md-3 border text-center"
                      width="30%">金額
                      </th>
                    </tr>
                  </thead>
                  <tbody v-for="item in order?.products" :key="item.id">
                    <tr>
                      <td class="px-2 px-md-3 border text-center"
                      width="40%">{{ item?.product?.title }}</td>
                      <td class="px-2 px-md-3 border text-center" width="20%">{{ item?.qty }}</td>
                      <td class="px-2 px-md-3 border text-center" width="30%">{{ item?.total }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-4 ps-2">
              <p class="mb-0 h5 mb-3 text-end">總金額: NT${{ order?.total }}</p>
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
      orderId: '',
      order: {},
      isloading: false,
    };
  },
  methods: {
    getOrder() {
      this.orderId = this.$route.params.id;
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/order/${this.orderId}`)
        .then((res) => {
          this.isloading = false;
          this.order = res.data.order;
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
    this.getOrder();
  },
};
</script>

<style>
.order-color{
  color: #488593;
}
</style>
