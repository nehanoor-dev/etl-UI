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

import PipelineInfo from './components/DataPipeline/PipelineInfo/PipelineInfo.vue';
import NewDestination from './components/DataPipeline/NewPipeline/Destination/NewDestination.vue';
import ExistingDestiination from './components/DataPipeline/NewPipeline/Destination/ExistingDestiination.vue';
import Loader from './components/DataPipeline/NewPipeline/Configuration/Loader.vue';
import PipelinePopup from './components/PipelinePopup.vue';
import MultipleSource from './components/DataPipeline/BulkPipeline/MultipleSource.vue';
import MultipleDestination from './components/DataPipeline/BulkPipeline/MultipleDestination.vue';



import WebScrapPipeline from './components/SubComponents/WebScrapPipeline.vue'





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
    path: '/bulkpipelines',
    name: 'Bulkpipelines',
    component: PipelinePopup,
  },
  {
    path: '/multiplesource',
    name: 'MultipleSource',
    component: MultipleSource,
  },
  {
    path: '/multipledestination',
    name: 'MultipleDestination',
    component: MultipleDestination,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});




export default router