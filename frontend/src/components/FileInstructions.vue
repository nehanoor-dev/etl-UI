<template>
  <v-data-table
    hover
    class="elevation-4"
    :headers="headers"
    :items="desserts"
    :sort-by="[{ key: 'calories', order: 'asc' }]"
  >
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
              dark
              v-bind="props"
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
                    <v-text-field
                      hide-details
                      variant="outlined"
                      v-model="editedItem.dataset_name"
                      label="Dataset Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" sm="6">
                    <v-text-field
                      hide-details
                      variant="outlined"
                      v-model="editedItem.destination_id"
                      label="Destination"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" sm="6" v-if="editedIndex !== -1">
                    <v-text-field
                      hide-details
                      variant="outlined"
                      v-model="editedItem.format"
                      label="Format"
                      :readonly="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" sm="6">
                    <v-file-input
                      hide-details
                      variant="underlined"
                      v-model="editedItem.file"
                      label="Upload File"
                      accept=".txt,.json,.xlsx,.xls,"
                      multiple
                    ></v-file-input>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions class="my-2">
              <v-spacer></v-spacer>
              <v-btn class="text-none" variant="text" text="Cancel" @click="close"> </v-btn>
              <v-btn color="primary" rounded="lg" text="Save" variant="flat" @click="save"> </v-btn>
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
      <v-icon class="me-2" size="small" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <!-- <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template> -->
  </v-data-table>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue';
import API from '@/services/api.js';

const dialog = ref(false);
const dialogDelete = ref(false);

const headers = [
  {
    title: 'Dataset Name',
    align: 'start',
    key: 'dataset_name',
  },
  { title: 'Destination', key: 'destination_id' },
  { title: 'Format', key: 'format' },
  // { title: 'File', key: 'file' },
  { title: 'Actions', key: 'actions', sortable: false },
];

const desserts = ref([]);
const editedIndex = ref(-1);
const editedItem = ref({});
const defaultItem = {};

const formTitle = computed(() => (editedIndex.value === -1 ? 'New Item' : 'Edit Item'));

watch(dialog, (val) => {
  if (!val) close();
});
watch(dialogDelete, (val) => {
  if (!val) closeDelete();
});

const editItem = (item) => {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  console.log(editedItem.value);

  // Debugging statements
  console.log('Item being edited:', item);
  console.log('Item ID:', item._id);

  dialog.value = true;
};

const deleteItem = (item) => {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialogDelete.value = true;
};

// const deleteItemConfirm = () => {
//   desserts.value.splice(editedIndex.value, 1);
//   console.log(desserts.value[editedIndex.value]._id)
//   closeDelete();
// };

const close = () => {
  dialog.value = false;
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem);
    editedIndex.value = -1;
  });
};

const closeDelete = () => {
  dialogDelete.value = false;
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem);
    editedIndex.value = -1;
  });
};


/**
 * Function to fetch desserts data from the API.
 * This function performs an asynchronous request to retrieve a list of desserts from the server.
 * Upon receiving a successful response (status 200), it logs the response data and updates the `desserts` state variable.
 * If the response status indicates an error, it logs the status code.
 * If the request fails, it logs the error.
 *
 * @param {none}
 * @returns {void}
 */
const fetchDesserts = async () => {
  const done = (res) => {
    if (res?.status === 200) {
      console.log('Response Data:', res.data); // Log response data
      desserts.value = res.data;
      console.log('Desserts:', desserts.value); // Log desserts to check their structure
    } else {
      console.log('Error fetching data:', res.status);
    }
  };

  try {
    await API.get('/api/files_pipeline', done);
  } catch (err) {
    console.error('API error:', err);
  }
};


/**
 * Function to save or update an item.
 * This function constructs a FormData object with the fields from `editedItem`, 
 * determining if it should make a POST or PUT request based on whether an item is being edited or created.
 * It then sends the FormData object to the appropriate API endpoint.
 * Upon receiving a successful response, it updates the `desserts` state variable and closes the dialog.
 * If the response indicates an error, it logs an appropriate error message.
 *
 * @param {none}
 * @returns {void}
 */
const save = () => {
  const endpoint =
    editedIndex.value > -1 ? `/api/files_pipelines/${desserts.value[editedIndex.value]._id}` : '/api/files_pipeline';
  // const method = editedIndex.value > -1 ? 'put' : 'post';
  const method = 'post';
  // Create a new FormData object
  const formData = new FormData();
  // Append non-file fields
  for (const key in editedItem.value) {
    if (editedItem.value.hasOwnProperty(key)) {
      if (key === 'file') {
        formData.append(key, editedItem.value[key][0]);
      } else if (Array.isArray(editedItem.value[key])) {
        // Handle file(s) in the array
        editedItem.value[key].forEach((file, index) => {
          formData.append(`${key}[${index}]`, file);
        });
      } else {
        formData.append(key, editedItem.value[key]);
      }
    }
  }

  // Log FormData content for debugging
  for (const [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

  const done = (res) => {
    if (res.status === (editedIndex.value > -1 ? 200 : 201)) {
      if (editedIndex.value > -1) {
        Object.assign(desserts.value[editedIndex.value], editedItem.value);
      } else {
        desserts.value.push(res.data);
      }
      close();
    } else {
      console.error(`Error ${method === 'post' ? 'adding' : 'updating'} item:`, res.status);
    }
  };

  // Make the API request
  API[method](endpoint, done, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  dialog.value = false;
};

/**
 * Function to confirm and delete an item.
 * This function performs an asynchronous request to delete an item from the server.
 * Upon receiving a successful response (status 200), it removes the item from the local `desserts` array
 * and closes the delete confirmation dialog.
 * If the response indicates an error or if the request fails, it logs an appropriate error message.
 *
 * @param {none}
 * @returns {void}
 */
const deleteItemConfirm = async () => {
  const itemId = desserts.value[editedIndex.value]._id;

  const done = (res) => {
    if (res.status === 200) {
      // Remove the item from the local array after successful deletion
      desserts.value.splice(editedIndex.value, 1);
      closeDelete();
    } else {
      console.error('Error deleting item:', res.status);
    }
  };

  try {
    await API.delete(`/api/files_pipeline/${itemId}`, done);
  } catch (err) {
    console.error('API error:', err);
  }
};


// call this method
fetchDesserts();
</script>

<style scoped>
.me-2 {
  margin-right: 0.5rem;
}

.v-toolbar {
  background: none;
}
.card-title {
  margin: 0 auto;
  margin-top: 2rem;
}
</style>
