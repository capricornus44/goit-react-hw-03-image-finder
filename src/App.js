import React, { Component } from 'react';
import pixabayApi from './services/pixabayApi';
import Searchbar from './components/Searchbar';
import Loader from 'react-loader-spinner';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    showModal: false,
    hits: [], // array of objects (images)
    currentPage: 1,
    request: '',
    isLoading: false,
    error: null,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.request !== this.state.request) {
      this.fetchHits();
    }
  }

  onChangeQuery = seachQuery => {
    this.setState({
      request: seachQuery,
      currentPage: 1,
      hits: [],
      error: null,
    });
    this.fetchHits(seachQuery);
  };

  // ======================== HTTP request logic ==================================

  fetchHits = () => {
    const { currentPage, request } = this.state;
    const options = { currentPage, request };

    this.setState({ isLoading: true });

    pixabayApi
      .fetchHits(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  // ======================== Function to open/close modal box ====================
  toggleModal = hit => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: hit,
    }));
  };

  // ======================== Rendering ===========================================
  render() {
    const { hits, isLoading, showModal, largeImageURL } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery hits={hits} onClick={this.toggleModal} />

        {isLoading && (
          <Loader
            className="loader"
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {hits.length > 0 && !isLoading && <Button onClick={this.fetchHits} />}

        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

export default App;
