<script setup lang="ts">

const { data: articles } = await useAsyncData('recent-post', () => {
    return queryCollection('blogs').order('id', 'DESC').where('draft', '=', false).limit(3).all()
})

const formattedData = computed(() => {
    return articles.value?.map((article) => {
        return {
            path: article.path || '/',
            title: article.title || 'no-title',
            description: article.description || 'no-description',
            image: article.image || '/blog-images/404.jpg',
            date: article.date || 'no-date',
            tags: article.tags || [],
            draft: article.draft || false,
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
        <BlogCard :title="post.title" :path="post.path" :description="post.description" :image="post.image"
            :date="post.date" :draft="post.draft" :tags="post.tags" />
    </template>
</template>
