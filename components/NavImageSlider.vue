<template>
  <div class="grid xl:grid-cols-2 gap-10 w-full px-10">
    <!-- Vertical Marquee: Normal Direction -->
    <div class="logos_marquee_vertical">
      <div class="marquee_logos_vertical">
        <template v-for="n in 2">
          <img
            v-for="(image, index) in images"
            :key="`normal-${n}-${index}`"
            :src="image.src"
            :alt="image.alt"
            class="intro-logos_logo w-full h-[400px] filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
          />
        </template>
      </div>
    </div>

    <!-- Vertical Marquee: Reverse Direction -->
    <div class="logos_marquee_vertical mt-10 hidden lg:block">
      <div class="marquee_logos_vertical_reverse">
        <template v-for="n in 2">
          <img
            v-for="(image, index) in reverseImages"
            :key="`reverse-${n}-${index}`"
            :src="image.src"
            :alt="image.alt"
            class="intro-logos_logo w-full h-[400px] filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const images = [
  { src: "/images/slider/cecy-found-1.jpg", alt: "cecy-foundation-image" },
  { src: "/images/slider/cecy-found-2.jpg", alt: "cecy-foundation-image" },
  { src: "/images/slider/cecy-found-3.jpg", alt: "cecy-foundation-image" },
  { src: "/images/slider/cecy-found-4.jpg", alt: "cecy-foundation-image" },
  { src: "/images/slider/cecy-found-5.jpg", alt: "cecy-foundation-image" },
];

const reverseImages = [
  { src: "/images/slider/cecy-found-6.jpg", alt: "cecy-foundation-image" },
  { src: "/images/slider/cecy-found-7.jpg", alt: "cecy-foundation-image" },
  { src: "/images/slider/cecy-found-8.jpg", alt: "cecy-foundation-image" },
  { src: "/images/slider/cecy-found-9.jpg", alt: "cecy-foundation-image" },
  { src: "/images/slider/cecy-found-10.jpg", alt: "cecy-foundation-image" },
];

</script>

<style scoped>
.logos_marquee_vertical {
 /* Adjust based on design */
  /* overflow: hidden; */
  height: 100vh;
  position: relative;
  mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
}

.marquee_logos_vertical,
.marquee_logos_vertical_reverse {
  display: flex;
  flex-direction: column;
}

.marquee_logos_vertical {
  animation: scrollY 20s linear infinite;
}

.marquee_logos_vertical_reverse {
  animation: scrollYReverse 20s linear infinite;
}

.marquee_logos_vertical img,
.marquee_logos_vertical_reverse img {
  margin: 1rem auto;
  display: block;
}

@keyframes scrollY {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes scrollYReverse {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}

</style>