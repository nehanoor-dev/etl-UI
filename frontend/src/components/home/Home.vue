<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="2">
          <v-navigation-drawer app v-model="drawer" :rail="rail" permanent @click="rail = false">
            <v-list-item title="Unify Data" nav class="custom-list-item">
              <template v-slot:append>
                <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail" class="custom-btn"></v-btn>
              </template>
            </v-list-item>
            <v-divider></v-divider>
            <div class="custom-header ml-12">Dashboard</div>
            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-home-city" title="Dashboard" value="home" class="custom-list-item"></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="Pipelines" value="account" class="custom-list-item"></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="Bulk Pipelines" value="account" class="custom-list-item"></v-list-item>
              <div class="custom-header ml-12">Editor</div>
              <v-list-item prepend-icon="mdi-account" title="Source" value="account" class="custom-list-item"></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="Destination" value="account" class="custom-list-item"></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="Transformation" value="account" class="custom-list-item"></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="Build AI Connections" value="account" class="custom-list-item"></v-list-item>
              <v-list-item prepend-icon="mdi-account-group-outline" title="Workspaces" value="users" class="custom-list-item"></v-list-item>
            </v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav class="custom-list-item">
            </v-list-item>
          </v-navigation-drawer>
        </v-col>

        <v-col cols="10">
          <v-app-bar app class="custom-app-bar">
            <v-toolbar-title class="custom-toolbar-title">Navigation</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon class="custom-btn">
              <v-icon>mdi-bell</v-icon>
            </v-btn>
          </v-app-bar>
          <v-main>
            <v-container class="custom-container">
              <!-- Your main content -->
              <router-view></router-view>
            </v-container>
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
};
</script>

<style scoped>
.custom-list-item {
  background-color: #f0f0f0;
  color: #333;
  transition: background-color 0.3s ease;
}

.custom-list-item:hover {
  background-color: #e0e0e0;
  color: #023C83;
  font-size: 20px;
}

.custom-btn {
  color: black;
}

.custom-app-bar {
  background-color: #3f51b5;
  color: white;
}

.custom-toolbar-title {
  font-weight: bold;
  font-size: 1.5rem;
}

.custom-header {
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px;
  color: #555;
}

.v-list-item {
  background-color: white;
}
</style>
