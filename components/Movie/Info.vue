<template>
  <div class="info d-flex align-items-center mb-4">
    <img :src="`${$config.banner}/${movie.poster_path}`" alt="" class="poster shadow">
    <div class="ml-3">
      <h2>{{ movie.title }}</h2>
      <span v-for="genre in movie.genres" :key="genre.id"  class="genre mr-3">
        {{ genre.name }}
      </span>
      <p class="mt-3"><fa icon="star" class="icon" /> {{ movie.vote_average }} ({{ movie.vote_count }}) / 10</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movie']
}
</script>

<style lang="scss" scoped>
.info {

  .poster {
    width: 250px;
    border-radius: $rounded;
  }

  .genre {
    padding: 4px 8px;
    border-radius: $rounded;
    color: $text-black;
    cursor: default;
    background-image: linear-gradient(35deg, $button-primary, $button-secondary);
    filter: drop-shadow(0 2px 4px $color-secondary);
  }

  .icon {
    color: #fcda5f;
  }
}

@media (max-width: $md) {
  .info .poster {
    width: 150px;
  }
}
</style>