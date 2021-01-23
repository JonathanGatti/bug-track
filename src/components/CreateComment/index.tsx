import React, { useState, ChangeEvent } from 'react';
import { TextAreaProps } from 'semantic-ui-react';
import { createComment } from '../../actions/commentsActions';
import { connect } from 'react-redux';
import CommentForm from '../CommentForm';
import LogInWarning from '../../common/logInWarning';
import { CommentInterface, CurrentUser } from '../../interfaces';

interface CreateCommentProps {
  createComment: (data: CommentInterface | any) => void;
  currentUser: CurrentUser;
  setOnCommenting: (value: boolean) => void;
  issueRef: string;
}

const CreateComment = ({
  createComment,
  currentUser,
  setOnCommenting,
  issueRef,
}: CreateCommentProps) => {
  const [content, setContent] = useState<string | undefined | number>('');

  const handleAddComment = () => {
    if (content !== '') {
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

interface mapState {
  currentUser: CurrentUser;
}

const mapStateToProps = (state: any) => {
  return { currentUser: state.currentUser };
};
export default connect(mapStateToProps, { createComment })(CreateComment);
