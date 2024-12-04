<template>
  <!-- Footer Section -->
  <section class="bg-white">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
      <!-- Navigation Links -->
      <nav class="flex flex-wrap justify-center -mx-5 -my-2">
        <div class="px-5 py-2" v-for="(link, index) in navLinks" :key="index">
          <a :href="link.href" class="text-base leading-6 text-gray-500 hover:text-gray-900">
            {{ link.text }}
          </a>
        </div>
      </nav>
      <!-- Social Media Icons -->
      <div class="flex justify-center mt-8 space-x-6">
        <a v-for="(icon, index) in socialIcons" :key="index" :href="icon.href" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">{{ icon.name }}</span>
          <img :src="icon.path" :alt="icon.name" :class="icon.class" />
        </a>
      </div>
      <!-- Footer Copyright -->
      <p class="mt-8 text-base leading-6 text-center text-gray-400">
        © 2024 AllureEvent, Inc. All rights reserved.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '#' },
        { text: 'Gallery', href: '/gallery' },
      ],
      socialIcons: [
        {
          name: 'Facebook',
          href: '#',
          class: 'w-6 h-6',
          path: '/facebook.png' // Path to Facebook icon in public folder
        },
        {
          name: 'Instagram',
          href: '#',
          class: 'w-6 h-6',
          path: '/insta.png' // Path to Instagram icon in public folder
        },
        {
          name: 'Twitter',
          href: 'https://www.instagram.com/allureevents.ng/',
          class: 'w-6 h-6',
          path: '/twiter.png' // Path to Twitter icon in public folder
        },
         {
          name: 'Twitter',
          href: '#',
          class: 'w-6 h-6',
          path: '/tiktok.png' // Path to Twitter icon in public folder
        },
      ]
    };
  }
};
</script>

<style scoped>
/* Add specific styles for the icons if necessary */
img {
  width: 24px;
  height: 24px;
}
</style>

