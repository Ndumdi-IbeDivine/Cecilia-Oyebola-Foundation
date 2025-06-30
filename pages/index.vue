<template>
    <div class="grid gap-20">
        <!-- hero -->
        <div class="lg:relative isolate overflow-hidden bg-white py-16">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
            <div class="mx-auto grid md:grid-cols-1 px-5 lg:px-0">
                <div class="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="lg:pt-4 lg:pr-8 lg:pl-30">
                        <div class="h-full flex flex-col justify-center lg:max-w-lg">
                            <h2 class="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-pretty text-gray-900 font-satya">Empowering lives</h2>
                            <h2 class="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-pretty text-gray-900 font-satya">Empowering communities</h2>
                            <p class="mt-6 text-lg/8 text-gray-600">Access to education, healthcare, and self-development should be a right, not a privilege, for every individual, no matter who or where they are.</p>
                            <div class="mt-8">
                                <NuxtLink to="/who-we-are">
                                    <PrimaryBtn>Who we are</PrimaryBtn>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div>
                        <VideoPlayer
                            class="w-full lg:w-[48rem] h-[500px] overflow-hidden max-w-none rounded-lg lg:rounded-none lg:rounded-l-lg shadow-xl ring-1 ring-gray-400/10" 
                            video-src="/video/Cecy-foundation hero video.mp4" 
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:px-30 px-5 grid gap-20 ">
            <div class="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <img class="shadow-xl rounded-lg lg:w-full" src="/images/cecy-found-3.jpg" alt="">
                </div>
                <div>
                    <h3 class="mt-2 header">Who we are</h3>
    
                    <p class="mt-6 text-lg/8 text-gray-600">At the Cecilia Oyebola Foundation, we are driven by a singular mission: to create opportunities that transform lives. Founded with a vision to empower underserved communities, we focus on providing children, including both boys and girls, as well as women and the elderly in resource-insecure areas, access to quality education, essential healthcare, and personal development resources.​
    
                    We aim to bridge the gap between people and their dreams, breaking the cycle of poverty and building a brighter future for all.​
    
                    The Cecilia Oyebola Foundation is more than an organization; it is a movement dedicated to fostering growth, equity, and dignity in every life we touch.</p>
                </div>
            </div>

            <div>
                <HorizontalImageSlider />
            </div>
    
            <div class="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <h3 class="mt-2 header">What we do</h3>
                    <p class="mt-6 text-lg/8 text-gray-600">At the Cecilia Oyebola Foundation, we create programs that address critical needs where they matter most.
    
                    Our focus spans education, healthcare, and personal development, reaching those with limited resources.
                    We aim to provide opportunities that empower individuals to unlock their full potential.
                    Every initiative is designed to foster lasting change and drive meaningful impact.
                    Through these efforts, we are helping build brighter, more hopeful futures.</p>
                </div>
                <div>
                    <img class="shadow-xl rounded-lg" src="/images/cecy-found-16.jpg" alt="">
                </div>
            </div>
    
        </div>
        
        <div class="px-5 mb-10 md:mb-0">
            <div class="header text-center">Goals and Mission</div>
            <TestimonyCarousel class="mt-10"  />
        </div>

    </div>
</template>

<script setup>
useHead({
    title: "Home",
     meta: [
        { name: 'keywords', content: 'cecyhealth, ngo in nigeria, cecyfoundation, ngo in lagos, empowering lives, empowering communities' },
        { name: 'description', content: 'Cecylia Oyebola Foundation empowers lives and communities, giving access to education, healthcare, and self-development should be a right, not a privilege, for every individual, no matter who or where they are.' },
        { property: 'og:title', content: 'Home - Cecylia Oyebola Foundation' },
        { property: 'og:description', content: 'Cecylia Oyebola Foundation empowers lives and communities, giving access to education, healthcare, and self-development should be a right, not a privilege, for every individual, no matter who or where they are.'},
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ceciliaoyebolafoundation.com' },
        { property: 'og:image', content: 'https://cecyhealth.org/images/cecy-foundation-logo.png'}
    ]
})

const video = ref(null)
const isPlaying = ref(false)
const videoSrc = "C:\Users\XPS\Videos\cecy-found\VID-20250523-WA0012.mp4" // Replace with your actual path

const togglePlay = () => {
    if (!video.value) return
    if (video.value.paused) {
        video.value.play()
        isPlaying.value = true
    } else {
        video.value.pause()
        isPlaying.value = false
    }
}
</script>

<style scoped>
img {
    box-shadow: 10px;
}

.video-wrapper {
    position: relative;
    width: 100%;
    max-width: 800px;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    cursor: pointer;
}

.video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    }

.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.8);
    border: none;
    font-size: 4rem;
    border-radius: 50%;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

.play-button:hover {
    background: rgba(255, 255, 255, 1);
}

</style>