import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/currentUserActions';
import { CurrentUser } from '../../interfaces';

interface NavbarProps {
  logOutUser: () => void;
  currentUser: CurrentUser;
}

const Navbar = ({ logOutUser, currentUser }: NavbarProps) => {
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
        <>
          {currentUser ? (
            <Menu.Item position="right">
              Welcome back {currentUser.userName}
            </Menu.Item>
          ) : null}
          <Button onClick={handleLogOut} inverted color="red">
            Log Out
          </Button>
        </>
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

interface mapState {
  currentUser: CurrentUser;
}

const mapStateToProps = (state: mapState) => {
  return { currentUser: state.currentUser };
};
export default connect(mapStateToProps, { logOutUser })(Navbar);
