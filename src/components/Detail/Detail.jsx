import React, { Component } from 'react';
import { getCharacter } from '../../services/getCharacter';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Detail extends Component {
  state = {
    character: [],
  };

  componentDidMount() {
    getCharacter(this.props.match.params.name).then((character) =>
      this.setState({ character })
    );
  }

  render() {
    const { character } = this.state;

    return (
      <>
        <Link to="/">Return Home</Link>
        <h1>{character[0]?.name}</h1>
        <img src={character[0]?.image} />
        <h2>{character[0]?.occupation}</h2>
        <h3>{character[0]?.description}</h3>
      </>
    );
  }
}
Detail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
};
