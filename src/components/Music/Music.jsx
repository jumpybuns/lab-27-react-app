import React from 'react';
import styles from './Music.css';

function Music() {
  const audio = new Audio('../../song.mp3');

  const start = () => {
    audio.play();
  };

  return (
    <div>
      <button className={styles.button} onClick={start}>
        Play
      </button>
    </div>
  );
}

export default Music;
