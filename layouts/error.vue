<template>
  <div class="error container">
    <div class="min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <lottie :width="400" :height="400" :options="lottieOptions" v-on:animCreated="handleAnimation" class="img-fluid lottie" />
      <div class="message text-center">
        <span>404</span>  
        <p class="mb-0">It looks like you are lost</p>
        <small class="d-block mb-3">Sorry, We couldn't find what you are looking for!</small>
        <NuxtLink :to="{name: 'index'}">Back to homepage</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/assets/astronaut.json";

export default {
  head() {
    return {
      title: `You were page looking for doesn't exists (404)`
    }
  },
  data() {
    return {
      anim: null,
      lottieOptions: { animationData: animationData.default }
    };
  },
  components: {
    lottie
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: $sm) {
  .error {
    margin-top: -50px;
  }
}

.lottie {
  max-width: 250px;
  filter: drop-shadow(0 .75rem 1rem rgb(0 0 0 / 25%));
}

.message {
  transform: translateY(-100px);

  p {
    font-size: 18px;
  }

  a {
    color: $color-primary;
    padding: 7px 14px;
    border-radius: $rounded;
    background: $bg-select;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    transition: .2s ease-in-out;

    &:hover {
      text-decoration: none;
    }
  }

}

span {
  font-size: 5rem;
  color: $color-secondary;
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%, 100% {
    filter: drop-shadow(0 0 1px $color-secondary)
  }
  50% {
    filter: drop-shadow(0 0 3px $color-secondary)
  }
}
</style>