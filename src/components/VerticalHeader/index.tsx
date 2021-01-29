import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

const Container = styled.div`
  @media ${mediaQueries.laptop} {
    display: none;
  }
`;

const VerticalHeader = () => {
  return (
    <Container>
      <Menu vertical inverted size="large">
        <Menu.Item name="Issue">
          <Link to="/create/issue">
            <Menu.Header as="h4">Issue</Menu.Header>
            <p>Create New Issue</p>
          </Link>
        </Menu.Item>
        <Menu.Item name="Project">
          <Link to="/create/project">
            <Menu.Header as="h4">Project</Menu.Header>
            <p>Create New Project</p>
          </Link>
        </Menu.Item>
        <Menu.Item name="Projects List">
          <Link to="/projects">
            <Menu.Header as="h4">Project</Menu.Header>
            <p>List of All The Projects</p>
          </Link>
        </Menu.Item>
        <Menu.Item name="users">
          <Link to="/create/user">
            <Menu.Header as="h4">Sign Up</Menu.Header>
            <p>Create New Account</p>
          </Link>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default VerticalHeader;
