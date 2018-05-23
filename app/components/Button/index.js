import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.less';

const Button = ({
  children, className, size, active, onClick,
}) => (
  <button
    className={classNames(
      'button',
      className,
      {
        [`button--size-${size}`]: size,
        'button--state-active': active,
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
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
