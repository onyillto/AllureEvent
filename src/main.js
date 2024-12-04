import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"; // Import Vue Router
import Home from "./views/Home.vue"; // Import the Home component
import About from "./views/About.vue"
import Gallery from "./views/Gallery.vue";
import "./style.css";

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
