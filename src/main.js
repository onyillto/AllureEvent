import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"; // Import Vue Router
import Home from "./views/Home.vue"; // Import the Home component
import About from "./views/About.vue"
import Gallery from "./views/Gallery.vue";
import GalleryOne from "./views/gallery/gallery-one.vue";
import GalleryTwo from "./views/gallery/gallery-two.vue";
import GalleryThree from "./views/gallery/gallery-three.vue";
import GalleryFour from "./views/gallery/gallery-four.vue";
import Contact from "./views/Contact.vue";
import "./style.css";
import Service from "./views/Service.vue";
// Define your routes
const routes = [
  {
    path: "/", // Define the path for the home route
    name: "Home",
    component: Home, // Set the component for the route
  },
  {
    path: "/about", // Define the path for the home route
    name: "About",
    component: About, // Set the component for the route
  },
  {
    path: "/gallery", // Define the path for the home route
    name: "Gallery",
    component: Gallery, // Set the component for the route
  },
  {
    path: "/contact-us", // Define the path for the home route
    name: "Contact",
    component: Contact, // Set the component for the route
  },
  {
    path: "/gallery/event-one", // Define the path for the home route
    name: "GalleryOne",
    component: GalleryOne, // Set the component for the route
  },
  {
    path: "/gallery/event-two", // Define the path for the home route
    name: "GalleryTwo",
    component: GalleryTwo, // Set the component for the route
  },
  {
    path: "/gallery/event-three", // Define the path for the home route
    name: "GalleryThree",
    component: GalleryThree, // Set the component for the route
  },
  {
    path: "/gallery/event-four", // Define the path for the home route
    name: "GalleryFour",
    component: GalleryFour, // Set the component for the route
  },
  {
    path: "/service", // Define the path for the home route
    name: "Service",
    component: Service, // Set the component for the route
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use the HTML5 history mode
  routes,
});

const app = createApp(App);

// Use the router
app.use(router);

app.mount("#app");
