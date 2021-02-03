import React from 'react';
import styles from './Detail.css';
import PropTypes from 'prop-types';

export default class Detail extends Component {
  state = {
    detail: [],
  };

  componentDidMount() {
    getCharacter();
  }

  getCharacter = () => {
    return fetch(
      `https://xfiles-api.herokuapp.com/api/v1/characters?character=${this.props.match.params.detail}`
    )
      .then((res) => res.json())
      .then((json) => json.results);
  };
  render() {
    const { characters } = this.state;

    return <CharacterList characters={characters} />;
  }
}
Detail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
