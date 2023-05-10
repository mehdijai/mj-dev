<script setup lang="ts">
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
      scrollTrigger: {
        trigger: ".footer",
        once: true,
        start: "bottom bottom",
      },
    });
    tl.from(".footer", {
      opacity: 0,
      width: 0,
    });
  });
</script>

<template>
  <footer class="footer">
    <p>MJDev v3.0 | Designed & Created by Mehdi Jai</p>
  </footer>
</template>

<style lang="scss">
  .footer {
    background-color: $glass-black-deep;
    backdrop-filter: $default-blur;
    z-index: 100;
    font-weight: 600;
    padding: 10px;
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    overflow: hidden;
    p {
      margin: 0 auto;
      text-align: center;
      width: max-content;
    }
  }
</style>
