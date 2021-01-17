import React from 'react';
import User from '../../components/User';
import { author } from '../../utils/fakeData';

const UserPage = ({ match }: any) => {
  return <User {...author} />;
};

export default UserPage;
