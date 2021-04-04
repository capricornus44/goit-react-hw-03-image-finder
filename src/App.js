import React, { Component } from 'react';
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
