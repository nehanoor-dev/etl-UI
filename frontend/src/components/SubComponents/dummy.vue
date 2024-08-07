<template>
  <v-container>
    <v-row fill-height>
      <v-col cols="12" md="12" class="text-center">
        <v-container fluid fill-height>
          <v-row align="left" justify="left">
            <v-cols cols="auto">
              <v-btn variant="plain" prepend-icon="mdi-arrow-left">Back</v-btn>
            </v-cols>
          </v-row>

          <v-row align="center" justify="center">
            <v-col cols="auto">
              <v-img
                :width="150"
                aspect-ratio="1/1"
                cover
                src="/Users/mnouman/Desktop/vue/vuet/first-project/src/assets/logo.png"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <v-row fill-height>
      <v-col cols="12" md="12" class="text-center">
        <v-container fluid fill-height>
          <v-row align="center" justify="center" class="text-blue-grey-lighten-1">
            <h2>Connector Builder</h2>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>

  <v-row fill-height>
    <v-col cols="12" md="12" class="text-center">
      <v-container fluid fill-height>
        <v-row align="center" justify="center" class="text-black">
          <!-- <h2>How do you want to start building your connector?</h2> -->

          <h2>{{ subHeading }}</h2>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CustomConnectorTop',

  props: ['subHeading'],
};
</script>
