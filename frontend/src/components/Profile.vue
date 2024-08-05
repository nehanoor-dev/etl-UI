<template>
  <div class="text-center">
    <v-menu
      v-model="popup"
      :close-on-content-click="false"
      location="end"
    >
      <template v-slot:activator="{ props }">
        
        <v-list-item  
        v-bind="props" prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" ></v-list-item>

      </template>

      <v-card min-width="300">
        <v-list>
 
          <v-list-item
                v-for="item in appendItems"
                :key="item.value"
                :prepend-icon="item.icon"
                :title="item.title"
                :value="item.value"
                :active="selectedItem === item.value"
                :class="{'custom-list-item': true, 'selected-item': selectedItem === item.value}"
                @click="handleItemClick(item)"
            ></v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
  export default {
    data: () => ({
      fav: true,
      popup: false,
      message: false,
      hints: true,
      appendItems: [
                { route: '/Settings', value: 'Setting', icon: 'mdi-cog', title: 'Setting' },
                { route: '/Logout', value: 'Logout', icon: 'mdi-logout', title: 'Logout' },
            ]
    }),
    methods: {
        
        handleItemClick(item) {
            console.log(`Item clicked: ${item.value}`);
            this.selectedItem = item.value;
            this.$router.push(item.route);  // Navigate to the route
        }
    }
  }
</script>

