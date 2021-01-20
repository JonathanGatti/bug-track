import React, { useState, ChangeEvent } from 'react';
import { Form, Button, InputOnChangeData } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/usersActions';
import { generateId } from '../../utils/generateId';
import { Author } from '../../interfaces';
import { History, LocationState } from 'history';

interface CreateUserProps {
  history: History<LocationState>;
  createUser: (user: Author) => void;
}

const CreateUser = ({ history, createUser }: CreateUserProps) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleNameChange = (
    e: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    setName(data.value);
  };
  const handlePasswordChange = (
    e: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    setPassword(data.value);
  };
  const handleClick = () => {
    const newUser = {
      userId: generateId(),
      userName: name,
      userPassword: password,
    };
    createUser(newUser);
    history.push('/');
  };
  return (
    <div>
      <h2>Create user</h2>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <Form.Input onChange={handleNameChange} placeholder="User Name" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Form.Input
            onChange={handlePasswordChange}
            placeholder="Password"
            type="password"
          />
        </Form.Field>
        <Button onClick={handleClick} type="submit" color="blue">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default connect(null, { createUser })(CreateUser);
