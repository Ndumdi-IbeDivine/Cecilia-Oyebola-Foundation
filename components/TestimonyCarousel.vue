<template>
    <section
        class="overflow-x-hidden px-3 sm:px-4 md:px-10"
        @mouseenter="pauseAutoPlay"
        @mouseleave="resumeAutoPlay"
    >
        <div class="carousel-frame relative overflow-hidden rounded-3xl p-0.5 sm:p-1">
            <div
                class="slides flex transition-transform duration-700 ease-[cubic-bezier(.22,.8,.24,1)]"
                :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
                <article
                    v-for="(testimony, index) in testimonies"
                    :key="index"
                    class="slide-card w-full shrink-0 px-3 py-7 text-center sm:px-4 md:px-10 md:py-12"
                >
                    <div class="mx-auto mb-6 h-0.5 w-16 rounded-full bg-(--cecy-found-yellow)"></div>

                    <p class="quote-text text-white/95">"{{ testimony.message }}"</p>
                </article>
            </div>

            <div class="edge-fade pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#203275]/30 to-transparent"></div>
            <div class="edge-fade pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-[#203275]/30 to-transparent"></div>

            <div class="controls-wrap absolute left-2 right-2 top-1/2 flex -translate-y-1/2 justify-between md:left-5 md:right-5">
                <button
                    type="button"
                    aria-label="Previous testimony"
                    @click="prev"
                    @focus="pauseAutoPlay"
                    @blur="resumeAutoPlay"
                    class="control-btn"
                >
                    <span aria-hidden="true">&#10094;</span>
                </button>

                <button
                    type="button"
                    aria-label="Next testimony"
                    @click="next"
                    @focus="pauseAutoPlay"
                    @blur="resumeAutoPlay"
                    class="control-btn"
                >
                    <span aria-hidden="true">&#10095;</span>
                </button>
            </div>
        </div>

        <div class="mt-5 flex items-center justify-center gap-2">
            <button
                v-for="(_, i) in testimonies"
                :key="i"
                :aria-label="`Go to testimony ${i + 1}`"
                class="dot-btn"
                :class="{ 'is-active': i === currentSlide }"
                @click="goToSlide(i)"
            ></button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const testimonies = [
    {
        name: "Jane Doe",
        title: "Client",
        message:
            "We are committed to ensuring that every child has access to quality education, regardless of their financial background. Through our scholarship initiatives, we provide opportunities for students who cannot afford schooling, enabling them to pursue their academic goals. Additionally, we distribute educative materials such as books, stationery, and digital learning tools to equip learners with the resources they need to succeed. Our mentorship programs further support students by guiding them toward academic excellence and career achievements, fostering a generation of empowered and knowledgeable individuals.!",
    },
    {
        name: "John Smith",
        title: "Customer",
        message:
            "Healthcare is a fundamental right, and we strive to make it accessible to communities in need. The foundation organizes regular outreaches to provide free healthcare services and raise awareness about critical health issues. We supply essential medical provisions and educate communities on hygiene, nutrition, and preventative healthcare practices. By addressing these basic health needs, we aim to build stronger and healthier communities capable of thriving.",
    },
    {
        name: "Mary Johnson",
        title: "Partner",
        message:
            "Empowering individuals to achieve their dreams lies at the heart of our mission. We offer skill acquisition and personal development workshops, particularly for women and young adults, equipping them with practical tools for success. Our programs focus on fostering leadership, entrepreneurship, and self-reliance, encouraging individuals to embrace their potential. Through these initiatives, we help people build confidence, develop resilience, and seize opportunities to transform their lives and contribute meaningfully to society.",
    },
];

const currentSlide = ref(0);
let intervalId: ReturnType<typeof setInterval> | null = null;

const next = () => {
    currentSlide.value = (currentSlide.value + 1) % testimonies.length;
};

const prev = () => {
    currentSlide.value =
        (currentSlide.value - 1 + testimonies.length) % testimonies.length;
};

const goToSlide = (index: number) => {
    currentSlide.value = index;
};

const startAutoPlay = () => {
    intervalId = setInterval(next, 10000);
};

const pauseAutoPlay = () => {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

const resumeAutoPlay = () => {
    if (intervalId === null) {
        startAutoPlay();
    }
};

onMounted(() => {
    startAutoPlay();
});

onUnmounted(() => {
    pauseAutoPlay();
});
</script>

<style scoped>
.carousel-frame {
    background: linear-gradient(130deg, #253988 0%, #3e52ac 45%, #f2aa30 120%);
}

.slides {
    width: 100%;
}

.slide-card {
    box-sizing: border-box;
    min-width: 100%;
    max-width: 100%;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.quote-text {
    margin: 0 auto;
    max-width: 70ch;
    font-size: clamp(1rem, 0.94rem + 0.24vw, 1.22rem);
    line-height: 1.9;
    font-style: italic;
    overflow-wrap: anywhere;
    word-break: break-word;
    hyphens: auto;
}

.control-btn {
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 9999px;
    display: grid;
    place-items: center;
    font-size: 1.25rem;
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(4px);
    transition: transform 0.2s ease, background 0.2s ease;
}

.control-btn:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.3);
}

.control-btn:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
}

.dot-btn {
    width: 0.68rem;
    height: 0.68rem;
    border-radius: 9999px;
    background: #cbd5e1;
    transition: width 0.25s ease, background 0.25s ease;
}

.dot-btn.is-active {
    width: 1.8rem;
    background: linear-gradient(90deg, var(--cecy-found-blue), var(--cecy-found-yellow));
}

.progress-fill {
    background: linear-gradient(90deg, var(--cecy-found-blue), var(--cecy-found-yellow));
    transition: width 0.5s ease;
}

@media (max-width: 768px) {
    .slide-card {
        min-height: 320px;
    }

    .quote-text {
        font-size: 0.98rem;
        line-height: 1.7;
        max-width: 62ch;
    }

    .control-btn {
        width: 2.35rem;
        height: 2.35rem;
        font-size: 1.1rem;
    }
}

@media (max-width: 640px) {
    .slide-card {
        min-height: 0;
        padding-top: 1.25rem;
        padding-bottom: 4.2rem;
    }

    .quote-text {
        font-size: 0.95rem;
        line-height: 1.65;
    }

    .controls-wrap {
        padding-top: 10px;
        top: auto;
        bottom: 0.9rem;
        left: 0.5rem;
        right: 0.5rem;
        transform: none;
        justify-content: center;
        gap: 0.9rem;
    }

    .edge-fade {
        display: none;
    }
}
</style>
