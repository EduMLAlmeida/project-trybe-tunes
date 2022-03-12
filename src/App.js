import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Notfound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Login { ...props } />) }
          />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/album/:id" render={ (props) => (<Album { ...props } />) } />
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
