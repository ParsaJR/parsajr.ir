<script setup lang="ts">
interface Props {
    path: string,
    title: string,
    date: string,
    description: string,
    image: string,
    tags: Array<string>,
    draft: boolean
}

const { path = '/', title = 'no-title', date = 'no-date', description = 'no-description', image = '/blog-images/404.jpg', tags = [], draft = false } = defineProps<Props>()

</script>


<template>
    <NuxtLink :to="path">
        <div class="ml-2 mt-3">
            <h3 class="text-ellipsis line-clamp-2">{{ title }}</h3>

            <p class="font-thin text-gray-600 dark:text-gray-300 py-1">{{ description }}</p>
            <p class="flex items-center gap-1">
                <LogoDate /> {{ date }}
            </p>
            <div class="flex items-center gap-1">
                <LogoTag /> <span class="pr-1 text-sm font-light" v-for="tag in tags">{{ tag
                    }}</span>
            </div>
            <div>
                <hr class="h-px my-3 border-0 bg-gray-500">
            </div>
        </div>
    </NuxtLink>

</template>