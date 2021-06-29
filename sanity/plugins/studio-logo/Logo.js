// React is installed in the studio and should be treated as a peer dependency
import React from 'react';
import styles from './logo.css';
const dataset = process.env.SANITY_STUDIO_API_DATASET || 'default (prod)';

const Logo = () => (
  <>
    <h1 className={styles.company}>Austen Riggs Center</h1>
    <div className={styles.dataset}>dataset: {dataset}</div>
  </>
);

export default Logo;
