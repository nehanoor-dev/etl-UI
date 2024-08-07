import { createRouter, createWebHistory } from 'vue-router';
import Stepper from '@/components/NewPipeline/Stepper.vue';
import Pipeline from '@/components/PipelineMain/Pipeline.vue';
import ExistingSource from '@/components/BulkPipeline/BulkInputTable.vue';
import NewSource from '@/components/NewPipeline/source/NewSource.vue';
import PipelineInfo from '@/components/PipelineInfo/PipelineInfo.vue'
import NewDestination from '@/components/NewPipeline/Destination/NewDestination.vue';
import ExistingDestiination from '@/components/NewPipeline/Destination/ExistingDestiination.vue';
import Loader from '@/components/NewPipeline/Configuration/Loader.vue';
import BulkPipelineSetup from '@/components/BulkPipeline/BulkPipelineSetup.vue';
import Setup from '@/components/BulkPipeline/Setup.vue';
import ConfigBulkPipe from '@/components/BulkPipeline/ConfigBulkPipe.vue';
import { compile } from 'vue';


const routes = [
  {
    path: '/',
    name: 'Pipeline',
    component: Pipeline,
    
  },
  {
    path: '/newpipeline',
    name: 'newpipeline',
    component: Stepper,
  },
  {
    path: '/existingsource',
    name: 'Existing Source',
    component: ExistingSource,
  },{
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
    path: '/bulkpipeline',
    name: 'Bulk Pipeline',
    component: BulkPipelineSetup,
  },
  {
    path: '/setup',
    name: 'Setup',
    component: Setup,
  },
  {
    path: '/bulkconfig',
    name:'BulkConfiguration',
    component:ConfigBulkPipe
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
