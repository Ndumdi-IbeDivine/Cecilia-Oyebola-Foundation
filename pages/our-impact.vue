<template>
    <div>
        <div class="grid gap-10 mx-auto px-5 py-10 lg:px-30">
            <div class="grid gap-5">
                <div class="flex justify-center">
                    <div class="hero-chip">See how we have impacted lives</div>
                </div>
                <div class="font-satya text-5xl text-(--cecy-found-blue) font-bold text-center">Our Impact</div>
                <p class="mx-auto max-w-3xl text-base leading-7 text-slate-700 md:text-lg text-center">
                    At Cecilia Oyebola Foundation, every initiative we undertake is driven by our mission to create meaningful change in the lives of women, children, and the elderly. Over the years, our programs have reached thousands of individuals, transforming communities and fostering a brighter future.
                </p>
                <div>
                    <img src="/images/who-we-are-banner.jpg" class="w-full grayscale hover:filter-none rounded-lg"  alt="">
                </div>
            </div>
    
            <div class="mt-10">
                <div class="grid content-center">
                    <div class="grid gap-5 text-lg">
                        <div class="grid lg:grid-cols-2 gap-10 mt-10">
                            <div class="grid gap-5">
                                <div>
                                    <div class="text-(--cecy-found-blue) text-xl font-bold">10,000+ Educational Materials Distributed</div>
                
                                    <p>Through our education initiatives, we have provided over 10,000 books, stationery items, and digital learning tools to students, ensuring they have the resources needed to excel in their studies.
                                    </p>
                                </div>
                                <div>
                                    <p class="text-(--cecy-found-blue) text-xl font-bold">1,500 Students Awarded Scholarships.</p>
                
                                    <p>We’ve offered full and partial scholarships to 1,500 students who could not afford quality education, empowering them to pursue their dreams and achieve academic success.
                                    </p>
                                </div>
                                <div>
                                    <p class="text-(--cecy-found-blue) text-xl font-bold">1,500 Students Awarded Scholarships.</p>
                
                                    <p>We’ve offered full and partial scholarships to 1,500 students who could not afford quality education, empowering them to pursue their dreams and achieve academic success.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src="/images/cecy-found-6.jpg" class="rounded-lg" alt="">
                            </div>
                        </div>
    
                        <div class="grid lg:grid-cols-2 gap-10 items-center mt-10">
                            <div class="order-2 md:order-1">
                                <img src="/images/cecy-found-1.jpg" class="rounded-lg" alt="">
                            </div>
                            <div class="order-1 md:order-2 grid gap-5">
                                <div>
                                    <p class="text-(--cecy-found-blue) text-xl font-bold">50+ Healthcare Outreaches Conducted</p>
                
                                    <p>Our healthcare programs have organized over 50 outreaches, offering free medical checkups, essential medications, and health education to communities with little to no access to healthcare services.</p>
                                </div>
    
                                <div>
                                    <p class="text-(--cecy-found-blue) text-xl font-bold">3,000 Women and Girls Empowered</p>
                
                                    <p>Through personal development workshops, skill acquisition programs, and mentorship, we have impacted the lives of more than 3,000 women and girls, helping them build confidence, resilience, and independence.
                                    </p>
                                </div>
    
                                <div>
                                    <p class="text-(--cecy-found-blue) text-xl font-bold">20 Communities Transformed</p>
                
                                    <p>Our community outreach programs have reached 20 different communities, delivering life-changing resources and creating opportunities for growth and development.</p>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
    
            </div>
        </div>
        <ExploreGallery />
    </div>
</template>

<script setup>
useHead({
    title: "Our Impact",
     meta: [
        { name: 'keywords', content: 'cecyhealth, ngo in nigeria, cecyfoundation, ngo in lagos, empowering lives, empowering communities' },
        { name: 'description', content: 'Cecilia Oyebola Foundation empowers lives and communities, giving access to education, healthcare, and self-development should be a right, not a privilege, for every individual, no matter who or where they are.' },
        { property: 'og:title', content: 'Our Impact - Cecilia Oyebola Foundation' },
        { property: 'og:description', content: 'Cecilia Oyebola Foundation empowers lives and communities, giving access to education, healthcare, and self-development should be a right, not a privilege, for every individual, no matter who or where they are.'},
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ceciliaoyebolafoundation.com/our-impact' },
        { property: 'og:image', content: 'https://cecyhealth.org/images/cecy-foundation-logo.png'}
    ]
})

</script>