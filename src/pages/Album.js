import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      isContentEnabled: false,
      isLoadingEnabled: true,
      songs: [],
    };
  }

  async componentDidMount() {
    const {
      match,
    } = this.props;
    const albumId = match.params.id;
    const response = await getMusics(albumId);
    this.setState({ songs: response });
    this.setState({ isLoadingEnabled: false });
    this.setState({ isContentEnabled: true });
  }

  render() {
    const {
      isContentEnabled,
      isLoadingEnabled,
      songs,
    } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {
          isContentEnabled && <MusicCard songs={ songs } />
        }
        {
          isLoadingEnabled && <p>Carregando...</p>
        }
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Album;
