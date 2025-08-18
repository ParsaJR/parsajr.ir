<script setup lang="ts">

useHead({
    title: 'About | ParsaJR',
    meta: [
        {
            name: 'description',
            content: 'Some information About me'
        }
    ]
})

</script>
<template>
    <div class="flex flex-col gap-3">
        <h3>About Me</h3>
        <hr class="h-1 border-0 dark:bg-gray-500 bg-gray-300 rounded-lg">
    </div>
    <div class="py-2 px-1">
        <p class="dark:text-gray-300 text-gray-700">I have always found it hard to write about myself.</p>
        <p class="dark:text-gray-300 text-gray-700">I try to do it in a list. So, it goes like this:</p>
        <h4 class="font-bold pt-2">Life in a Nutshell</h4>
        <ul class="list-disc list-inside p-3 flex flex-col gap-5">
            <li>Expert at the basics as a human being — staying hydrated and fed.</li>
            <li>Playing video games, reading about all sort of topics and cooking — these are some of my favorite ways
                to spend my free time.</li>
        </ul>
        <h4 class="font-bold pt-2">
            Tech Stuff
        </h4>
        <ul class="list-disc list-inside p-3 flex flex-col gap-5">
            <li>
                Keywords below represent things I'm familiar with and interested in, listed
                without any particular order:
                <div class="mt-3 ml-4 flex flex-wrap gap-x-2 justify-center">
                    <span>Golang,</span>
                    <span>JavaScript,</span>
                    <span>Python,</span>
                    <span>GNU/Linux,</span>
                    <span>Containerization & Orchestration,</span>
                    <span>TCP/IP,</span>
                    <span>Full-Stack Development</span>
                </div>
            </li>
        </ul>
        <br>
        <p>If you’d like to get in touch, connect with me via the links at the bottom of the page.</p>
    </div>
</template>
