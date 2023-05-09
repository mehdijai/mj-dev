<script setup lang="ts">
import { IProject } from '~/types/global.type';

defineProps({
    project: Object as PropType<IProject>
})
</script>

<template>
    <div class="project-card" @click="$router.push('/' + project?.slug)">
        <img :src="project?.thumbnail" :alt="project?.title">
        <div class="project-info">
            <span class="title">{{ project?.title }}</span>
            <div class="tags-list">
                <template v-for="tag  in project?.tags" :key="'tag-' + tag.id">
                    <TagPill :tag="tag" />
                </template>
            </div>
        </div>
    </div>
</template>
