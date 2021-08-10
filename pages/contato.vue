<template>
  <section class="secao-contato">
    <v-page-header> Vamos conversar? </v-page-header>
    <div
      class="
        container
        has-text-centered
        is-flex is-flex-direction-column is-align-items-center
      "
    >
      <div
        class="is-flex pt-6 w-full is-flex-wrap-wrap is-justify-content-center"
      >
        <div
          class="w-full sm:w-1/2 md:w-1/3 px-2 py-3"
          v-for="(item, index) in itensContato"
          :key="index"
        >
          <a target="_blank" :href="item.link">
            <div
              class="
                card
                transition-all
                duration-300
                ease-out
                pt-3
                hover:text-primary
              "
            >
              <div class="card-image">
                <i :class="[item.icone]" class="text-8xl" />
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ item.nome }}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { CONTATOS, TITLE } from "~/config/config";

export default {
  name: "Contato",
  components: {
    BButton: async () => {
      const { BButton } = await import("buefy/dist/components/button");
      return BButton;
    },
  },
  data() {
    return {
      cabecalho: {
        titulo: `${TITLE} | Contato`,
      },
      itensContato: CONTATOS,
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
.secao-contato {
  height: 100%;

  @media (min-width: 768px) {
    height: calc(100vh - 84px);
  }
}
</style>
