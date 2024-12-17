<template>
  <!-- Hero Section -->
  <div class="relative w-full h-[320px]" id="home">
    <div class="absolute inset-0 opacity-70">
      <img
        src="/g1.jpg"
        alt="Background Image"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <h1 class="text-[#f222a5] font-medium text-4xl md:text-5xl leading-tight mb-2">
          Our Services
        </h1>
        <p class="font-regular text-xl mb-8 mt-4 text-[#fff]">
          One stop solution for organising and planning your Events
        </p>
        <a
          href="/"
          class="px-6 py-3 bg-[#f222a5] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200"
        >
          Home
        </a>
      </div>
    </div>
  </div>

  <!-- Main Services Section -->
  <section class="py-10" id="services">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4 text-gray-900">What We Do</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Event planning requires the utmost attention to detail and foresight. The ability to have
          a 360-degree view of every little facet of the process, wearing multiple hats, and
          coordinating a myriad of people and resources.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Service 1: Event Planning -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/even-plan.jpg"
            alt="Event Planning"
            class="w-full h-64 object-cover"
          />
          <div class="p-6 text-center">
            <h3 class="text-xl font-medium text-pink-600 mb-2">Event Planning</h3>
            <p class="text-gray-700 text-base">
              Our event planning service helps bring your vision to life with meticulous coordination and attention to detail.
            </p>
          </div>
        </div>

        <!-- Service 2: Venue Design -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/venue-design.jpg"
            alt="Venue Design"
            class="w-full h-64 object-cover"
          />
          <div class="p-6 text-center">
            <h3 class="text-xl font-medium text-pink-600 mb-2">Venue Design</h3>
            <p class="text-gray-700 text-base">
              Transform any venue with our professional design service, creating a stunning ambiance.
            </p>
          </div>
        </div>

        <!-- Service 3: Vendor Sourcing -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/vendor.jpg"
            alt="Vendor Sourcing"
            class="w-full h-64 object-cover"
          />
          <div class="p-6 text-center">
            <h3 class="text-xl font-medium text-pink-600 mb-2">Vendor Sourcing</h3>
            <p class="text-gray-700 text-base">
              We connect you with top vendors, ensuring high-quality services that fit your needs.
            </p>
          </div>
        </div>

        <!-- Service 4: Corporate Event -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/corp.jpg"
            alt="Corporate Event"
            class="w-full h-64 object-cover"
          />
          <div class="p-6 text-center">
            <h3 class="text-xl font-medium text-pink-600 mb-2">Corporate Event</h3>
            <p class="text-gray-700 text-base">
              Professional, impactful events tailored to your company’s goals.
            </p>
          </div>
        </div>

        <!-- Service 5: Event Consulting -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/consulting.jpg"
            alt="Event Consulting"
            class="w-full h-64 object-cover"
          />
          <div class="p-6 text-center">
            <h3 class="text-xl font-medium text-pink-600 mb-2">Event Consulting</h3>
            <p class="text-gray-700 text-base">
              Expert consulting to guide you in planning a successful event.
            </p>
          </div>
        </div>

        <!-- Service 6: Birthday Planning -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/birthday.jpg"
            alt="Birthday Planning"
            class="w-full h-64 object-cover"
          />
          <div class="p-6 text-center">
            <h3 class="text-xl font-medium text-pink-600 mb-2">Birthday Planning</h3>
            <p class="text-gray-700 text-base">
              Celebrate your special day with our personalized birthday planning services.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
<Testimonials/>

</template>

<script>
import Testimonials from "../components/Testimonials.vue";

export default {
  name: "ServicesPage",
  components: {
    Testimonials,
  },
};
</script>

