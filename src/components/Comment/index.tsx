import React, { useState, ChangeEvent } from 'react';
import { Comment, Button, TextAreaProps } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { editComment, deleteComment } from '../../actions/commentsActions';
import CommentForm from '../CommentForm';

const CommentDetail = ({
  comment,
  currentUser,
  editComment,
  deleteComment,
}: any) => {
  const { _id, author, content, date } = comment;
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState<number | string | undefined>('');

  const handleDeleteButton = (id: string) => {
    deleteComment(id);
  };
  const handleEditComment = () => {
    if (newContent === '') {
      setIsEditing(false);
    } else {
      const newComment = {
        content: newContent,
      };
      editComment(_id, newComment);
      setIsEditing(false);
    }
  };
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    data: TextAreaProps
  ) => {
    e.preventDefault();
    setNewContent(data.value);
  };
  const renderButtons = () => {
    if (author === currentUser.userName) {
      return (
        <Button.Group>
          <Button inverted color="green" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
          <Button inverted color="red" onClick={() => handleDeleteButton(_id)}>
            Delete
          </Button>
        </Button.Group>
      );
    }
  };
  return (
    <Comment>
      <Comment.Content>
        <Comment.Author as="a">{author}</Comment.Author>
        <Comment.Metadata>
          <div>{date}</div>
        </Comment.Metadata>
        {!isEditing ? (
          <Comment.Text>{content}</Comment.Text>
        ) : (
          <CommentForm
            onChange={handleChange}
            onAddComment={handleEditComment}
            action="Edit"
          />
        )}
      </Comment.Content>
      {renderButtons()}
    </Comment>
  );
};

export default connect(null, { editComment, deleteComment })(CommentDetail);