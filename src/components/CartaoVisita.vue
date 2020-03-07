<template>
  <v-card class="elevation-12 pa-3">
    <v-card-title>
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="4">
          <v-avatar height="120" width="120">
            <v-img src="../assets/alan.jpg" />
          </v-avatar>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text class="text-center">
      <p class="headline font-weight-bold">
        ALAN TARANTI
      </p>
      <p class="title">
        Desenvolvedor Web
      </p>
    </v-card-text>
    <v-card-actions>
      <v-row class="mb-4" align="center" justify="center">
        <v-col class="text-center" v-for="(item, index) in botoes" :key="index">
          <v-hover v-slot:default="{ hover }">
            <v-btn
              fab
              outlined
              target="_blank"
              :elevation="hover ? 6 : 0"
              :color="item.cor"
              :href="item.link"
            >
              <v-icon large :color="item.cor">
                {{ item.icone }}
              </v-icon>
            </v-btn>
          </v-hover>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class CartaoVisita extends Vue {
  botoes = [
    {
      icone: "fab fa-whatsapp",
      cor: "green",
      link: "https://wa.me/5567993401782?text=Oi%20Alan"
    },
    {
      icone: "fas fa-envelope",
      cor: "light-blue",
      link: "mailto:alan.taranti@gmail.com"
    },
    {
      icone: "fab fa-github",
      cor: "grey darken-3",
      link: "https://github.com/AlanTaranti"
    },
    {
      icone: "fab fa-linkedin-in",
      cor: "blue darken-3",
      link: "https://www.linkedin.com/in/alan-taranti/"
    },
    {
      icone: "fab fa-instagram",
      cor: "purple darken-2",
      link: "https://instagram.com/alantaranti"
    }
  ];
}
</script>
