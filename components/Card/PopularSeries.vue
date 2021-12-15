<template>
  <div class="card-popular-series">
    <img :src="`${$config.img}/${serie.backdrop_path}`" :alt="serie.title" class="img-fluid shadow poster">
      <div class="info">
        <h6 class="title mb-n1">{{ serie.name }} </h6>
        <small class="font-weight-light">{{ getDate(serie.first_air_date) }}</small>
      </div>
      <small class="rating shadow">
      <fa icon="star" class="star" /> {{ serie.vote_average }}
    </small>
  </div>
</template>

<script>
export default {
  props: ['serie'],
  methods: {
    getDate(value) {
      return new Date(value).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card-popular-series {
  position: relative;
  color: $text-light;
  

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 60%;
    bottom: 0;
    left: 0;
    border-radius: 0 0 $rounded $rounded;
    background-image: linear-gradient(transparent 5%, black);
  }
  
  .poster {
    border-radius: $rounded;
  }

  .info {
    position: absolute;
    bottom: 5px;
    left: 10px;

    .title {
      font-weight: 600;
      letter-spacing: 1.25px;
    }
  }

  .rating {
    position: absolute;
    top: 0;
    right: 0;
    padding: 3px 6px;
    border-radius: 0 $rounded 0 $rounded;
    background: #414850;
    filter: drop-shadow(0 0 1px #414850);
  }

  .star {
    color: #fcda5f;
  }
}
</style>