import React from 'react';
import Button from '.';

export default {
  title: 'comp/button',
  components: Button,
};

const Template = (args) => <Button {...args}>測試按鈕</Button>;

export const primary = Template.bind({});
primary.args = {};
