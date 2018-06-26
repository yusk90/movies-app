import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Logo, Footer, Button } from 'components';

import './index.less';

const NotFound = () => (
  <div className="app not-found">
    <div className="app__header">
      <Header>
        <div className="header__top">
          <Logo />
          <Link
            to="/"
            className="header__top-button"
          >
            <Button>Search</Button>
          </Link>
        </div>
      </Header>
    </div>
    <div className="container">
      <h1 className="not-found__header">404</h1>
    </div>
    <div className="app__footer">
      <Footer />
    </div>
  </div>
);

export default NotFound;
