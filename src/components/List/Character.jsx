import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image, status }) => (
  <figure>
    <img src={image} />
    <figcaption>{name}</figcaption>
    <figcaption>{status}</figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Character;
