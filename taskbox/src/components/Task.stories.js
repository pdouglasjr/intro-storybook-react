import React from "react";

import Task from "./Task";

export default {
  component: Task,
  title: 'Tasks',
};fktifdgniteefhhfih


// multiple permutations for Task component, assign each one to a Template

// bind Task component and attributes (arguments) to template
const Template = args => <Task {...args} />;

// story 1 - Default state
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

// story 2 - Pinned state
export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

// story 3 - Archived state
export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};