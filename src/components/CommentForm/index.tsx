import React from 'react';
import { Form, Button, TextAreaProps, ButtonProps } from 'semantic-ui-react';

interface CommentFormProps {
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    data: TextAreaProps
  ) => void;
  onAddComment: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: ButtonProps
  ) => void;
  action: string;
}
const CommentForm = ({ onChange, onAddComment, action }: CommentFormProps) => {
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
