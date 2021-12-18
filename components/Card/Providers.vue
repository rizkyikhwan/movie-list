<template>
  <div class="card-provider d-flex flex-column align-items-center my-4">
    <img :src="`${$config.backdrop}/${provider.logo_path}`" alt="" class="img-fluid shadow logo-provider">
    <p class="mt-1">{{ provider.provider_name }}</p>
  </div>
</template>

<script>
export default {
  props: ['provider']
}
</script>

<style lang="scss" scoped>
.logo-provider {
  border-radius: $rounded;
}
</style>