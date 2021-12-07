import React from 'react';
import Spinner from 'react-loader-spinner';
import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles.loader}>
      <Spinner type="Circles" color="#bb6df3" height={100} width={100} timeout={2000} />
    </div>
  );
}

export default Loader;