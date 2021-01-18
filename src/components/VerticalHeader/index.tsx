import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const VerticalHeader = () => {
  return (
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
      <Menu.Item name="users">
        <Link to="/create/user">
          <Menu.Header as="h4">User</Menu.Header>
          <p>Add New User</p>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default VerticalHeader;
