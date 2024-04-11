<template>
  <VueLoading :active="isloading" :z-index="1060"/>
  <div class="container px-6">
    <div class="text-end mt-4">
      <button type="button"
      class="btn btn-outline-secondary" @click="openModel('new')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120" class="text-center">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm"
              @click="openModel('edit', item)">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm"
              @click="openModel('delet', item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁 -->
    <PaginationModal :pages="pages" @emit-Pages="getData"></PaginationModal>

    <!-- 新增編輯分頁 -->
    <ProductModal :temp-products="tempProducts" :add-product="addProduct" :is-new="isNew"
    :add-img="addImg" ref="pduct">
    </ProductModal>

    <!-- 刪除分頁 -->
    <DelProductModal :temp-products="tempProducts" @del-item="delProduct" ref="deModal">
    </DelProductModal>
  </div>
</template>

<script>
import axios from 'axios';
import 'bootstrap/scss/bootstrap.scss';
import Swal from 'sweetalert2';
import PaginationModal from '@/components/PaginationModal.vue';
import ProductModal from '@/components/ProductModal.vue';
import DelProductModal from '@/components/DelProductModal.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      prodModal: null,
      delModal: null,
      products: [],
      pages: {},
      isNew: false,
      isloading: false,
      tempProducts: {
        imagesUrl: [],
      },
    };
  },
  methods: {
    getData(page = 1) {
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/products?page=${page}`)
        .then((res) => {
          this.isloading = false;
          this.products = res.data.products;
          this.pages = res.data.pagination;
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
    openModel(states, item) {
      if (states === 'new') {
        this.tempProducts = {
          imagesUrl: [],
        };
        this.isNew = true;
        this.$refs.pduct.modelOpen();
      } else if (states === 'edit') {
        this.isNew = false;
        this.tempProducts = { ...item };
        this.$refs.pduct.modelOpen();
      } else if (states === 'delet') {
        this.tempProducts = { ...item };
        this.$refs.deModal.modelOpen();
      }
    },
    delProduct() {
      this.isloading = true;
      axios.delete(`${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProducts.id}`)
        .then(() => {
          this.isloading = false;
          this.$refs.deModal.modalClose();
          this.getData();
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
    addProduct() {
      let url = `${VITE_URL}/api/${VITE_PATH}/admin/product`;
      let http = 'post';
      if (!this.isNew) {
        url = `${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProducts.id}`;
        http = 'put';
      }
      this.isloading = true;
      axios[http](url, { data: this.tempProducts })
        .then(() => {
          this.isloading = false;
          this.$refs.pduct.modalClose();
          this.getData();
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '編輯成功',
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
    addImg() {
      this.tempProducts.imagesUrl = [];
      this.tempProducts.imagesUrl.push('');
    },
  },
  mounted() {
    this.getData();
  },
  components: {
    PaginationModal,
    ProductModal,
    DelProductModal,
  },
};
</script>
