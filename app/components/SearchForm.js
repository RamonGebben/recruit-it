import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './SearchForm.module.css';


export default class SearchForm extends Component {

  onSubmit(){
      alert(this.refs.city.value + ' ' + this.refs.tags.value);
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>SearchForm</h2>
          <input ref='city' type='text' className={styles.input} placeholder='City'/>
          <input ref='tags' type='text' className={styles.input} placeholder='Tag [in lowercase]'/>
          <button className={styles.button} onClick={ this.onSubmit.bind(this) }>Search</button>
        </div>
      </div>
    );
  }
}
