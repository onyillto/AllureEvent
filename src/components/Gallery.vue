<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Title -->
    <h1 class="text-3xl font-light text-center sm:text-left mt-4 mb-6">Portfolio Gallery</h1>

    <!-- Horizontal line -->
    <hr class="my-5">

    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div class="col-span-1">
        <a href="/gallery/event-one" class="block mb-4">
          <img class="w-full h-auto rounded-lg shadow-lg" src="/public/event1/e5.jpg" alt="Thumbnail 1">
        </a>
      </div>
      <div class="col-span-1">
        <a href="/gallery/event-two" class="block mb-4">
          <img class="w-full h-auto rounded-lg shadow-lg" src="/public/event2/e11.jpg" alt="Thumbnail 2">
        </a>
      </div>
      <div class="col-span-1">
        <a href="/gallery/event-three" class="block mb-4">
          <img class="w-full h-auto rounded-lg shadow-lg" src="/public/event3/e3.jpg" alt="Thumbnail 3">
        </a>
      </div>
      <div class="col-span-1">
        <a href="/gallery/event-four" class="block mb-4">
          <img class="w-full h-auto rounded-lg shadow-lg" src="/public/even4/e6.jpg" alt="Thumbnail 4">
        </a>
      </div>
   
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThumbnailGallery',
}
</script>

<style scoped>
/* Additional custom styles (if necessary) */
</style>
