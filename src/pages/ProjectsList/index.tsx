import React, { useEffect } from 'react';
import List from '../../components/List';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/projectsActions';
import styled from 'styled-components';
import { Project } from '../../interfaces';

const Container = styled.div`
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

interface ProjectListProps {
  fetchProjects: () => void;
  projects: Project[];
}

const ProjectsList = ({ fetchProjects, projects }: ProjectListProps) => {
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <Container>
      <h3>Projects List</h3>
      <List items={projects} />
    </Container>
  );
};

interface mapState {
  projects: Project[];
}

const mapStateToProps = (state: mapState) => {
  return { projects: Object.values(state.projects) };
};

export default connect(mapStateToProps, { fetchProjects })(ProjectsList);
