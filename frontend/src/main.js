/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from './router'
import zstore from './components/destination/mine/zstore' 

const app = createApp(App)

registerPlugins(app)

app.use(zstore)

app.use(router)

app.mount('#app')
