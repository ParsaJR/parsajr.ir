<script setup lang="ts">
const data = await useAsyncData('recent-post', () => queryContent('/blogs').sort({_id: -1}).limit(3).find())

const formattedData = computed(() => {
    return data.data.value?.map((article) => {
        return {
            path: article._path || '/',
            title: article.title || 'no-title',
            description: article.description || 'no-description',
            image: article.image || '/blog-images/404.jpg',
            date: article.date || 'no-date',
            tags: article.tags || [],
            draft: article._draft || false
        }
    })
})
</script>
<template>
    <div class="mt-10 flex gap-2 items-center">
        <Icon name="i-carbon:recently-viewed" size="20px"></Icon>
        <h3 class="font-bold">Recent Posts</h3>
    </div>
        <hr class="h-1 my-3 border-0 dark:bg-gray-500 bg-gray-300 rounded-lg">
    
    <template v-for="post in formattedData" :key="post.title">
        <BlogCard :title="post.title" :path="post.path" :description="post.description" :image="post.image" :date="post.date" :draft="post.draft" :tags="post.tags" />
    </template>
</template>