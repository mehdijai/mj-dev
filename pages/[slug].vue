<script setup lang="ts">
  import { projects } from "~/api/projects";
  import { IProject } from "~/types/global.type";
  import { gsap } from "gsap";
  import { seoData } from "~/api/seo";

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

  useSeoMeta({
    title: `Mehdi Jai | ${data.value.title}`,
    description: data.value.description,
    formatDetection: "telephone=no",
    author: seoData.author,
    charset: "utf-8",
    ogTitle: `Mehdi Jai | ${data.value.title}`,
    ogSiteName: `Mehdi Jai | ${data.value.title}`,
    ogType: "website",
    ogUrl: `${seoData.hostUrl}/${data.value.slug}`,
    ogDescription: data.value.description,
    ogImage: `${seoData.hostUrl}/${data.value.thumbnail}`,
    ogImageAlt: `Mehdi Jai | ${data.value.title}`,
    twitterCard: "summary",
    twitterDescription: data.value.description,
    twitterTitle: `Mehdi Jai | ${data.value.title}`,
    twitterCreatorId: seoData.twitterCreatorId,
    twitterImage: `${seoData.hostUrl}/${data.value.thumbnail}`,
    twitterImageAlt: `Mehdi Jai | ${data.value.title}`,
    robots: {
      index: true,
      follow: true,
      all: true,
    },
    xUaCompatible: "IE=edge",
  });

  useJsonld(() => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Mehdi Jai | ${data.value.title}`,
    description: data.value.description,
    url: `${seoData.hostUrl}/${data.value.slug}`,
    author: {
      "@type": "Person",
      name: seoData.author,
    },
    datePublished: data.value.publishedAt,
    dateModified: data.value.publishedAt,
    image: `${seoData.hostUrl}/${data.value.thumbnail}`,
    inLanguage: "en",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${seoData.hostUrl}/${data.value.slug}`,
    },
    isAccessibleForFree: true,
  }));

  onMounted(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
    });
    tl.fromTo(
      ".project-page h1",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
      },
    )
      .fromTo(
        ".project-page .tag",
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
        },
        "-=0.6",
      )
      .fromTo(
        ".project-page .content",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      );
  });
</script>

<template>
  <article v-if="!pending" class="project-page">
    <h1>{{ data?.title }}</h1>
    <div class="tags-list">
      <template v-for="tag in data.tags" :key="tag.id">
        <TagPill :tag="tag" />
      </template>
    </div>
    <article class="content" v-html="content"></article>
  </article>
  <article v-else class="project-page">
    <img src="/loader.svg" />
  </article>
</template>

<style lang="scss">
  .project-page {
    min-height: 100vh;
    padding: 50px 50px 50px 20px;
    @media screen and (max-width: 425px) {
      padding: 0;
      padding: 50px 25px 60px 0;
    }
    h1 {
      font-size: 40px;
      margin: 50px 0 20px 0;
      text-transform: uppercase;
      font-weight: 800;
      text-align: center;
      opacity: 0;

      @media screen and (max-width: 320px) {
        font-size: 20px;
      }
    }
    .tags-list {
      justify-content: center;
      margin-bottom: 40px;

      .tag {
        opacity: 0;
      }
    }
    .content {
      opacity: 0;
    }
    h2 {
      font-size: 25px;
      margin: 0 auto 20px auto;
      width: $section-content-width;
      @media screen and (max-width: 320px) {
        width: 90%;
      }
    }
    p {
      width: $section-content-width;
      text-align: justify;
      margin: 0 auto 30px auto;
      @media screen and (max-width: 320px) {
        width: 90%;
      }
    }
    a {
      display: block;
      width: fit-content;
      margin: 10px 0;
    }
    img {
      width: 100%;
      margin: 20px 0;
      @media screen and (max-width: 320px) {
        margin: 5px 0;
      }
    }
    figure {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    video {
      margin: auto 0;
      width: 50%;
    }
  }
</style>
