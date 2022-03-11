import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormLogin from '../components/FormLogin';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      nameLogin: '',
      isLoginButtonDisabled: true,
      isFormEnabled: true,
      isLoadingEnabled: false,
    };
  }

  searchRedirect = () => {
    const {
      history,
    } = this.props;
    history.push('/search');
  }

  onClickButton = async () => {
    const {
      nameLogin,
    } = this.state;
    const userName = nameLogin;
    this.setState({ isFormEnabled: false });
    this.setState({ isLoadingEnabled: true });
    await createUser({ name: userName });
    this.searchRedirect();
  };

  handleButton = () => {
    const {
      nameLogin,
    } = this.state;
    const minNameLength = 3;
    if (nameLogin.length >= minNameLength) {
      this.setState({ isLoginButtonDisabled: false });
    } else {
      this.setState({ isLoginButtonDisabled: true });
    }
  }

  onInputChange = (event) => {
    const {
      value,
    } = event.target;
    const elementValue = value;
    this.setState({ nameLogin: elementValue }, this.handleButton);
  }

  render() {
    const {
      nameLogin,
      isLoginButtonDisabled,
      isFormEnabled,
      isLoadingEnabled,
    } = this.state;

    return (
      <div>
        {
          isFormEnabled && <FormLogin
            nameLogin={ nameLogin }
            onInputChange={ this.onInputChange }
            isLoginButtonDisabled={ isLoginButtonDisabled }
            onClickButton={ this.onClickButton }
          />
        }
        {
          isLoadingEnabled && <p>Carregando...</p>
        }
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
