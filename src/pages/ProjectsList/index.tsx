import React from 'react';
import List from '../../components/List';
import { projects } from '../../utils/fakeData';
import styled from 'styled-components';

const Container = styled.div`
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const ProjectsList = () => {
  return (
    <Container>
      <h3>Projects List</h3>
      <List {...projects} />
    </Container>
  );
};

export default ProjectsList;
