import React from 'react'
import {Modal} from "@material-ui/core";
import "./modalContainer.scss";

export default function ModalContainer(props) {
  
  const { isOpen, close, children } = props;
  
  return (
    <Modal
      className="modal-container"
      open={isOpen}
      onClose={close}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>    
  );
}