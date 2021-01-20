import React, { useState, ChangeEvent } from 'react';
import { Form, Button, InputOnChangeData } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logIn } from '../../api/users/usersRoutes';
import { History, LocationState } from 'history';

interface LogInPageProps {
  history: History<LocationState>;
  logInUser: any;
}

const LogInPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

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
    if (res!.data === 'Not Allowed') {
      alert(res!.data);
    } else {
      alert(res!.data);
    }
  };
  return (
    <div>
      <h2>Log In</h2>
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

export default connect(null)(LogInPage);
