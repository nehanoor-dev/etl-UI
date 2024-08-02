<template>
        <v-navigation-drawer app permanent>
          <v-list dense>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              class="d-flex align-center"
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
        <div>
        <div class="text-h5">
            {{ selectedItem }}
        </div>
          <component :is="selectedComponent" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import UserProfile from './SidebarSettingsProfile.vue';
import SecuritySettings from './SidebarSettingsSecurity.vue';
// Import other components as needed

const items = [
  { title: 'Profile', icon: 'mdi-account-circle' },
{ title: 'Security', icon: 'mdi-shield-account' },
  { title: 'Applications', icon: 'mdi-apps' },
  { title: 'Workspace', icon: 'mdi-account-group' },
];

const selectedItem = ref('Profile');

const selectedComponent = computed(() => {
  switch (selectedItem.value) {
    case 'Profile':
      return UserProfile;
    case 'Security':
      return SecuritySettings;
    // Add other cases for different components
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

.v-list-item--active {
  background-color: rgba(0, 0, 0, 0.08);
}

.v-list-item >>> .v-list-item__content {
  display : flex;
}

.v-btn {
  margin-top: 16px;
}
</style>
