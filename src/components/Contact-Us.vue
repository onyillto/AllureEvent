<template>
  <div class="bg-black pt-24">
    <!-- Title -->
    <div class="text-center">
      <h1 class="font-semibold text-6xl text-white">Contact Us</h1>
    </div>

    <!-- Subtitle -->
    <div class="text-center mt-4">
      <h4 class="text-lg text-gray-400">We'd love to hear from you!</h4>
    </div>

    <!-- Input Form -->
    <div class="mt-12 max-w-4xl mx-auto">
      <div class="space-y-8">
        <!-- Name Field -->
        <div class="w-full">
          <div class="relative">
            <input 
              type="text" 
              required 
              id="name" 
              class="w-full p-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
            />
            <label 
              for="name" 
              class="absolute top-2 left-4 text-gray-400 transition-all duration-200 transform origin-left scale-100"
            >
              Name
            </label>
          </div>
        </div>

        <!-- Email and Phone Fields (same line) -->
        <div class="flex space-x-4">
          <!-- Email Field -->
          <div class="w-1/2">
            <div class="relative">
              <input 
                type="text" 
                required 
                id="email" 
                class="w-full p-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
              />
              <label 
                for="email" 
                class="absolute top-2 left-4 text-gray-400 transition-all duration-200 transform origin-left scale-100"
              >
                Email
              </label>
            </div>
          </div>

          <!-- Phone Field -->
          <div class="w-1/2">
            <div class="relative">
              <input 
                type="text" 
                required 
                id="phone" 
                class="w-full p-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
              />
              <label 
                for="phone" 
                class="absolute top-2 left-4 text-gray-400 transition-all duration-200 transform origin-left scale-100"
              >
                Phone Number
              </label>
            </div>
          </div>
        </div>

        <!-- Message Field -->
        <div class="w-full">
          <div class="relative">
            <textarea 
              required 
              id="message" 
              class="w-full p-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
            <label 
              for="message" 
              class="absolute top-2 left-4 text-gray-400 transition-all duration-200 transform origin-left scale-100"
            >
              Message
            </label>
          </div>
        </div>

        <!-- Submit Button (Centered) -->
        <div class="flex justify-center w-full">
          <button 
            class="w-1/2 py-3 bg-pink-600 text-center text-white font-semibold mb-12 rounded-full shadow-md hover:bg-pink-500 focus:ring-2 focus:ring-pink-500 transition transform hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can import any required logic here
</script>

<style scoped>
/* No additional styles are needed since we're using Tailwind CSS for styling */
</style>

