<script setup lang="ts">
import type { Collections, TocLink } from '@nuxt/content';
import type { BlogPost } from '~/types/blog';
import { withLeadingSlash } from 'ufo'


const { locale } = useI18n()

console.log(locale.value)

const route = useRoute()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: article } = await useAsyncData(`blog-post-${slug.value}`, async () => {
    const collection = ('content_' + locale.value) as keyof Collections
    return await queryCollection(collection).path(slug.value).first()
})

if (!article.value) throw createError({ statusCode: 404, statusMessage: 'Post Not Found' })

let toc: TocLink[];

if (article.value.body?.toc?.links) {
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


const isPersian = locale.value == 'fa' ? true : false
const fa_classObject = computed(() => ({
    'text-right': isPersian
}))

</script>
<template>
    <BlogHeader :title="post.title" :image="post.image" :description="post.description" :tags="post.tags"
        :date="post.date"></BlogHeader>
    <BlogToc :rtl="isPersian" v-if="toc.length > 4" :tocs="toc" class="hidden md:flex" />

    <div dir="auto" :class="fa_classObject"
        class="anchors mt-10 prose sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg
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

.anchors:deep(a:not(h2>a)):hover {
    box-shadow:
        inset 0 -30px 0 #42b883,
        0 1px 0 #42b883;
}
</style>
