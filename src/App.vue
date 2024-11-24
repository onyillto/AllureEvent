<template>
  <div class="app-container">
    <Navbar />
    <main class="main-content">
      <router-view /> <!-- This is where your page content will be rendered -->
    </main>
    <!-- <Footer/> -->
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
// import Footer from "./components/Footer.vue";
</script>

<style>
/* Import the Roboto font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

/* Apply the font globally */
* {
  font-family: 'Roboto', sans-serif;
}

/* Additional styling for body and html */
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

/* Ensure the app container takes the full height */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Optional: style the main content area */
.main-content {
  flex: 1;
}
</style>
