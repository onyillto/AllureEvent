<template>
 <Hero/>
 <Desc/>
<Services/>    
    <Gallery/>
    <Contact/>
    <Testimonials/> 

</template>
<script>
  import Hero from '../components/Hero.vue';
import Desc from "../components/Description.vue";
import Services from "../components/Services.vue";
import Contact from '../components/Contact-Us.vue'
import Gallery from "../components/Gallery.vue";
import Testimonials from '../components/Testimonials.vue';
export default {
  components: {
    Hero,
    Desc,
    Services,
    Gallery,
    Contact,
Testimonials,
  }
}
</script>