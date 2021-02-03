import React, { Component } from 'react';
import { getCharacters } from '../../services/getCharacters';
import CharacterList from './CharacterList';

export default class List extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    getCharacters().then((characters) => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;

    return (
      <div>
        <CharacterList characters={characters} />
      </div>
    );
  }
}
