import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  width: 20vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LogInWarning = () => {
  return (
    <Container>
      <h4>You must be logged in</h4>
      <Link to="/login">
        <Button color="red">Log In</Button>
      </Link>
    </Container>
  );
};

export default LogInWarning;
