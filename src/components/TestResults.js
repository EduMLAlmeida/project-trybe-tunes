import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Results from './Results';
import ResultsEmpty from './ResultsEmpty';

class TestResults extends Component {
  constructor() {
    super();
    this.state = {
      isResultsEnabled: false,
      isResultsEmptyEnabled: false,
    };
  }

  componentDidMount() {
    const {
      searchResult,
    } = this.props;
    if (searchResult.length !== 0) {
      this.setState({ isResultsEnabled: true });
    }
    if (searchResult.length === 0) {
      this.setState({ isResultsEmptyEnabled: true });
    }
  }

  render() {
    const {
      isResultsEnabled,
      isResultsEmptyEnabled,
    } = this.state;
    const {
      artistInputValue,
      searchResult,
    } = this.props;
    return (
      <div>
        {
          isResultsEnabled && <Results
            artistInputValue={ artistInputValue }
            searchResult={ searchResult }
          />
        }
        {
          isResultsEmptyEnabled && <ResultsEmpty />
        }
      </div>
    );
  }
}

TestResults.propTypes = {
  artistInputValue: PropTypes.string.isRequired,
  searchResult: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default TestResults;
