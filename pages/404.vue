<script setup lang="ts">
  import { gsap } from "gsap";

  useHead({
    title: "404 | Page not found",
  });

  onMounted(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
    });
    tl.from(".error h1", {
      opacity: 0,
      x: -10,
    }).from(
      ".error .link",
      {
        opacity: 0,
        y: -50,
      },
      "-=0.5",
    );
  });
</script>
<template>
  <section class="section error">
    <h1>Error 404 | Page Not Found</h1>
    <nuxt-link to="/" class="external">Back Home</nuxt-link>
  </section>
</template>
<style lang="scss">
  .error {
    min-height: 100vh;
    gap: 30px;
    @media screen and (max-width: 425px) {
      padding-right: 25px;
    }
    h1 {
      text-transform: uppercase;
      font-size: 40px;
      text-align: center;
      font-weight: 800;
      color: $white;
      text-shadow: 0 0 10px rgba($black, 0.8), 0 0 10px rgba($green-light, 0.8);
      @media screen and (max-width: 425px) {
        font-size: 30px;
      }
      @media screen and (max-width: 768px) {
        width: 80%;
      }
    }
  }
</style>
