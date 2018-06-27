import '@storybook/addon-knobs/register';
import '@storybook/addon-actions/register';

import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

function loadStories() {
  const req = require.context('../app/components', true, /.story.js$/);

  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
