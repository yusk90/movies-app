import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { MoviePreview } from 'components';
import './index.less';

const MoviePreviewList = ({ movies }) => (
  <div className="movie-preview-list">
    {
      movies.map(movie => (
        <div key={movie.id} className="movie-preview-list__item">
          <Link
            className="movie-preview-list__link"
            to={`/film/${movie.id}`}
          >
            <MoviePreview {...movie} />
          </Link>
        </div>
      ))
    }
  </div>
);

MoviePreviewList.propTypes = {
  movies: PropTypes.array,
};

export default MoviePreviewList;
