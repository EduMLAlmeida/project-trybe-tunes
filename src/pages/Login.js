import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  onClickButton = () => {
    const {
      history,
    } = this.props;
    history.push('/loading');
  };

  render() {
    const {
      name,
      onInputChange,
      isButtonDisabled,
    } = this.props;

    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="name">
            Nome
            <input
              name="name"
              type="text"
              data-testid="login-name-input"
              value={ name }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ isButtonDisabled }
            onClick={ this.onClickButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
