<template>
  <div class="about">
    <Map></Map>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Map from '@/components/Map'
export default Vue.extend({
  name: 'App',
  components: {
    Map
  },
  data() {
    return {
    }
  }
})
</script>
