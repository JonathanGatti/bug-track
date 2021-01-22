import React, { useEffect, useState, ChangeEvent } from 'react';
import { Form, Label, Button, TextAreaProps } from 'semantic-ui-react';
import { createComment } from '../../actions/commentsActions';
import { connect } from 'react-redux';
const CreateComment = ({
  createComment,
  currentUser,
  setOnCommenting,
}: any) => {
  const [content, setContent] = useState<string | undefined | number>('');

  const handleAddComment = () => {
    const newComment = {
      authorId: currentUser.userId,
      content: content,
    };
    createComment(newComment);
    setOnCommenting(false);
  };
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    data: TextAreaProps
  ) => {
    e.preventDefault();
    setContent(data.value);
  };
  return (
    <Form>
      <Form reply>
        <Form.TextArea onChange={handleChange} />
        <Button
          onClick={handleAddComment}
          content="Add Reply"
          labelPosition="left"
          icon="edit"
          primary
        />
      </Form>
    </Form>
  );
};

const mapStateToProps = (state: any) => {
  return { currentUser: state.currentUser };
};
export default connect(mapStateToProps, { createComment })(CreateComment);
