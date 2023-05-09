<script setup lang="ts"></script>

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
      clip-path: polygon(0 0, 35% 0, 100% 87%, 100% 0, 65% 0, 100% 40%, 100% 100%, 0 100%);
    }
    .blob {
      z-index: -1;
      position: fixed;
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
</style>
