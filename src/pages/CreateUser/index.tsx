import React, { useState, ChangeEvent } from 'react';
import { InputOnChangeData } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/usersActions';
import { generateId } from '../../utils/generateId';
import { Author, CurrentUser } from '../../interfaces';
import { History, LocationState } from 'history';
import UserForm from '../../components/UserForm';
import LogInWarning from '../../common/logInWarning';
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

interface CreateUserProps {
  history: History<LocationState>;
  createUser: (user: Author) => void;
  currentUser: CurrentUser;
}

const CreateUser = ({ history, createUser, currentUser }: CreateUserProps) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
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
    if (name === '' || password === '') {
      setIsError(true);
    } else {
      const newUser = {
        userId: generateId(),
        userName: name,
        userPassword: password,
        userProjects: [],
      };
      createUser(newUser);
      history.push('/');
    }
  };
  const render = () => {
    if (!currentUser) return null;
    if (!currentUser.isSignedIn) return <LogInWarning />;
    else {
      return (
        <Container>
          <h2>Sign Up</h2>
          <UserForm
            onNameChange={handleNameChange}
            onPasswordChange={handlePasswordChange}
            onClick={handleClick}
            isError={isError}
          />
        </Container>
      );
    }
  };
  return <div>{render()}</div>;
};

interface mapState {
  currentUser: CurrentUser;
}
const mapStateToProps = (state: mapState) => {
  return { currentUser: state.currentUser };
};
export default connect(mapStateToProps, { createUser })(CreateUser);
