<template>
  <section class="bg-img border">
    <div class="container">
      <div class="row justify-content-center my-5">
        <div class="col-5 bg-white rounded-3 mt-5 pt-2 pb-5 px-5">
          <h3 class="py-5 text-center font-weight-normal">
          後台登入
          </h3>
          <form id="form" class="form-signin" @submit.prevent="login">
            <div class="form-floating mb-3">
              <input v-model="user.username" type="email" class="form-control rounded-0"
              id="username" placeholder="name@example.com"
                required autofocus>
              <label for="username">信箱</label>
            </div>
            <div class="form-floating">
              <input v-model="user.password" type="password" class="form-control rounded-0"
              id="password" placeholder="Password"
                required>
              <label for="password">密碼</label>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <button class="btn btn-lg btn-outline-secondary mt-3 px-5 rounded-0" type="submit">
              登入
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL } = import.meta.env;
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      axios.post(`${VITE_URL}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `kawaToken=${token}; expires = ${new Date(expired)}; path=/`;
          this.$router.push('admin/products');
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
  .bg-img {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://github.com/kawa3310/week8_teatime/blob/main/public/admin-login/23206877_m.jpg?raw=true') no-repeat center center;
    background-size: cover;
    filter: blur(1px);
    z-index: -1;
  }
}

</style>
