import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TestResults from './TestResults';
import FormSearch from './FormSearch';

class SearchContent extends Component {
  constructor() {
    super();
    this.state = {
      isTestResultsEnabled: false,
    };
  }

  componentDidMount() {
    const {
      searchResult,
    } = this.props;
    if (searchResult[0] !== 'inicial-state') {
      this.setState({ isTestResultsEnabled: true });
    } else {
      this.setState({ isTestResultsEnabled: false });
    }
  }

  render() {
    const {
      artist,
      onSearchInputChange,
      isSearchButtonDisabled,
      onSearchButtonClick,
      searchResult,
      artistInputValue,
    } = this.props;
    const {
      isTestResultsEnabled,
    } = this.state;
    return (
      <div data-testid="page-search">
        <FormSearch
          artist={ artist }
          onSearchInputChange={ onSearchInputChange }
          isSearchButtonDisabled={ isSearchButtonDisabled }
          onSearchButtonClick={ onSearchButtonClick }
        />
        {
          isTestResultsEnabled && <TestResults
            artistInputValue={ artistInputValue }
            searchResult={ searchResult }
          />
        }
      </div>
    );
  }
}

SearchContent.propTypes = {
  artist: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  isSearchButtonDisabled: PropTypes.bool.isRequired,
  onSearchButtonClick: PropTypes.func.isRequired,
  searchResult: PropTypes.arrayOf(PropTypes.any).isRequired,
  artistInputValue: PropTypes.string.isRequired,
};

export default SearchContent;
