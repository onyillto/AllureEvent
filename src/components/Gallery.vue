<template>
  <div class="image-wrapper">
    <p v-for="(imagesRow, index) in groupedImages" :key="index">
      <img 
        v-for="(src, imgIndex) in imagesRow" 
        :src="`/${src}`" 
        :key="imgIndex" 
        :class="`image image-${imagesRow.length}`"
        alt="random image"
      />
    </p>
  </div>
</template>

<script>
export default {
  name: 'ImagePathAnimation',
  data() {
    return {
      // Directly specify the image names located in the root of the public folder
      images: [
        "consulting.jpg", 
        "corp.jpg", 
        "corp2.jpg", 
        "even-plan.jpg", 
        "vendor.jpg"
      ], // Add your image names here
    };
  },
  computed: {
    groupedImages() {
      const groups = [];
      let i = 0;
      while (i < this.images.length) {
        groups.push(this.images.slice(i, i + 5)); // Adjust grouping size as needed
        i += 5;
      }
      return groups;
    },
  },
};
</script>

<style scoped>
.image-wrapper {
  width: 500px;
  margin: 100px auto;
  position: relative;
}

p {
  height: 200px;
  position: relative;
}

.image {
  height: 100px;
  position: absolute;
  left: 0;
  box-shadow: 1px 1px 3px #0008;
  transition: transform 0.4s ease-out, offset-path 0.4s cubic-bezier(0.77, -1.17, 0.75, 0.84),
              box-shadow 0.3s, z-index 0.3s;
  z-index: 0;
}

.image:hover {
  transform: scale(3);
  offset-path: path('m 5 65 q 45-0 90-0 t 90 0 90 0 90-0 90 0');
  box-shadow: 3px 4px 10px #0006;
  z-index: 999;
}

.image-3:nth-last-child(3):first-child {
  offset-distance: 17%;
}
.image-3:nth-last-child(2):nth-child(2) {
  offset-distance: 49%;
}
.image-3:last-child:nth-child(3) {
  offset-distance: 81%;
}

.image-4:nth-last-child(4):first-child {
  offset-distance: 10%;
}
.image-4:nth-last-child(3):nth-child(2) {
  offset-distance: 35%;
}
.image-4:nth-last-child(2):nth-child(3) {
  offset-distance: 65%;
}
.image-4:last-child:nth-child(4) {
  offset-distance: 90%;
}

.image-5:nth-last-child(5):first-child {
  offset-distance: 0%;
}
.image-5:nth-last-child(4):nth-child(2) {
  offset-distance: 25%;
}
.image-5:nth-last-child(3):nth-child(3) {
  offset-distance: 51%;
}
.image-5:nth-last-child(2):nth-child(4) {
  offset-distance: 75%;
}
.image-5:last-child:nth-child(5) {
  offset-distance: 100%;
}
</style>

