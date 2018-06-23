import React from 'react';
import PropTypes from 'prop-types';

import { MoviePreview } from 'components';
import './index.less';

const MoviePreviewList = ({ movies }) => (
  <div className="movie-preview-list">
    {
      movies.map((movie, index) => (
        <div key={index} className="movie-preview-list__item">
          <MoviePreview {...movie} />
        </div>
      ))
    }
  </div>
);

MoviePreviewList.propTypes = {
  movies: PropTypes.array,
};

export default MoviePreviewList;
