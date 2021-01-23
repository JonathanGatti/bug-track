import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { UserFormProps } from './interfaces';

const UserForm = ({
  onNameChange,
  onPasswordChange,
  onClick,
  isError,
}: UserFormProps) => {
  return (
    <Form>
      <Form.Field>
        <label>User Name</label>
        <Form.Input
          onChange={onNameChange}
          placeholder="User Name"
          error={isError ? { content: 'This field is Required' } : null}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Form.Input
          onChange={onPasswordChange}
          placeholder="Password"
          type="password"
          error={isError ? { content: 'This field is Required' } : null}
        />
      </Form.Field>
      <Button onClick={onClick} type="submit" color="blue">
        Submit
      </Button>
    </Form>
  );
};

export default UserForm;
