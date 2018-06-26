import React from 'react';
import { mount } from 'enzyme';

import { Header, Footer, MoviePreviewList } from 'components';

import SearchPage from '../index';

describe('<SearchPage />', () => {
  it('should render components', () => {
    const renderedComponent = mount(<SearchPage />);

    expect(renderedComponent.find(Header).length).toBe(1);
    expect(renderedComponent.find(MoviePreviewList).length).toBe(1);
    expect(renderedComponent.find(Footer).length).toBe(1);
  });
});
