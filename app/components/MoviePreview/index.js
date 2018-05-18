import React from 'react';
import PropTypes from 'prop-types';

import './index.less';

const MoviePreview = ({
  title, posterSrc, genre, year,
}) => (
  <div className="movie-preview">
    <div className="movie-preview__poster">
      <img className="movie-preview__poster-image" src={posterSrc} alt={title} />
    </div>
    <div className="movie-preview__description">
      <h3 className="movie-preview__title">
        {title} <span className="movie-preview__year">{year}</span>
      </h3>
      <div className="movie-preview__genre">{genre}</div>
    </div>
  </div>
);

MoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
  posterSrc: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.number,
};

export default MoviePreview;
