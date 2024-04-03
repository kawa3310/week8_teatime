<template>
  <div class="pb-5">
    <div class="container">
      <div class="row justify-content-center flex-md-row">
        <div class="col-md-7">
          <h2 class="order-color text-center my-5">您的訂單已付款
            <i class="bi bi-cart-check"></i>
          </h2>
          <div class="d-flex justify-content-center">
            <RouterLink :to="`/home`" class="btn btn-outline-secondary rounded-0">
              <i class="bi bi-caret-left"></i> 回首頁
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
