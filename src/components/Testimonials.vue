<template>
  <div class="snippets-container">
    <swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :space-between="20"
      :navigation="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      loop
    >
      <swiper-slide v-for="(quote, index) in quotes" :key="index">
        <figure class="snip1157">
          <blockquote>
            {{ quote.text }}
            <div class="arrow"></div>
          </blockquote>
          <div class="author">
            <h5>{{ quote.author }} <span>{{ quote.website }}</span></h5>
          </div>
        </figure>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      quotes: [
        {
          text: "The event decor was absolutely stunning! Every detail was perfectly coordinated, and it truly transformed the venue into something magical. The flowers, lighting, and table settings exceeded our expectations!",
          author: "Sophia Reynolds",
          website: "EventPlannersHub.com",
        },
        {
          text: "I couldn’t believe how amazing everything looked! From the elegant centerpieces to the intricate drapery, every corner of the venue was filled with beauty and style. We felt like we were in a fairy tale.",
          author: "Liam O’Connor",
          website: "TheWeddingStudio.com",
        },
        {
          text: "The decor was flawless! The attention to detail was incredible. Our guests couldn’t stop talking about how unique and personalized the setup was.",
          author: "Emma Dawson",
          website: "DreamEventsDecor.com",
        },
        {
          text: "Every detail of the event decor was perfectly executed. From the stunning floral arrangements to the chic lighting, everything came together beautifully.",
          author: "James Alexander",
          website: "ElegantOccasions.com",
        },
      ],
    };
  },
  setup() {
    return { Navigation, Pagination, Autoplay };
  },
};
</script>

<style scoped>
.swiper-slide{
  color: #ffb8ff;
}
.snippets-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffb8ff;
  margin: 0;
  padding: 40px 0;
}

.swiper {
  width: 100%;
  max-width: 800px;
}

figure.snip1157 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway', Arial, sans-serif;
  position: relative;
  margin: 10px auto;
  text-align: center; /* Center the text */
  color: #333;
  background-color: #fafafa;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
}

figure.snip1157 blockquote {
  font-size: 1em;
  font-style: italic;
  line-height: 1.8em;
  margin: 0 0 20px;
  position: relative;
  text-align: center;
}

figure.snip1157 .arrow {
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid #fafafa;
}

.author {
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  margin-top: 10px;
}

.author span {
  display: block;
  font-weight: normal;
  text-transform: none;
  color: #666;
  font-size: 0.9em;
}
</style>

