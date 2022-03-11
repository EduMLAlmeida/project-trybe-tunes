import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormLogin extends Component {
  render() {
    const {
      nameLogin,
      onInputChange,
      isLoginButtonDisabled,
      onClickButton,
    } = this.props;
    return (
      <form data-testid="page-login">
        <label htmlFor="name">
          Nome:
          <input
            name="name"
            type="text"
            data-testid="login-name-input"
            value={ nameLogin }
            onChange={ onInputChange }
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-button"
          disabled={ isLoginButtonDisabled }
          onClick={ onClickButton }
        >
          Entrar
        </button>
      </form>
    );
  }
}

FormLogin.propTypes = {
  nameLogin: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isLoginButtonDisabled: PropTypes.bool.isRequired,
  onClickButton: PropTypes.func.isRequired,
};

export default FormLogin;
