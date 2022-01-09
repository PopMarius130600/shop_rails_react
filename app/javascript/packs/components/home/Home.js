import React, { Component } from 'react';

import home_image from '../../../images/home.jpeg'
import styles from './home.module.css';
import SearchBar from './SearchBar';

class Home extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div >
        <img className={styles.home_image} src={home_image} />
        <div className={styles.search}>
          <SearchBar />
        </div>
      </div>
    )
  }
}

export default Home