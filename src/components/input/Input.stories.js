import React from 'react';
import Input from '.';

export default {
  title: 'Comp/Input',
  components: Input,
};

const Template = (args) => <Input {...args} />;

export const primary = Template.bind({});
primary.args = {};
