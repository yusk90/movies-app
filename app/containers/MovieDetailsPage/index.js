import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Header,
  Logo,
  Footer,
  MovieDetails,
  MoviePreviewList,
  Button,
} from 'components';
import { loadMovie as loadMovieAction, clearState as clearStateAction } from 'actions';

class MovieDetailsPage extends Component {
  componentDidMount() {
    const { match: { params }, loadMovie } = this.props;

    loadMovie(params.id);
  }

  onSearchHandler = () => {
    const { history, clearState } = this.props;

    clearState();
    history.push('/');
  }

  // eslint-disable-next-line
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { match: { params }, loadMovie } = nextProps;
    const { match: { params: { id } } } = this.props;

    if (params.id !== id) {
      window.scrollTo(0, 0);
      loadMovie(params.id);
    }
  }

  render() {
    const { movie, movies } = this.props;

    return (
      <div className="app">
        <div className="app__header">
          <Header>
            <div className="header__top">
              <Logo />
              <Button
                className="header__top-button"
                onClick={this.onSearchHandler}
              >
                Search
              </Button>
            </div>
            <MovieDetails {...movie} />
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
  }
}

MovieDetailsPage.propTypes = {
  loadMovie: PropTypes.func,
  clearState: PropTypes.func,
  movie: PropTypes.object,
  movies: PropTypes.array,
  match: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  movie: state.movies.movie,
  movies: state.movies.movies || [],
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadMovie: loadMovieAction,
  clearState: clearStateAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
