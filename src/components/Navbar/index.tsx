import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu inverted>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/projects">Projects</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/create/issue">Create Issue</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/create/project">Create Project</Link>
      </Menu.Item>
      <Menu.Item position="right">
        <Button inverted color="red">
          Log in
        </Button>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
