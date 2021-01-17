import React from 'react';
import { Author } from '../../interfaces';

const User = (user: Author) => {
  return <h2>{user.userName}</h2>;
};

export default User;
