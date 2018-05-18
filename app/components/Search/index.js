import React from 'react';

import './index.less';

const Search = () => (
  <div className="search">
    <div className="search__input-wrapper">
      <input className="search__input" type="text" />
      <span className="search__return-icon">↵</span>
    </div>
    <div className="search__filter">
      Search by
      <button>Title</button>
      <button>Genre</button>
    </div>
    <button className="search__submit-button">Search</button>
  </div>
);

export default Search;
