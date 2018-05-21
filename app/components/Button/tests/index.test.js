import React from 'react';
import { mount } from 'enzyme';

import Button from '../index';

describe('<Button />', () => {
  it('should render button with text', () => {
    const renderedComponent = mount(<Button>Button text</Button>);

    expect(renderedComponent.find('button').text()).toBe('Button text');
  });

  it('should render small button', () => {
    const renderedComponent = mount(<Button>Button text</Button>);

    expect(renderedComponent.find('button').hasClass('button--size-small')).toBe(false);
    renderedComponent.setProps({ size: 'small' });
    expect(renderedComponent.find('button').hasClass('button--size-small')).toBe(true);
  });

  it('should add custom class to button if passed', () => {
    const renderedComponent = mount(<Button className="foo">Button text</Button>);

    expect(renderedComponent.find('button').hasClass('foo')).toBe(true);
  });
});
