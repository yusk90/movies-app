import React from 'react';

import { Button } from 'components';

import './index.less';

const Search = () => (
  <div className="search">
    <div className="search__input-wrapper">
      <input className="search__input" type="text" />
      <span className="search__return-icon">↵</span>
    </div>
    <div className="search__filter">
      Search by
      <Button className="search__filter-button" size="small">
        Title
      </Button>
      <Button className="search__filter-button" size="small">
        Genre
      </Button>
    </div>
    <Button className="search__submit-button">
      Search
    </Button>
  </div>
);

export default Search;
