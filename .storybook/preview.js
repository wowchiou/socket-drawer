import React from 'react';
import '../src/index.scss';
import { MemoryRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </>
  ),
];
