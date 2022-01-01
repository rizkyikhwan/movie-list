<template>
  <main>
    <Navbar />
    <Nuxt
      keep-alive
      :keep-alive-props="{
        exclude: [
          'components/Pagination.vue',
          'pages/search.vue',
          'pages/movie/category/index.vue',
          'pages/movie/all-movies/index.vue',
          'pages/tv/category/index.vue',
          'pages/tv/all-series/index.vue'
        ],
      }"
    />
    <Footer />
  </main>
</template>

<script>
export default {}
</script>

<style>
</style>