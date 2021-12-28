<template>
  <div v-if="!page.total_pages <= 500 && page.total_pages != ''" class="d-flex justify-content-center align-items-center my-5">
    <div class="page-guides" v-if="page.total_pages != 1">
      <div>
        <NuxtLink
          v-if="$route.query.page != 1 && $route.query.page"
          :to="{ path: this.$route.fullPath, query: { page: 1 } }"
          >First Page</NuxtLink
        >
        <span v-else class="disabled">First Page</span>
      </div>
      <div>
        <NuxtLink
          v-if="
            this.$route.query.page > 1
              ? parseInt(this.$route.query.page) - 1
              : null != null
          "
          :to="{
            path: this.$route.fullPath,
            query: {
              page:
                this.$route.query.page > 1
                  ? parseInt(this.$route.query.page) - 1
                  : null,
            },
          }"
          >Prev</NuxtLink
        >
        <span v-else class="disabled">Prev</span>
      </div>
      <span>{{ page.page }}</span>
      <div>
        <NuxtLink
          v-if="
            parseInt(this.$route.query.page) + 1 != null &&
            $route.query.page != pageLimit(page.total_pages)
          "
          :to="{
            path: this.$route.fullPath,
            query: { page: parseInt(this.$route.query.page) + 1 },
          }"
          >Next</NuxtLink
        >
        <span v-else class="disabled">Next</span>
      </div>
      <div>
        <NuxtLink
          v-if="$route.query.page != pageLimit(page.total_pages)"
          :to="{
            path: this.$route.fullPath,
            query: { page: pageLimit(page.total_pages) },
          }"
          >Last Page</NuxtLink
        >
        <span v-else class="disabled">Last Page</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['page'],
  methods: {
    pageLimit(value) {
      if (this.page.total_pages > 500) {
        return (value = 500)
      } else {
        return this.page.total_pages
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.page-guides {
  display: flex;
  gap: 12px;
  font-size: 2vh;

  a {
    color: $color-primary;
    padding: 5px 10px;
    border-radius: $rounded;
    background: $bg-card;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);

    &:hover {
      text-decoration: none;
    }
  }

  .disabled {
    opacity: .5;
    padding: 5px 10px;
    border-radius: $rounded;
    background: $bg-card;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  }
}

@media (max-width: 320px) {
  .page-guides {
    font-size: 1.5vh;
  }
}
</style>