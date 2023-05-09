<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="bg">
      <div class="overlay"></div>
      <img class="bg-img" src="/bg.jpeg" />
      <div class="blob blob-purple">
        <img src="/blob-purple.svg" />
      </div>
      <div class="blob blob-orange">
        <img src="/blob-orange.svg" />
      </div>
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
    .bg {
      .overlay {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100vh;
        z-index: 1;
        background: $glass-black;
        backdrop-filter: $glass-blur;
        clip-path: polygon(0 0, 35% 0, 100% 87%, 100% 0, 65% 0, 100% 40%, 100% 100%, 0 100%);
      }
      .bg-img {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 160vh;
        object-fit: cover;
        z-index: 0;
        opacity: 0.6;
      }
      .blob {
        position: absolute;
        &-purple {
          width: 450px;
          left: -40px;
          bottom: 40px;
        }
        &-orange {
          width: 300px;
          left: 40%;
          bottom: -150px;
        }
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
