<script setup lang="ts">
  import { projects } from "~/api/projects";
  import { seoData } from "~/api/seo";

  useSeoMeta({
    title: "Mehdi Jai | Projects",
    description: seoData.description,
    formatDetection: "telephone=no",
    author: seoData.author,
    charset: "utf-8",
    ogTitle: "Mehdi Jai | Projects",
    ogSiteName: "Mehdi Jai | Projects",
    ogType: "website",
    ogUrl: seoData.hostUrl + "/projects",
    ogDescription: seoData.description,
    ogImage: seoData.coverImage,
    ogImageAlt: "Mehdi Jai | Projects",
    twitterCard: "summary",
    twitterDescription: seoData.description,
    twitterTitle: "Mehdi Jai | Projects",
    twitterCreatorId: seoData.twitterCreatorId,
    twitterImage: seoData.coverImage,
    twitterImageAlt: "Mehdi Jai | Projects",
    robots: {
      index: true,
      follow: true,
      all: true,
    },
    xUaCompatible: "IE=edge",
  });

  useJsonld(() => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Mehdi Jai | Projects",
    description: seoData.description,
    url: seoData.hostUrl + "/projects",
    author: {
      "@type": "Person",
      name: seoData.author,
    },
    keywords: "developer, portfolio, projects, vuejs, frontend, web developer",
    image: seoData.coverImage,
    inLanguage: "en",
    dateCreated: seoData.dateCreated,
    dateModified: seoData.dateModified,
    isAccessibleForFree: true,
    hasPart: projects.map((p) => {
      return {
        "@type": "CreativeWork",
        name: p.title,
        description: p.content,
        url: seoData.hostUrl + "/" + p.slug,
        dateCreated: p.publishedAt,
        dateModified: p.publishedAt,
      };
    }),
  }));
</script>

<template>
  <LazySectionProjects class="mt" />
  <LazySectionContact />
</template>

<style scoped>
.mt {
  padding-top: 100px;
}
</style>