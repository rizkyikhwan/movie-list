<template>
  <section class="on-the-air">
    <div class="d-flex justify-content-between align-items-end">
      <h4 class="title mt-2 mb-1 mb-md-2">Popular TV Series</h4>
      <NuxtLink to="/" class="link mb-1 mb-md-2"> View All </NuxtLink>
    </div>
    <div class="grid-series">
      <div v-for="serie in series" :key="serie.id">
        <CardPopularSeries :serie="serie" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      series: [],
    }
  },
  async fetch() {
    await this.getSeries()
  },
  methods: {
    async getSeries() {
      const data = await this.$axios.$get(
        `/tv/popular?api_key=${process.env.apiKey}&language=en-US&page=1`
      )
      this.series = data.results.slice(0, 2)
    },
  },
}
</script>

<style lang="scss" scoped>
.grid-series {
  display: grid;
  grid-template-columns: 1fr;
  gap: 17px;
}

.link {
  color: $color-primary;
  text-decoration: underline;
  font-size: 16px;
}

@media (max-width: $sm) {
  .title {
    font-size: 1.25rem;
  }
}
</style>