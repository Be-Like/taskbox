<template>
  <pure-task-list
    :tasks="tasks"
    @archive-task="archiveTask"
    @pin-task="pinTask"
  />
</template>

<script>
import PureTaskList from "./PureTaskList.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: { PureTaskList },

  name: "TaskList",

  setup() {
    const store = useStore();

    const tasks = computed(() => store.state.tasks);

    const archiveTask = (task) => store.dispatch("archiveTask", task);
    const pinTask = (task) => store.dispatch("pinTask", task);

    return {
      tasks,
      archiveTask,
      pinTask,
    };
  },
};
</script>
