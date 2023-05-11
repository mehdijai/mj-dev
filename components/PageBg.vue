<script setup lang="ts">
  import { gsap } from "gsap";

  onMounted(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
    });
    tl.to(".bg .overlay", {
      opacity: 1,
    }).to(
      ".bg .blob",
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
      },
      "-=0.5",
    );
  });
</script>

<template>
  <div class="bg">
    <div class="overlay"></div>
    <div class="blob blob-purple">
      <img src="/blob-purple.svg" />
    </div>
    <div class="blob blob-orange">
      <img src="/blob-orange.svg" />
    </div>
  </div>
</template>

<style lang="scss">
  .bg {
    .overlay {
      z-index: -1;
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100vh;
      background: $glass-black;
      backdrop-filter: $glass-blur;
      opacity: 0;
      clip-path: polygon(0 0, 35% 0, 100% 87%, 100% 0, 65% 0, 100% 40%, 100% 100%, 0 100%);
      @media screen and (max-width: 425px) {
        clip-path: polygon(0 0, 0 28%, 100% 68%, 100% 0, 0 0, 100% 40%, 100% 100%, 0 100%);
        height: calc(100vh + 60px);
      }
    }
    .blob {
      z-index: -1;
      position: fixed;
      opacity: 0;
      transform: translateY(80px);

      &-purple {
        width: 450px;
        left: -40px;
        bottom: 40px;
        @media screen and (max-width: 425px) {
          width: 250px;
          left: -40px;
          bottom: 20px;
        }
      }
      &-orange {
        width: 300px;
        left: 40%;
        bottom: -150px;
        @media screen and (max-width: 425px) {
          width: 250px;
          left: unset;
          right: -40px;
          bottom: -100px;
        }
      }
    }
  }
</style>
