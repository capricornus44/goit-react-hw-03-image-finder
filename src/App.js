import React, { Component } from 'react';
import axios from 'axios';
// import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem';
// import Button from './components/Button';
// import Loader from './components/Loader';
import Modal from './components/Modal';

import './App.scss';

class App extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    console.log('App componentDidMount');

    axios
      .get(
        'https://pixabay.com/api/?q=color&page=1&key=20669309-c97d1ec468a66ad87fd39e114&image_type=photo&orientation=horizontal&per_page=12',
      )
      .then(response => {
        console.log(response);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    // console.log(prevState)
    // console.log(this.state)
  }

  // ======================== Function to open/close modal box ====================
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        {/* <Searchbar /> */}
        {/* <ImageGallery /> */}

        {/* <Button /> */}
        {/* <Loader /> */}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
