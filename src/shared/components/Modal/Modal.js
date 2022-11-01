import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { closeModal } = this;
    const { children } = this.props;
    return createPortal(
      <div className={styles.Overlay} onClick={closeModal}>
        <div className={styles.Modal}>
          <span onClick={closeModal}>X</span>
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}
