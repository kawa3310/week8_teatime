<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-sm-1 px-md-2">
    <div class="container-fluid">
      <h4 class="m-0">
        <RouterLink class="router-link nav-link active navbar-brand"
        to="/">TeaTime</RouterLink>
      </h4>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarToggleExternalContent"
      aria-controls="navbarToggleExternalContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex justify-content-end"
      id="navbarToggleExternalContent">
        <div class="navbar-body my-2">
          <ul class="navbar-nav text-center text-nowrap">
            <li class="nav-item me-3">
              <RouterLink class="nav-link" to="/about">關於本店
              </RouterLink>
            </li>
            <li class="nav-item me-3">
              <RouterLink class="nav-link" to="/merchandise">尋找甜點</RouterLink>
            </li>
            <li class="nav-item-icon me-3 position-relative">
              <RouterLink class="nav-link py-1" :to="`/cart`">
                <i class="bi bi-cart-fill">
                  <span class="nav-icon badge rounded-pill fw-normal translate-middle bg-danger">
                    {{ this.cart.length }}
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </i>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cartStore';

export default {
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
  },
  mounted() {
    this.getCart();
  },
};
</script>
<style>
.nav-link {
  font-weight: 500;
  position: relative;
  color: #A98B73;
  &:hover {
    color: #9A6852  !important;
  }
  &.router-link-exact-active {
    color: #876D5A  !important;
  }
}
.nav-icon {
  font-size: 10px;
}
</style>
