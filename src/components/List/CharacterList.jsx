import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';
import styles from './Character.css';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li className={styles.list} key={character.id}>
      <Character {...character} />
    </li>
  ));

  return <ul>{characterElements}</ul>;
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default CharacterList;
