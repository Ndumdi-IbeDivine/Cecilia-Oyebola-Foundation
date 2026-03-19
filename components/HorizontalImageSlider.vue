<template>
    <div class="logos_marquee w-[90vw] md:w-[95vw] lg:w-full">
        <div class="marquee_logos">
            <template v-for="n in 2">
                <img
                    v-for="(image, index) in images"
                    :key="`normal-${n}-${index}`"
                    :src="image.src"
                    :alt="image.alt"
                    class="intro-logos_logo w-full h-[400px]"
                />
            </template>
        </div>
    </div>
</template>

<script setup>
const images = [
    { src: "/images/slider/cecy-found-3.jpg", alt: "cecy-foundation-image" },
    { src: "/images/slider/cecy-found-4.jpg", alt: "cecy-foundation-image" },
    { src: "/images/slider/cecy-found-5.jpg", alt: "cecy-foundation-image" },
    { src: "/images/slider/cecy-found-6.jpg", alt: "cecy-foundation-image" },
    { src: "/images/slider/cecy-found-7.jpg", alt: "cecy-foundation-image" },
    { src: "/images/slider/cecy-found-8.jpg", alt: "cecy-foundation-image" },
    { src: "/images/slider/cecy-found-9.jpg", alt: "cecy-foundation-image" },
    { src: "/images/slider/cecy-found-10.jpg", alt: "cecy-foundation-image" },
    { src: "/images/slider/cecy-found-11.jpg", alt: "cecy-foundation-image" },
    { src: "/images/slider/cecy-found-1.jpg", alt: "cecy-foundation-image" },
    { src: "/images/slider/cecy-found-2.jpg", alt: "cecy-foundation-image" },
    { src: "/images/slider/cecy-found-3.jpg", alt: "cecy-foundation-image" },
    { src: "/images/slider/cecy-found-12.jpg", alt: "cecy-foundation-image" },
];
</script>

<style scoped>
.logos_marquee {
    overflow: hidden;
    white-space: nowrap;
    mask-image: linear-gradient(
        to right,
        transparent,
        black 10%,
        black 90%,
        transparent
    );
    height: auto;
}

.marquee_logos {
    display: inline-flex;
    gap: 2rem;
    animation: scrollX 15s linear infinite;
}

@keyframes scrollX {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-50%);
    }
}

.intro-logos_logo {
    display: inline-block;
}
</style>