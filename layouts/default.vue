<template>
  <main>
    <Navbar />
    <Nuxt
      keep-alive
      :keep-alive-props="{
        include: [
          'pages/movie/_id.vue',
          'pages/tv/_id.vue',
          'pages/tv/index.vue',
          'IndexPage'
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