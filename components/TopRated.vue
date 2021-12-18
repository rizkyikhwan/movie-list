<template>
  <section class="top-rated">
    <div class="d-flex justify-content-between align-items-end">
      <h4 class="title mt-2 mb-1 mb-md-2">Top Rated</h4>
      <NuxtLink to="/" class="link mb-1 mb-md-2"> View All </NuxtLink>
    </div>
    <div class="grid-latest">
      <div v-for="mov_last in latest" :key="mov_last.id">
        <NuxtLink :to="{name: 'movies-id', params: {id : mov_last.id}}">
          <CardTopRated :mov_last="mov_last" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      latest: [],
    }
  },
  async fetch() {
    await this.getLatest()
  },
  methods: {
    async getLatest() {
      const data = await this.$axios.$get(
        `/movie/top_rated?api_key=${process.env.apiKey}&language=en-US`
      )
      this.latest = data.results.slice(0, 2)
    },
  },
}
</script>

<style lang="scss" scoped>
.grid-latest {
  display: grid;
  grid-template-columns: 1fr;
  gap: 17.5px;
}

.link {
  color: $color-primary;
  text-decoration: underline;
  font-size: 16px;
}

@media (max-width: $lg) {
  .grid-latest {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: $sm) {
  .title {
    font-size: 1.25rem;
  }
}

@media (max-width: $xs) {
  .grid-latest {
    grid-template-columns: 1fr;
  }
}
</style>