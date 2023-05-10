<script setup lang="ts">
  import { socialMediaLinks } from "~/api/social-media";
</script>

<template>
  <section class="contact section" id="contact">
    <h2>Let's Get In Touch</h2>
    <p>I’m currently open for work as VueJS/JS frontend developer opportunity.</p>
    <a class="link" href="mailto:contact@mehdijai.com">contact@mehdijai.com</a>
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
