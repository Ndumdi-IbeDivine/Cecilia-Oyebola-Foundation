<template>
	<div class="gallery-page relative isolate overflow-hidden">
		<!-- <div class="ambient ambient-left"></div>
		<div class="ambient ambient-right"></div> -->

		<div class="mx-auto max-w-7xl px-5 py-10 lg:px-20 lg:py-14">
			<section class="hero-card rounded-3xl p-6 md:p-10 lg:p-12">
				<p class="hero-chip w-fit">Moments Of Impact</p>
				<h1 class="font-satya mt-4 text-5xl leading-tight text-(--cecy-found-blue) md:text-6xl lg:text-7xl">Gallery</h1>
				<p class="mt-4 max-w-3xl text-base text-gray-700 md:text-lg">
					Step into the stories behind our mission. Every frame reflects courage,
					community support, and the lives transformed through education, healthcare,
					and empowerment.
				</p>
			</section>

			<section class="masonry-wrap mt-8">
				<article
					v-for="(image, index) in images"
					:key="image.src"
					class="gallery-card group"
					@click="openLightbox(index)"
				>
					<img :src="image.src" :alt="`Image ${index + 1}`" class="gallery-image" loading="lazy">
					<!-- <div class="overlay p-4 md:p-5">
						<h3 class="mt-2 text-lg font-semibold text-white md:text-xl">{{ image.title }}</h3>
					</div> -->
				</article>
			</section>
		</div>

		<Teleport to="body">
			<div
				v-if="selectedIndex !== null"
				class="lightbox fixed inset-0 z-9999 flex items-center justify-center p-4"
				role="dialog"
				aria-modal="true"
			>
				<button type="button" class="close-btn" aria-label="Close lightbox" @click="closeLightbox">&#10005;</button>

				<button type="button" class="nav-btn left-3" aria-label="Previous image" @click="prevImage">&#10094;</button>

				<div class="w-full max-w-5xl rounded-3xl p-2 md:p-3">
                    <div class="flex justify-center w-full">
                        <img
                            :src="images[selectedIndex].src"
                            :alt="`Image ${selectedIndex + 1}`"
                            class="max-h-[72vh] rounded object-contain"
                        >
                    </div>

					<div class="lightbox-frame thumb-rail mt-3 overflow-x-auto rounded-xl bg-black/35 p-2">
						<div class="flex min-w-max gap-2">
							<button
								v-for="(thumb, thumbIndex) in images"
								:key="thumb.src"
								type="button"
								class="thumb-btn"
								:class="{ 'is-active': thumbIndex === selectedIndex }"
								@click="selectedIndex = thumbIndex"
							>
								<img
									:src="thumb.src"
									:alt="`Thumbnail ${thumbIndex + 1}`"
									class="h-16 w-22 rounded-lg object-cover md:h-18 md:w-28"
								>
							</button>
						</div>
					</div>
				</div>

				<button type="button" class="nav-btn right-3" aria-label="Next image" @click="nextImage">&#10095;</button>
			</div>
		</Teleport>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

type GalleryImage = {
	src: string;
};

const selectedIndex = ref<number | null>(null);

const images: GalleryImage[] = [
	{ src: "/images/cecy-found-1.jpg" },
	{ src: "/images/cecy-found-2.jpg" },
	{ src: "/images/cecy-found-3.jpg" },
	{ src: "/images/cecy-found-4.jpg" },
	{ src: "/images/cecy-found-5.jpg" },
	{ src: "/images/cecy-found-6.jpg" },
	{ src: "/images/cecy-found-7.jpg" },
	{ src: "/images/cecy-found-8.jpg" },
	{ src: "/images/cecy-found-9.jpg" },
	{ src: "/images/cecy-found-10.jpg" },
	{ src: "/images/cecy-found-11.jpg" },
	{ src: "/images/cecy-found-12.jpg" },
	{ src: "/images/cecy-found-13.jpg" },
	{ src: "/images/cecy-found-14.jpg" },
	{ src: "/images/cecy-found-15.jpg" },
	{ src: "/images/cecy-found-16.jpg" },
	{ src: "/images/cecy-found-17.jpg" },
	{ src: "/images/cecy-found-18.jpg" },
	{ src: "/images/cecy-found-19.jpg" },
	{ src: "/images/cecy-found-20.jpg" },
	{ src: "/images/cecy-found-21.jpg" },
	{ src: "/images/cecy-found-22.jpg" },
	{ src: "/images/cecy-found-23.jpg" },
	{ src: "/images/cecy-found-24.jpg" },
	{ src: "/images/cecy-found-25.jpg" },
	{ src: "/images/cecy-found-26.jpg" },
];

const openLightbox = (index: number) => {
	selectedIndex.value = index;
};

const closeLightbox = () => {
	selectedIndex.value = null;
};

const nextImage = () => {
	if (selectedIndex.value === null) {
		return;
	}

	selectedIndex.value = (selectedIndex.value + 1) % images.length;
};

const prevImage = () => {
	if (selectedIndex.value === null) {
		return;
	}

	selectedIndex.value =
		(selectedIndex.value - 1 + images.length) % images.length;
};

const handleKeyDown = (event: KeyboardEvent) => {
	if (selectedIndex.value === null) {
		return;
	}

	if (event.key === "Escape") {
		closeLightbox();
	}

	if (event.key === "ArrowRight") {
		nextImage();
	}

	if (event.key === "ArrowLeft") {
		prevImage();
	}
};

onMounted(() => {
	window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
	window.removeEventListener("keydown", handleKeyDown);
});

useHead({
	title: "Gallery",
	meta: [
		{ name: "keywords", content: "cecyhealth, cecyfoundation gallery, ngo in nigeria, empowerment photos, community outreach" },
		{ name: "description", content: "Explore the Cecilia Oyebola Foundation gallery and experience moments of impact across education, healthcare, and community empowerment." },
		{ property: "og:title", content: "Gallery - Cecilia Oyebola Foundation" },
		{ property: "og:description", content: "A visual journey through the Cecilia Oyebola Foundation's outreach, education, and healthcare impact." },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://ceciliaoyebolafoundation.com/gallery" },
		{ property: "og:image", content: "https://cecyhealth.org/images/cecy-foundation-logo.png" },
	],
});
</script>

<style scoped>
.gallery-page {
	background:
		radial-gradient(circle at 6% 12%, rgba(74, 94, 185, 0.18), transparent 30%),
		radial-gradient(circle at 92% 20%, rgba(249, 184, 68, 0.25), transparent 28%),
		linear-gradient(145deg, #fffaf1 0%, #f8fbff 48%, #fef4de 100%);
}

.ambient {
	position: absolute;
	border-radius: 9999px;
	filter: blur(52px);
	pointer-events: none;
}

.ambient-left {
	width: 220px;
	height: 220px;
	background: rgba(74, 94, 185, 0.3);
	left: -70px;
	top: 70px;
}

.ambient-right {
	width: 220px;
	height: 220px;
	background: rgba(249, 184, 68, 0.32);
	right: -70px;
	bottom: 90px;
}

.hero-card {
	background: linear-gradient(140deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.62));
	border: 1px solid rgba(255, 255, 255, 0.9);
	box-shadow: 0 20px 44px rgba(57, 72, 143, 0.12);
	backdrop-filter: blur(6px);
}

.chip {
	border: 1px solid rgba(74, 94, 185, 0.2);
	border-radius: 9999px;
	padding: 0.4rem 0.9rem;
	font-size: 0.72rem;
	letter-spacing: 0.23em;
	font-weight: 600;
	text-transform: uppercase;
	color: var(--cecy-found-blue);
	background: #ffffffcf;
}

.masonry-wrap {
	column-count: 1;
	column-gap: 1rem;
}

@media (min-width: 640px) {
	.masonry-wrap {
		column-count: 2;
	}
}

@media (min-width: 1024px) {
	.masonry-wrap {
		column-count: 3;
		column-gap: 1.25rem;
	}
}

.gallery-card {
	position: relative;
	display: inline-block;
	width: 100%;
	break-inside: avoid;
	overflow: hidden;
	/* border-radius: 1.25rem; */
	margin-bottom: 1rem;
	cursor: pointer;
	box-shadow: 0 14px 34px rgba(22, 34, 82, 0.14);
}

.gallery-image {
	width: 100%;
	height: auto;
	object-fit: cover;
	transition: transform 0.4s ease, filter 0.4s ease;
}

.overlay {
	position: absolute;
	inset: auto 0 0 0;
	background: linear-gradient(to top, rgba(15, 23, 42, 0.78), rgba(15, 23, 42, 0));
	transform: translateY(14px);
	opacity: 0.92;
	transition: transform 0.3s ease, opacity 0.3s ease;
}

.gallery-card:hover .gallery-image {
	transform: scale(1.05);
	filter: saturate(1.06);
}

.gallery-card:hover .overlay {
	transform: translateY(0);
	opacity: 1;
}

.lightbox {
	background: rgba(3, 8, 26, 0.82);
	backdrop-filter: blur(5px);
}

.lightbox-frame {
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.05));
	border: 1px solid rgba(255, 255, 255, 0.2);
}

.thumb-rail {
	scrollbar-width: thin;
	scrollbar-color: rgba(255, 255, 255, 0.45) transparent;
}

.thumb-btn {
	flex: 0 0 auto;
	border-radius: 0.75rem;
	border: 2px solid transparent;
	opacity: 0.68;
	transition: opacity 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
}

.thumb-btn:hover {
	opacity: 0.92;
	transform: translateY(-1px);
}

.thumb-btn.is-active {
	opacity: 1;
	border-color: var(--cecy-found-yellow);
	box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.28);
}

.nav-btn,
.close-btn {
	position: absolute;
	width: 2.65rem;
	height: 2.65rem;
	border-radius: 9999px;
	display: grid;
	place-items: center;
	color: white;
	border: 1px solid rgba(255, 255, 255, 0.34);
	background: rgba(255, 255, 255, 0.16);
	transition: background 0.2s ease, transform 0.2s ease;
}

.nav-btn {
	top: 50%;
	transform: translateY(-50%);
}

.close-btn {
	right: 1rem;
	top: 1rem;
}

.nav-btn:hover,
.close-btn:hover {
	background: rgba(255, 255, 255, 0.28);
}

.nav-btn:focus-visible,
.close-btn:focus-visible,
.thumb-btn:focus-visible {
	outline: 2px solid #ffffff;
	outline-offset: 2px;
}

@media (max-width: 768px) {
	.nav-btn {
		width: 2.3rem;
		height: 2.3rem;
	}
}
</style>
