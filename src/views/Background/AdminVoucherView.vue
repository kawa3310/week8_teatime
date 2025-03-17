<template>
  <VueLoading :active="isloading" :z-index="1060"/>
  <div class="container px-6">
    <div class="text-end mt-4">
      <a href="#">
        <i class="btn bi bi-plus-square plus-add-btn" @click="openModel('new')"></i>
      </a>
    </div>
    <table class="table">
      <caption class="fs-4 my-4">管理產品</caption>
      <thead>
        <tr>
          <th width="120">名稱</th>
          <th width="120">折扣百分比</th>
          <th width="120">到期日</th>
          <th width="120">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="item in voucher" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ $filter.date(item.due_date) }}</td>
            <td>
                <span class="text-success" v-if="item.is_enabled === 1">啟用</span>
                <span v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm"
              @click="openModel('edit', item)">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm"
              @click="openModel('dele', item)">
                刪除
              </button>
              </div>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
  <PaginationModal :pages="pages" @emit-Pages="getVoucherData" />

  <VoucherModal :is-New="isNew" :temp-Voucher="tempVoucher"
  @edit-Voucher="editVoucher" ref="voucher" />

  <DelProductModal @del-item="delProduct" :temp-Voucher="tempVoucher"
  ref="deModal" />
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import VoucherModal from '@/components/VoucherModal.vue';
import DelProductModal from '@/components/DelProductModal.vue';
import PaginationModal from '@/components/PaginationModal.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      voucher: {},
      tempVoucher: this.resetVoucher(), // 初始化資料
      isNew: false,
      pages: {},
      isloading: false,
    };
  },
  methods: {
    getVoucherData() {
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/coupons`)
        .then((res) => {
          this.isloading = false;
          this.voucher = res.data.coupons;
          this.pages = res.data.pagination;
        })
        .catch((err) => {
          this.isloading = false;
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            title: err.response.data.message,
          });
        });
    },
    resetVoucher() {
      return {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
        due_date: new Date().getTime() / 1000,
      };
    },
    openModel(isNew, item) {
      if (isNew === 'new') {
        this.isNew = true;
        this.tempVoucher = this.resetVoucher(); // 重置資料
        this.$refs.voucher.modelOpen();
      } else if (isNew === 'edit') {
        this.isNew = false;
        this.tempVoucher = { ...item }; // 寫入資料
        this.$refs.voucher.modelOpen();
      } else if (isNew === 'dele') {
        this.tempVoucher = { ...item };
        this.$refs.deModal.modelOpen();
      }
    },
    editVoucher() {
      let url = `${VITE_URL}/api/${VITE_PATH}/admin/coupon`;
      let http = 'post';

      if (!this.isNew) {
        this.isloading = true;
        url = `${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempVoucher.id}`;
        http = 'put';
      }
      this.isloading = true;
      axios[http](url, { data: this.tempVoucher })
        .then(() => {
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '編輯成功',
          });
          this.isloading = false;
          this.$refs.voucher.modalClose();
          this.getVoucherData();
        })
        .catch((err) => {
          this.isloading = false;
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
    delProduct() {
      this.isloading = true;
      axios.delete(`${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempVoucher.id}`)
        .then(() => {
          this.isloading = false;
          this.$refs.deModal.modalClose();
          this.getVoucherData();
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '已刪除',
          });
        })
        .catch((err) => {
          this.isloading = false;
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
  },
  mounted() {
    this.getVoucherData();
  },
  components: {
    VoucherModal,
    DelProductModal,
    PaginationModal,
  },
};
</script>
