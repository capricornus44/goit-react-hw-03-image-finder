import React, { Component } from 'react';
import scss from './Searchbar.module.scss';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = event => {
    const { value } = event.currentTarget;

    this.setState({
      searchQuery: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.searchQuery);

    this.setState({
      searchQuery: '',
    });
  };

  // ======================== Rendering ===========================================
  render() {
    return (
      <header className={scss.searchbar}>
        <form className={scss.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={scss.searchFormButton}>
            <span className={scss.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={scss.searchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
