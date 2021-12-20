<template>
  <div class="card-cast">
    <img
      :src="`${$config.backdrop}/${actor.profile_path}`"
      v-if="actor.profile_path"
      :alt="actor.original_name"
      class="img-fluid shadow"
    />
    <img src="/profile/not-avail.png" v-else alt="not avail" class="img-fluid" />
    <div class="body-card text-center mt-1">
      <p class="font-weight-bold mb-0 actor">{{ actor.original_name }}</p>
      <p>{{ actor.character }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['actor'],
}
</script>

<style lang="scss" scoped>
.card-cast {
  position: relative;
  font-size: 0.8rem;

  img {
    border-radius: $rounded;
  }

  .actor {
    letter-spacing: 1px;
  }
}

@media (max-width: $md) {
  .card-cast {
    font-size: 0.7rem;
  }
}
</style>