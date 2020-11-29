<template>
  <div class="map">
    <l-map
      :center="center"
      :bounds="bounds" :zoom="zoom"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      :options="{zoomControl: false}"
    >
      <l-control position="topleft">
        <v-navigation-drawer
          class="rounded"
          permanent width="100%"
        >
          <v-row class="fill-height" no-gutters>
            <v-navigation-drawer
              class="rounded" dark
              permanent
            >
              <v-list nav dense>
                <v-list-item link>
                  <v-list-item-icon>
                    <v-icon>mdi-train</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-icon>
                    <v-icon>mdi-account-multiple</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Shared with me</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-icon>
                    <v-icon>mdi-star</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Starred</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
            <v-list>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-train</v-icon>
                </v-list-item-icon>
              </v-list-item>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-train</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-row>
        </v-navigation-drawer>
      </l-control>
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-control-zoom position="bottomright"></l-control-zoom>
    </l-map>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import L from 'leaflet'
import { LMap, LTileLayer, LControlZoom, LControl } from 'vue2-leaflet';

export type DataType = {
  url: string;
  zoom: number;
  center: Array<number>;
  attribution: string;
  bounds: L.LatLng;
};

export default Vue.extend({
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LControlZoom,
    LControl
  },
  data(): DataType {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      height: 600,
      zoom: 5,
      center: [37, 138],
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      bounds: null
    }
  },
  methods: {
    zoomUpdated (zoom: number) {
      this.zoom = zoom;
    },
    centerUpdated (center: Array<number>) {
      this.center = center;
    }
  }
})

</script>

<style scoped>
  .map {
    height: 100%;
  }
</style>