<script setup lang="ts">
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  const skills = [
    "HTML",
    "CSS",
    "JS",
    "SCSS / SASS",
    "GSAP",
    "VueJS",
    "Vuetify",
    "NuxtJS",
    "AlpineJS",
    "ES6",
    "TypeScript",
    "NodeJS",
    "NestJS",
    "GraphQL",
    "ExpressJS",
    "PrismaJS",
    "PHP",
    "Laravel",
    "MySQL",
    "MariaDB",
    "SQL Server",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Jira",
    "MS DevOps",
    "Postman",
  ];

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
      scrollTrigger: {
        trigger: ".about",
        once: true,
      },
    });
    tl.from(".about h2", {
      opacity: 0,
      x: -10,
    }).from(
      ".about p",
      {
        opacity: 0,
        y: -50,
      },
      "-=0.5",
    );
    ScrollTrigger.batch(".skill", {
      once: true,
      onEnter: (elements) =>
        gsap.to(elements, {
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          stagger: 0.1,
        }),
      onLeaveBack: (elements) =>
        gsap.set(elements, {
          opacity: 0,
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          overwrite: true,
        }),
    });
  });
</script>

<template>
  <section class="about section" id="about">
    <h2>About me</h2>
    <p>
      <strong>
        Mehdi Jai, Lead Fullstack developer. Specialized in VueJS, NodeJS, and PHP Laravel
      </strong>
      I'm a curious, autonomous developer. I started my journey in 2019 professionally. The
      beginning was with building my two majors SaaS; Tabarro3.ma, Autodrive.ma. I have a long
      experience with JavaScript/TypeScript, SCSS/SASS, NodeJS, and PHP Laravel, VueJS. Plus,
      ElectronJS, Figma, and other tools, programming languages, and skills.
    </p>
    <p>
      During my carrer, I worked startups and was responsible for developing, creating, maintaining
      and deploying Web Applications. This experience led me to acquiring good skill set in tech,
      from technical skills at languages and frameworks, infrastructure and handling production
      projects, to soft skills as team player, leading projects, critical thinking, and
      solution-driven mentality
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
    @media screen and (max-width: 425px) {
      padding-right: 25px;
    }
    .skills {
      width: $section-content-width;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      @media screen and (max-width: 425px) {
        gap: 5px;
        width: 90%;
      }
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
        clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);

        @media screen and (max-width: 425px) {
          font-weight: 600;
          font-size: 12px;
        }

        &:hover {
          color: $green-dark;
          background: $white;
          box-shadow: $green-glow;
        }
      }
    }
  }
</style>
