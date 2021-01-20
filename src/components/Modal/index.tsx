import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

function ModalTemplate({ open, onOpen, content }: any) {
  return (
    <Modal centered={false} open={open}>
      <Modal.Header>Something Went Wrong</Modal.Header>
      <Modal.Content>
        <Modal.Description>{content}</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => onOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalTemplate;
