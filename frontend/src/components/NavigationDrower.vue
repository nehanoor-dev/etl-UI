<template>
  <v-navigation-drawer app v-model="drawer" :rail="rail" permanent @click="handleDrawerClick">
    <v-list density="compact" nav>
      <v-list-item
        prepend-avatar="data:image/png;base64,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"
        class="logo"
      >
        <v-item-title class="custom-title">Unify Data</v-item-title>
        <template v-slot:append>
          <v-icon style="font-size: 24px" @click.stop="toggleRail">{{
            rail ? 'mdi-chevron-right' : 'mdi-chevron-left'
          }}</v-icon>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="item in dashboardItems"
        :key="item.value"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.value"
        :active="selectedItem === item.value"
        :class="{ 'custom-list-item': true, 'selected-item': selectedItem === item.value }"
        @click="handleItemClick(item)"
      ></v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list-item
        v-for="item in appendItems"
        :key="item.value"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.value"
        :active="selectedItem === item.value"
        :class="{ 'custom-list-item': true, 'selected-item': selectedItem === item.value }"
        @click="handleItemClick(item)"
      ></v-list-item>
      <workspaceShow />
      <v-divider></v-divider>
      <Profile />
    </template>
  </v-navigation-drawer>
</template>

<script>
import Profile from './Profile.vue';
// import workspaceShow from './WorkspaceShow.vue';
export default {
  data() {
    return {
      drawer: true,
      selectedItem: null,
      rail: true,
      dashboardItems: [
        { route: '/dashboard', value: 'dashboard', icon: 'mdi-view-dashboard', title: 'Dashboard' },
        { route: '/pipelines', value: 'pipeline', icon: 'mdi-pipe', title: 'Pipelines' },
        { route: '/source', value: 'source', icon: 'mdi-power-plug', title: 'Source' },
        {
          route: '/transformation',
          value: 'transformation',
          icon: 'mdi-swap-horizontal-variant',
          title: 'Transformation',
        },
        { route: '/destination', value: 'destination', icon: 'mdi-map-marker-circle', title: 'Destination' },
        { route: '/build-ai-connection', value: 'build-ai-connection', icon: 'mdi-connection', title: 'Builder' },
        {
          route: '/FileInstructions',
          value: 'FileInstructions',
          icon: 'mdi-text-box-multiple-outline',
          title: 'File Instructions',
        },
      ],
      appendItems: [
        { route: '/help', value: 'help', icon: 'mdi-help-circle-outline', title: 'Help' },
        // { route: '/workspace', value: 'workspace', icon: 'mdi-folder-network-outline', title: 'Workspace' },
      ],
    };
  },
  methods: {
    handleDrawerClick() {
      this.rail = false; // Close rail on any click inside the drawer
    },
    toggleRail() {
      this.rail = !this.rail;
    },
    handleItemClick(item) {
      console.log(`Item clicked: ${item.value}`);
      this.selectedItem = item.value;
      this.$router.push(item.route); // Navigate to the route
    },
  },
};
</script>

<style scoped>
.custom-list-item:hover {
  background-color: #e0e0e0;
  color: #023c83;
  font-size: 20px;
}

.custom-title {
  font-size: 18px;
  color: #023c83;
  font-weight: bold;
}

.logo {
  font-size: 20px;
  height: 7vh;
}

.v-navigation-drawer {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.v-icon {
  transition: transform 0.3s ease;
}
</style>
