import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.less';

const Button = ({
  children, className, size, onClick,
}) => (
  <button
    className={classNames(
      'button',
      className,
      {
        [`button--size-${size}`]: size,
      }
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  size: PropTypes.oneOf(['small']),
  onClick: PropTypes.func,
};

export default Button;
