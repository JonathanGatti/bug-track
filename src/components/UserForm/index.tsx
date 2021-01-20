import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { UserFormProps } from './interfaces';

const UserForm = ({
  onNameChange,
  onPasswordChange,
  onClick,
}: UserFormProps) => {
  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <Form.Input onChange={onNameChange} placeholder="User Name" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Form.Input
          onChange={onPasswordChange}
          placeholder="Password"
          type="password"
        />
      </Form.Field>
      <Button onClick={onClick} type="submit" color="blue">
        Submit
      </Button>
    </Form>
  );
};

export default UserForm;
