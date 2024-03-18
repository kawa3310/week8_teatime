<template>
  <adminNavbarComponents></adminNavbarComponents>
  <RouterView></RouterView>

</template>

<script>
import adminNavbarComponents from '@/components/adminNavbarComponents.vue';

export default {
  components: {
    adminNavbarComponents,
  },
};
</script>
<style>
@import '@/assets/css/btnStyle.scss';
</style>
