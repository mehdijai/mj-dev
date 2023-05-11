<script setup lang="ts">
  import { ITag } from "~/types/global.type";

  defineProps({
    tag: Object as PropType<ITag>,
  });
</script>

<template>
  <span class="tag" :style="`--bg: ${tag?.bg}; --color: ${tag?.color};`">
    {{ tag?.title }}
  </span>
</template>

<style lang="scss">
  .tag {
    padding: 5px 8px;
    font-weight: 600;
    font-size: 12px;
    line-height: 1;
    border-radius: 3px;
    transition: 0.3s ease-in-out;
    background-color: var(--bg);
    color: var(--color);
    user-select: none;
    cursor: pointer;

    &:hover {
      color: var(--bg);
      background-color: var(--color);
    }
  }
</style>
