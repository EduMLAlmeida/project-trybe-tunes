import React, { Component } from 'react';
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
      </header>
    );
  }
}

export default Header;
