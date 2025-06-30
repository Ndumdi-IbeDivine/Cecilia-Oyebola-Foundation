<template>
    <div class="grid gap-10 mx-auto px-5 py-10 lg:px-30">
        <div class="grid gap-5">
            <div class="text-center s-p font-semibold text-gray-500">Our mission, history, and the team</div>
            <div class="font-satya text-5xl text-[var(--cecy-found-blue)] font-bold text-center">Who We Are</div>
            <div>
                <img src="/images/who-we-are-banner.jpg" class="w-full grayscale hover:filter-none rounded-lg"  alt="">
            </div>
        </div>

        <div class="mt-10">
            <div class="grid lg:grid-cols-2 items-center gap-10">
                <div class="grid gap-5 text-lg">
                    <p>The Cecilia Oyebola Foundation was established on July 14th, 2013, by Dr. Yomi Jaye, the CEO and Founder of Cecy Health Consult Ltd. The foundation emerged as an extension of Cecy Health, born from a profound commitment to continuing the legacy of Cecilia Oyebola Abebi Durojaye, the beloved matriarch after her passing.</p>
        
                    <p>Cecilia Oyebola Abebi Durojaye was a remarkable woman whose life was a testament to faith, initiative, creativity, and audacity. Her unwavering belief in the power of education and personal growth left an indelible mark on everyone she encountered. She was deeply devoted to uplifting young minds, inspiring them to embrace their potential and approach life with boldness and conviction.</p>
        
                    <p>The Cecilia Oyebola Foundation strives to honor her memory by carrying forward the values she embodied—empowering individuals, particularly children and young adults, to dream bigger, aim higher, and take bold steps toward realizing their goals. Through this foundation, we continue her mission of nurturing the next generation of leaders and changemakers, ensuring her legacy of impact and inspiration lives on.</p>
    
                </div>

                <div>
                    <img src="/images/foundation.png" class="rounded-lg w-full" alt="">
                </div>
            </div>

            <div class="mt-10">
                <div class="grid lg:grid-cols-2 items-center gap-10">
                    <div class="order-2 lg:order-1">
                        <img src="/images/cecy-found-10.jpg" class="w-full rounded-lg"  alt="">
                    </div>
                    <div class="order-1 l;g:order-2 grid gap-5 text-lg">
                        <p>The story behind the creation of the Cecilia Oyebola Foundation carries a powerful lesson about turning grief into purpose. After losing his mother, who had been the guiding force behind his career, Dr. Yomi Jaye was devastated. But a moment of reflection, inspired by a quote from Tony Robbins—“Everything in life is about energy, and we have the power to switch from one form of energy to another”—changed his perspective.</p>

                        <p>Rather than staying in sorrow, Dr. Yomi chose to redirect his emotions into something meaningful. He decided to create a foundation that would support women, children, and the girl child—empowering those facing struggles similar to what his mother had endured. Through this decision, Dr. Yomi realized that by transforming personal pain into positive change, he could make a lasting impact on others, just as his mother had made a lasting impact on him. His journey shows that even in the face of profound loss, one can find a way to uplift others, building a legacy of hope, empowerment, and transformation. </p>

                        <p>Dr. Yomi now seeks to inspire others to embark on this same journey, turning challenges into opportunities for growth and positive change.</p>
                    </div>
                </div>
            </div>

            <div class="mt-20">
                <HorizontalImageSlider />
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "Who We Are",
     meta: [
        { name: 'keywords', content: 'cecyhealth, ngo in nigeria, cecyfoundation, ngo in lagos, empowering lives, empowering communities' },
        { name: 'description', content: 'Cecylia Oyebola Foundation empowers lives and communities, giving access to education, healthcare, and self-development should be a right, not a privilege, for every individual, no matter who or where they are.' },
        { property: 'og:title', content: 'Who We Are - Cecylia Oyebola Foundation' },
        { property: 'og:description', content: 'Cecylia Oyebola Foundation empowers lives and communities, giving access to education, healthcare, and self-development should be a right, not a privilege, for every individual, no matter who or where they are.'},
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ceciliaoyebolafoundation.com/who-we-are' },
        { property: 'og:image', content: 'https://cecyhealth.org/images/cecy-foundation-logo.png'}
    ]
})

</script>