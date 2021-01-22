import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const CommentForm = ({ onChange, onAddComment, action }: any) => {
  return (
    <Form>
      <Form reply>
        <Form.TextArea onChange={onChange} />
        <Button
          onClick={onAddComment}
          content={`${action} Comment`}
          labelPosition="left"
          icon="edit"
          primary
        />
      </Form>
    </Form>
  );
};

export default CommentForm;
