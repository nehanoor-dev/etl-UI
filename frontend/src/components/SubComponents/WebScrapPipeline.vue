<template>
    <v-container>
      <v-data-table :headers="headers" :items="connections" :sort-by="['lastModified']" sort-desc>
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Connection Status Overview</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn class="mb-2" color="primary" dark @click="openNewDialog">
              New Connection
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon class="mr-2" @click="runConnection(item)">mdi-play</v-icon>
          <v-icon class="mr-2" @click="showDetails(item)">mdi-information-outline</v-icon>
          <v-icon class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon @click="() => deleteItem(item)">mdi-delete</v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
  
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h5">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field v-model="editedItem.name" label="Connection Name"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="editedItem.connectionType" label="Connection Type"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-select v-model="editedItem.status" :items="['Active', 'Inactive']" label="Status"></v-select>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="editedItem.url" label="Connection URL"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false,
        headers: [
          { text: 'Name', value: 'name', align: 'start', sortable: true },
          { text: 'Connection Type', value: 'connectionType', align: 'start', sortable: true },
          { text: 'Status', value: 'status', align: 'start', sortable: true },
          { text: 'URL', value: 'url', align: 'start', sortable: true },
          { text: 'Last Modified', value: 'lastModified', align: 'start', sortable: true },
          { text: 'Actions', value: 'actions', sortable: false }
        ],
        connections: [],
        editedItem: {
          name: '',
          connectionType: '',
          status: 'Active',
          url: '',
          lastModified: new Date().toISOString().substring(0, 10),
        },
        defaultItem: {
          name: '',
          connectionType: '',
          status: 'Active',
          url: '',
          lastModified: new Date().toISOString().substring(0, 10),
        },
      };
    },
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'New Connection' : 'Edit Connection';
      },
    },
    methods: {
      initialize() {
        this.connections = [
          { name: 'Server A', connectionType: 'Source', status: 'Active', url: 'http://example.com', lastModified: '2024-08-01' },
          { name: 'Server B', connectionType: 'Destination', status: 'Inactive', url: 'http://example.org', lastModified: '2024-07-30' },
        ];
      },
      openNewDialog() {
        this.editedItem = { ...this.defaultItem };
        this.dialog = true;
      },
      editItem(item) {
        this.editedItem = { ...item };
        this.dialog = true;
      },
      deleteItem(item) {
        const index = this.connections.indexOf(item);
        if (index > -1) {
          this.connections.splice(index, 1);
        }
      },
      save() {
        const index = this.connections.findIndex(c => c.name === this.editedItem.name && c.url === this.editedItem.url);
        if (index === -1) {
          this.connections.push({ ...this.editedItem, lastModified: new Date().toISOString().substring(0, 10) });
        } else {
          this.connections[index] = { ...this.editedItem, lastModified: new Date().toISOString().substring(0, 10) };
        }
        this.dialog = false;
      },
      close() {
        this.dialog = false;
      },
      runConnection(item) {
        alert(`Running connection: ${item.name}`);
      },
      showDetails(item) {
        alert(`Details for ${item.name}: Type - ${item.connectionType}, URL - ${item.url}`);
      },
    },
    created() {
      this.initialize();
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles here */
  </style>
  