import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetails from '../index';

const movie = {
  title: 'The Godfather',
  rating: 9.2,
  posterSrc: 'https://ia.media-imdb.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg',
  genres: ['Crime, Drama'],
  year: 1972,
  length: '2h 55min',
  description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
};

describe('<MovieDetails />', () => {
  it('renders movie details', () => {
    const tree = renderer
      .create(<MovieDetails {...movie} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
