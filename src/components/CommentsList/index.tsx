import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/commentsActions';
import { Comment, Header } from 'semantic-ui-react';
import CommentDetail from '../Comment';
import { CommentInterface, CurrentUser } from '../../interfaces';

interface CommentListProps {
  issueRef: string;
  fetchComments: () => void;
  comments: CommentInterface[];
  currentUser: CurrentUser;
}

const CommentsList = ({
  issueRef,
  fetchComments,
  comments,
  currentUser,
}: CommentListProps) => {
  useEffect(() => {
    fetchComments();
  }, []);

  const renderComments = () => {
    const referencedComments = comments.filter((comment: any) => {
      return comment.issueReference === issueRef;
    });
    return referencedComments.map((comment: any) => (
      <CommentDetail comment={comment} currentUser={currentUser} />
    ));
  };
  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Comments
      </Header>
      {renderComments()}
    </Comment.Group>
  );
};

interface mapState {
  comments: CommentInterface[];
  currentUser: CurrentUser;
}

const mapStateToProps = (state: mapState) => {
  return {
    comments: Object.values(state.comments),
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, { fetchComments })(CommentsList);
