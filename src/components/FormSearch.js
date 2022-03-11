import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSearch extends Component {
  render() {
    const {
      artist,
      onSearchInputChange,
      isSearchButtonDisabled,
      onSearchButtonClick,
    } = this.props;

    return (
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
        </label>
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ isSearchButtonDisabled }
          onClick={ onSearchButtonClick }
        >
          Pesquisar
        </button>
      </form>
    );
  }
}

FormSearch.propTypes = {
  artist: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  isSearchButtonDisabled: PropTypes.bool.isRequired,
  onSearchButtonClick: PropTypes.func.isRequired,
};

export default FormSearch;
