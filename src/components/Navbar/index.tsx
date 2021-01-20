import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/currentUserActions';

const Navbar = ({ logOutUser, currentUser }: any) => {
  const handleLogOut = () => {
    logOutUser();
  };

  const renderButtons = () => {
    if (currentUser.isSignedIn === undefined) return null;
    if (!currentUser.isSignedIn) {
      return (
        <Link to="/login">
          <Button inverted color="red">
            Log in
          </Button>
        </Link>
      );
    } else {
      return (
        <Button onClick={handleLogOut} inverted color="red">
          Log Out
        </Button>
      );
    }
  };

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
      <Menu.Item position="right">{renderButtons()}</Menu.Item>
    </Menu>
  );
};

const mapStateToProps = (state: any) => {
  return { currentUser: state.currentUser };
};
export default connect(mapStateToProps, { logOutUser })(Navbar);
