import React, { Component } from 'react';
import Header from '../components/Header';
import SearchContent from '../components/SearchContent';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artist: '',
      isSearchButtonDisabled: true,
      isSearchContentEnabled: true,
      isSearchLoadingEnabled: false,
      artistInputValue: '',
      searchResult: ['inicial-state'],
    };
  }

  onSearchButtonClick = async () => {
    const {
      artist,
    } = this.state;
    const requestedArtist = artist;
    this.setState({ artistInputValue: requestedArtist });
    this.setState({ artist: '' });
    this.setState({ isSearchContentEnabled: false });
    this.setState({ isSearchLoadingEnabled: true });
    const artistResponse = await searchAlbumsAPI(requestedArtist);
    this.setState({ searchResult: artistResponse });
    this.setState({ isSearchLoadingEnabled: false });
    this.setState({ isSearchContentEnabled: true });
  };

  handleSearchButton = () => {
    const {
      artist,
    } = this.state;
    const minArtistLength = 2;
    if (artist.length >= minArtistLength) {
      this.setState({ isSearchButtonDisabled: false });
    } else {
      this.setState({ isSearchButtonDisabled: true });
    }
  }

  onSearchInputChange = (event) => {
    const {
      value,
    } = event.target;
    const searchElementValue = value;
    this.setState({ artist: searchElementValue }, this.handleSearchButton);
  }

  render() {
    const {
      artist,
      isSearchButtonDisabled,
      searchResult,
      isSearchContentEnabled,
      isSearchLoadingEnabled,
      artistInputValue,
    } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        {
          isSearchContentEnabled && <SearchContent
            artist={ artist }
            onSearchInputChange={ this.onSearchInputChange }
            isSearchButtonDisabled={ isSearchButtonDisabled }
            onSearchButtonClick={ this.onSearchButtonClick }
            searchResult={ searchResult }
            artistInputValue={ artistInputValue }
          />
        }
        {
          isSearchLoadingEnabled && <p>Carregando...</p>
        }
      </div>
    );
  }
}

export default Search;
