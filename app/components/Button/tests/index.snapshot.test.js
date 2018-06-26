import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../index';

describe('<Button />', () => {
  it('renders button with text', () => {
    const tree = renderer
      .create(<Button onClick={() => {}}>Button text</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders small button', () => {
    const tree = renderer
      .create(<Button onClick={() => {}} size="small">Button text</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
