import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/commentsActions';
import { Comment, Header } from 'semantic-ui-react';

const CommentsList = ({ issueRef, fetchComments, comments }: any) => {
  useEffect(() => {
    fetchComments();
  }, []);

  const renderComments = () => {
    const referencedComments = comments.filter((comment: any) => {
      return comment.issueReference === issueRef;
    });
    return referencedComments.map((comment: any) => (
      <Comment>
        <Comment.Content>
          <Comment.Author as="a">{comment.author}</Comment.Author>
          <Comment.Metadata>
            <div>{comment.date}</div>
          </Comment.Metadata>
          <Comment.Text>{comment.content}</Comment.Text>
        </Comment.Content>
      </Comment>
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

const mapStateToProps = (state: any) => {
  return { comments: Object.values(state.comments) };
};
export default connect(mapStateToProps, { fetchComments })(CommentsList);
