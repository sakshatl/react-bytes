import { X } from 'phosphor-react';
import './modal.css';

function Modal(props) {
  const { isOpen, onClose, heading, content } = props; 

  if(!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          {heading && <h3>{heading}</h3>}
          <X style={{ cursor: "pointer" }} onClick={onClose} size={20} />
        </div>
        <div className="modal-content">
          {
            content && <p>{content}</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Modal;