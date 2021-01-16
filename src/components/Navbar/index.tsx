import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { LoginButton } from '../../common/buttons';

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
        <Link to="/teams">Teams</Link>
      </Menu.Item>
      <Menu.Item position="right">
        <LoginButton />
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
