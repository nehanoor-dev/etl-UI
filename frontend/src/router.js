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
import Loader from './components/DataPipeline/NewPipeline/Configuration/Loader.vue';
import MultipleSource from './components/DataPipeline/BulkPipeline/MultipleSource.vue';
import MultipleDestination from './components/DataPipeline/BulkPipeline/MultipleDestination.vue';
import BulkPipeLineMain from './components/DataPipeline/BulkPipeline/BulkPipeLineMain.vue';
import MultipleSourceStepper from './components/DataPipeline/BulkPipeline/MultipleSourceStepper.vue';

import WebScrapPipeline from './components/SubComponents/WebScrapPipeline.vue'





const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/settings', component: Settings },

{ path: '/', component: Dashboard },

{ path: '/webscrappipeline', component: WebScrapPipeline },

  { path: '/FileInstructions', component: FileInstructions },
  { path: '/pipelines', component: Pipeline },
  { path: '/bulkpipeline', name: 'BulkPipeLine', component:BulkPipeLineMain },
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
    path: '/loader',
    name: 'Loader',
    component: Loader,
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
  {
    path: '/newsourcebulk',
    name: 'NewSourceBulk',
    component: MultipleSourceStepper,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});




export default router