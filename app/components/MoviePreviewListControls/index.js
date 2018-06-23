import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.less';

const MoviePreviewListControls = ({
  moviesCount, sortBy, sortProperty, sortOrder,
}) => (
  <div className="movie-preview-list-controls">
    { moviesCount > 0 ?
      (
        <div className="container movie-preview-list-controls__container">
          { moviesCount } movie{ moviesCount === 1 ? '' : 's' } found
          <div className="movie-preview-list-controls__sorting">
            Sort by
            <button
              className={classNames(
                'movie-preview-list-controls__sort-button',
                {
                  'movie-preview-list-controls__sort-button--active': sortProperty === 'releaseDate',
                  'movie-preview-list-controls__sort-button--desc': sortProperty === 'releaseDate' && sortOrder === 'DESC',
                }
              )}
              onClick={() => sortBy('releaseDate')}
            >
              Release date
            </button>
            <button
              className={classNames(
                'movie-preview-list-controls__sort-button',
                {
                  'movie-preview-list-controls__sort-button--active': sortProperty === 'rating',
                  'movie-preview-list-controls__sort-button--desc': sortProperty === 'rating' && sortOrder === 'DESC',
                }
              )}
              onClick={() => sortBy('rating')}
            >
              Rating
            </button>
          </div>
        </div>
      )
      : ''
    }
  </div>
);

MoviePreviewListControls.propTypes = {
  moviesCount: PropTypes.number,
  sortBy: PropTypes.func,
  sortProperty: PropTypes.string,
  sortOrder: PropTypes.string,
};

export default MoviePreviewListControls;
