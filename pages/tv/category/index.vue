<template>
  <main class="browse-by-category container">
    <div class="mb-4">
      <h1 class="title">Browse Series By Category</h1>
      <select v-model="category" @change="genre" class="form-control">
        <option
          v-for="category in categorys"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>
    <div class="grid-series">
      <div v-for="tv in tv_series" :key="tv.id" class="tv">
        <NuxtLink :to="{ name: 'tv-id', params: { id: tv.id } }" class="link">
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
      title: 'Browse by Category - TV Series Category',
    }
  },
  data() {
    return {
      tv_series: [],
      page: {},
      categorys: [],
      category: this.$route.query.genre,
    }
  },
  watchQuery: true,
  async asyncData({ $axios, route }) {
    let { genre, page } = route.query
    const category = await $axios.$get(
      `/genre/tv/list?api_key=${process.env.apiKey}&language=en-US`,
      { progress: false }
    )
    const series = await $axios.$get(
      `/discover/tv?api_key=${process.env.apiKey}&language=en-US&with_genres=${genre}&page=${page}`
    )
    return {
      categorys: category.genres.filter(
        (genre) =>
          genre.name !== 'Reality' &&
          genre.name !== 'Soap' &&
          genre.name !== 'Talk' &&
          genre.name !== 'News'
      ),
      tv_series: series.results.filter((series) => series.poster_path !== null),
      page: series,
    }
  },
  methods: {
    genre() {
      this.$router.push({
        path: this.$route.path,
        query: { genre: this.category, page: 1 },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.browse-by-category {
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
  padding: 0.375rem 0.5rem;

  &:focus {
    box-shadow: none;
  }
}

.grid-series {
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
  .browse-by-category {
    padding-top: 10px;
  }
}

@media (max-width: $sm) {
  .title {
    font-size: 1.25rem;
  }
}

@media (max-width: $xs) {
  .grid-series {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>