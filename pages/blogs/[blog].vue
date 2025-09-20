<script setup lang="ts">
import type { TocLink } from '@nuxt/content';
import type { BlogPost } from '~/types/blog';


let path= useRoute().fullPath.split('#')[0];

if (path.endsWith('/')) path = path.slice(0,-1)
const { data: article } = await useAsyncData(`blog-post-${path}`, () => {
 return queryCollection('blogs').path(path).first()
})




if (!article.value) throw createError({statusCode: 404,statusMessage: 'Page Not Found'}) 

let toc: TocLink[];

if(article.value.body?.toc?.links){ 
 toc = article.value.body.toc.links
}



const post = computed<BlogPost>(() => {
    return {
        title: article.value?.title || 'no-title',
        description: article.value?.description || 'no-description',
        image: article.value?.image || 'blog-images/general.jpg',
        date: article.value?.date || 'no-date',
        draft: article.value?.draft || false,
        tags: article.value?.tags || []
    }
})

useHead({
    title: article.value.title,
    meta: [
        {
            name: 'description',
            content: article.value.description
        }
    ]
})

</script>
<template>
    <BlogHeader :title="post.title" :image="post.image" :description="post.description" :tags="post.tags"
        :date="post.date"></BlogHeader>
    <BlogToc v-if="toc.length > 4" :tocs="toc" class="hidden md:flex"/>

    <div class="anchors mt-10 prose sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg
        prose-h1:no-underline prose-h2:no-underline prose-a:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg">
    <ContentRenderer v-if="article" :value="article">
        <template #empty>Nothing</template>
    </ContentRenderer>
    </div>
    <BlogSeprator></BlogSeprator>
</template>
<style scoped>
 .anchors:deep(a:not(h2 > a)) {
   text-decoration: none;
    box-shadow:
        inset 0 -2px 0 #42b883,
        0 1px 0 #42b883;
    transition: box-shadow 0.3s;
    color: inherit;
    overflow: hidden;
    font-weight: bold;
}
 .anchors:deep(a:not(h2>a)):hover{
    box-shadow:
        inset 0 -30px 0 #42b883,
        0 1px 0 #42b883;
}
</style>
