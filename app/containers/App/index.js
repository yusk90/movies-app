import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { MoviePreviewList } from 'containers';
import { Header, Footer, Search, MoviePreviewListControls } from 'components';
import { loadMovies as loadMoviesAction, sortBy as sortByAction } from 'actions';

import './index.less';

const App = ({
  loadMovies, sortBy, movies, sortProperty, sortOrder,
}) => (
  <div className="app">
    <div className="app__header">
      <Header>
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
    <MoviePreviewListControls
      sortBy={sortBy}
      sortProperty={sortProperty}
      sortOrder={sortOrder}
      moviesCount={movies.length}
    />
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
  sortBy: PropTypes.func,
  sortProperty: PropTypes.string,
  sortOrder: PropTypes.string,
};

const mapStateToProps = state => ({
  movies: state.movies.movies || [],
  sortProperty: state.movies.sortProperty,
  sortOrder: state.movies.sortOrder,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadMovies: loadMoviesAction,
  sortBy: sortByAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
