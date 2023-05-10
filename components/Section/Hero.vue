<script setup lang="ts">
  import { gsap } from "gsap";

  onMounted(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
    });
    tl.to(".bg-img", {
      opacity: 0.8,
      x: 0,
    })
      .to(".hero h1", {
        opacity: 1,
        x: 0,
      })
      .to(
        ".hero h2",
        {
          opacity: 1,
          y: 0,
        },
        "-=0.5",
      );
  });
</script>

<template>
  <section class="hero">
    <div class="bg">
      <img class="bg-img" src="/bg.jpeg" />
    </div>
    <TypeWriter />
    <h1>Mehdi Jai</h1>
    <h2>VueJS Frontend Web Developer</h2>
  </section>
</template>

<style lang="scss">
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 50px 0;
    position: relative;
    overflow: hidden;
    .bg {
      .bg-img {
        opacity: 0;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%) translateX(50px);
        height: 160vh;
        object-fit: cover;
        z-index: -2;
      }
    }
    .type-writer,
    h1,
    h2 {
      z-index: 20;
    }

    .type-writer {
      margin-bottom: 100px;
    }

    h1 {
      font-weight: 800;
      text-transform: uppercase;
      font-size: 80px;
      line-height: 1;
      opacity: 0;
      transform: translateX(-100px);
    }
    h2 {
      font-weight: 500;
      font-size: 30px;
      line-height: 1.5;
      opacity: 0;
      transform: translateY(-40px);
    }
  }
</style>
