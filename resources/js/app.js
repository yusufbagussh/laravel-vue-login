import { createApp } from "vue";
import App from "./components/App.vue";
import router from "./router";
import VueCookie from "vue-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App);
app.use(router);
app.use(VueCookie)
app.provide('cookies', app.config.globalProperties.$cookies)
app.mount("#app");

// require("./bootstrap");

// import { createApp } from "vue";
// import VueCookie from "vue-cookie";

// import App from "./components/App.vue";
// import router from "./router";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min";

// import Root from "./App.vue";

// const app = createApp(App);
// app.use(VueCookie);
// app.use(router);

// app.provide("cookies", app.config.globalProperties.$cookies);

// app.mount("#app");
