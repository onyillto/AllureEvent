<template>
  <section class="overflow-hidden">
    <!-- Navbar -->
    <nav class="flex items-center justify-between px-12 py-4 bg-white shadow-md">
      <!-- Logo -->
      <a href="/" class="h-[62px] w-[62px]">
        <img src="/public/logo.svg" alt="Allure Event" class="text-2xl font-bold" />
      </a>

      <!-- Desktop Menu Links -->
      <div class="hidden lg:flex space-x-8">
        <a href="/about" class="font-medium text-gray-700 hover:text-gray-900">About</a>
                <a href="/gallery" class="font-medium text-gray-700 hover:text-gray-900">Services</a>
        <a href="/gallery" class="font-medium text-gray-700 hover:text-gray-900">Gallery</a>
      </div>

      <!-- Contact Button (Desktop) -->
      <div class="hidden lg:flex">
        <button class="py-2 px-5 font-semibold text-white bg-[#f22282] hover:bg-red-700 rounded-xl transition ease-in-out duration-200">
          Contact Us
        </button>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button @click="toggleMobileNav" class="lg:hidden text-[#f22282]">
        <!-- Updated SVG for Menu Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="mobileNavOpen" class="fixed inset-0 z-50 bg-white flex flex-col p-8 lg:hidden">
      <!-- Close Button -->
      <div class="flex items-center justify-between mb-8">
        <a href="#" class="text-2xl font-bold">
          <img src="/logo.svg" alt="Allure Event" class="text-2xl font-bold" />
        </a>
        <button @click="toggleMobileNav" class="text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Links -->
      <div class="flex-grow space-y-6">
        <a href="/about" class="block font-medium text-gray-700 hover:text-gray-900">About</a>
        <a href="/service" class="block font-medium text-gray-700 hover:text-gray-900">Services</a>
        <a href="/gallery" class="block font-medium text-gray-700 hover:text-gray-900">Gallery</a>
      </div>

      <!-- Contact Button (Mobile) -->
      <div class="mt-auto">
        <button class="w-full py-3 font-semibold text-white bg-[#f22282] hover:bg-red-700 rounded-xl transition ease-in-out duration-200">
          Contact Us
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mobileNavOpen: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen;
    },
  },
};
</script>

<style scoped>
nav {
  position: relative;
}

button {
  cursor: pointer;
}

svg {
  width: 24px;
  height: 24px;
}
</style>




