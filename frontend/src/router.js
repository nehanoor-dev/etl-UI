import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/SubComponents/Dashboard.vue'
import Pipelines from './components/SubComponents/pipelines.vue'
import Source from './components/SubComponents/Source.vue'
import Transformation from './components/SubComponents/Transformation.vue'
import Destination from './components/SubComponents/Destination.vue'
import BuildAIConnections from './components/SubComponents/BuildAIConnections.vue'
import Help from './components/SubComponents/Help.vue'
import Workspace from './components/SubComponents/Workspace.vue'
import FileInstructions from './components/SubComponents/FileInstructions.vue'
import Settings from './components/SubComponents/Settings.vue'
import maindest from './components/destination/mine/maindest.vue'


const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/settings', component: Settings },

  { path: '/FileInstructions', component: FileInstructions },
  { path: '/pipelines', component: Pipelines },
  { path: '/source', component: Source },
  { path: '/transformation', component: Transformation },
  { path: '/destination', component: Destination},
  {name: 'maindest', path: '/destination/maindest.vue', component: maindest},
  { path: '/build-ai-connection', component: BuildAIConnections },
  { path: '/help', component: Help },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
