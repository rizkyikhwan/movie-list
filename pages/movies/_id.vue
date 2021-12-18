<template>
  <main class="movie-detail">
    <p v-if="$fetchState.pending">Loading...</p>
    <div v-else>
      <header class="backdrop">
        <img :src="`${$config.backdrop}/${movie.backdrop_path}`" :alt="movie.title">
      </header>
      <div class="container section-info">
        <MovieInfo :movie="movie" />
        <MovieInfoDetail :movie="movie" :crews="crews" :actors="actors" />
        <!-- <div class="wrap-trailer">
          <iframe
            :src="`https://www.youtube-nocookie.com/embed/${trailer.key}?version=3&enablejsapi=1`"
            frameBorder="0"
            allowFullScreen
            class="container-fluid"
            width="560" height="315"
            />
        </div> -->
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'detail',
  data() {
    return {
      movie: {},
      trailer: {},
      crews: [],
      actors: []
    }
  },
  async fetch() {
    await this.getMovie()

    await this.getTrailer()

    await this.getCrew()
  },
  methods: {
    async getMovie() {
      const data = await this.$axios.$get(`/movie/${this.$route.params.id}?api_key=${process.env.apiKey}&language=en-US`)
      this.movie = data
    },
    async getTrailer() {
      const data = await this.$axios.$get(`/movie/${this.$route.params.id}/videos?api_key=${process.env.apiKey}`)
      this.trailer = data.results.find(trailer => trailer.type === 'Trailer')
    },
    async getCrew() {
      const data = await this.$axios.$get(`/movie/${this.$route.params.id}/credits?api_key=${process.env.apiKey}&language=en-US`)
      this.crews = data.crew.filter(crew => crew.job == "Director" || crew.job == "Story" || crew.job == "Creator" || crew.job == "Writer")
      this.actors = data.cast
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-detail {
  min-height: 100vh;

  .backdrop {
    position: relative;
    transform: translateY(-10%);

    &::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: -1px;
      left: 0;
      background-image: linear-gradient(transparent, $bg);
    }

    img {
      width: 100%;
      height: 800px;
      object-fit: cover;
      object-position: initial;
    }
  }

  .section-info {
    transform: translateY(-150px);
  }
}


@media (max-width: $sm) {
  .movie-detail .backdrop img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
}
</style>