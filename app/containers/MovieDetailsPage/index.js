import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Header,
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

    // search: movie.genres[0]
    // searchBy: 'genres'
  }

  onSearchHandler = () => {
    const { history, clearState } = this.props;

    clearState();
    history.push('/');
  }

  render() {
    const { movie, movies } = this.props;

    return (
      <div className="app">
        <div className="app__header">
          <Header>
            <Button onClick={this.onSearchHandler}>Search</Button>
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
