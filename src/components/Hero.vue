<template>
  <header class="relative w-full h-screen overflow-hidden"> <!-- Set to full viewport height -->
    <video
      autoplay
      loop
      muted
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/hero-vid.mp4" type="video/mp4" />
     
    </video>
  <div class="flex flex-col items-center justify-center w-full h-full bg-black/60"> <!-- Darker overlay for visibility -->
  <div class="text-center z-10 bg-pink-500/20 border border-white rounded-lg p-6 mx-4 max-w-2xl"> <!-- Pink background -->
    <h5 class="custom-heading text-white">Allure Corporate Events</h5>
    <h1 class="text-3xl font-semibold text-white lg:text-2xl">
      <span class="text-white br">Transforming Your Events Into Unforgettable Experiences</span>
    </h1>
    <p class="text-lg text-gray-100">
      With our team's expertise, we cover every detail to ensure your event is flawless from start to finish.
    </p>
  </div>
  <router-link to="/products" class="mt-4"> <!-- Added margin to separate button from text -->
    <button class="w-full px-5 py-2 sm:w-[30%] text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#bd933b] rounded-md lg:w-auto md:w-1/2 hover:bg-red-700 focus:outline-none focus:bg-red-700 md:text-base md:px-4 md:py-3">
      Plan My Invite
    </button>
  </router-link>
</div>


  </header>
</template>
<style scoped>
/* Video styling */
video {
  position: absolute; /* Position video absolutely to cover header */
  top: 0;
  left: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  object-fit: cover; /* Ensure video covers area without stretching */
}

/* Overlay for darkening the video */
.header-overlay {
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent black overlay */
}

/* Ensure the text and button are centered in the header */
header {
  height: 100vh; /* Take full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center the content */
  align-items: center; /* Horizontally center the content */
}
</style>

