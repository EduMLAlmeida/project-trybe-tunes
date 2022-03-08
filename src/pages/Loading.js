import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';

class Loading extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
  }

  componentDidMount = async () => {
    const {
      name,
    } = this.props;
    const userName = name;
    await createUser({ name: userName });
    this.setState({ redirect: true });
  }

  render() {
    const {
      redirect,
    } = this.state;
    return (
      <div>
        {redirect === false
          ? <p>Carregando...</p>
          : <Redirect to="/search" />}
      </div>
    );
  }
}

Loading.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Loading;
