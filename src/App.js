import React, { Component } from 'react';
import pixabayApi from './services/pixabayApi';
import Searchbar from './components/Searchbar';
// import Loader from './components/Loader';
import Loader from 'react-loader-spinner';
// import ImageGallery from './components/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Modal from './components/Modal';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.scss';

class App extends Component {
  state = {
    showModal: false,
    hits: [],
    currentPage: 1,
    request: '',
    isLoading: false,
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
    const { showModal, hits, isLoading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {isLoading && (
          <Loader
            type="Watch"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        <ul>
          {hits.map(({ id, webformatURL }) => (
            <li key={id}>
              <img src={webformatURL} alt="" />
            </li>
          ))}
        </ul>

        {/* <ImageGallery /> */}
        {/* <Loader /> */}

        {hits.length > 0 && !isLoading && <Button onClick={this.fetchHits} />}
        {showModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}

export default App;
