import React from 'react';
import { Loader, Segment } from 'semantic-ui-react';

const Spinner = () => (
  <Segment>
    <Loader active />
  </Segment>
);

export default Spinner;
