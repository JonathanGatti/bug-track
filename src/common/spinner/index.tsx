import React from 'react';
import { Loader, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Spinner = () => (
  <Container>
    <Loader active />
  </Container>
);

export default Spinner;
