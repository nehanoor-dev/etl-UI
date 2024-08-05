<template>

    <v-app>
    
    <v-container fluid>
    
    <!-- Top Stats -->
    
    <v-row>
    
    <v-col cols="12" md="4">
    
    <v-card class="pa-4" height="100">
    
    <v-row>
    
    <v-col>
    
    <h3>Total Connections</h3>
    
    <p>25</p>
    
    </v-col>
    
    </v-row>
    
    </v-card>
    
    </v-col>
    
    <v-col cols="12" md="4">
    
    <v-card class="pa-4" height="100">
    
    <v-row>
    
    <v-col>
    
    <h3>Active Connections</h3>
    
    <p>14</p>
    
    </v-col>
    
    </v-row>
    
    </v-card>
    
    </v-col>
    
    <v-col cols="12" md="4">
    
    <v-card class="pa-4" height="100">
    
    <v-row>
    
    <v-col>
    
    <h3>Disabled Connections</h3>
    
    <p>11</p>
    
    </v-col>
    
    </v-row>
    
    </v-card>
    
    </v-col>
    
    </v-row>
    
    <!-- Data and Connection Charts -->
    
    <v-row>
    
    <v-col cols="12" md="6">
    
    <v-card class="pa-4" height="350">
    
    <h3>Data Per Connection</h3>
    
    <v-card-text class="d-flex align-center justify-center">
    
    <v-sparkline :auto-line-width="autoLineWidth" :fill="fill"
    
    :gradient="gradient" :gradient-direction="gradientDirection"
    
    :line-width="width" :model-value="value" :padding="padding"
    
    :smooth="radius || false" :stroke-linecap="lineCap" :type="type"
    
    auto-draw></v-sparkline>
    
    </v-card-text>
    
    </v-card>
    
    </v-col>
    
    <v-col cols="12" md="6">
    
    <v-card class="pa-4" height="350">
    
    <h3>Connections</h3>
    
    <v-card-text class="d-flex align-center justify-center">
    
    <div id="chart">
    
    <apexchart type="donut" width="100%" :options="chartOptions"
    
    :series="series"></apexchart>
    
    </div>
    
    </v-card-text>
    
    </v-card>
    
    </v-col>
    
    </v-row>
    
    <!-- Custom Connectors Table -->
    
    <v-row>
    
    <v-col cols="12">
    
    <v-card class="pa-4">
    
    <h3>Custom Connectors</h3>
    
    <v-data-table
    
    :headers="combinedHeaders"
    
    :items="combinedData"
    
    class="elevation-1"
    
    ></v-data-table>
    
    </v-card>
    
    </v-col>
    
    </v-row>
    
    </v-container>
    
    </v-app>
    
    </template>
    
    <script>
    
    import VueApexCharts from 'vue3-apexcharts';
    
    import { defineComponent } from 'vue';
    
    export default defineComponent({
    
    components: {
    
    apexchart: VueApexCharts,
    
    },
    
    data() {
    
    return {
    
    combinedHeaders: [
    
    { text: 'Name', value: 'name' },
    
    { text: 'Type', value: 'type' },
    
    { text: 'Sync Type', value: 'syncType' },
    
    { text: 'Status', value: 'status' },
    
    { text: 'Creation Date', value: 'date' },
    
    ],
    
    combinedData: [
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Destination', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Source', syncType: '', status: 'In-active', date: '29 July, 2023' },
    
    { name: 'LLM Connector', type: 'Destination', syncType: '', status: 'Active', date: '29 July, 2023' },
    
    { name: 'Connection 1', type: '', syncType: 'Real-Time', status: 'Active', date: '29 July, 2023' },
    
    { name: 'Connection 2', type: '', syncType: 'Every 1 hour', status: 'Active', date: '29 July, 2023' },
    
    { name: 'Connection 3', type: '', syncType: 'Every 2 hour', status: 'In-active', date: '29 July, 2023' },
    
    { name: 'Connection 4', type: '', syncType: 'Every 24 hour', status: 'Active', date: '29 July, 2023' },
    
    ],
    
    autoLineWidth: false,
    
    fill: false,
    
    gradient: ['#00c6ff', '#F0F', '#FF0'],
    
    gradientDirection: 'top',
    
    lineCap: 'round',
    
    radius: 10,
    
    width: 2,
    
    padding: 8,
    
    type: 'trend',
    
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    
    series: [44, 55, 41], // Ensure this matches the data you want to display
    
    chartOptions: {
    
    chart: {
    
    type: 'donut',
    
    },
    
    labels: ['Active Connection', 'Pending Connections', 'Total Connections'], // Add custom labels here
    
    responsive: [{
    
    breakpoint: 480,
    
    options: {
    
    chart: {
    
    width: 200
    
    },
    
    legend: {
    
    position: 'bottom'
    
    }
    
    }
    
    }]
    
    },
    
    };
    
    },
    
    });
    
    </script>
    
    <style scoped>
    
    .pa-4 {
    
    padding: 16px;
    
    }
    
    #chart {
    
    width: 100%;
    
    height: 300px;
    
    }
    
    .v-card {
    
    margin-bottom: 16px;
    
    }
    
    .d-flex {
    
    display: flex;
    
    }
    
    .align-center {
    
    align-items: center;
    
    }
    
    .justify-center {
    
    justify-content: center;
    
    }
    
    </style>