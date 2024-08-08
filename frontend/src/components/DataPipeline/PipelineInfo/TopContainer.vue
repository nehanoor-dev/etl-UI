<template>
  <v-container fluid class="mx-2">
    <v-row class="justify-space-between">
      <v-col cols="12" sm="6" class="d-flex align-center">
        <div class="icon-background mr-2">
          <v-icon size="25" style="color: white;">mdi-check-circle</v-icon>
        </div>
        <div>
          <div class="heading">{{ pipeline.name }}</div>
          <div class="custom-label">
            <!-- <v-icon></v-icon> -->
            <v-icon class="mr-2">
              <v-img class="rounded-icon" :src="'data:image/png;base64,' + pipeline.source_connector.image" height="20"
                width="20"></v-img>
            </v-icon>
            <span class="font-weight-light">{{ pipeline.source_connector.name }}</span>
            <v-icon size="18" class="mx-1" style="color: #0C87A3;">mdi-arrow-right</v-icon>
            <v-icon class="mr-2">
              <v-img class="rounded-icon" :src="'data:image/png;base64,' + pipeline.destination_connector.image"
                height="20" width="20"></v-img>
            </v-icon>
            <span class="font-weight-light">{{ pipeline.destination_connector.name }}</span>
          </div>


        </div>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex align-center justify-end">
        <div class="custom-label">
          <v-icon size="18" class="mr-1">mdi-clock-outline</v-icon>
          <span>{{ pipeline.frequency }}</span>
        </div>
        <v-btn style="color: #023C83;" text variant="plain">
          <v-icon left>mdi-refresh</v-icon>
          Sync now
        </v-btn>
        <v-switch v-model="isEnabled" @click="statusUpdate" color="primary" label="status" hide-details></v-switch>
        <div class="relative-container">
          <v-icon @click="toggleDialog" size="30" class="ml-5">mdi-cog</v-icon>
          <v-slide-y-transition>
            <v-card v-if="dialogVisible" class="absolute-dialog" width="130vh" height="525">
              <v-row>
                <v-col> <v-card-title class="heading">Setting</v-card-title></v-col>
                <v-col class="ma-5" align="end"><v-icon color="blue" text
                    @click="dialogVisible = false">mdi-close</v-icon></v-col>
              </v-row>

              <v-card-text>
                <Setting
                :pipeline-name="pipeline.name"
                :schedule-type = "pipeline.schedule_type"
                :frequency = "pipeline.frequency"
                :id = "pipeline.id"
                :dialogVisible = "dialogVisible"
                @dialog="handleDialog"
                ></Setting>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

              </v-card-actions>
            </v-card>
          </v-slide-y-transition>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import Setting from './Setting.vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
const store = useStore();

const pipeline = computed(() => store.getters.getPipelineById(props.id));

const isEnabled = ref(pipeline.value.status === 'Enabled');
const dialogVisible = ref(false);

const handleDialog = (value) => {
  console.log("v",value)
  dialogVisible.value = value
}
const toggleDialog = () => {
  dialogVisible.value = !dialogVisible.value;
};
const statusUpdate = () => {
  var x= "Enabled";
  console.log("jhgh",pipeline.value.status);
  if(pipeline.value.status=="Enabled"){
    pipeline.value.status = "Disabled"
    console.log("upsate",pipeline.value.status)
    x="Disabled"
  }
  const currentStatus = isEnabled.value;
  const status = {
    id: props.id,
    status: x,
  }
  console.log("ji",status);
  store.dispatch('saveChanges', status )
  console.log(status)
}
</script>

<style scoped>
.relative-container {
  position: relative;
  display: inline-block;
}

.absolute-dialog {
  position: absolute;
  top: 30px;
  /* Adjust this value as needed */
  right: 0;
  z-index: 1;
  height: fit-content;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;

}
.icon-background {
background-color: #00C853;
border-radius: 20%;
display: flex;
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
}
</style>
