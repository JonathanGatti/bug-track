import React, { useState, ChangeEvent } from 'react';
import { InputOnChangeData } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/usersActions';
import { generateId } from '../../utils/generateId';
import { Author } from '../../interfaces';
import { History, LocationState } from 'history';
import UserForm from '../../components/UserForm';

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
      <UserForm
        onNameChange={handleNameChange}
        onPasswordChange={handlePasswordChange}
        onClick={handleClick}
      />
    </div>
  );
};

export default connect(null, { createUser })(CreateUser);
