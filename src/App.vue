<template>
  <div class="app">
    <my-header />

    <main>
      <router-view></router-view>
    </main>

    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "@/scss/base/_modern-normalize.scss";
@import "@/scss/base/_default-settings.scss";

.app {
  background: $main-bg-color;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
}

main {
  flex: 1;
}
</style>
