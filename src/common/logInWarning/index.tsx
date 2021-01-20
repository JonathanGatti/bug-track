import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LogInWarning = () => {
  return (
    <div>
      <h4>You must be logged in</h4>
      <Link to="/login">
        <Button color="red">Log In</Button>
      </Link>
    </div>
  );
};

export default LogInWarning;
