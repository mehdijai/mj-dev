<script setup lang="ts">
import { projects } from '~/api/projects';
</script>

<template>
    <section class="projects section" id="projects">
        <h2>Projects</h2>
        <article class="projects-list">
            <template v-for="project in projects" :key="project.id">
                <ProjectCard :project="project" />
            </template>
        </article>
    </section>
    
</template>

<style lang="scss">
.projects {
    h2 {
        text-align: center;
    }
    .projects-list {
        display: grid;
        grid-template-columns: repeat(3, 360px);
        gap: 20px;
        padding: 50px 0;
    }
}
</style>
