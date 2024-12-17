
<template>
  <div class="container mx-auto px-4 py-12 mt-6">
    <!-- Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(gallery, index) in galleries"
        :key="index"
        class="relative group overflow-hidden shadow-lg rounded-lg"
      >
        <!-- Gallery Image -->
        <img
          :src="gallery.image"
          :alt="gallery.title"
          class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <!-- Overlay for Text -->
        <div
          class="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4"
        >
          <h3 class="text-white font-bold text-lg">{{ gallery.title }}</h3>
          <p class="text-white text-sm">{{ gallery.imageCount }} images</p>
        </div>

        <!-- Optional Link -->
        <a
          :href="gallery.link"
          class="absolute inset-0"
          aria-label="Open gallery"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryGrid",
  data() {
    return {
      galleries: [
        {
          title: "Peter Weds Vee",
          image: "/public/img2.jpg", // Replace with actual paths
          imageCount: 7,
          link: "/gallery/event-one",
        },
        {
          title: "Faith X Ubaka",
          image: "/public/event2/e5.jpg",
          imageCount: 25,
          link: "/gallery/event-two",
        },
        {
          title: "CHINYERE X JHENNA",
          image: "/public/event3/e5.jpg",
          imageCount: 200,
          link: "/gallery/event-three",
        },
        {
          title: "Opeyemi @60",
          image: "/public/even4/e2.jpg",
          imageCount: 10,
          link: "/gallery/event-four",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Optional custom styles */
.container {
  max-width: 1200px;
}
</style>


