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

<style lang="scss">
.project-card {
    $card-padding: 10px;
    $card-border-radius: 10px;

    overflow: hidden;
    border-radius: $card-border-radius;
    position: relative;
    width: 360px;
    aspect-ratio: 16/12;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
        transition: 0.3s ease-out;
        &:hover {
            opacity: 0.8;
        }
    }
    .project-info {
        position: absolute;
        bottom: $card-padding;
        border-radius: calc($card-border-radius - ($card-padding * 2));
        overflow: hidden;
        left: 50%;
        transform: translateX(-50%);
        background-color: $glass-black-dark;
        backdrop-filter: $default-blur;
        width: calc(100% - ($card-padding * 2));
        padding: calc($card-padding * 2);
        box-shadow: $default-shadow;

        .title {
            font-weight: 600;
            margin-bottom: 10px;
            display: block;
        }
    }
}
</style>