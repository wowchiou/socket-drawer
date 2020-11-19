import React from 'react';
import Button from '.';

export default {
  title: 'comp/button',
  components: Button,
};

const Template = (args) => <Button {...args} />;

export const primary = Template.bind({});
primary.args = {
  children: '測試按鈕',
};
