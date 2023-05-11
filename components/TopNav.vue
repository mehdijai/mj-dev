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
      ".nav-list > li",
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
    <ul class="nav-list">
      <li class="logo">
        <NuxtLink to="/">
          <img src="/logo.svg" alt="MJDev" />
        </NuxtLink>
      </li>
      <NavigationLinks />
      <li class="menu-toggler" @click="openMenu = !openMenu" :class="{ closed: !openMenu }">
        <button class="msr external">menu</button>
      </li>
    </ul>
  </nav>
  <Transition name="slide" mode="out-in">
    <ul class="list-menu" v-if="openMenu">
      <NavigationLinks />
    </ul>
  </Transition>
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
    padding: 10px 0;
    @media screen and (max-width: 425px) {
      width: 100%;
      margin-left: 0;
    }

    .logo {
      margin-right: auto;

      img {
        height: 30px;
      }
    }

    .nav-list {
      max-width: 1000px;
      @media screen and (max-width: 425px) {
        max-width: unset;
        width: 100%;
        margin: 0;
      }
      padding: 0;
      margin: 0 auto;
      display: flex;
      align-items: center;
      padding: 0 20px;
      gap: 10px;

      li {
        &:not(.logo, .menu-toggler) {
          @media screen and (max-width: 425px) {
            display: none;
          }
        }
      }
      .menu-toggler {
        display: none;
        @media screen and (max-width: 425px) {
          display: block;
        }
        button {
          border: none;
          padding: 5px;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
  }
  .list-menu {
    position: fixed;
    top: 55px;
    z-index: 999;
    background-color: $glass-black-deep;
    backdrop-filter: $default-blur;
    width: 250px;
    height: 100%;
    padding: 20px 10px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 20px;
    text-align: center;
    border-right: 1px solid $glass-white;
    img {
      width: 30px;
    }

    li {
      height: fit-content;
      .nav-link {
        display: block;
        border-radius: 3px;
        padding: 10px !important;
        &:hover {
          background-color: $glass-white;
        }
      }
    }
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(-100px);
    opacity: 0;
  }
</style>
