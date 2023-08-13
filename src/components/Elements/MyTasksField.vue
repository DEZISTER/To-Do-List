<template>
  <div class="my-tasks-field">
    <h3 class="my-tasks-field__title"><slot name="title"></slot></h3>
    <div class="my-tasks-field__list">
      <slot name="task-list">
        <div class="my-tasks-field__task">Список завдань порожній...</div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-tasks-field",
};
</script>

<style lang="scss" scoped>
.my-tasks-field {
  width: 100%;
  border-radius: 5px;
  background: $accent;
  height: 430px;
  padding: 20px;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: $accent-active;
  }

  &__title {
    color: $additional-text-color;
    font-weight: normal;
    margin-bottom: 20px;
  }

  &__list {
    display: flex;
    flex-flow: column;
    gap: 10px;
    overflow-y: scroll;
    height: 350px;
  }

  &__task {
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    min-height: 40px;
    background-color: $main-bg-color;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>