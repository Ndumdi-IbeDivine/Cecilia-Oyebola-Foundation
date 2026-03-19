<template>
    <div
        class="relative group"
        @mouseenter="showControls = true"
        @mouseleave="showControls = false"
    >
        <video
            ref="video"
            class="w-full cursor-pointer"
            @click="togglePlay"
            @ended="onEnded"
            :src="videoSrc"
            :poster="videoPoster"
        ></video>

        <button
            v-show="!isPlaying || showControls"
            class="absolute inset-0 m-auto w-16 h-16 bg-white bg-opacity-70 rounded-full flex items-center justify-center text-black text-2xl z-10 transition-opacity duration-300"
            @click.stop="togglePlay"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-6 h-6"
                v-if="!isPlaying"
            >
                <path d="M5 3v18l15-9L5 3z" />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-6 h-6"
                v-else
            >
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue";

defineProps(["videoSrc", "videoPoster"]);

const video = ref(null);
const isPlaying = ref(false);
const showControls = ref(false);

const togglePlay = () => {
    if (video.value.paused) {
        video.value.play();
        isPlaying.value = true;
    } else {
        video.value.pause();
        isPlaying.value = false;
    }
};

const onEnded = () => {
    isPlaying.value = false;
};
</script>

<style scoped>
button {
    transition: background 0.3s ease;
}
button:hover {
    background: white;
}
</style>
