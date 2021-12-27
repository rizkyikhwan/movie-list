<template>
  <section v-if="tv.last_episode_to_air.overview" class="py-3">
    <h5 class="font-weight-bold title">Last Episode</h5>
    <div class="last-card shadow">
      <div class="grid-last-episode">
        <div class="picture">
          <div class="banner">
            <img
              v-if="tv.last_episode_to_air.still_path"
              :src="`${$config.backdrop}/${tv.last_episode_to_air.still_path}`"
              :alt="tv.last_episode_to_air.name"
              class="img-fluid shadow banner-img"
            />
            <img v-else src="/profile/episode-not-avail.png" alt="Image not available" class="img-fluid">
            <div class="last-episode">
              <p>{{ getDate(tv.last_episode_to_air.air_date) }}</p>
            </div>
          </div>
        </div>
        <div class="description">
          <p class="mb-0">{{ tv.last_episode_to_air.name }}</p>
          <p class="mb-0">Episode {{ tv.last_episode_to_air.episode_number }}</p>
          <p>Season {{ tv.last_episode_to_air.season_number }}</p>
          <p class="text-justify">Overview :<br>{{ tv.last_episode_to_air.overview }}</p>
          <p v-if="tv.next_episode_to_air" class="mb-0">Next Episode :<br> {{ getDate(tv.next_episode_to_air.air_date) }}</p>
          <p v-else class="mb-0">Next Episode :<br> -</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['tv'],
  methods: {
    getDate(value) {
      return new Date(value).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.last-card {
  background: $bg-card;
  padding: 14px 16px;
  border-radius: $rounded;
}

.grid-last-episode {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
}

.banner {
  position: relative;
  color: $text-white;
  
  &::before {
    content: "";
    width: 100%;
    height: 60%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0 0 $rounded $rounded;
    background-image: linear-gradient(transparent, black);
  }

  .banner-img {
    border-radius: $rounded;
  }

  .last-episode {
    position: absolute;
    bottom: -5px;
    left: 10px;
  }
}

.description {
  font-size: 14px;
}
</style>