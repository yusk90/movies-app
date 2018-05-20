import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.less';

const Button = ({ children, className, size }) => (
  <button
    className={classNames(
      'button',
      className,
      {
        [`button--size-${size}`]: size,
      }
    )}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  size: PropTypes.oneOf(['small']),
};

export default Button;
