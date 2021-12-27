<template>
  <main class="search-page">
    <div class="container">
      <div class="text-center mt-2 mb-4">
        <h2>Search result for</h2>
        <h3>"{{ $route.query.q }}"</h3>
      </div>
      <div class="grid-movie">
        <div v-for="result in results" :key="result.id" class="movie">
          <NuxtLink :to="{name: `${result.media_type}-id`, params: {id: result.id}}" class="link">
            <Card :show="result" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <Pagination :page="page" />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.$route.query.q}`,
      titleTemplate: '%s - Movie & Series Search'
    }
  },
  data() {
    return {
      results: [],
      page: {}
    }
  },
  watchQuery: true,
  async asyncData({ $axios, route }) {
    try {
      let { q, page } = route.query
      const response = await $axios.$get(`/search/multi?api_key=${process.env.apiKey}&language=en-US&query=${q}&page=${page}&include_adult=false`)
      return { 
        results: response.results.filter(result => result.media_type !== 'person' && result.poster_path !== null), 
        page: response
      }
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

<style lang="scss" scoped>
.search-page {
  padding-top: 95px;
}

.grid-movie {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  justify-content: center;
  column-gap: 17px;
  row-gap: 25px;
}

div h3 {
  color: $color-secondary;
}

.link {
  color: $color-primary;
  text-decoration: none;
}

@media (max-width: $lg) {
  .search-page {
    padding-top: 10px;
  }
}

@media (max-width: $xs) {
  .grid-movie {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>