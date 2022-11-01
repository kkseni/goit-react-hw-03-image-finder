import React, { Component } from 'react';
import styles from '../../styles.module.scss';

import { nanoid } from 'nanoid';

export default class PostsSearchForm extends Component {
  state = {
    search: '',
  };

  searchField = {
    label: 'Search',
    type: 'text',
    name: 'search',
    placeholder: 'Search images and photos',
    required: true,
  };

  searchId = nanoid();

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      search: '',
    });
  }

  render() {
    const { search } = this.state;
    const { handleSubmit, searchId, handleChange, searchField } = this;
    return (
      // <form onSubmit={handleSubmit} className={styles.form}>
      //   <TextField
      //     value={search}
      //     id={searchId}
      //     handleChange={handleChange}
      //     {...searchField}
      //   />
      //   <SubmitButton text="Search" onClick={handleSubmit} />// </form>

      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <button
          type="submit"
          onClick={handleSubmit}
          className={styles.SearchFormbutton}
        >
          <span className={styles.SearchFormbuttonlabel}>Search</span>
        </button>

        <input
          className={styles.SearchForminput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          id={searchId}
          handleChange={handleChange}
          {...searchField}
        />
      </form>
    );
  }
}
