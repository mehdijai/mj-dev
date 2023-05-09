<script setup lang="ts"></script>

<template>
  <TopNav class="top-nav" />
  <main class="page-body">
    <Sidebar class="sidebar" />
    <slot />
  </main>
  <Footer class="page-footer" />
</template>

<style lang="scss">
.page-body {
  padding-left: 50px;
}
</style>