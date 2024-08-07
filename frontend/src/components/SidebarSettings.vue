<template>
  <v-navigation-drawer permanent width="250">
    <v-list class="my-10">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        class="d-flex align-center mx-2 my-4"
        @click="setSelectedItem(item.title)"
        :class="{ 'v-list-item--active': selectedItem === item.title }"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <div class="mt-14 mx-16">
    <component :is="selectedComponent" />
  </div>
</template>

<script setup>
import { useSettingsStore } from '@/store/modules/settings.js';
import { storeToRefs } from 'pinia';

// Initialize the Pinia store instance
const settingsStore = useSettingsStore();

// Destructure reactive properties from the store and convert them to refs for reactivity
const { selectedItem, selectedComponent } = storeToRefs(settingsStore);

// non-reactive, no need for storeToRefs
const items = settingsStore.items;

/**
 * Updates the selected item in the store.
 *
 * @param {string} item - The title of the item to be selected.
 * @returns {void}
 */
const setSelectedItem = (item) => {
  settingsStore.selectedItem = item;
};
</script>

<style scoped>
.v-navigation-drawer {
  background-color: #f5f5f5;
}

.v-list-item {
  padding: 16px;
  cursor: pointer;
}

.v-list-item-title {
  margin-left: 1rem;
}

.v-list-item--active {
  background-color: #023c8315;
  border-left: 10px solid #023c83;
}

.v-list-item >>> .v-list-item__content {
  display: flex;
}

.v-btn {
  margin-top: 16px;
}
</style>
