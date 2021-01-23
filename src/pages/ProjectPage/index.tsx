import React, { useEffect } from 'react';
import { StaticContext, RouteComponentProps } from 'react-router';
import ProjectDetail from '../../components/ProjectDetail';
import { Project } from '../../interfaces';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions/projectsActions';
import Spinner from '../../common/spinner';
import { History, LocationState } from 'history';

interface MatchParams {
  params: string;
  id: string;
}
interface ProjectPageProps extends RouteComponentProps<MatchParams> {
  history: History<LocationState>;
  fetchProject: (id: string) => void;
  match: any;
  project: Project;
  currentUser: any;
}

const ProjectPage = ({
  history,
  match,
  fetchProject,
  project,
  currentUser,
}: ProjectPageProps) => {
  useEffect(() => {
    fetchProject(match.params.id);
  }, []);

  const render = () => {
    if (!project) {
      return <Spinner />;
    } else {
      return (
        <ProjectDetail
          project={project}
          history={history}
          currentUser={currentUser}
        />
      );
    }
  };
  return <div>{render()}</div>;
};

interface mapState {
  state: Project[] | any;
  ownProps: RouteComponentProps<any, StaticContext, unknown>;
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    project: state.projects![ownProps.match.params.id],
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, { fetchProject })(ProjectPage);
