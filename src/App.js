import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Notfound from './pages/NotFound';
import Loading from './pages/Loading';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isButtonDisabled: true,
      artist: '',
      isSearchButtonDisabled: true,
    };
  }

  handleButton = () => {
    const {
      name,
    } = this.state;

    const minNameLength = 3;

    if (name.length >= minNameLength) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  onInputChange = (event) => {
    const {
      value,
    } = event.target;
    const elementValue = value;
    this.setState({ name: elementValue }, this.handleButton);
  }

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
      name,
      isButtonDisabled,
      artist,
      isSearchButtonDisabled,
    } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              <Login
                { ...props }
                name={ name }
                onInputChange={ this.onInputChange }
                isButtonDisabled={ isButtonDisabled }
              />
            ) }
          />
          <Route
            exact
            path="/loading"
            render={ () => (
              <Loading name={ name } />
            ) }
          />
          <Route
            exact
            path="/search"
            render={ () => (
              <Search
                artist={ artist }
                onSearchInputChange={ this.onSearchInputChange }
                isSearchButtonDisabled={ isSearchButtonDisabled }
              />
            ) }
          />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route exact path="*" component={ Notfound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
