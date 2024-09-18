<script setup lang="ts">
const data = await useAsyncData('blogs', () => queryContent('blogs').sort({_id: -1}).find())
console.log(data.data);
const formattedData = computed(() => {
    return data.data.value?.map((article) => {
        return {
            path : article._path || '/',
            title: article.title || 'no-title',
            date: article.date || 'no-date',
            tags: article.tags || [],
            image: article.image || '',
            description: article.description || 'no-description',
            draft: article.draft || false   
        }
    })
})
</script>

<template>
    <div class="flex flex-col gap-3">
        <h3>All Blog Posts</h3>
        <hr class="h-1 border-0 bg-gray-500">
    </div>
    <template v-for="post in formattedData" :key="post.title">
        <BlogCard :tags="post.tags" :date="post.date" :description="post.description" :draft="post.draft" :image="post.image" :title="post.title" :path="post.path"    ></BlogCard>
    </template>
</template>