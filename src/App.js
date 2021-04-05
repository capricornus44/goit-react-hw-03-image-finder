import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
// import Loader from './components/Loader';
// import ImageGallery from './components/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Modal from './components/Modal';

import './App.scss';

class App extends Component {
  state = {
    showModal: false,
    hits: [],
    currentPage: 1,
    request: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.request !== this.state.request) {
      this.fetchHits();
    }
  }

  onChangeQuery = seachQuery => {
    this.setState({ request: seachQuery, currentPage: 1, hits: [] });
    this.fetchHits(seachQuery);
  };

  // ======================== HTTP request logic ==================================

  fetchHits = () => {
    const { currentPage, request } = this.state;

    axios
      .get(
        `https://pixabay.com/api/?q=${request}&page=${currentPage}&key=20669309-c97d1ec468a66ad87fd39e114&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      });
  };

  // ======================== Function to open/close modal box ====================
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // ======================== Rendering ===========================================
  render() {
    const { showModal, hits, largeImageUrl } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul>
          {hits.map(({ id, webformatURL }) => (
            <li key={id}>
              <img src={webformatURL} alt="" />
            </li>
          ))}
        </ul>

        {/* <ImageGallery /> */}
        {/* <Loader /> */}

        <Button type="button" onClick={this.fetchHits} />
        {showModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}

export default App;
