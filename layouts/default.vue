<script setup lang="ts">
  function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  onMounted(() => {
    const fabButton = document.getElementById("fabButton");

    document.addEventListener("scroll", () => {
      const docScroll = document.documentElement.scrollTop;
      if (fabButton) {
        if (document.body.scrollTop > 200 || docScroll > 200) {
          fabButton.style.display = "block";
        } else {
          fabButton.style.display = "none";
        }
      }
    });
  });
</script>

<template>
  <TopNav class="top-nav" />
  <main class="page-body">
    <PageBg />
    <Sidebar class="sidebar" />
    <slot />
  </main>
  <button id="fabButton" class="fab" @click="scrollUp">
    <span class="msr">arrow_upward</span>
  </button>
  <Footer class="page-footer" />
</template>

<style lang="scss">
  .page-body {
    padding-left: 50px;
    @media screen and (max-width: 425px) {
      padding-left: 25px;
    }
  }
  .fab {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 998;
    padding: 10px;
    background: $green-dark;
    box-shadow: $default-shadow;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    overflow: hidden;
    transition: 0.3s ease-in-out;
    @media screen and (max-width: 425px) {
      padding: 5px;
      border-radius: 5px;
      bottom: 39px;
      right: 25px;
      span {
        font-size: 18px;
      }
    }
    &::after {
      content: "";
      width: 100%;
      height: 0;
      position: absolute;
      background: $white;
      bottom: 0;
      left: 0;
      z-index: -1;
      transition: 0.2s ease-in-out;
    }
    span {
      z-index: 1;
      width: 24px;
      height: 24px;
      color: $white;
      transition: 0.3s ease-in-out;
    }
    &:hover,
    &:active {
      &::after {
        height: 100%;
      }
      span {
        color: $green-dark;
        transform: translateY(-3px);
      }
    }
  }
</style>
