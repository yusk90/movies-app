import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components';

import './index.less';

class Search extends Component {
  state = {
    search: '',
    ...(this.props.searchByConfig && { searchBy: this.props.searchByConfig[0].prop }),
  };

  handleQueryChange = event => this.setState({ search: event.target.value });

  handleFilterChange(filterName) {
    this.setState({ searchBy: filterName });
  }

  handleSubmit = event => {
    const { onSubmit } = this.props;
    event.preventDefault();

    onSubmit(this.props.searchByConfig ? this.state : this.state.search);
  }

  renderFilter() {
    const { searchByConfig } = this.props;

    return (
      <div className="search__filter">
        Search by
        {
          searchByConfig.map((el, index) => (
            <Button
              key={index}
              className="search__filter-button"
              size="small"
              active={this.state.searchBy === el.prop}
              onClick={() => this.handleFilterChange(el.prop)}
            >
              {el.title}
            </Button>
          ))
        }
      </div>
    );
  }

  render() {
    const { searchByConfig } = this.props;

    return (
      <div className="search">
        <div className="search__input-wrapper">
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.query}
              onChange={this.handleQueryChange}
              className="search__input"
              type="text"
            />
            <span className="search__return-icon">↵</span>
          </form>
        </div>
        { searchByConfig && this.renderFilter()}
        <Button
          className="search__submit-button"
          onClick={this.handleSubmit}
        >
          Search
        </Button>
      </div>
    );
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func,
  searchByConfig: PropTypes.array,
};

export default Search;
