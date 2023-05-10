<script setup lang="ts"></script>

<template>
  <div class="type-writer font-game">
    <span>“</span>
    <span>H</span>
    <span>E</span>
    <span>L</span>
    <span>L</span>
    <span>O</span>
    <span>”</span>
  </div>
</template>

<style lang="scss">
  .type-writer {
    color: $green-light;
    font-size: 50px;
    position: relative;
    width: fit-content;
    padding-right: 10px;
    display: flex;
    align-items: flex-end;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      height: 100%;
      width: 5px;
      background-color: $white;
      transform-origin: center center;
      transform: translateY(-50%);
      animation: $cursor-flash;
    }
    span {
      display: block;
      user-select: none;
      line-height: 1;
      &:nth-of-type(2){
        clip-path: $clip-scaled-down;
      }
    }
  }
</style>
