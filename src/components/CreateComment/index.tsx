import React, { useEffect } from 'react';
import { Form, Label } from 'semantic-ui-react';
import { createComment } from '../../actions/commentsActions';
import { connect } from 'react-redux';
const CreateComment = ({ createComment, currentUser }: any) => {
  useEffect(() => {
    console.log(currentUser);
  });
  return (
    <Form>
      <Form.Field>
        <Form.Input></Form.Input>
        <Label></Label>
      </Form.Field>
    </Form>
  );
};

const mapStateToProps = (state: any) => {
  return { currentUser: state.currentUser };
};
export default connect(mapStateToProps, { createComment })(CreateComment);
