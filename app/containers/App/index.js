import React from 'react';

import { Header, Footer, MovieDetails } from 'components';
import './index.less';

const movie = {
  title: 'The Godfather',
  rating: 9.2,
  posterSrc: 'https://ia.media-imdb.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg',
  genre: 'Crime, Drama',
  year: 1972,
  length: '2h 55min',
  description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
};

const App = () => (
  <div className="app">
    <div className="app__header">
      <Header>
        <MovieDetails {...movie} />
      </Header>
    </div>
    <div className="app__footer">
      <Footer />
    </div>
  </div>
);

export default App;
