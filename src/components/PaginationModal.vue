<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a class="page-link" v-if="pages.has_pre" aria-label="Previous"
        @click.prevent="updatePage(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li class="page-item" :class="{
        active: page === pages.current_page
      }" v-for="page in pages.total_pages" :key="page + 123">
        <a class="page-link" @click.prevent="updatePage(page)">{{ page }}</a>
      </li>

      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a class="page-link" v-if="!pages.has_pre"
        aria-label="Next" @click.prevent="updatePage(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  props: ['pages'],
  methods: {
    updatePage(page) {
      this.$emit('emitPages', page);
    },
  },
};
</script>

<style>
  .page-link {
    border: 0px;
    color: rgb(151, 149, 149);
    &:hover, &:focus {
      color: black;
      background-color: #fff;
    }
  }

  .page-item.active .page-link {
    background-color: #454444;
    border-color: #454444;
    color: white;
  }
</style>
