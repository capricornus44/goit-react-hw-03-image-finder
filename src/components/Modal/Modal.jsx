import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import scss from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // ========================= Function to close modal box by pushing ESCAPE =======================
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  // ========================= Function to close modal box by clicking on BACKDROP/OVERLAY ==========
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={scss.overlay} onClick={this.handleBackdropClick}>
        <div className={scss.modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
