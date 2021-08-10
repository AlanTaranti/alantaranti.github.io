<template>
  <section class="secao-index">
    <div
      class="
        container
        has-text-centered
        h-full
        is-flex is-flex-direction-column is-align-items-center
      "
    >
      <div class="columns w-full h-full">
        <div
          class="
            column
            is-flex is-align-items-center
            justify-center
            md:justify-end
          "
        >
          <div class="w-3/4 sm:w-2/3">
            <b-image
              :src="imagem"
              class="transition-all duration-300 ease-out filter"
              :class="{
                'hover:contrast-125': habilitarHoverImagem,
              }"
              lazy
              rounded
            />
          </div>
        </div>
        <div
          class="
            column
            is-flex is-align-items-center
            justify-center
            md:justify-start
          "
        >
          <div>
            <div class="mb-4">
              <h1 class="is-family-secondary title is-1 mb-5">{{ nome }}</h1>
              <div
                class="subtitle is-family-secondary is-size-5 is-size-4-mobile"
              >
                <p v-for="(descricao, index) in listaDescricao" :key="index">
                  {{ descricao }}
                </p>
              </div>
            </div>
            <!-- Social -->
            <div
              class="
                flex
                is-flex-wrap-wrap is-justify-content-space-around
                mt-6
                md:mt-2
              "
            >
              <div
                v-for="(item, index) in itensSociais"
                :key="index"
                class="px-1 py-2 w-1/2 md:w-1/3 my-2"
              >
                <a target="_blank" :href="item.link">
                  <i :class="[item.icone]" class="text-6xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { NOME, IMAGE_SVG, DESCRIPTION, ITENS_SOCIAIS } from "~/config/config";

export default {
  name: "index",
  components: {
    BNavbar: async () => {
      const { BNavbar } = await import("buefy/dist/components/navbar");
      return BNavbar;
    },
    BImage: async () => {
      const { BImage } = await import("buefy/dist/components/image");
      return BImage;
    },
    BButton: async () => {
      const { BButton } = await import("buefy/dist/components/button");
      return BButton;
    },
  },
  data() {
    return {
      nome: NOME,
      imagem: IMAGE_SVG,
      habilitarHoverImagem: false,
      listaDescricao: [DESCRIPTION],
      cabecalho: {
        titulo: this.nome,
      },
      itensSociais: ITENS_SOCIAIS,
    };
  },
  head() {
    return {
      title: this.cabecalho.titulo,
      meta: [
        {
          property: "og:title",
          content: this.cabecalho.titulo,
        },
        {
          property: "twitter:title",
          content: this.cabecalho.titulo,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.secao-index {
  height: calc(100vh - 84px);
}
</style>
