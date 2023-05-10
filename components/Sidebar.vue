<script setup lang="ts">
  import { socialMediaLinks } from "~/api/social-media";
  import { gsap } from "gsap";

  onMounted(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power4.inOut" },
    });
    tl.from(".line-1", {
      opacity: 0,
      y: -5,
    })
      .from(
        ".line-2",
        {
          opacity: 0,
          y: 5,
        },
        "-=0.4",
      )
      .to(
        ".sidebar .sm-icon",
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
        },
        "-=0.3",
      );
  });
</script>

<template>
  <ul class="sidebar">
    <li class="line line-1"></li>
    <template v-for="sm in socialMediaLinks" :key="sm.name">
      <li class="sm-icon">
        <a :href="sm.url">
          <img :src="sm.logo" :alt="sm.name + ' Logo'" />
        </a>
      </li>
    </template>
    <li class="line line-2"></li>
  </ul>
</template>

<style lang="scss">
  .sidebar {
    position: fixed;
    top: 0;
    height: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    z-index: 90;
    .sm-icon {
      &:nth-of-type(2) {
        margin-top: 20px;
      }
      &:nth-last-child(2) {
        margin-bottom: 20px;
      }
      margin: 5px 0;
      transition: 0.3s ease-out;
      position: relative;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transform: translateX(-5px);
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 2px;
        height: 100%;
        background-color: transparent;
        transition: 0.3s ease-out;
      }
      &:hover {
        &::after {
          right: -10px;
          background-color: $white;
        }
        transform: translateX(-5px);
      }
    }
    .line {
      background-color: $white;
      width: 2px;
      height: 100%;
    }
  }
</style>
