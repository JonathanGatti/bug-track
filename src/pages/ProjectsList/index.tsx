import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/projectsActions';
import styled from 'styled-components';
import { Project } from '../../interfaces';
import { mediaQueries } from '../../styles/mediaQueries';
import RenderProjects from '../../components/RenderProjects';

const Container = styled.div`
  width: 75vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  @media ${mediaQueries.laptop} {
    width: 90vw;
  }
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
      <RenderProjects list={projects} />
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
