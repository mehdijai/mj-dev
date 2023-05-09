<script setup lang="ts">
import { socialMediaLinks } from '~/api/social-media';
</script>

<template>
    <section class="about" id="about">
        <h2>Let's Get In Touch</h2>
        <p>
            I’m currently open for work as VueJS/JS frontend developer opportunity.
        </p>
        <a href="mailto:contact@mehdijai.com">contact@mehdijai.com</a>
        <ul class="sm">
            <template v-for="sm in socialMediaLinks" :key="sm.name">
            <li>
                <a :href="sm.url">
                    <img :src="sm.logo" :alt="sm.name + ' Logo'">
                </a>
            </li>
        </template>
        </ul>
        
    </section>
</template>
