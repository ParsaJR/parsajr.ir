<script setup lang="ts">
import type { TocLink } from '@nuxt/content';

interface Props {
	tocs: TocLink[]
}

const links = defineProps<Props>()
</script>
<template>
	<div class='flex justify-center'>
		<div class="inline-flex justify-start dark:bg-[#2e2e2e] bg-[#f1f1f1] md:h-1/3 md:w-2/5 px-8 py-5 rounded-md">
			<ul class="list-[square] list-outside text-sm md:text-lg">
				<NuxtLink :to="`#${link.id}`" v-for="link in links.tocs" class="hover:underline">
					<li class="py-1">
						{{ link.text }}
					</li>
				</NuxtLink>
			</ul>
		</div>
	</div>
</template>
<style scoped>
li::marker {
	color: #13a11a
}
</style>
