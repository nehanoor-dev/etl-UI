import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './components/SubComponents/Dashboard.vue';
//import Pipelines from './components/SubComponents/pipelines.vue';
import Source from './components/SubComponents/Source.vue';
import Transformation from './components/SubComponents/Transformation.vue';
import Destination from './components/SubComponents/Destination.vue';
import BuildAIConnections from './components/SubComponents/BuildAIConnections.vue';
import Help from './components/SubComponents/Help.vue';
import FileInstructions from './components/FileInstructions.vue';
import Settings from '@/components/SidebarSettings.vue';
import Pipeline from './components/DataPipeline/PipelineMain/Pipeline.vue';
import Stepper from './components/DataPipeline/NewPipeline/Stepper.vue';
import NewSource from './components/DataPipeline/NewPipeline/source/NewSource.vue';
import PipelineInfo from './components/DataPipeline/PipelineInfo/PipelineInfo.vue';
import NewDestination from './components/DataPipeline/NewPipeline/Destination/NewDestination.vue';
import ExistingDestiination from './components/DataPipeline/NewPipeline/Destination/ExistingDestiination.vue';
import Loader from './components/DataPipeline/NewPipeline/Configuration/Loader.vue';
import Setup from './components/DataPipeline/BulkPipeline/Setup.vue';
import BulkPipelineSetup from './components/DataPipeline/BulkPipeline/BulkPipelineSetup.vue';
import PipelinePopup from './components/PipelinePopup.vue';



import WebScrapPipeline from './components/SubComponents/WebScrapPipeline.vue'

import BulkPipelines from './components/SubComponents/BulkPipelines.vue'




const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/settings', component: Settings },

{ path: '/', component: Dashboard },

{ path: '/webscrappipeline', component: WebScrapPipeline },

  { path: '/FileInstructions', component: FileInstructions },
  { path: '/pipelines', component: Pipeline },
  { path: '/source', component: Source },
  { path: '/transformation', component: Transformation },
  { path: '/destination', component: Destination },
  { path: '/build-ai-connection', component: BuildAIConnections },
  { path: '/help', component: Help },
  {
    path: '/newpipeline',
    name: 'newpipeline',
    component: Stepper,
  },
  {
    path: '/newsource',
    name: 'New Source',
    component: NewSource,
  },
  {
    path: '/pipelineinfo/:id',
    name: 'PipelineInfo',
    component: PipelineInfo,
  },
  {
    path: '/newdestination',
    name: 'New Destination',
    component: NewDestination,
  },
  {
    path: '/ExistingDestination',
    name: 'Existing Destination',
    component: ExistingDestiination,
  },
  {
    path: '/loader',
    name: 'Loader',
    component: Loader,
  },
  {
    path: '/setup',
    name: 'Setup',
    component: Setup,
  },
  {
    path: '/bulkpipeline',
    name: 'Bulkpipeline',
    component: BulkPipelineSetup,
  },
  {
    path: '/bulkpipelines',
    name: 'Bulkpipelines',
    component: PipelinePopup,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});




export default router