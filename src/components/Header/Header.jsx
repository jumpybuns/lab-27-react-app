import React, { Component } from 'react';
import styles from './Header.css';
import banner from '../../../public/banner.jpg';

export default class Header extends Component {
  render() {
    return (
      <div>
        <img className={styles.banner} src={banner} />
      </div>
    );
  }
}
