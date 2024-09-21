<script setup lang="ts">
import type { BlogPost } from '~/types/blog';

const path = useRoute();

const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () => queryContent(path.fullPath).findOne())

const article = computed<BlogPost>(() => {
    return {
        title: articles.value?.title || 'no-title',
        description: articles.value?.description || 'no-description',
        image: articles.value?.image || 'blog-images/general.jpg',
        date: articles.value?.date || 'no-date',
        draft: articles.value?.draft || false,
        tags: articles.value?.tags || [],
        image_alt: articles.value?.alt || 'no-alter'
    }
})


</script>
<template>
    <BlogHeader :title="article.title" :image="article.image" :description="article.description" :tags="article.tags"
        :date="article.date" :alt="article.image_alt"></BlogHeader>
    <div class="prose sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg
        prose-h1:no-underline prose-h2:no-underline prose-a:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg">
    <ContentRenderer v-if="articles" :value="articles">
        <template #empty>Nothing</template>
    </ContentRenderer>
    </div>
    <BlogSeprator></BlogSeprator>
</template>