<template>
  <div class="snippets-container">
    <figure class="snip1157" v-for="(quote, index) in quotes" :key="index">
      <blockquote>
        {{ quote.text }}
        <div class="arrow"></div>
      </blockquote>
      <img :src="quote.image" :alt="quote.imageAlt" />
      <div class="author">
        <h5>{{ quote.author }} <span>{{ quote.website }}</span></h5>
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: [
        {
          text: "The event decor was absolutely stunning! Every detail was perfectly coordinated, and it truly transformed the venue into something magical. The flowers, lighting, and table settings exceeded our expectations!",
          image: "https://via.placeholder.com/90",
          imageAlt: "decor1",
          author: "Sophia Reynolds",
          website: "EventPlannersHub.com"
        },
        {
          text: "I couldn’t believe how amazing everything looked! From the elegant centerpieces to the intricate drapery, every corner of the venue was filled with beauty and style. We felt like we were in a fairy tale.",
          image: "https://via.placeholder.com/90",
          imageAlt: "decor2",
          author: "Liam O’Connor",
          website: "TheWeddingStudio.com"
        },
        {
          text: "The decor was flawless! The attention to detail was incredible. Our guests couldn’t stop talking about how unique and personalized the setup was. It really brought our vision to life in a way I never imagined.",
          image: "https://via.placeholder.com/90",
          imageAlt: "decor3",
          author: "Emma Dawson",
          website: "DreamEventsDecor.com"
        },
        {
          text: "Every detail of the event decor was perfectly executed. From the stunning floral arrangements to the chic lighting, everything came together beautifully. It truly set the tone for an unforgettable evening.",
          image: "https://via.placeholder.com/90",
          imageAlt: "decor4",
          author: "James Alexander",
          website: "ElegantOccasions.com"
        },
        {
          text: "The decor was beyond my wildest dreams! It was clear that the team took the time to understand my vision and bring it to life with creativity and precision. I couldn’t be happier with how everything turned out!",
          image: "https://via.placeholder.com/90",
          imageAlt: "decor5",
          author: "Olivia Turner",
          website: "ChicEventDesigns.com"
        }
      ]
    }
  }
}
</script>


<style scoped>
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,800);

.snippets-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  margin: 0;
  height: 100%;
  margin-top:0 ;
  background-color: #ffb8ff;
}

figure.snip1157 {
  font-family: 'Raleway', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  color: #333;
  text-align: left;
  box-shadow: none !important;
}

figure.snip1157 * {
  box-sizing: border-box;
  transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
}

figure.snip1157 img {
  max-width: 100%;
  vertical-align: middle;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  margin: 40px 0 0 10px;
}

figure.snip1157 blockquote {
  display: block;
  border-radius: 8px;
  position: relative;
  background-color: #fafafa;
  padding: 25px 50px 30px 50px;
  font-size: 0.8em;
  font-weight: 500;
  margin: 0;
  line-height: 1.6em;
  font-style: italic;
}

figure.snip1157 blockquote:before,
figure.snip1157 blockquote:after {
  font-family: 'FontAwesome';
  content: "\201C";
  position: absolute;
  font-size: 50px;
  opacity: 0.3;
  font-style: normal;
}

figure.snip1157 blockquote:before {
  top: 25px;
  left: 20px;
}

figure.snip1157 blockquote:after {
  content: "\201D";
  right: 20px;
  bottom: 0;
}

figure.snip1157 .arrow {
  top: 100%;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid #fafafa;
  position: absolute;
}

figure.snip1157 .author {
  position: absolute;
  bottom: 45px;
  padding: 0 10px 0 120px;
  margin: 0;
  text-transform: uppercase;
  color: #ffffff;
  transform: translateY(50%);
}

figure.snip1157 .author h5 {
  opacity: 0.8;
  margin: 0;
  font-weight: 800;
}

figure.snip1157 .author h5 span {
  font-weight: 400;
  text-transform: none;
  padding-left: 5px;
}
</style>
