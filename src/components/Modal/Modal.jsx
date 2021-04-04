import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import scss from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');
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
          {/* <img src="" alt="" /> */}
          {this.props.children}
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
