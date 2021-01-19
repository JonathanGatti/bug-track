import React, { useState, useEffect } from 'react';
import ProjectDetail from '../../components/Project';
import Project from '../../components/Project';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions/projectsActions';
import Spinner from '../../common/spinner';

const ProjectPage = ({ history, match, fetchProject, project }: any) => {
  useEffect(() => {
    fetchProject(match.params.id);
  }, [project]);

  const render = () => {
    if (!project) {
      return <Spinner />;
    } else {
      return <ProjectDetail project={project} history={history} />;
    }
  };
  return <div>{render()}</div>;
};

const mapStateToProps = (state: any, ownProps: any) => {
  return { project: state.projects![ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchProject })(ProjectPage);
