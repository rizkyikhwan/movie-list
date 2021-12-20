<template>
  <div class="info d-flex align-items-center mb-4">
    <img :src="`${$config.banner}/${movie.poster_path}`" alt="" class="poster shadow">
    <div class="ml-3">
      <h2 class="title-movie">{{ (movie.title) }}</h2>
      <div class="genre">
        <span>
          {{ movie.genres.map(genre => genre.name).join(' | ') }}
        </span>
      </div>
      <p class="mt-3"><fa icon="star" class="icon" /> {{ movie.vote_average }} ({{ movie.vote_count }}) / 10</p>
      <button class="d-flex align-items-center btn-trailer" @click="$emit('toggleTrailer')">
        <fa :icon="['fas', 'play']" class="play" />
        <span>Trailer</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movie'],
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

    .title-movie {
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

    .title-movie {
      font-size: 1.3rem;
    }
  }
}
</style>