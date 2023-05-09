<script setup lang="ts">
const skills = [
"HTML",
"CSS",
"JS",
"TailwindCSS",
"SCSS/SASS",
"GSAP",
"VueJS",
"NuxtJS",
"AlpineJS",
"ES6",
"TypeScript",
"AstroJS",
"NodeJS",
"ExpressJS",
"PrismaJS",
"PHP",
"Laravel",
"SQL",
"Git",
"Github",
"Bitbucket",
"Jira",
"MS DevOps",
"Postman",
]
</script>

<template>
    <section class="about" id="about">
        <h2>About me</h2>
        <p>
            <strong>Mehdi Jai, VueJS Frontend web developer.</strong> I'm a curious, autonomous developer. I started my journey in 2019
            professionally. The beginning was with building my two majors SaaS; Tabarro3.ma, Autodrive.ma. I have a long
            experience with JavaScript/TypeScript, SCSS/SASS, NodeJS, and PHP Laravel, VueJS. Plus, ElectronJS, VBA,
            Figma, and other tools, programming languages, and skills.
        </p>
        <div class="skills">
            <template v-for="skill in skills" :key="skill">
                <span class="skill">{{ skill }}</span>
            </template>
        </div>
    </section>
</template>