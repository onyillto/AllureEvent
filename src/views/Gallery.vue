<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Title -->
    <h1 class="text-3xl font-light text-center sm:text-left mt-4 mb-6">Gallery</h1>

    <!-- Horizontal line -->
    <hr class="my-5">

    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="(item, index) in galleryItems"
        :key="index"
        class="col-span-1"
      >
        <a href="#" class="block mb-4">
          <!-- Conditional rendering for image or video -->
          <img
            v-if="!item.isVideo"
            :src="item.src"
            alt="Thumbnail"
            class="w-full h-40 object-cover rounded-lg shadow-lg"
          />
          <video
            v-else
            ref="videos"
            :src="item.src"
            controls
            class="w-full h-40 object-cover rounded-lg shadow-lg"
            @play="handlePlay(index)"
          ></video>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThumbnailGallery",
  data() {
    return {
      galleryItems: [
        { src: "/public/g1.jpg", isVideo: false },
        { src: "/public/g2.jpg", isVideo: false },
        { src: "/public/g3.jpg", isVideo: false },
        { src: "/public/g4.jpg", isVideo: false },
        { src: "/public/hero-vid.mp4", isVideo: true },
        { src: "/public/video1.mp4", isVideo: true },
        { src: "/public/img4.jpg", isVideo: false },
        { src: "/public/img2.jpg", isVideo: false },
        { src: "/public/video2.mp4", isVideo: true },
        { src: "/public/img5.jpg", isVideo: false },
        { src: "/public/img6.jpg", isVideo: false },
        { src: "/public/video3.mp4", isVideo: true },
      ],
      playingVideoIndex: null, // Track the currently playing video
    };
  },
  methods: {
    handlePlay(currentIndex) {
      // Pause the currently playing video if it exists and is not the current one
      if (
        this.playingVideoIndex !== null &&
        this.playingVideoIndex !== currentIndex
      ) {
        const currentVideo = this.$refs.videos[this.playingVideoIndex];
        if (currentVideo) currentVideo.pause();
      }

      // Update the currently playing video index
      this.playingVideoIndex = currentIndex;
    },
  },
};
</script>

<style scoped>
/* Ensure consistent thumbnail sizes */
img,
video {
  height: 300px;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
</style>

