<template>
  <div>
    <v-menu v-model="menu" location="end">
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-folder-network-outline"
          :title="selectedItem?.name"
          append-icon="mdi-chevron-right"
        >
        </v-list-item>
      </template>

      <v-list class="ml-5" min-width="270">
        <v-list-item v-if="selectedItem" class="my-1">
          <template v-slot:prepend>
            <v-avatar color="grey-lighten-2" rounded="0" class="rounded-lg">
              <span class="align-items-center">
                {{ getInitials(selectedItem.name) }}
              </span>
            </v-avatar>
          </template>
          <v-list-item-content>
            <v-list-item-title>{{ selectedItem.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />
        <v-text-field
          v-model="searchQuery"
          variant="solo"
          placeholder="Type to search..."
          prepend-inner-icon="mdi-magnify"
          class="my-3"
          density="comfortable"
          hide-details
          @click.stop
        ></v-text-field>

        <v-list-item v-for="item in filteredItems" :key="item.title" class="mt-1 mb-3" @click="selectItem(item)">
          <template v-slot:prepend>
            <v-avatar color="grey-lighten-2" rounded="0" class="rounded-lg">
              <span class="align-items-center">
                {{ getInitials(item.name) }}
              </span>
            </v-avatar>
          </template>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />
        <v-list-item
          class="workspace-icon my-2"
          prepend-icon="mdi-plus"
          title="New Workspace"
          @click="Addworkspace"
        ></v-list-item>
      </v-list>
    </v-menu>
    <workspaceAdd />
  </div>
</template>

<script setup>
import { useWorkspaceAddStore } from '@/store/modules/workspace-show.js';
import { storeToRefs } from 'pinia';
import workspaceAdd from './WorkspaceAdd.vue';

const workspaceAddStore = useWorkspaceAddStore();

const { opendailoge, inputValue, allItems, selectedItem, searchQuery, isSaveButtonEnabled, filteredItems, menu } =
  storeToRefs(workspaceAddStore);
const { openDailog, closeDailog, selectItem, getInitials, Addworkspace } = workspaceAddStore;
</script>

<style scoped>
.v-field__prepend-inner .v-icon {
  font-size: 18px !important;
  color: red !important;
}
.workspace-icon >>> .v-list-item__prepend {
  display: block;
}
</style>
