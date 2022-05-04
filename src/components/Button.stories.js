import React from 'react';

import { Button } from './Button';

export default {
  title: 'Blueshoon/Button',
  component: Button,
  argTypes: {
    mode: { control: 'select', options: ['default', 'active', 'hover', 'disabled']}
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  mode: 'default',
};

export const Active = Template.bind({});
Active.args = {
  label: 'Button',
  mode: 'active',
};

export const Hover = Template.bind({});
Hover.args = {
  mode: 'hover',
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  mode: 'disabled',
  label: 'Button',
};
