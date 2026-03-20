<template>
    <footer class="relative overflow-hidden bg-[#0b153c] text-white">
        <div class="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#4a5eb9]/40 blur-3xl"></div>
        <div class="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#f9b844]/30 blur-3xl"></div>

        <div class="relative mx-auto w-full max-w-7xl px-5 py-12 lg:px-8 lg:py-14">
            <div class="grid gap-10 lg:grid-cols-[1.2fr_1fr_1.1fr] lg:gap-12">
                <div class="space-y-4">
                    <NuxtLink to="/" class="inline-flex items-center">
                        <img src="/images/cecy-foundation-logo.png" class="h-28 md:h-32" alt="Cecelia Oyebola Foundation logo">
                    </NuxtLink>
                    <p class="max-w-md text-sm leading-7 text-slate-200">
                        Empowering lives and communities through meaningful support in education,
                        healthcare, and personal development.
                    </p>
                    <NuxtLink
                        to="/our-impact"
                        class="inline-flex items-center rounded-full bg-[#f9b844] px-5 py-2.5 text-sm font-semibold text-[#0b153c] transition hover:bg-[#ffd072]"
                    >
                        See Our Impact
                    </NuxtLink>
                </div>

                <div>
                    <h2 class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Explore</h2>
                    <ul class="space-y-3 text-sm text-slate-200">
                        <li>
                            <NuxtLink to="/" class="transition hover:text-[#f9b844]">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/who-we-are" class="transition hover:text-[#f9b844]">Who We Are</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/our-impact" class="transition hover:text-[#f9b844]">Our Impact</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/gallery" class="transition hover:text-[#f9b844]">Gallery</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Contact</h2>
                    <div class="space-y-4 text-sm text-slate-200">
                        <div class="flex items-center gap-3">
                            <span class="mt-0.5 rounded-full bg-white/10 p-2 text-[#f9b844] h-fit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1h-5.25a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75H9.75a.75.75 0 00-.75.75v4.5c0 .414-.336.75-.75.75H3.75A.75.75 0 013 20V9.75z" />
                                </svg>
                            </span>
                            <span>
                                Cecilian Whitehouse, 12 Kayode Abraham Street, Off Ligali Ayorinde Street,
                                Victoria Island, Lagos State, Nigeria.
                            </span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="mt-0.5 rounded-full bg-white/10 p-2 text-[#f9b844]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.25 4.5C2.25 3.675 2.925 3 3.75 3h1.5c.414 0 .75.336.75.75v2.25a.75.75 0 01-.75.75H4.5v1.5c0 6.075 4.925 11 11 11h1.5v-1.5a.75.75 0 01.75-.75h2.25a.75.75 0 01.75.75v1.5c0 .825-.675 1.5-1.5 1.5h-3A15.75 15.75 0 012.25 4.5z" />
                                </svg>
                            </span>
                            <a href="tel:+2349131058071" class="transition hover:text-[#f9b844]">0913 105 8071</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-10 border-t border-white/15 pt-5 text-center text-xs text-slate-300 sm:text-sm">
                © {{ new Date().getFullYear() }} Cecelia Oyebola Foundation. All Rights Reserved.
            </div>
        </div>
    </footer>

</template>