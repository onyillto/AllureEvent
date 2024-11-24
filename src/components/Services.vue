<template>
  <!-- nav bar section -->
  <!-- <nav class="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]">
    <div class="text-xl">Bappa Flour mill</div>
    <div class="flex md:hidden">
      <button @click="toggleMenu">
        <img
          class="toggle block"
          src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
          width="40"
          height="40"
          alt="hamburger menu"
        />
        <img
          class="toggle hidden"
          src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
          width="40"
          height="40"
          alt="close menu"
        />
      </button>
    </div>
    <div class="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
      <a href="#home" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Home</a>
      <a href="#services" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Services</a>
      <a href="#aboutus" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">About us</a>
      <a href="#gallery" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Gallery</a>
      <a href="#contactUs" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Visit Us</a>
    </div>
    <div class="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
      <a href="tel:+123">
        <div class="flex justify-end">
          <div class="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call now
          </div>
        </div>
      </a>
    </div>
  </nav> -->

  <!-- hero section -->
  <!-- <div class="relative w-full h-[320px]" id="home">
    <div class="absolute inset-0 opacity-70">
      <img src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png" alt="Background Image" class="object-cover object-center w-full h-full" />
    </div>
    <div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <h1 class="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">Bappa Flour mill</h1>
        <p class="font-regular text-xl mb-8 mt-4">One stop solution for flour grinding services</p>
        <a href="#contactUs" class="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200">Contact Us</a>
      </div>
    </div>
  </div> -->

  <!-- Our Services Section -->
<section class="py-10" id="services">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Service 1 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/even-plan.jpg" alt="Event Planning" class="w-full h-64 object-cover" />
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-pink-600 mb-2">Event Planning</h3>
                    <p class="text-gray-700 text-base">Our event planning service helps bring your vision to life with meticulous coordination and attention to detail, ensuring every moment is memorable.</p>
                </div>
            </div>

            <!-- Service 2 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/venue-design.jpg" alt="Venue Design" class="w-full h-64 object-cover" />
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-pink-600 mb-2">Venue Design</h3>
                    <p class="text-gray-700 text-base">Transform any venue with our professional design service, creating a stunning ambiance tailored to your event’s theme and style.</p>
                </div>
            </div>

            <!-- Service 3 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/vendor.jpg" alt="Vendor Sourcing" class="w-full h-64 object-cover" />
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-pink-600 mb-2">Vendor Sourcing</h3>
                    <p class="text-gray-700 text-base">We connect you with top vendors, from caterers to photographers, ensuring high-quality services that fit your budget and needs.</p>
                </div>
            </div>

            <!-- Service 4 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/corp.jpg" alt="Corporate Event" class="w-full h-64 object-cover" />
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-pink-600 mb-2">Corporate Event</h3>
                    <p class="text-gray-700 text-base">Our corporate event service delivers professional, impactful events tailored to your company’s goals, whether it's a conference, seminar, or celebration.</p>
                </div>
            </div>

            <!-- Service 5 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/consulting.jpg" alt="Event Consulting" class="w-full h-64 object-cover" />
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-pink-600 mb-2">Event Consulting</h3>
                    <p class="text-gray-700 text-base">Our expert consulting service guides you in planning your event with strategies and insights tailored to your unique vision and objectives.</p>
                </div>
            </div>

            <!-- Service 6 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/birthday.jpg" alt="Birthday Planning" class="w-full h-64 object-cover" />
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-pink-600 mb-2">Birthday Planning</h3>
                    <p class="text-gray-700 text-base">Celebrate your special day with our birthday planning services, creating unforgettable moments with personalized themes and activities.</p>
                </div>
            </div>
        </div>
    </div>
</section>


  <!-- About Us -->
  <section class="bg-[#f22282]" id="aboutus">
    <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
                <h2 class="text-3xl font-bold text-white mb-8 text-center">About Us</h2>
                <p class="mt-4 text-white font-normal text-medium">
                    At Allure Event, we specialize in crafting unforgettable experiences that leave a lasting impression. Whether you're planning an intimate gathering, a corporate conference, or a grand celebration, our team of expert planners and designers are dedicated to turning your vision into reality. With a keen eye for detail and a passion for perfection, we provide end-to-end event services—from concept development and venue selection to design, logistics, and day-of coordination....
                </p>
            </div>
            <div class="mt-12 md:mt-0">
                <img src="/corp.jpg" alt="About Us Image" class="object-cover rounded-lg shadow-md h-[490px]" />
            </div>
        </div>
    </div>
</section>


  <!-- Why Us -->
  <section class="text-gray-700 body-font mt-10">
    <div class="flex justify-center text-3xl font-bold text-gray-800 text-center">
        Why Choose Us?
    </div>
    <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap text-center justify-center">
            <!-- High-Quality Equipment -->
            <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div class="flex justify-center">
                        <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" class="w-32 mb-3">
                    </div>
                    <h2 class="title-font font-regular text-2xl text-gray-900">Premium Event Equipment</h2>
                </div>
            </div>

            <!-- Competitive Pricing -->
            <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div class="flex justify-center">
                        <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" class="w-32 mb-3">
                    </div>
                    <h2 class="title-font font-regular text-2xl text-gray-900">Affordable Pricing</h2>
                </div>
            </div>

            <!-- Efficient Planning -->
            <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div class="flex justify-center">
                        <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" class="w-32 mb-3">
                    </div>
                    <h2 class="title-font font-regular text-2xl text-gray-900">Time-Efficient Planning</h2>
                </div>
            </div>

            <!-- Industry Expertise -->
            <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div class="flex justify-center">
                        <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" class="w-32 mb-3">
                    </div>
                    <h2 class="title-font font-regular text-2xl text-gray-900">Expertise in Event Planning</h2>
                </div>
            </div>
        </div>
    </div>
</section>


</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      const toggles = document.querySelectorAll('.toggle');
      toggles.forEach(toggle => toggle.classList.toggle('hidden'));
    },
  },
};
</script>

<style scoped>
.toggle {
  transition: all 0.3s ease;
}
</style>
