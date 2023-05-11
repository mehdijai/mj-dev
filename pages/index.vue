<script setup lang="ts">
  import { projects } from "~/api/projects";
  import { seoData } from "~/api/seo";

  useSeoMeta({
    title: seoData.title,
    description: seoData.description,
    formatDetection: "telephone=no",
    author: seoData.author,
    charset: "utf-8",
    ogTitle: seoData.title,
    ogSiteName: seoData.title,
    ogType: "website",
    ogUrl: seoData.hostUrl,
    ogDescription: seoData.description,
    ogImage: seoData.coverImage,
    ogImageAlt: seoData.title,
    twitterCard: "summary",
    twitterDescription: seoData.description,
    twitterTitle: seoData.title,
    twitterCreatorId: seoData.twitterCreatorId,
    twitterImage: seoData.coverImage,
    twitterImageAlt: seoData.title,
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
    name: seoData.title,
    description: seoData.description,
    url: seoData.hostUrl,
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
  <LazySectionHero />
  <LazySectionAbout />
  <LazySectionProjects />
  <LazySectionContact />
</template>
