<template>
  <v-app>
    <v-container fluid>
      <!-- Top Stats -->
      <v-row>
        <v-col cols="12" md="3">
          <v-card class="pa-4" height="100">
            <v-row>
              <v-col>
                <h3>Total Connections</h3>
                <p>{{ totalConnections }}</p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="pa-4" height="100">
            <v-row>
              <v-col>
                <h3>Active Connections</h3>
                <p>{{ activeConnections }}</p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="pa-4" height="100">
            <v-row>
              <v-col>
                <h3>Inactive Connections</h3>
                <p>{{ inactiveConnections }}</p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="pa-4" height="100">
            <v-row>
              <v-col>
                <h3>Pending Connections</h3>
                <p>{{ pendingConnections }}</p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <!-- Connections Charts -->
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-4" height="350">
            <h3>Connections Overview</h3>
            <v-card-text class="d-flex align-center justify-center">
              <div id="chart">
                <apexchart type="donut" width="100%" :options="pieChartOptions" :series="pieSeries"></apexchart>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-4" height="350">
            <v-row>
              <v-col cols="12" class="d-flex align-center">
                <v-select
                  v-model="selectedYear"
                  :items="years"
                  label="Select Year"
                  @change="updateBarChart"
                ></v-select>
              </v-col>
            </v-row>
            <h3>Monthly Connections</h3>
            <v-card-text>
              <div id="bar-chart">
                <apexchart type="bar" width="100%" :options="barChartOptions" :series="barSeries"></apexchart>
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
            <v-data-table  :items="combinedData" class="elevation-2"></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';
import axios from 'axios';
import { defineComponent, computed, ref } from 'vue';

export default defineComponent({
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      combinedHeaders: [
        { text: 'Name', value: 'name' },
        { text: 'Type', value: 'type' },
        { text: 'Status', value: 'status' },
        { text: 'Creation Date', value: 'date' },
      ],
      combinedData: [],
      years: [], // List of years
      selectedYear: new Date().getFullYear(),
      
      pieChartOptions: {
        chart: {
          type: 'donut',
        },
        labels: ['Active Connections', 'Pending Connections', 'Inactive Connections'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
      },
      
      barChartOptions: {
        chart: {
          type: 'bar',
        },
        xaxis: {
          categories: [], // Months will be set dynamically
        },
        title: {
          text: 'Total Connections by Month',
        },
        dataLabels: {
          enabled: true,
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
            },
          },
        }],
      },
    };
  },
  computed: {
    totalConnections() {
      return this.combinedData.length;
    },
    activeConnections() {
      return this.combinedData.filter(item => item.status === 'Active').length;
    },
    pendingConnections() {
      return this.combinedData.filter(item => item.status === 'Pending').length;
    },
    inactiveConnections() {
      return this.totalConnections - this.activeConnections - this.pendingConnections;
    },
    pieSeries() {
      return [this.activeConnections, this.pendingConnections, this.inactiveConnections];
    },
    barSeries() {
      const monthlyData = this.processMonthlyData();
      return [{
        name: 'Connections',
        data: monthlyData.connections,
      }];
    },
  },
  methods: {
    processMonthlyData() {
      const months = Array(12).fill(0); // Initialize with 0 for each month
      const monthLabels = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];

      this.combinedData.forEach(item => {
        const date = new Date(item.date);
        if (date.getFullYear() === this.selectedYear) {
          const month = date.getMonth();
          months[month]++;
        }
      });

      this.barChartOptions.xaxis.categories = monthLabels;
      return { connections: months };
    },
    updateBarChart() {
      this.barSeries = this.processMonthlyData();
    },
    extractYears(data) {
      const years = new Set();
      data.forEach(item => {
        const year = new Date(item.date).getFullYear();
        years.add(year);
      });
      return Array.from(years).sort((a, b) => a - b);
    },
  },
  mounted() {
    axios.get('/db.json')
      .then(response => {
        this.combinedData = response.data.customConnectors;
        this.years = this.extractYears(this.combinedData);
        this.updateBarChart(); // Initialize with current year
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
});
</script>

<style scoped>
.pa-4 {
  padding: 16px;
}
#chart, #bar-chart {
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
