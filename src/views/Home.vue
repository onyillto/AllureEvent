<template>
 <Hero/>
 <Desc/>
<Services/>    
    <Gallery/>
    <!-- <NewsletterSection/>
    <Testimonials/>  -->

</template>
<script>
  import Hero from '../components/Hero.vue';
import Desc from "../components/Description.vue";
import Services from "../components/Services.vue";

import Gallery from "../components/Gallery.vue";
export default {
  components: {
    Hero,
    Desc,
    Services,
    Gallery

  }
}
</script>