<script setup lang="ts">
  import { socialMediaLinks } from "~/api/social-media";
</script>

<template>
  <ul class="sidebar">
    <li class="line"></li>
    <template v-for="sm in socialMediaLinks" :key="sm.name">
      <li class="sm-icon">
        <a :href="sm.url">
          <img :src="sm.logo" :alt="sm.name + ' Logo'" />
        </a>
      </li>
    </template>
    <li class="line"></li>
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
  .sm-icon {
    &:nth-of-type(2) {
      margin-top: 20px;
    }
    &:nth-last-child(2) {
      margin-bottom: 20px;
    }
    margin: 5px 0;
    transition: 0.3s ease-out;

    &:hover {
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