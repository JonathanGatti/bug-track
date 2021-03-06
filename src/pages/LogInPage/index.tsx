import React, { useState, ChangeEvent } from 'react';
import { InputOnChangeData } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logIn } from '../../api/users/usersRoutes';
import { History, LocationState } from 'history';
import { logInUser } from '../../actions/currentUserActions';
import UserForm from '../../components/UserForm';
import { CurrentUser } from '../../interfaces';
import ModalTemplate from '../../components/Modal';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

const Container = styled.div`
  width: 30vw;
  margin-left: auto;
  margin-right: auto;
  @media ${mediaQueries.laptop} {
    width: 50vw;
  }
`;

interface LogInPageProps {
  history: History<LocationState>;
  logInUser: (currentUser: CurrentUser) => void;
}

const LogInPage = ({ history, logInUser }: LogInPageProps) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
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
    if (!res || res.data === 'Not Allowed') {
      setIsOpen(true);
      return;
    } else {
      const currentUser = {
        userId: res.data,
        userName: credentials.userName,
      };
      logInUser(currentUser);
      history.push('/');
    }
  };
  return (
    <Container>
      <h2>Log In</h2>
      <ModalTemplate
        open={isOpen}
        content="Incorrect username or password. Username: admin, password: password"
        onOpen={setIsOpen}
      />
      <UserForm
        onNameChange={handleNameChange}
        onPasswordChange={handlePasswordChange}
        onClick={handleClick}
        isError={false}
      />
    </Container>
  );
};

export default connect(null, { logInUser })(LogInPage);
