<template>
  <section class="all-movies mb-5">
    <div class="mb-5">
    <h1 class="title">All Movies</h1>
    <div class="d-flex justify-content-between align-items-end">
      <select v-model="based_on" @change="$fetch" class="form-control">
        <option value="popular">Popular</option>
        <option value="upcoming">Upcoming</option>
        <option value="top_rated">Top Rated</option>
      </select>
      <NuxtLink to="/" class="route">View All</NuxtLink>
    </div>
    </div>
    <div class="grid-movie">
      <div v-for="movie in movies" :key="movie.id" class="movie">
        <NuxtLink :to="{name: 'movies-id', params: {id: movie.id}}" class="link">
          <CardMovie :movie="movie" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      based_on: 'popular'
    }
  },
  async fetch() {
    await this.getMovies()
  },
  methods: {
    async getMovies() {
      const response = await this.$axios.$get(`/movie/${this.based_on}?api_key=${process.env.apiKey}&language=en-US&page=1`)
      this.movies = response.results
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
  background-color: $bg-card;
  color: $color-primary;
  border: 1px solid $bg-card;
  border-radius: $rounded;

  &:focus {
    box-shadow: none;
  }
}

.grid-movie {
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
  .grid-movie {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>