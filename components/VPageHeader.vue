<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="is-family-secondary has-text-weight-semibold is-size-2">
          <slot />
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VPageHeader",
};
</script>

<style scoped></style>
