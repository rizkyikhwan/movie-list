<template>
  <div class="d-flex flex-column align-items-center justify-content-center not-found">
    <img src="/illustrations/search-not-found.svg" alt="" class="img-fluid">
    <div class="message text-center">
      <h4 class="font-weight-bold mb-1">Not results found</h4>
      <p>We could't find what you are looking for</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.not-found {
  transform: translateY(-50px);

  img {
    width: 350px;
  }

  .message {
    transform: translateY(-45px);

    h4 {
      letter-spacing: 1px;
    }
  }
}

</style>