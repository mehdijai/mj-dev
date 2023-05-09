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
    <section class="about section" id="about">
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

<style lang="scss">
.about {
    min-height: 100vh;
    .skills {
        width: $section-content-width;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        .skill {
            color: $white;
            background: darken($green-dark, 10);
            font-weight: 700;
            padding: 5px 8px;
            font-size: 13px;
            border-radius: 5px;
            box-shadow: $default-shadow;
            user-select: none;
            transition: 0.4s ease-in-out;
            cursor: pointer;
            
            &:hover {
                color: $green-dark;
                background: $white;
                box-shadow: $green-glow;
            }
        }
    }
}
</style>