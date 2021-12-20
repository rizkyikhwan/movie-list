<template>
  <section class="top-rated">
    <h4 class="title mt-2 mb-1 mb-md-2">Discover</h4>
    <div class="grid-latest">
      <div v-for="discover in discovers" :key="discover.id">
        <NuxtLink :to="{name: 'movies-id', params: {id : discover.id}}">
          <CardDiscover :discover="discover" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      discovers: [],
    }
  },
  async fetch() {
    await this.getDiscover()
  },
  methods: {
    async getDiscover() {
      const data = await this.$axios.$get(
        `/discover/movie?api_key=${process.env.apiKey}&language=en-US&with_genres=878&with_cast=500&sort_by=vote_average.desc`
      )
      this.discovers = data.results.slice(0, 2)
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

@media (max-width: $sm) {
  .grid-latest {
    grid-template-columns: 1fr;
  }
}
</style>