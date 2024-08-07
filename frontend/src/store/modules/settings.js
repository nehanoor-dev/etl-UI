import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import UserProfile from '@/components/SidebarSettingsProfile.vue';
import SecuritySettings from '@/components/SidebarSettingsSecurity.vue';
import SettingsWorkspace from '@/components/SidebarSettingsWorkspace.vue';

export const useSettingsStore = defineStore('settings', () => {
  // Define a reactive variable for the selected item
  const selectedItem = ref('Profile');

  // Define an array of items for the menu
  const items = [
    { title: 'Profile', icon: 'mdi-account-circle' },
    { title: 'Security', icon: 'mdi-shield-account' },
    { title: 'Workspace', icon: 'mdi-account-group' },
    { title: 'Applications', icon: 'mdi-apps' },
  ];

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

  return {
    selectedItem,
    items,
    selectedComponent,
  };
});
