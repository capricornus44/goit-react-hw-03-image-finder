import React, { Component } from 'react';
import axios from 'axios';
import pixabayApi from './services/pixabayApi';
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
    const options = { currentPage, request };

    pixabayApi.fetchHits(options).then(hits => {
      this.setState(prevState => ({
        hits: [...prevState.hits, ...hits],
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
    const { showModal, hits } = this.state;

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
