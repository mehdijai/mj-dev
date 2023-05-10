<script setup lang="ts">
  import { projects } from "~/api/projects";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
      scrollTrigger: {
        trigger: ".projects",
        once: true,
      },
    });
    tl.from(".projects h2", {
      opacity: 0,
      x: -10,
    });
    ScrollTrigger.batch(".project-card", {
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
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          overwrite: true,
        }),
    });
  });
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
