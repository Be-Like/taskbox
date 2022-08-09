import PureTaskList from "./PureTaskList.vue";

import * as TaskStories from "./Task.stories";

export default {
  component: PureTaskList,

  title: "PureTaskList",

  // Decorators 👇 used to provide arbitrary wrappers to stories (eg. adding padding around rendered components).
  decorators: [
    () => ({
      template: '<div style="margin: 3em;"><story/></div>',
    }),
  ],

  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};

const Template = (args) => ({
  components: { PureTaskList },
  template: '<PureTaskList v-bind="args" />',
  setup() {
    return { args, ...TaskStories.actionsData };
  },
});

export const Default = Template.bind({});
Default.args = {
  // Shaping the story through args composition.
  // The data was inherited from the Default story in task.stories.js
  tasks: [
    { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
    { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
    { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
    { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
    { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
    { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { ...TaskStories.Pinned.args.task, id: "6", title: "Task 6 (pinned)" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Inherits data from the Loading story
  ...Loading.args,
  loading: false,
};
