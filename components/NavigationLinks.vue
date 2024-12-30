<script setup lang="ts"></script>

<template>
  <li>
    <nuxt-link class="nav-link" to="/#about">Who am I</nuxt-link>
  </li>
  <li>
    <nuxt-link class="nav-link" to="/#projects">Projects</nuxt-link>
  </li>
  <li>
    <nuxt-link class="nav-link" to="/#contact">Get in touch</nuxt-link>
  </li>
  <li>
    <a target="_blank" href="https://mehdijai.com/resume.pdf" class="external">Resume</a>
  </li>
</template>

<style lang="scss" scoped>
  li {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  .nav-link {
    display: block;
    font-weight: 600;
    text-align: center;
    color: $white;
    transition: 0.3s ease-out;
    padding: 15px 10px;
    height: 100%;

    &:hover {
      color: $green-light;
    }
  }
</style>
