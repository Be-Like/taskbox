import { app } from "@storybook/vue3";
import { fireEvent, within } from "@storybook/testing-library";
import { createStore } from "vuex";
import { action } from "@storybook/addon-actions";

import * as TaskListStories from "./PureTaskList.stories";
import PureInboxScreen from "./PureInboxScreen.vue";

const store = createStore({
  state: {
    tasks: TaskListStories.Default.args.tasks,
    status: "idle",
    error: null,
  },

  mutations: {
    ARCHIVE_TASK(state, id) {
      state.tasks.find((task) => task.id === id).state = "TASK_ARCHIVED";
    },
    PIN_TASK(state, id) {
      state.tasks.find((task) => task.id === id).state = "TASK_PINNED";
    },
  },

  actions: {
    archiveTask(context, id) {
      action("archive-task")(id);
      context.commit("ARCHIVE_TASK", id);
    },
    pinTask(context, id) {
      action("pin-task")(id);
      context.commit("PIN_TASK", id);
    },
  },
});

app.use(store);

export default {
  title: "PureInboxScreen",
  component: PureInboxScreen,
};

const Template = (args) => ({
  components: { PureInboxScreen },

  template: '<PureInboxScreen v-bind="args" />',

  setup() {
    return { args };
  },
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = { error: true };

export const WithInteractions = Template.bind({});
WithInteractions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // Simulates pinning the first task
  await fireEvent.click(canvas.getByLabelText("pinTask-1"));
  // Simulates pinning the third task
  await fireEvent.click(canvas.getByLabelText("pinTask-3"));
};
