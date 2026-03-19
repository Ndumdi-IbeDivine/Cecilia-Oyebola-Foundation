<template>
    <header
        class="text-gray-400 bg-[#0b153c] body-font fixed z-999 top-0 left-0 right-0 w-full"
    >
        <div class="grid grid-cols-2 items-center lg:px-30 px-2 py-2">
            <!-- Logo -->
            <NuxtLink to="/" class="w-fit">
                <img
                    src="/images/cecy-foundation-logo.png"
                    class="h-16"
                    alt="Logo"
                />
            </NuxtLink>

            <!-- Hamburger icon -->
            <button
                class="justify-self-end cursor-pointer p-3"
                @click="isMenuOpen = true"
            >
                <svg
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>

        <!-- Fullscreen overlay menu -->
        <transition name="slide-down">
            <div
                v-if="isMenuOpen"
                class="fixed inset-0 bg-gray-900 text-white space-y-8 z-50 transition-all duration-500"
            >
                <button
                    class="absolute top-6 right-2 lg:right-30 cursor-pointer p-3 border z-50 group rounded-full hover:bg-white hover:text-black"
                    @click="isMenuOpen = false"
                >
                    <svg
                        class="w-8 h-8 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110 hover:text-black"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div class="grid md:grid-cols-2 lg:ps-30">
                    <div class="flex flex-col justify-center space-y-6 h-screen p-10 lg:p-0">
                        <div class="">
                            <img src="/images/cecy-foundation-logo.png" class="w-[40%] lg:w-[20%]" alt="">
                        </div>
                        <NuxtLink
                          @click="isMenuOpen = false"
                          to="/"
                          class="lg:text-3xl text-2xl flex gap-5 items-center group lg:hover:text-5xl eaase-in-out transition-all duration-300 w-fit"
                          exact-active-class="active-link"
                        >
                            <span class="text-gray-400">01</span>
                            <span class="h-px w-20 bg-white transition-all duration-300 ease-in-out group-hover:w-28"></span>
                            Home
                        </NuxtLink>

                        <NuxtLink
                          @click="isMenuOpen = false"
                          to="/who-we-are"
                          class="lg:text-3xl text-2xl flex gap-5 items-center group lg:hover:text-5xl eaase-in-out transition-all duration-300 w-fit"
                          exact-active-class="active-link"
                        >
                            <span class="text-gray-400">02</span>
                            <span class="h-px w-20 bg-white transition-all duration-300 ease-in-out group-hover:w-28"></span>
                            Who We Are
                        </NuxtLink>

                        <NuxtLink
                          @click="isMenuOpen = false"
                          to="/our-impact"
                          class="lg:text-3xl text-2xl flex gap-5 items-center group lg:hover:text-5xl eaase-in-out transition-all duration-300 w-fit"
                          exact-active-class="active-link"
                        >
                            <span class="text-gray-400">03</span>
                            <span class="h-px w-20 bg-white transition-all duration-300 ease-in-out group-hover:w-28"></span>
                            Our Impact
                        </NuxtLink>

                        <NuxtLink
                          @click="isMenuOpen = false"
                          to="/gallery"
                          class="lg:text-3xl text-2xl flex gap-5 items-center group lg:hover:text-5xl eaase-in-out transition-all duration-300 w-fit"
                          exact-active-class="active-link"
                        >
                            <span class="text-gray-400">04</span>
                            <span class="h-px w-20 bg-white transition-all duration-300 ease-in-out group-hover:w-28"></span>
                            Gallery
                        </NuxtLink>
                        <!-- <SecondaryBtn @click="isMenuOpen = false">Partner with us</SecondaryBtn> -->
                    </div>

                    <div class="hidden md:block">
                        <NavImageSlider />
                    </div>
                </div>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s ease;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.active-link {
    color: var(--cecy-found-yellow);
}
</style>
