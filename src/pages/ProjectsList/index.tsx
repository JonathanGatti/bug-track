import React, { useEffect } from 'react';
import List from '../../components/List';
import { connect } from 'react-redux';
import { projects } from '../../utils/fakeData';
import { fetchProjects } from '../../actions/projectsActions';
import styled from 'styled-components';

const Container = styled.div`
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const ProjectsList = ({ fetchProjects, projects }: any) => {
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <Container>
      <h3>Projects List</h3>
      <List {...projects.projects} />
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return { projects: state.projects };
};

export default connect(mapStateToProps, { fetchProjects })(ProjectsList);
