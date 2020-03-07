<template>
  <v-parallax class="h100" height="100%" dark src="../assets/background.jpg">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="12" sm="8" md="4">
          <cartao-visita />
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import CartaoVisita from "@/components/CartaoVisita.vue";

@Component({
  components: {
    CartaoVisita
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
.h100 {
  height: 100%;
}
</style>
