<template>
  <adminNavbarComponents/>
  <RouterView v-if="checkSuccess"></RouterView>

</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import adminNavbarComponents from '@/components/AdminNavbarComponents.vue';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    cheakLongin() {
      axios.post(`${VITE_URL}/api/user/check`)
        .then(() => {
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '已登入',
          });
          this.checkSuccess = true;
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
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)kawaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    this.cheakLongin();
  },
  components: {
    adminNavbarComponents,
  },
};
</script>
<style>
@import '@/assets/css/btnStyle.scss';
</style>
