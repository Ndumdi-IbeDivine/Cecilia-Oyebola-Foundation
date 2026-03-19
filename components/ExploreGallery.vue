<template>
    <div class="overflow-hidden relative px-5 lg:px-30">
        <div class="absolute inset-0 bg-linear-to-br from-[#4a5eb9] to-[#2d3d8f]"></div>
        <div class="absolute inset-0 opacity-20" style="background-image: url('/images/slider/cecy-found-3.jpg'); background-size: cover; background-position: center;"></div>
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 py-8 md:py-12">
            <div class="space-y-3 text-center md:text-left">
                <p class="text-yellow-300 text-sm font-semibold uppercase tracking-widest">See our work in action</p>
                <h2 class="font-satya text-3xl md:text-4xl text-white leading-snug">Explore our Photo Gallery</h2>
                <p class="text-white/75 max-w-md text-sm leading-6">Browse photos from our outreaches, events, and community programs — a visual story of lives being changed every day.</p>
            </div>
            <NuxtLink
                to="/gallery"
                class="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-semibold text-(--cecy-found-blue) shadow-lg transition hover:bg-yellow-300 hover:text-(--cecy-found-blue) hover:shadow-xl"
            >
                View Gallery
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>