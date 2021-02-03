import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <img className={styles.banner} src="../../banner.jpg" />
      </div>
    );
  }
}
