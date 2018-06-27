import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import Button from './';

const stories = storiesOf('Button', module);

stories.add('Button Component', () => (
  <div>
    <h1>Button Component</h1>
    <Button
      active={boolean('Active', false)}
    >
      Test text
    </Button>
  </div>
));
