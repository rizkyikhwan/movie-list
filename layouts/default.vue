<template>
  <main>
    <Navbar />
    <Nuxt
      keep-alive
      :keep-alive-props="{
        exclude: [
          'Pagination',
          'pages/search.vue',
          'pages/movie/category/index.vue',
          'pages/movie/all-movies/index.vue',
          'pages/tv/category/index.vue',
          'pages/tv/all-series/index.vue'
        ]
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