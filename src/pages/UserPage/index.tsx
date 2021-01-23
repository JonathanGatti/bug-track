import React, { useEffect } from 'react';
import User from '../../components/User';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/usersActions';
import Spinner from '../../common/spinner';

const UserPage = ({ match, fetchUser, user }: any) => {
  useEffect(() => {
    fetchUser(match.params.id);
  }, []);

  const render = () => {
    if (!user) return <Spinner />;
    return <div>{user.userName}</div>;
  };
  return <div>{render()}</div>;
};

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    user: state.users![ownProps.match.params.id],
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, { fetchUser })(UserPage);
