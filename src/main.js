import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
App.use(store);

createApp(App).mount("#app");
