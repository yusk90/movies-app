import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Logo = ({ className }) => (
  <div className={classNames('logo', className)}>
    movieroulette<br />
  </div>
);

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
