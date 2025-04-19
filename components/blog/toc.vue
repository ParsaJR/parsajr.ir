<script setup lang="ts">
import type { TocLink } from '@nuxt/content';

interface Props {
	tocs: TocLink[]
}

const links = defineProps<Props>()

console.log(links.tocs)
</script>
<template>
	<div class='flex justify-center'>
	<div class="inline-flex justify-start bg-[#2e2e2e] md:h-1/3 md:w-2/5 px-8 py-5 rounded-md">
		<ul class="list-[square] list-outside text-sm md:text-lg">
			<li v-for="link in links.tocs" class="py-1">
				<NuxtLink :to="`#${link.id}`" class="hover:underline">{{link.text}}</NuxtLink>
			</li>
		</ul>
	</div>
	</div>
</template>
<style scoped>
li::marker {
	color: #42b88a 
}
</style>
