<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-sm-1 px-md-2">
    <div class="container-fluid">
      <h4 class="m-0">後台管理</h4>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-body my-2">
        <ul class="navbar-nav text-center text-nowrap">
          <li class="nav-item me-3">
            <RouterLink class="nav-link" :to="`/admin/products`">產品區
            </RouterLink>
          </li>
          <li class="nav-item me-3">
            <RouterLink class="nav-link" :to="`/admin/order`">查看訂單</RouterLink>
          </li>
          <li class="nav-item-icon me-3 position-relative">
            <RouterLink class="nav-link" :to="`/admin/voucher`">優惠卷</RouterLink>
          </li>
          <li class="nav-item-icon me-3 position-relative">
            <a href="#" class="btn nav-link" @click.prevent="loginOut">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import 'bootstrap/scss/bootstrap.scss';
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL } = import.meta.env;
export default {
  methods: {
    loginOut() {
      axios.post(`${VITE_URL}/logout`)
        .then(() => {
          document.cookie = 'kawaToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;';
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '已登出',
          });
          this.$router.push('/user/home');
        })
        .catch((err) => {
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
};
</script>

<style>
h4  {
color: white;
}
.nav-link {
  font-weight: 500;
  position: relative;
  color: #ACA8A7;
  &:hover {
    color: #D0D0D0  !important;
  }
  &.router-link-exact-active {
    color: #D0D0D0  !important;
  }
}
</style>
