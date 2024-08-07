import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

import { registerPlugins } from '@/plugins';

import { createApp } from 'vue';

const pinia = createPinia();
const app = createApp(App);

registerPlugins(app);
app.use(router);
app.use(pinia);

app.mount('#app');
