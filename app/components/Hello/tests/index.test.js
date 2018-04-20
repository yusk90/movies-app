import React from 'react';
import { mount } from 'enzyme';

import Hello from '../index';

describe('<Hello />', () => {
  it('should render component', () => {
    const renderedComponent = mount(<Hello />);

    expect(renderedComponent.find('button').length).toEqual(1);
  });
});
