<script setup lang="ts">
  import { socialMediaLinks } from "~/api/social-media";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
      scrollTrigger: {
        trigger: ".contact",
        once: true,
      },
    });
    tl.from(".contact h2", {
      opacity: 0,
      x: -10,
    })
      .from(
        ".contact p",
        {
          opacity: 0,
          y: -50,
        },
        "-=0.5",
      )
      .from(
        ".contact .link",
        {
          opacity: 0,
          y: -50,
        },
        "-=0.5",
      );
    ScrollTrigger.batch(".sm li", {
      once: true,
      onEnter: (elements) =>
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
        }),
      onLeaveBack: (elements) =>
        gsap.set(elements, {
          opacity: 0,
          y: 50,
          overwrite: true,
        }),
    });
  });
</script>

<template>
  <section class="contact section" id="contact">
    <h2>Let's Get In Touch</h2>
    <p>I’m currently open for work as VueJS/NodeJS frontend developer opportunity.</p>
    <p>Check out my resume for more details <a href="/_resume.pdf" target="_blank" style="display: inline;" class="link">Resume</a></p>
    <a class="link" href="mailto:mehdi.jai@proton.me">mehdi.jai@proton.me</a>
    <ul class="sm">
      <template v-for="sm in socialMediaLinks" :key="sm.name">
        <li>
          <a :href="sm.url">
            <img :src="sm.logo" :alt="sm.name + ' Logo'" />
          </a>
        </li>
      </template>
    </ul>
  </section>
</template>

<style lang="scss">
  .contact {
    min-height: 100vh;
    gap: 20px;
    h2 {
      text-align: center;
    }
    p {
      text-align: center;
    }
    .sm {
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 15px;
      li {
        transition: 0.3s ease-out;
        opacity: 0;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: transparent;
          transition: 0.3s ease-out;
        }
        &:hover {
          &::after {
            bottom: -7px;
            background-color: $white;
          }
          transform: translateY(-2px);
        }
      }
    }
  }
</style>
