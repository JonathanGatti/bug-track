import React from 'react';
import List from '../../components/List';
import { projects } from '../../utils/fakeData';

const ProjectsList = () => {
  return (
    <>
      <h3>Projects List</h3>
      <List {...projects} />
    </>
  );
};

export default ProjectsList;
