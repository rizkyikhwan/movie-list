<template>
  <div class="info d-flex align-items-center mb-4">
    <img :src="`${$config.banner}/${tv.poster_path}`" alt="" class="poster shadow">
    <div class="ml-3">
      <h2 class="title-tv-series">{{ (tv.name) }}</h2>
      <div class="genre">
        <span>
          {{ sortGenre(tv.genres) }}
        </span>
      </div>
      <p class="mt-1"><fa icon="star" class="icon" /> {{ tv.vote_average }} ({{ tv.vote_count }}) / 10</p>
      <button class="d-flex align-items-center btn-trailer" @click="$emit('trailer')">
        <fa :icon="['fas', 'play']" class="play" />
        <span>Trailer</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tv'],
  methods: {
    sortGenre(value) {
      return value.map(genre => genre.name).join(' | ')
    }
  }
}
</script>

<style lang="scss" scoped>
.info {

  .poster {
    width: 250px;
    border-radius: $rounded;
  }

  .btn-trailer {
    padding: 4px 8px;
    border: 0;
    border-radius: $rounded;
    color: $text-black;
    background-image: linear-gradient(35deg, $button-primary, $button-secondary);
    filter: drop-shadow(0 2px 4px $color-secondary);
    gap: .25rem;
  }

  .play {
    font-size: 10px;
  }

  .icon {
    color: #fcda5f;
  }
}

@media (max-width: $md) {
  .info {
    font-size: 12px;

    .poster {
      width: 150px;
    }

    .title-tv-series {
      font-size: 1.7rem;
    }
  } 
}

@media (max-width: $sm) {
  .info {
    font-size: 12px;

    .poster {
      width: 125px;
    }

    .title-tv-series {
      font-size: 1.3rem;
    }
  }
}
</style>