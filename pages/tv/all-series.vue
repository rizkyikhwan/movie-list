<template>
  <main class="all-tv-series container">
    <div class="mb-4">
      <h1 class="title">All TV Series</h1>
      <select v-model="based_on" @change="based" class="form-control">
        <option value="popular">Popular</option>
        <option value="on_the_air">On the Air</option>
        <option value="top_rated">Top Rated</option>
      </select>
    </div>
    <div class="grid-tv">
      <div v-for="tv in tv_series" :key="tv.id" class="tv">
        <NuxtLink :to="{name: 'tv-id', params: {id: tv.id}}" class="link">
          <Card :show="tv" />
        </NuxtLink>
      </div>
    </div>
    <Pagination :page="page" />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'All TV Series - See all available series'
    }
  },
  data() {
    return {
      based_on: this.$route.query.based
    }
  },
  watchQuery: true,
  async asyncData({ $axios, route }) {
    let { based, page } = route.query
    const response = await $axios.$get(`/tv/${based}?api_key=${process.env.apiKey}&language=en-US&page=${page}`)
    return {
      tv_series: response.results.filter(series => series.poster_path !== null),
      page: response
    }
  },
  methods: {
    based() {
      this.$router.push({
        path: this.$route.path,
        query: { based: this.based_on, page: 1}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.all-tv-series {
  padding-top: 95px;
}

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

@media (max-width: $md) {
  .all-tv-series {
    padding-top: 10px;
  }
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