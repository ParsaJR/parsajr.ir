<script setup lang="ts">
interface Props {
    title: string,
    date: string,
    tags: string[],
    image: string,
    alt: string,
    description: string
}

const { title = 'no-title', date = 'no-date', alt = '', description = 'no description', image = '#', tags = [] } = defineProps<Props>()

</script>
<template>
    <div class="my-5 flex justify-center">
        <h2>{{ title }}</h2>
    </div>
    <div class="flex justify-center">
        <NuxtImg :src="image" :alt="alt" class="rounded-2xl"></NuxtImg>
    </div>
    <div class="m-2 text-center">
        <p class="text-xs dark:text-gray-400 text-gray-600 md:text-lg">{{ description }}</p>
    </div>
    <div class="flex w-full justify-center text-xs md:text-base my-5">
        <div class="justify-center items-center md:flex gap-10 content-center">
            <div class="flex items-center gap-2">
                <LogoDate /> <span>{{ date }}</span>
            </div>
            <div class="flex items-center my-5 gap-2">
                <LogoTag /> <span class="dark:bg-gray-700 bg-gray-300 rounded-md px-2 py-0.5" v-for="tag in tags">{{
                    tag }}</span>
            </div>

        </div>
    </div>

</template>