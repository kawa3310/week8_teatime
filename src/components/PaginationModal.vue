<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination pagination-sm justify-content-center">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a class="page-link rounded-0" aria-label="Previous"
        @click.prevent="updatePage(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li class="page-item" :class="{
        active: page === pages.current_page
      }" v-for="page in pages.total_pages" :key="page + 123">
        <a class="page-link rounded-0" @click.prevent="updatePage(page)">{{ page }}</a>
      </li>

      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a class="page-link rounded-0"
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
