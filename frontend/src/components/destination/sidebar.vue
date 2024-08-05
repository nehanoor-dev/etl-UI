Sidebar.vue

<template>

<h1>HelloWorldvbsj</h1>

</template>

<script>

export default {

name: 'SideBar',

data: () => ({

}),

}

</script>
<!--   
  <script>
  export default {
    data: () => ({
      search: '',
      tab: null,
      items: [
        { icon: 'mdi-database', name: 'MySQL', category: 'Databases' },
        { icon: 'mdi-database', name: 'Mongo DB', category: 'Databases' },
        { icon: 'mdi-database', name: 'Oracle', category: 'Databases' },
        { icon: 'mdi-database', name: 'SQLite', category: 'Databases' },
        { icon: 'mdi-database', name: 'SQL Server', category: 'Databases' },
        { icon: 'mdi-database', name: 'CouchDB', category: 'Databases' },
        { icon: 'mdi-database', name: 'PostgreSQL', category: 'Databases' },
        { icon: 'mdi-database', name: 'Redis', category: 'Databases' }
      ]
    }),
    computed: {
      filteredItems() {
        return this.items.filter(item => item.category === this.tab);
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    text-align: center;
  }
  </style>
   -->