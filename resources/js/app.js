import { createApp } from 'vue';
import App from './components/App.vue'
import router from './router';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";


const app = createApp(App);
app.use(router);
app.mount("#app");
