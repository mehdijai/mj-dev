<script setup lang="ts">
  import { gsap, SteppedEase } from "gsap";

  onMounted(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: SteppedEase.config(20) },
    });
    tl.fromTo(
      ".anim-typewriter",
      {
        width: 0,
      },
      {
        width: 340,
      },
    );
    tl.fromTo(
      ".anim-typewriter",
      {
        duration: 0.5,
        "border-right-color": "rgba(255,255,255,0.75)",
      },
      {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
      },
    );
  });
</script>

<template>
  <p class="type-writer font-game anim-typewriter">“HELLO”</p>
</template>

<style lang="scss">
  .type-writer {
    color: $green-light;
    font-size: 50px;
    position: relative;
    width: 0;
    overflow: hidden;
    padding-right: 10px;
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    box-sizing: content-box;
    display: flex;
    align-items: flex-end;
    // background-color: red;
    // &::after {
    //   content: "";
    //   position: absolute;
    //   right: 0;
    //   top: 50%;
    //   height: 100%;
    //   width: 5px;
    //   background-color: $white;
    //   transform-origin: center center;
    //   transform: translateY(-50%);
    //   animation: $cursor-flash;
    // }
    span {
      display: block;
      user-select: none;
      line-height: 1;
      // &:nth-of-type(2) {
      //   clip-path: polygone(0 100%, 100% 100%, 100% 100%, 0 100%);
      // }
    }
  }
</style>
