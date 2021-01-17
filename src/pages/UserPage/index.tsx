import React from 'react';
import User from '../../components/User';
import { author } from '../../utils/fakeData';

const UserPage = () => {
  return <User {...author} />;
};

export default UserPage;
