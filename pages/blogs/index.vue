<script setup lang="ts">
// const data = await useAsyncData('blogs', () => queryCollection('blogs').sort({_id: -1}).where({draft: false}).find())
const { data: posts } = await useAsyncData('blogs', () => {
    return queryCollection('blogs').order('id','DESC').where('draft','=',false).all()
})

// formattedData gives some default values to the fields.
const formattedData = computed(() => {
    return posts.value?.map((article) => {
        return {
            path: article.path || '/',
            title: article.title || 'Post',
            date: article.date || '',
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
        <h3>All Blog Posts</h3>
        <hr class="h-1 border-0 dark:bg-gray-500 bg-gray-300">
    </div>
    <template v-for="post in formattedData" :key="post.title">
        <BlogCard :tags="post.tags" :date="post.date" :description="post.description" :draft="post.draft"
            :image="post.image" :title="post.title" :path="post.path"></BlogCard>
    </template>
</template>
