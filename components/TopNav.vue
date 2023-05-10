<script setup lang="ts">
  import { gsap } from "gsap";
  const openMenu = ref(false);
  onMounted(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power4.inOut" },
    });
    tl.to(".top-nav", {
      opacity: 1,
    }).from(
      ".top-nav ul > li",
      {
        y: -5,
        opacity: 0,
        stagger: 0.1,
      },
      "-=0.3",
    );
  });
</script>

<template>
  <nav class="top-nav">
    <ul>
      <li class="logo">
        <NuxtLink to="/">
          <img src="/logo.svg" alt="MJDev" />
        </NuxtLink>
      </li>
      <NavigationLinks />
    </ul>
  </nav>
</template>

<style lang="scss">
  .top-nav {
    opacity: 0;
    z-index: 80;
    position: fixed;
    background-color: $glass-white;
    backdrop-filter: $default-blur;
    width: calc(100% - 22px);
    margin-left: calc(22px);

    .logo {
      margin-right: auto;

      img {
        height: 30px;
      }
    }

    ul {
      max-width: 1000px;
      padding: 0;
      margin: 0 auto;
      display: flex;
      align-items: center;
      padding: 0 20px;
      gap: 10px;
    }
  }
</style>
