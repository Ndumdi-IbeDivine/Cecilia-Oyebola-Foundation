<template>
    <div
        class="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
        <h1 class="text-6xl font-bold text-red-600">
            {{ error.statusCode === 404 ? "404" : "Error" }}
        </h1>
        <p class="text-xl mt-4">
            {{
                error.statusCode === 404
                    ? "Page Not Found"
                    : "An unexpected error has occurred."
            }}
        </p>
        <p v-if="error.message" class="text-muted mt-2">{{ error.message }}</p>
        <NuxtLink to="/" class="mt-6 text-blue-500 underline">
            <PrimaryBtn>
                Go back home
            </PrimaryBtn>
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    error: Object,
});
</script>
