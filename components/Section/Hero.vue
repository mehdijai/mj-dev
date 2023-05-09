<script setup lang="ts"></script>

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
    .bg {
      .bg-img {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 160vh;
        object-fit: cover;
        z-index: -2;
        opacity: 0.6;
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
    }
    h2 {
      font-weight: 500;
      font-size: 30px;
      line-height: 1.5;
    }
  }
</style>
