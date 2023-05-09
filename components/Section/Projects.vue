<script setup lang="ts">
import { projects } from '~/api/projects';
</script>

<template>
    <section class="projects" id="projects">
        <h2>Projects</h2>
        <article class="projects-list">
            <template v-for="project in projects" :key="project.id">
                <ProjectCard :project="project" />
            </template>
        </article>
    </section>
    
</template>

