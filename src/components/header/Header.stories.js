import React from 'react';
import Header from '.';

export default {
  title: 'Comp/Header',
  components: Header,
};

const Template = (args) => <Header {...args} />;

export const primary = Template.bind({});
primary.args = {};
