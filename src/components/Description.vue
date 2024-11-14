<template>
  <section class="brilliant-section">
    <div class="content-container">
      <h2 class="section-heading">We are Allure Events.</h2>
      <p class="section-description">
        Allure Event Planning is an award-winning, luxury wedding and event planning company in Abuja and Whole of Nigeria for fun-loving, busy couples that value creativity and quality. We draw our inspiration from YOU and your story to create one-of-a-kind weddings and events. We work collaboratively to ensure your event is cohesive and thoughtful and believe that even the smallest details can have a huge impact. We pride ourselves on our comprehensive event management so that you can have a flawless and stress-free planning experience!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "BrilliantSection",
};
</script>

<style scoped>
.brilliant-section {
  height: 40vh; /* Default height for larger screens */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
  position: relative;
}

.content-container {
  max-width: 1000px;
  width: 100%;
}

.section-heading {
  font-size: 2.5rem;
  font-weight: bold;
  color: #f22282;
  margin-bottom: 15px;
}

.section-description {
  font-size: 1.125rem;
  color: #666;
  line-height: 1.6;
  margin-top: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .brilliant-section {
    height: auto; /* Allow auto height on smaller screens */
    padding: 20px; /* Add padding for spacing */
  }

  .section-heading {
    font-size: 2rem; /* Adjust font size on mobile */
  }
}
</style>

