<script setup lang="ts">
  import { projects } from "~/api/projects";
  import { IProject } from "~/types/global.type";

  const route = useRoute();
  const router = useRouter();

  const { data, pending, error } = await useAsyncData<IProject>("project", () => {
    const slug = route.params.slug;
    if (!slug) {
      throw new Error("Not found");
    }
    const project = projects.find((p) => p.slug == slug);
    if (!project) {
      throw new Error("Not found");
    }

    return project;
  });
  if (error.value != null || data.value == null) {
    router.replace("/404");
  }

  const content = parseMd(data.value.content);
</script>

<template>
  <article v-if="!pending" class="project-page">
    <h1>{{ data?.title }}</h1>
    <div class="tags-list">
      <template v-for="tag in data.tags" :key="tag.id">
        <TagPill :tag="tag" />
      </template>
    </div>
    <article v-html="content"></article>
  </article>
  <article v-else class="project-page">
    <img src="/loader.svg" />
  </article>
</template>

<style lang="scss">
  .project-page {
    min-height: 100vh;
    padding: 50px 50px 50px 20px;
    h1 {
      font-size: 40px;
      margin: 50px 0 20px 0;
      text-transform: uppercase;
      font-weight: 800;
      text-align: center;
    }
    .tags-list {
      justify-content: center;
      margin-bottom: 40px;
    }
    h2 {
      font-size: 25px;
      margin: 0 auto 20px auto;
      width: $section-content-width;
    }
    p {
      width: $section-content-width;
      text-align: justify;
      margin: 0 auto 30px auto;
    }
    a {
      display: block;
      width: fit-content;
      margin: 10px 0;
    }
    img {
        width: 100%;
        margin: 20px 0;
    }
    figure {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    video {
        margin: auto 0;
        width: 50%
    }
  }
</style>
