import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Search extends Component {
  render() {
    const {
      artist,
      onSearchInputChange,
      isSearchButtonDisabled,
    } = this.props;

    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="artist">
            Artista:
            <input
              type="text"
              name="artist"
              data-testid="search-artist-input"
              value={ artist }
              onChange={ onSearchInputChange }
            />
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ isSearchButtonDisabled }
            >
              Pesquisar
            </button>
          </label>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  artist: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  isSearchButtonDisabled: PropTypes.bool.isRequired,
};

export default Search;
