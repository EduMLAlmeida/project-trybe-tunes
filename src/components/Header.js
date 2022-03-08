import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      headerUserName: '',
    };
  }

  componentDidMount = async () => {
    const requestHeaderUserName = await getUser();
    this.setState({ headerUserName: requestHeaderUserName });
  }

  render() {
    const {
      headerUserName,
    } = this.state;
    return (
      <header data-testid="header-component">
        {
          headerUserName === ''
            ? <p data-testid="header-user-name">Carregando...</p>
            : <p data-testid="header-user-name">{ headerUserName.name }</p>
        }
        <Link to="/search" data-testid="link-to-search">Search</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
        <Link to="/profile" data-testid="link-to-profile">Profile</Link>
      </header>
    );
  }
}

export default Header;
