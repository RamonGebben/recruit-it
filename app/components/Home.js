import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.module.css';
import SearchForm from './SearchForm';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <SearchForm />
        </div>
      </div>
    );
  }
}
