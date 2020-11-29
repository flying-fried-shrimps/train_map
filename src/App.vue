<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        全国鉄道おでかけマップ
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Map></Map>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Map from './components/Map.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Map,
  },

  data: () => ({
    //
  }),
});
</script>
