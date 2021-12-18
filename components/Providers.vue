<template>
  <section class="providers mb-5">
    <h1 class="title">Providers</h1>
    <div class="row">
      <div v-for="provider in providers" :key="provider.id" class="col-6 col-md-3 d-flex justify-content-center align-items-center">
        <CardProviders :provider="provider" />
      </div>
    </div>
    <div class="d-flex justify-content-center my-3" v-if="providers.length < dataLength.length">
      <button @click="$fetch" class="btn-more">Load More</button>    
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      providers: [],
      limit: 12,
      dataLength: []
    }
  },
  async fetch() {
    await this.getProviders()
  },
  methods: {
    async getProviders() {
      const data = await this.$axios.$get(`/watch/providers/movie?api_key=${process.env.apiKey}&language=en-US`)
      const dataResource = data.results.slice(
        this.providers.length,
        this.providers.length + this.limit
      )
      this.providers.push(...dataResource)
      this.dataLength = data.results
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.75rem;
}

.btn-more {
  background: linear-gradient(30deg, $button-primary, $button-secondary);
  border: 0;
  border-radius: $rounded;
  filter: drop-shadow(0 2px 4px $button-primary);
  padding: 6px 12px;
}

@media (max-width: $sm) {
  .title {
    font-size: 1.25rem;
  }
}
</style>