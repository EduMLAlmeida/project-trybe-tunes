import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const {
      songs,
    } = this.props;
    const albumData = songs[0];
    const {
      artistName,
      collectionName,
    } = albumData;
    return (
      <div>
        <p data-testid="artist-name">{ artistName }</p>
        <p data-testid="album-name">{ collectionName }</p>
        {
          songs.map((element, index) => {
            const {
              trackName,
              previewUrl,
              kind,
            } = element;
            return kind === 'song'
              ? (
                <div key={ index }>
                  <p>{trackName}</p>
                  <audio data-testid="audio-component" src={ previewUrl } controls>
                    <track kind="captions" />
                    O seu navegador não suporta o elemento
                    <code>audio</code>
                    .
                  </audio>
                </div>
              )
              : null;
          })
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MusicCard;
