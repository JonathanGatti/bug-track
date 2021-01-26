import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

function DeleteConfirmation() {
  return (
    <Modal
      open={true}
      onOpen={() => console.log('open')}
      onClose={() => console.log('close')}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Delete Your Account</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete your account</p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative>No</Button>
        <Button positive>Yes</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default DeleteConfirmation;
