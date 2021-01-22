import React, { useEffect, useState, ChangeEvent } from 'react';
import { Form, Label, Button, TextAreaProps } from 'semantic-ui-react';
import { createComment } from '../../actions/commentsActions';
import { connect } from 'react-redux';
const CreateComment = ({
  createComment,
  currentUser,
  setOnCommenting,
  issueRef,
}: any) => {
  const [content, setContent] = useState<string | undefined | number>('');

  const handleAddComment = () => {
    const newComment = {
      author: currentUser.userName,
      content: content,
      issueReference: issueRef,
    };
    console.log(newComment);
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
          content="Add Comment"
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
