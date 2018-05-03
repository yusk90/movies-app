import React from 'react';
import PropTypes from 'prop-types';

import './index.less';

const Header = ({ children }) => (
  <div className="header">
    <div className="container">
      movieroulette
      {children}
    </div>
  </div>
);

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Header;
