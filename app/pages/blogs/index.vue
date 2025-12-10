<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()
const { data: posts } = await useAsyncData(`blogs-${locale.value}`, () => {
    const collection = ('content_' + locale.value) as keyof Collections
    return queryCollection(collection).order('date', 'DESC').where('draft', '=', false).all()
})

console.log(posts.value)
// formattedData gives some default values to the fields.
const formattedData = computed(() => {
    return posts.value?.map((article) => {

        const date = article.date ? new Date(article.date) : null;
        const formattedDate = date && !isNaN(date.getTime()) ? date.toISOString().split('T')[0] : 'no-date';

        return {
            path: article.path || '/',
            title: article.title || 'Post',
            date: formattedDate || '',
            tags: article.tags || [],
            image: article.image || '/blog-images/cat.jpg',
            description: article.description || '',
            draft: article.draft || false
        }
    })
})

useHead({
    title: 'Blog Posts | ParsaJR',
    meta: [
        {
            name: 'description',
            content: 'Here you will find all the blog posts i have written.'
        }
    ]
})
</script>

<template>
    <div class="flex flex-col gap-3">
        <div class="flex flex-row gap-3 justify-between">
            <h3>All Blog Posts</h3>
            <div class="pr-3 flex gap-5 text-2xl">
                <NuxtLink :to="$switchLocalePath('en')">🇺🇸</NuxtLink>
                <NuxtLink :to="$switchLocalePath('fa')">🇮🇷</NuxtLink>
            </div>
        </div>
        <hr class="h-1 border-0 dark:bg-gray-500 bg-gray-300">
    </div>
    <template v-for="post in formattedData" :key="post.title">
        <BlogCard :tags="post.tags" :date="post.date" :description="post.description" :draft="post.draft"
            :image="post.image" :title="post.title" :path="post.path"></BlogCard>
    </template>
</template>
