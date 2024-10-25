<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Login with Google</v-card-title>
          <v-card-actions>
            <v-btn color="primary" @click="loginWithgoogle">
              <v-icon left class="ma-2 pa-3">mdi-google</v-icon>
              Login with Google
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({


  }),
  methods:
  {
    async loginWithgoogle() {
      const postData = {
        carrierName: this.editedItem.carrierName,
        carrierCode: this.editedItem.carrierCode,
        carrierId: this.editedItem.recordId
      }
      const response = await axios.post(
        '/cravee/api/login',
        postData
      )
      console.log(response.data)

    }
  }

}
</script>