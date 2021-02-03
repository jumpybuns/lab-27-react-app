import React, { Component } from 'react';
// import Character from '../List/Character';
// import styles from './Detail.css';
import PropTypes from 'prop-types';

export default class Detail extends Component {
  state = {
    character: [],
  };
  getCharacter = () => {
    return fetch(
      `https://xfiles-api.herokuapp.com/api/v1/characters/${this.props.match.params.name}`
    ).then((res) => res.json());
  };

  componentDidMount() {
    this.getCharacter().then((character) => this.setState({ character }));
  }

  render() {
    const { character } = this.state;
    console.log(character);
    return (
      <>
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
};
