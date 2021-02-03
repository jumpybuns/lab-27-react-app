import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ name, image }) => (
  <Link to={`/detail/${name}`}>
    <figure className={styles.list}>
      <img className={styles.image} src={image} />
      <figcaption className={styles.name}>{name}</figcaption>
    </figure>
  </Link>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
