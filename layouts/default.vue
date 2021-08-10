<template>
  <div>
    <v-navbar />
    <nuxt />
    <v-rodape />
  </div>
</template>

<script>
import VNavbar from "../components/VNavbar";
import VRodape from "../components/VRodape";

export default {
  name: "default",
  components: { VNavbar, VRodape },
};
</script>
