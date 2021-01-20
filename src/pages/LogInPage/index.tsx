import React, { useState, ChangeEvent } from 'react';
import { InputOnChangeData } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logIn } from '../../api/users/usersRoutes';
import { History, LocationState } from 'history';
import { logInUser } from '../../actions/currentUserActions';
import UserForm from '../../components/UserForm';
import { CurrentUser } from '../../interfaces';

interface LogInPageProps {
  history: History<LocationState>;
  logInUser: (currentUser: CurrentUser) => void;
}

const LogInPage = ({ history, logInUser }: LogInPageProps) => {
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
  const handleClick = async () => {
    const credentials = {
      userName: name,
      userPassword: password,
    };
    const res = await logIn(credentials);
    if (!res!.data) return null;
    if (res!.data === 'Not Allowed') {
      alert('Incorret Username or Password');
    } else {
      const currentUser = {
        userId: res!.data,
        userName: credentials.userName,
      };
      logInUser(currentUser);
    }
  };
  return (
    <div>
      <h2>Log In</h2>
      <UserForm
        onNameChange={handleNameChange}
        onPasswordChange={handlePasswordChange}
        onClick={handleClick}
      />
    </div>
  );
};

export default connect(null, { logInUser })(LogInPage);
