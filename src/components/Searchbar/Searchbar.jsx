import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') {
      toast.error('Enter correct value!');
      return;
    }

    this.props.onSubmit(searchQuery);

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
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
