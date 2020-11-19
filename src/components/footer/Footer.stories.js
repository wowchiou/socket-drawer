import React from 'react';
import Footer from '.';

export default {
  title: 'Comp/Footer',
  components: Footer,
};

const Template = (args) => <Footer {...args} />;

export const primary = Template.bind({});
primary.args = {};
