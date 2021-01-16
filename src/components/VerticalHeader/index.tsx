import React from 'react';
import { Menu } from 'semantic-ui-react';

const VerticalHeader = () => {
  return (
    <Menu vertical inverted size="large">
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
      <Menu.Item name="Teams">
        <Menu.Header as="h4">Teams</Menu.Header>
        <p>Check out our new projects</p>
      </Menu.Item>
    </Menu>
  );
};

export default VerticalHeader;
