<template>
  <header class="my-header">
    <main-container class="my-header__container">
      <nav class="my-header__nav nav-menu">
        <router-link to="/" class="nav-menu__link">
          <span class="nav-menu__logo">To-Do List</span>
        </router-link>

        <router-link to="/contacts" class="nav-menu__link"
          >Контакти</router-link
        >
      </nav>
    </main-container>
  </header>
</template>

<script>
export default {
  name: "my-header",
};
</script>

<style lang="scss" scoped>
.my-header {
  color: $main-text-color;
  width: 100%;

  &__container {
    border-bottom: 1px solid $main-color;
    padding: 20px 25px;
    margin-bottom: 20px;
  }
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  &__link {
    color: $main-color;

    &:hover {
      color: $accent;
    }
  }

  &__logo {
    font-weight: bold;
    font-size: 30px;

    &:hover {
      color: $main-color;
    }
  }
}
</style>