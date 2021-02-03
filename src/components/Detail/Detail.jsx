import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

const Detail = ({ details }) => {
  const characterElements = details.map((character) => (
    <li key={character.id}>
      <Character {...character} />
    </li>
  ));

  return <ul>{characterElements}</ul>;
};

Detail.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default Detail;
