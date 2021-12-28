<template>
  <main class="tv-series-detail">
    <header class="backdrop">
      <img
        v-if="tv.backdrop_path"
        :src="`${$config.backdrop}/${tv.backdrop_path}`"
        :alt="tv.name"
      />
      <img v-else src="/profile/backdrop-not-avail.png" alt="" />
    </header>
    <div class="container section-info">
      <TvInfo :tv="tv" @trailer="toggleTrailer" />
      <TvInfoDetail :tv="tv" :crews="crews" :actors="actors" />
      <TvLastEpisode :tv="tv" />
      <TvRecommend :recommended="recommend" />
    </div>
    <div class="overlay" :class="isOpen ? 'active' : ''" @click="toggleTrailer">
      <Trailer :trailer="trailer" />
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.tv.name
    }
  },
  data() {
    return {
      isOpen: null,
    }
  },
  async asyncData({ $axios, route, redirect }) {
    try {
      const { id } = route.params
      const tv = await $axios.$get(
        `/tv/${id}?api_key=${process.env.apiKey}&language=en-US`, { progress: false }
      )
      const crews = await $axios.$get(
        `/tv/${id}/credits?api_key=${process.env.apiKey}&language=en-US`, { progress: false }
      )
      const recommend = await $axios.$get(
        `/tv/${id}/recommendations?api_key=${process.env.apiKey}&language=en-US&page=1`, { progress: false }
      )
      const trailer = await $axios.$get(
        `/tv/${id}/videos?api_key=${process.env.apiKey}`, { progress: false }
      )
      return {
        tv: tv,
        crews: crews.crew.filter(
            (crew) =>
              crew.job == 'Executive Producer' ||
              crew.job == 'Creator' ||
              crew.job == 'Producer' ||
              crew.job == 'Director'
          )
          .slice(0, 4),
        actors: crews.cast,
        recommend: recommend.results.filter(recom => recom.poster_path !== null),
        trailer:
          trailer.results.find((trailer) => trailer.type === 'Trailer') || '',
      }
    } catch (error) {
      redirect('/error')
    }
  },
  methods: {
    toggleTrailer() {
      this.isOpen = !this.isOpen
      const trailer = document.querySelector('.trailer')
      trailer.contentWindow.postMessage('{"event":"command", "func":"stopVideo", "args":""}','*')
    },
  },
}
</script>

<style lang="scss" scoped>
.backdrop {
  position: relative;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: -1px;
    left: 0;
    background: linear-gradient(to top, $bg, transparent);
  }

  img {
    width: 100%;
    height: 800px;
    object-fit: cover;
    object-position: initial;
  }
}

.section-info {
  transform: translateY(-125px);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 999;
  display: none;
}

.active {
  display: block;
}

@media (min-width: $lg) {
  .backdrop::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to bottom, $bg, transparent);
  }
}

@media (max-width: $sm) {
  .backdrop img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
}
</style>