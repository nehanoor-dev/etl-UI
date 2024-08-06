<template>
  <v-navigation-drawer permanent>
    <v-list class="my-10">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        class="d-flex align-center mx-4 my-4"
        @click="selectedItem = item.title"
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
  <!-- <v-responsive>
    <div> 
  <div class="text-h5">
    {{ selectedItem }}
  </div> -->
  <component :is="selectedComponent" />
  <!-- </div>
  </v-responsive> -->
</template>

<script setup>
import { ref, computed } from 'vue';
import UserProfile from './SidebarSettingsProfile.vue';
import SecuritySettings from './SidebarSettingsSecurity.vue';
import SettingsWorkspace from './SidebarSettingsWorkspace.vue';

// Define an array of items for the menu
const items = [
  { title: 'Profile', icon: 'mdi-account-circle' },
  { title: 'Security', icon: 'mdi-shield-account' },
  { title: 'Applications', icon: 'mdi-apps' },
  { title: 'Workspace', icon: 'mdi-account-group' },
];

// Define a reactive variable for the selected item
const selectedItem = ref('Profile');

/**
 * Computed property to return the component based on the selected item

 * @param {none}
 * @returns {object|null} - Returns the corresponding component or null if no match
 */
const selectedComponent = computed(() => {
  switch (selectedItem.value) {
    case 'Profile':
      return UserProfile;
    case 'Security':
      return SecuritySettings;
    case 'Workspace':
      return SettingsWorkspace;
    default:
      return null;
  }
});
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
