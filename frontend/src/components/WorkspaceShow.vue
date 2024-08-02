<template>
  <div>
    <v-menu v-model="menu" location="end">
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          :title="selectedItem?.title"
          append-icon="mdi-chevron-right"
        >
        </v-list-item>
      </template>

      <v-list class="ml-5" min-width="270">
        <!-- Display selected item -->
        <v-list-item v-if="selectedItem" class="my-1">
          <template v-slot:prepend>
            <v-avatar color="grey-lighten-2" rounded="0" class="rounded-lg">
              <span class="align-items-center">
                {{ getInitials(selectedItem.title) }}
              </span>
            </v-avatar>
          </template>
          <v-list-item-content>
            <v-list-item-title>{{ selectedItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <!-- Search bar -->
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

        <!-- List of items for selection -->
        <v-list-item v-for="item in filteredItems" :key="item.title" class="mt-1 mb-3" @click="selectItem(item)">
          <template v-slot:prepend>
            <v-avatar color="grey-lighten-2" rounded="0" class="rounded-lg">
              <span class="align-items-center">
                {{ getInitials(item.title) }}
              </span>
            </v-avatar>
          </template>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
    <workspaceAdd :opendailoge.sync="dailog" @closeDailog="closeDailog" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import workspaceAdd from './WorkspaceAdd.vue';

// State management
const menu = ref(false);
const searchQuery = ref('');
const dailog = ref(false);

// List of all workspaces
const allItems = ref([
  { title: 'Enlatics' },
  { title: 'Programmers Force' },
  { title: 'Enlatics Lite' },
  { title: 'Know your product' },
]);
// Selected workspace
const selectedItem = ref(allItems.value[0]);

// Computed property to filter items based on the search query
const filteredItems = computed(() => {
  return (
    allItems.value
      .filter((item) => item.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
      // Exclude the selected item
      .filter((item) => item.title !== selectedItem.value?.title)
  );
});

// Method to get initials from a title
function getInitials(title) {
  return title
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
}

// Method to select an item
function selectItem(item) {
  selectedItem.value = item;
}

function Addworkspace() {
  dailog.value = true;
}

function closeDailog() {
  dailog.value = false;
}
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
