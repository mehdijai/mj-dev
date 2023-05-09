<script setup lang="ts">
import { ITag } from '~/types/global.type';

defineProps({
    tag: Object as PropType<ITag>
})
</script>

<template>
    <span class="tag" :style="`background-color: ${tag?.bg}; color: ${tag?.color};`">
        {{ tag?.title }}
    </span>
</template>
