import React from 'react';
import PropTypes from 'prop-types';

import './index.less';

const MovieDetails = ({
  title, rating, posterSrc, genres, year, length, description,
}) => (
  <div className="movie-details">
    <div className="movie-details__poster">
      <img className="movie-details__poster-image" src={posterSrc} alt={title} />
    </div>
    <div className="movie-details__description-wrapper">
      <h1 className="movie-details__title">
        {title} <span className="movie-details__rating">{rating}</span>
      </h1>
      <div className="movie-details__genres">
        {genres && genres.join(', ')}
      </div>
      <div className="movie-details__statistics">
        <span className="movie-details__year">{year}</span>
        <span className="movie-details__length">{length}</span>
      </div>
      <div className="movie-details__description">{description}</div>
    </div>
  </div>
);

MovieDetails.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  posterSrc: PropTypes.string,
  genres: PropTypes.array,
  year: PropTypes.number,
  length: PropTypes.string,
  description: PropTypes.string,
};

export default MovieDetails;
