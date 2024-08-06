<template>

    <v-container>
    
    <!-- Button at the top, aligned to the right -->
    
    <v-row>
    
    <v-col cols="12" class="d-flex justify-end">
    
    <v-btn color="blue" class="rounded mb-3">
    
    + Create New
    
    </v-btn>
    
    </v-col>
    
    </v-row>
    
    <!-- Data Table with responsive design -->
    
    <v-row>
    
    <v-col cols="12">
    
    <v-data-table
    
    :items="connections"
    
    class="border"
    
    item-key="name"
    
    >
    
    <template v-slot:item="{ item }">
    
    <tr>
    
    <td>{{ item.name }}</td>
    
    <td>{{ item.connectionType }}</td>
    
    <td>{{ item.status }}</td>
    
    <td>{{ item.lastModified }}</td>
    
    <td><v-icon>mdi-pencil</v-icon></td>
    
    <td><v-icon>mdi-delete</v-icon></td>
    
    </tr>
    
    </template>
    
    </v-data-table>
    
    </v-col>
    
    </v-row>
    
    </v-container>
    
    </template>
    
    <script>
    
    export default {
    
    data() {
    
    return {
    
    connections: [
    
    {
    
    name: 'Server A',
    
    connectionType: 'Source',
    
    status: 'Active',
    
    lastModified: '2024-08-01',
    
    },
    
    {
    
    name: 'Server B',
    
    connectionType: 'Destination',
    
    status: 'Inactive',
    
    lastModified: '2024-07-30',
    
    },
    
    {
    
    name: 'Server C',
    
    connectionType: 'Source',
    
    status: 'Pending',
    
    lastModified: '2024-08-02',
    
    },
    
    {
    
    name: 'Server D',
    
    connectionType: 'Destination',
    
    status: 'Active',
    
    lastModified: '2024-07-28',
    
    },
    
    ],
    
    headers: [
    
    { text: 'Name', value: 'name', align: 'start' },
    
    { text: 'Connection Type', value: 'connectionType', align: 'start' },
    
    { text: 'Status', value: 'status', align: 'start' },
    
    { text: 'Last Modified', value: 'lastModified', align: 'start' },
    
    { text: ' ', value: 'edit',align: 'start', sortable: false },
    
    { text: ' ', value: 'delete',align: 'start', sortable: false },
    
    ],
    
    }
    
    },
    
    }
    
    </script>