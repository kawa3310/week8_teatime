<template>
  <div id="orderModal" ref="orderModal" class="modal fade" tabindex="-1"
  aria-labelledby="orderModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content border-0">
          <div class="modal-header">
            <h5 id="orderModalLabel" class="modal-title">
              <span>訂單細節</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md">
                <h3 class="py-3">訂單資料</h3>
                <table class="table">
                  <tbody v-if="emitOrder.user">
                    <tr>
                      <th style="width: 100px">訂單編號</th>
                      <td>{{  emitOrder.id }}</td>
                    </tr>
                    <tr>
                      <th>訂單時間</th>
                      <td>{{ $filter.date(emitOrder.create_at) }}</td>
                    </tr>
                    <tr>
                      <th style="width: 100px">收件人</th>
                      <td>{{  emitOrder.user.name }}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{{ emitOrder.user.email }}</td>
                    </tr>
                    <tr>
                      <th>聯絡電話</th>
                      <td>{{ emitOrder.user.tel }}</td>
                    </tr>
                    <tr>
                      <th>收件地址</th>
                      <td>{{ emitOrder.user.address }}</td>
                    </tr>
                    <tr>
                      <th>備注</th>
                      <td>{{ emitOrder.message || '無' }}</td>
                    </tr>
                    <tr>
                      <th>付款狀態</th>
                        <td>
                          <span v-if="emitOrder.paid_date">已付款</span>
                          <span v-else>尚未付款</span>
                        </td>
                    </tr>
                    <tr>
                      <th>總金額</th>
                      <td>${{ emitOrder.total }}</td>
                    </tr>
                  </tbody>
                </table>
                <h3 class="py-3">選購商品</h3>
                <table class="table">
                  <thead>
                    <th>品名</th>
                    <th>數量</th>
                    <th>價格</th>
                  </thead>
                  <tbody>
                    <tr v-for="order in emitOrder.products" :key="order.id">
                      <td>{{  order.product.title }}</td>
                      <td>{{ order.qty }} / {{ order.product.unit }}</td>
                      <td>{{ $filter.currency(order.final_total) }}</td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex justify-content-end">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                      v-model="emitOrder.is_paid" />
                    <label class="form-check-label" for="flexCheckDefault">
                      <span v-if="emitOrder.is_paid">已付款</span>
                      <span v-else>未付款</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary"
            @click="$emit('addOrderStates', emitOrder)">
              修改狀態
            </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      orderModal: null,
      emitOrder: {},
      is_paid: false,
    };
  },
  props: ['tempOrder', 'isNew', 'addOrderStates'],
  emits: ['addOrderStates'],
  methods: {
    modelOpen() {
      this.orderModal.show();
    },
    modalClose() {
      this.orderModal.hide();
    },
  },
  mounted() {
    this.orderModal = new Modal(this.$refs.orderModal);
    this.emitOrder = this.tempOrder;
  },
  watch: {
    tempOrder() {
      this.emitOrder = this.tempOrder;
    },
  },
};
</script>
