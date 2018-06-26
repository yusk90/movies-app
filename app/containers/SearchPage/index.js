import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Header,
  Logo,
  Footer,
  Search,
  MoviePreviewList,
  MoviePreviewListControls,
} from 'components';
import { loadMovies as loadMoviesAction, sortBy as sortByAction } from 'actions';

class SearchPage extends Component {
  componentDidMount() {
    const { location: { search }, loadMovies } = this.props;
    const query = search.slice(1);

    if (query) {
      loadMovies(query);
    }
  }

  onSearchHandler = queryObj => {
    const { history, loadMovies } = this.props;
    const query = Object.keys(queryObj)
      .map(prop => `${prop}=${queryObj[prop]}`)
      .join('&');

    history.push(`/search?${query}`);
    loadMovies(query);
  }

  render() {
    const {
      sortBy,
      movies,
      sortProperty,
      sortOrder,
    } = this.props;

    return (
      <div className="app">
        <div className="app__header">
          <Header>
            <div className="header__top">
              <Logo />
            </div>
            Find your film
            <Search
              searchByConfig={[
                { prop: 'title', title: 'Title' },
                { prop: 'genres', title: 'Genre' },
              ]}
              onSubmit={this.onSearchHandler}
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
  }
}

SearchPage.propTypes = {
  loadMovies: PropTypes.func,
  movies: PropTypes.array,
  sortBy: PropTypes.func,
  sortProperty: PropTypes.string,
  sortOrder: PropTypes.string,
  history: PropTypes.object,
  location: PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
