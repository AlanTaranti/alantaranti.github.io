<template>
  <b-navbar spaced type="is-ghost">
    <template v-slot:brand>
      <b-navbar-item tag="div">
        <nuxt-link to="/">
          <span class="is-family-secondary has-text-weight-bold">
            {{ nome }}
          </span>
        </nuxt-link>
      </b-navbar-item>
    </template>
    <template v-slot:end>
      <b-navbar-item
        tag="div"
        v-for="(item, index) in itens"
        :key="index"
        class="has-text-centered"
      >
        <component
          :is="item.external ? 'a' : 'nuxt-link'"
          :href="item.link"
          :to="item.link"
          :target="item.external ? '_blank' : ''"
          :class="[item.class]"
        >
          {{ item.nome }}
        </component>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { BLOG_URL, NOME } from "~/config/config";

export default {
  name: "VNavbar",
  components: {
    BNavbar: async () => {
      const { BNavbar } = await import("buefy/dist/components/navbar");
      return BNavbar;
    },
    BNavbarItem: async () => {
      const { BNavbarItem } = await import("buefy/dist/components/navbar");
      return BNavbarItem;
    },
  },
  data() {
    return {
      nome: NOME,
      itens: [
        {
          nome: "Blog",
          link: BLOG_URL,
          external: true,
          class: "has-text-primary has-text-weight-semibold",
        },
        {
          nome: "Contato",
          link: "contato",
        },
      ],
    };
  },
};
</script>
