import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      isLoadingEnabled: false,
    };
  }

  async componentDidMount() {
    const songList = document.getElementsByClassName('songList');
    const favoriteSongs = await getFavoriteSongs();
    for (let index = 0; index < songList.length; index += 1) {
      for (let index2 = 0; index2 < favoriteSongs.length; index2 += 1) {
        if (songList[index].value === (favoriteSongs[index2].trackId).toString()) {
          songList[index].checked = true;
        }
      }
    }
  }

  async componentDidUpdate() {
    this.componentDidMount();
  }

  render() {
    const {
      isLoadingEnabled,
    } = this.state;
    const {
      songs,
    } = this.props;
    const albumData = songs[0];
    const {
      artistName,
      collectionName,
    } = albumData;
    return (
      isLoadingEnabled
        ? (<p>Carregando...</p>)
        : (
          <div>
            <p data-testid="artist-name">{ artistName }</p>
            <p data-testid="album-name">{ collectionName }</p>
            {
              songs.map((element, index) => {
                const {
                  trackName,
                  previewUrl,
                  kind,
                  trackId,
                } = element;
                const onClick = async (event) => {
                  const elementConst = element;
                  this.setState({ isLoadingEnabled: true });
                  if (event.target.checked) {
                    await addSong(elementConst);
                  } else {
                    await removeSong(elementConst);
                  }
                  this.setState({ isLoadingEnabled: false });
                };
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
                      <input
                        type="checkbox"
                        data-testid={ `checkbox-music-${trackId}` }
                        onClick={ onClick }
                        className="songList"
                        value={ trackId }
                      />
                    </div>
                  )
                  : null;
              })
            }
          </div>
        )
    );
  }
}

MusicCard.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MusicCard;
