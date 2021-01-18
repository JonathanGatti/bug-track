import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const VerticalHeader = () => {
  return (
    <Menu vertical inverted size="large">
      <Menu.Item name="Issue">
        <Link to="/create/issue">
          {' '}
          <Menu.Header as="h4">Issue</Menu.Header>
          <p>Create New Issue</p>
        </Link>
      </Menu.Item>
      <Menu.Item name="projects">
        <Menu.Header as="h4">Projects</Menu.Header>
        <p>Check out our new projects</p>
      </Menu.Item>
      <Menu.Item name="users">
        <Menu.Header as="h4">Users</Menu.Header>
        <p>Check out our new projects</p>
      </Menu.Item>
      <Menu.Item name="issues">
        <Menu.Header as="h4">Issues</Menu.Header>
        <p>Check out our new projects</p>
      </Menu.Item>
    </Menu>
  );
};

export default VerticalHeader;
