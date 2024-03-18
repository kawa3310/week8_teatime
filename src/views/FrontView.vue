<template>
  <NavbarComponents></NavbarComponents>
  <RouterView></RouterView>
  <div class="footer bg-dark">
      <div class="container">
      <div class="d-flex align-items-center justify-content-center text-white py-5">
        <ul class="d-flex list-unstyled h4 pe-3">
          <li><i class="bi bi-github"></i></li>
        </ul>
        <p class="mb-0">僅供個人練習使用，非商業用途</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponents from '@/components/NavbarComponents.vue';

export default {
  components: {
    NavbarComponents,
  },
};
</script>
