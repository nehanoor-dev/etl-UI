<template>
  <v-data-table
    hover
    class = "elevation-4"
    :headers="headers"
    :items="desserts"
    :sort-by="[{ key: 'calories', order: 'asc' }]">
    
    <template v-slot:top>
      <v-toolbar flat>
        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn
            class="text-none mr-5"
            color="primary"
            rounded="lg"
            text="Add New Item"
            variant="flat"
            prepend-icon="mdi-plus"
            dark v-bind="props"
          ></v-btn>
          </template>
          
          <v-card>
            <v-card-title class="card-title">
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12" sm="6">
                    <v-text-field hide-details variant="outlined" v-model="editedItem.name" label="Dessert name"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" sm="6">
                    <v-text-field hide-details variant="outlined" v-model="editedItem.calories" label="Calories"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" sm="6">
                    <v-text-field hide-details variant="outlined" v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" sm="6">
                    <v-file-input hide-details variant="underlined" v-model="editedItem.proteinFile" label="Upload File" accept=".jpg,.png,.pdf"></v-file-input>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-divider></v-divider>  
            <v-card-actions class="my-2">
              <v-spacer></v-spacer>
              <v-btn class="text-none" variant="text" text="Cancel" @click="close">
              </v-btn>
              <v-btn 
               color="primary"
               rounded="lg"
               text="Save"
               variant="flat"
               @click="save">
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>


    <v-dialog v-model="dialogDelete" width="500">
    <v-card>
      <v-card-title class="card-title text-h5"> Delete Message </v-card-title>
      <v-card-text> Are you sure to want delete this Message ? </v-card-text>

      <v-divider class="my-2"></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="light-gray" text @click="closeDelete"> Close </v-btn>
        <v-btn color="error" variant="flat" @click="deleteItemConfirm"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>


      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'

const dialog = ref(false)
const dialogDelete = ref(false)

const headers = [
  {
    title: 'Dataset Name',
    align: 'start',
    key: 'name',
  },
  { title: 'Destination', key: 'calories' },
  { title: 'File Format', key: 'proteinFile' },
  { title: 'Updated_at', key: 'fat' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const desserts = ref([])
const editedIndex = ref(-1)
const editedItem = ref({
  name: '',
  calories: '',
  fat: '',
  proteinFile: '',
})
const defaultItem = {
  name: '',
  calories: '',
  fat: '',
  proteinFile: '',
}

const formTitle = computed(() => (editedIndex.value === -1 ? 'New Item' : 'Edit Item'))

watch(dialog, (val) => {
  if (!val) close()
})
watch(dialogDelete, (val) => {
  if (!val) closeDelete()
})

const initialize = () => {
  desserts.value = [
    { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, proteinFile: "data.csv" },
    { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, proteinFile: "data.csv" },
    { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, proteinFile: "data.csv" },
    { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, proteinFile: "data.csv" },
    { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, proteinFile: "data.csv" },
    { name: 'Jelly bean', calories: 375, fat: 0.0, carbs: 94, proteinFile: "data.csv" },
    { name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, proteinFile: "data.csv" },
    { name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, proteinFile: "data.csv" },
    { name: 'Donut', calories: 452, fat: 25.0, carbs: 51, proteinFile: "data.csv" },
    { name: 'KitKat', calories: 518, fat: 26.0, carbs: 65, proteinFile: "data.csv" },
  ]
}

const editItem = (item) => {
  editedIndex.value = desserts.value.indexOf(item)
  editedItem.value = Object.assign({}, item)
  dialog.value = true
}

const deleteItem = (item) => {
  editedIndex.value = desserts.value.indexOf(item)
  editedItem.value = Object.assign({}, item)
  dialogDelete.value = true
}

const deleteItemConfirm = () => {
  desserts.value.splice(editedIndex.value, 1)
  closeDelete()
}

const close = () => {
  dialog.value = false
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem)
    editedIndex.value = -1
  })
}

const closeDelete = () => {
  dialogDelete.value = false
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem)
    editedIndex.value = -1
  })
}

const save = () => {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem.value)
  } else {
    desserts.value.push(editedItem.value)
  }
  close()
}

initialize()
</script>

<style scoped>
.me-2 {
  margin-right: 0.5rem;
}

.v-toolbar{
  background : none
}
.card-title{
    margin : 0 auto;
    margin-top : 2rem;
}
</style>
