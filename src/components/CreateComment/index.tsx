import React, { useState, ChangeEvent } from 'react';
import { TextAreaProps } from 'semantic-ui-react';
import { createComment } from '../../actions/commentsActions';
import { connect } from 'react-redux';
import CommentForm from '../CommentForm';
import LogInWarning from '../../common/logInWarning';

const CreateComment = ({
  createComment,
  currentUser,
  setOnCommenting,
  issueRef,
}: any) => {
  const [content, setContent] = useState<string | undefined | number>('');

  const handleAddComment = () => {
    if (content !== '') {
      console.log('hi');
      const newComment = {
        author: currentUser.userName,
        content: content,
        issueReference: issueRef,
      };
      createComment(newComment);
      setOnCommenting(false);
    } else return null;
  };
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    data: TextAreaProps
  ) => {
    e.preventDefault();
    setContent(data.value);
  };

  const render = () => {
    if (!currentUser.isSignedIn) {
      return <LogInWarning />;
    } else {
      return (
        <CommentForm
          onAddComment={handleAddComment}
          onChange={handleChange}
          action="Add"
        />
      );
    }
  };
  return <>{render()}</>;
};

const mapStateToProps = (state: any) => {
  return { currentUser: state.currentUser };
};
export default connect(mapStateToProps, { createComment })(CreateComment);
