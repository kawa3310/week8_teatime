<template>
  <div class="container">
    <div class="row justify-content-center my-5">
      <div class="col-5">
        <h1 class="h3 my-4 text-center font-weight-normal">
        登入
        </h1>
        <form id="form" class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input v-model="user.username" type="email" class="form-control rounded-0"
            id="username" placeholder="name@example.com"
              required autofocus>
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input v-model="user.password" type="password" class="form-control rounded-0"
            id="password" placeholder="Password"
              required>
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-secondary w-100 mt-3 mb-4 rounded-0" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
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
    cheakLongin() {
      axios.post(`${VITE_URL}/api/user/check`)
        .then(() => {
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
          this.$router.push('/');
        });
    },
  },
  mounted() {
    this.cheakLongin();
  },
};
</script>

<style scoped></style>
