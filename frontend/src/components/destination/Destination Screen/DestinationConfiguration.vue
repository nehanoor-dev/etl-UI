<template>
    <v-container>
<div class="my-6">
    <v-card>
        <v-container>
            <div>
    <v-row>
        <v-col>
            <div>
                <h3>Create a Destination</h3>
            </div>

        </v-col>
        <v-col>
<div class="d-flex justify-end">
    <v-icon left>mdi-snowflake</v-icon>
    <p>BiqQuery</p>
</div>

        </v-col>
        
    </v-row>
  
</div>
<v-row>
    <v-col col="12">
        <div class="my-1">
            <h4>Destination Name</h4>
        </div>
        <div>
    <v-text-field clearable label="Destination Name" variant="outlined"></v-text-field>
</div>
    </v-col>
        
    </v-row>
        </v-container>

</v-card>
</div>
        



<div>
    <v-card >
<v-container>
    <div>
        <h3>Connection</h3>
    </div>
    <v-row class="my-1">
    <v-col col="12">
        <div class="my-1">
            <h4>Host</h4>
        </div>
        <div>
    <v-text-field clearable label="Host" variant="outlined"></v-text-field>
</div>
    </v-col>
        
    </v-row>
</v-container>
</v-card>
</div>
       
    </v-container>
</template>