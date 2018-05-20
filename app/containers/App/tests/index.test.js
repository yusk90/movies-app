import React from 'react';
import { mount } from 'enzyme';

import { Header, Footer } from 'components';
import { MoviePreviewList } from 'containers';

import App from '../index';

describe('<App />', () => {
  it('should render components', () => {
    const renderedComponent = mount(<App />);

    expect(renderedComponent.find(Header).length).toBe(1);
    expect(renderedComponent.find(MoviePreviewList).length).toBe(1);
    expect(renderedComponent.find(Footer).length).toBe(1);
  });
});
