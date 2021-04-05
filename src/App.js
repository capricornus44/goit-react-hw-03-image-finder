import React, { Component } from 'react';
import axios from 'axios';
// import fetchImagesUponRequest from './components/services/pixabayApi';
import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem';
// import Button from './components/Button';
// import Loader from './components/Loader';
import Modal from './components/Modal';

import './App.scss';

class App extends Component {
  state = {
    showModal: false,
    hits: [],
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
  }

  onChangeQuery = seachQuery => {
    axios
      .get(
        `https://pixabay.com/api/?q=${seachQuery}&page=1&key=20669309-c97d1ec468a66ad87fd39e114&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        this.setState({
          hits: response.data.hits,
        });
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

        {/* <Button /> */}
        {/* <Loader /> */}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageUrl} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
