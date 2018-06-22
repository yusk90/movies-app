import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { MoviePreviewList } from 'containers';
import { Header, Footer, MovieDetails, Search } from 'components';
import { loadMovies as loadMoviesAction } from 'actions';

import './index.less';

const App = ({ loadMovies, movies }) => (
  <div className="app">
    <div className="app__header">
      <Header>
        { movies[0] && <MovieDetails {...movies[0]} /> }
        Find your film
        <Search
          searchByConfig={[
            { prop: 'title', title: 'Title' },
            { prop: 'genres', title: 'Genre' },
          ]}
          onSubmit={loadMovies}
        />
      </Header>
    </div>
    <div className="container">
      { movies.length ? <MoviePreviewList movies={movies} /> : 'No movies' }
    </div>
    <div className="app__footer">
      <Footer />
    </div>
  </div>
);

App.propTypes = {
  loadMovies: PropTypes.func,
  movies: PropTypes.array,
};

function prepareMoviePreview(movie) {
  return {
    title: movie.title,
    posterSrc: movie.poster_path,
    genre: movie.genres.join(', '),
    year: Number(movie.release_date.substr(0, 4)),
  };
}

const mapStateToProps = state => ({
  movies: state.movies.data ? state.movies.data.map(prepareMoviePreview) : [],
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadMovies: loadMoviesAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
