<template>
  <div class="my-task">
    <div class="my-task__actions">
      <icon-button
        class="my-task__action"
        v-if="taskItem.status === 'pause' || taskItem.status === 'success'"
        @click="$emit('start', taskItem)"
      >
        <svg class="my-task__icon" max-width="10px" height="10px">
          <use href="@/images/icons.svg#icon-start"></use>
        </svg>
      </icon-button>

      <icon-button
        class="my-task__action"
        v-if="taskItem.status === 'in-process' || taskItem.status === 'pause'"
        @click="$emit('edit', taskItem)"
      >
        <svg class="my-task__icon" max-width="10px" height="10px">
          <use href="@/images/icons.svg#icon-edit"></use>
        </svg>
      </icon-button>

      <icon-button
        class="my-task__action my-task__action--success"
        v-if="taskItem.status !== 'success'"
        @click="$emit('complete', taskItem)"
      >
        <svg class="my-task__icon" max-width="10px" height="10px">
          <use href="@/images/icons.svg#icon-success"></use>
        </svg>
      </icon-button>

      <icon-button
        class="my-task__action my-task__action--pause"
        v-if="taskItem.status === 'in-process'"
        @click="$emit('pause', taskItem)"
      >
        <svg class="my-task__icon" max-width="10px" height="10px">
          <use href="@/images/icons.svg#icon-pause"></use>
        </svg>
      </icon-button>

      <icon-button
        class="my-task__action my-task__action--delete"
        @click="$emit('delete', taskItem)"
      >
        <svg class="my-task__icon" max-width="10px" height="10px">
          <use href="@/images/icons.svg#icon-delete"></use>
        </svg>
      </icon-button>
    </div>

    <div class="my-task__info">{{ taskItem.id }}. {{ taskItem.descr }}</div>
  </div>
</template>

<script>

export default {
  name: "my-task",

  props: {
    taskItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.my-task {
  width: 100%;
  padding: 15px;
  display: flex;
  flex-flow: column;
  gap: 5px;
  background-color: $main-bg-color;
  border-radius: 5px;
  cursor: pointer;

  &__actions {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
  }

  &__action {
    &--success {
      border-color: $success;
      background-color: $success;

      &:hover {
        fill: $success;
      }
    }

    &--pause {
      border-color: $pause;
      background-color: $pause;

      &:hover {
        fill: $pause;
      }
    }

    &--delete {
      border-color: $delete;
      background-color: $delete;

      &:hover {
        fill: $delete;
      }
    }
  }
}
</style>