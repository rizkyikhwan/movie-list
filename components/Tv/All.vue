<template>
  <section class="all-tv-series mb-5">
    <div class="mb-4">
      <h1 class="title">All TV Sereis</h1>
      <div class="d-flex justify-content-between align-items-end">
        <select v-model="based_on" @change="$fetch" class="form-control">
          <option value="popular">Popular</option>
          <option value="on_the_air">On the Air</option>
          <option value="top_rated">Top Rated</option>
        </select>
        <NuxtLink to="/" class="route">View All</NuxtLink>
      </div>
    </div>
    <div class="grid-tv">
      <div v-for="tv in tv_series" :key="tv.id" class="tv">
        <NuxtLink :to="{name: 'tv-id', params: {id: tv.id}}" class="link">
          <Card :show="tv" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tv_series: [],
      based_on: 'popular'
    }
  },
  async fetch() {
    await this.getTvSeries()
  },
  methods: {
    async getTvSeries() {
      const response = await this.$axios.$get(`/tv/${this.based_on}?api_key=${process.env.apiKey}&language=en-US&page=1`)
      this.tv_series = response.results
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.75rem;
}

.form-control {
  max-width: 200px;
  background-color: $bg-select;
  color: $color-primary;
  border: 1px solid $bg-select;
  border-radius: $rounded;

  &:focus {
    box-shadow: none;
  }
}

.grid-tv {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  justify-content: center;
  column-gap: 17px;
  row-gap: 25px;
}

.link {
  color: $color-primary;
  text-decoration: none;
}

@media (max-width: $sm) {
  .title {
    font-size: 1.25rem;
  }
}

@media (max-width: $xs) {
  .grid-tv {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>