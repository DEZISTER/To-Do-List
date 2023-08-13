<template>
  <section class="tasks">
    <main-container>
      <form @submit.prevent="false" :class="`tasks__form`">
        <main-input
          type="text"
          name="taskName"
          placeholder="Напишіть завдання..."
          class="tasks__form-element"
          @keyup.enter="saveTask"
          :value="this.taskDescr"
          @update:modelValue="(value) => (this.taskDescr = value)"
        />

        <main-button
          type="button"
          class="tasks__form-element"
          @click="saveTask"
          >{{ this.isEdit ? "Оновити" : "Додати" }}</main-button
        >
      </form>

      <div class="tasks__fields">
        <my-tasks-field class="tasks__field tasks__field--in-process">
          <template v-slot:title
            >Виконуються / {{ TaskListCount("in-process") }}</template
          >
          <template v-slot:task-list>
            <my-task
              :key="task.id"
              v-for="task in filteredTaskList('in-process')"
              :taskItem="task"
              @edit="showTaskInfo"
              @complete="completeTask"
              @pause="pauseTask"
              @delete="deleteTask"
            ></my-task>
          </template>
        </my-tasks-field>

        <my-tasks-field class="tasks__field tasks__field--pause">
          <template v-slot:title
            >Призупинено / {{ TaskListCount("pause") }}</template
          >
          <template v-slot:task-list>
            <my-task
              :key="task.id"
              v-for="task in filteredTaskList('pause')"
              :taskItem="task"
              @start="startTask"
              @edit="showTaskInfo"
              @complete="completeTask"
              @delete="deleteTask"
            ></my-task>
          </template>
        </my-tasks-field>

        <my-tasks-field class="tasks__field tasks__field--success">
          <template v-slot:title
            >Завершено / {{ TaskListCount("success") }}</template
          >
          <template v-slot:task-list>
            <my-task
              :key="task.id"
              v-for="task in filteredTaskList('success')"
              :taskItem="task"
              @start="startTask"
              @delete="deleteTask"
            ></my-task>
          </template>
        </my-tasks-field>
      </div>
    </main-container>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      taskDescr: "",
      isEdit: false,
      taskTemplate: null,
    };
  },

  computed: {
    ...mapState({
      taskList: (state) => state.task.taskList,
    }),

    ...mapGetters({
      filteredTaskList: "task/filteredTaskList",
      TaskListCount: "task/TaskListCount",
    }),
  },

  methods: {
    ...mapMutations({
      setTaskList: "task/setTaskList",
    }),

    ...mapActions({
      getTaskList: "task/getTaskList",
      addThisTask: "task/addThisTask",
      editThisTask: "task/editThisTask",
      deleteThisTask: "task/deleteThisTask",
      deleteThisTask: "task/deleteThisTask",
      setTaskStatus: "task/setTaskStatus",
    }),

    saveTask() {
      if (this.taskDescr === "") {
        alert('Будь ласка, заповніть поле опису завдання!')
      } else {
        if (this.isEdit) {
          this.editThisTask({
            thisTask: this.taskTemplate,
            thisDescr: this.taskDescr,
          });
          this.isEdit = false;
        } else {
          this.addThisTask(this.taskDescr);
        }
        this.isWrong = false
        this.taskDescr = "";
      }
    },

    deleteTask(task) {
      this.deleteThisTask(task);
    },

    completeTask(task) {
      this.setTaskStatus({ thisTask: task, thisStatus: "success" });
    },

    startTask(task) {
      this.setTaskStatus({ thisTask: task, thisStatus: "in-process" });
    },

    pauseTask(task) {
      this.setTaskStatus({ thisTask: task, thisStatus: "pause" });
    },

    showTaskInfo(task) {
      this.taskDescr = task.descr;
      this.taskTemplate = task;
      this.isEdit = true;
    },
  },

  mounted() {
    this.getTaskList();
  },
};
</script>

<style lang="scss" scoped>
.tasks {
  &__form {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  &__form-element {
    max-width: 300px;
  }

  &__form-input--wrong {
    border-color: red;
  }

  &__fields {
    display: flex;
    flex-flow: column;
    gap: 10px;
  }

  &__field--pause {
    background-color: $pause;

    &:hover {
      background-color: $pause-active;
    }
  }

  &__field--success {
    background-color: $success;

    &:hover {
      background-color: $success-active;
    }
  }

  @media screen and (min-width: 768px) {
    &__fields {
      flex-flow: row wrap;
    }

    &__field {
      width: calc((100% - 20px) / 3);
    }
  }
}
</style>