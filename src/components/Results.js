import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Results extends Component {
  render() {
    const {
      artistInputValue,
      searchResult,
    } = this.props;

    return (
      <div>
        <p>
          Resultado de álbuns de:
          {' '}
          { artistInputValue }
        </p>
        {searchResult.map((element, index) => (
          <Link
            to={ `/album/${element.collectionId}` }
            data-testid={ `link-to-album-${element.collectionId}` }
            key={ index }
          >
            {`${element.collectionName}`}
          </Link>
        ))}
      </div>
    );
  }
}

Results.propTypes = {
  artistInputValue: PropTypes.string.isRequired,
  searchResult: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Results;
