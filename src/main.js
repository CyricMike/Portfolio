/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import Techno from '@/assets/informations/Technologies'
import ProjectInfo from '@/assets/informations/Projects'
import Experience from '@/assets/informations/Experience'

const app = createApp(App)

app.config.globalProperties.Techs = Techno.roots
app.config.globalProperties.Projects = ProjectInfo.roots
app.config.globalProperties.Experiences = Experience.roots

registerPlugins(app)

app.mount('#app')
