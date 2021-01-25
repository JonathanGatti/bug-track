import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import ProjectDetail from '../../components/ProjectDetail';
import { CurrentUser, Project, Author, Issue } from '../../interfaces';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions/projectsActions';
import { fetchIssues } from '../../actions/issuesActions';
import { fetchUsers } from '../../actions/usersActions';
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
  currentUser: CurrentUser | any;
  fetchUsers: () => void | any;
  users: Author[] | any;
  fetchIssues: () => void | any;
  issues: Issue[] | any;
}

const ProjectPage = ({
  history,
  match,
  fetchProject,
  fetchIssues,
  fetchUsers,
  project,
  issues,
  users,
  currentUser,
}: ProjectPageProps) => {
  useEffect(() => {
    fetchIssues();
    fetchUsers();
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
          issues={issues}
          users={users}
        />
      );
    }
  };
  return <div>{render()}</div>;
};

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    project: state.projects[ownProps.match.params.id],
    currentUser: state.currentUser,
    issues: Object.values(state.issues),
    users: Object.values(state.users),
  };
};
export default connect(mapStateToProps, {
  fetchProject,
  fetchIssues,
  fetchUsers,
})(ProjectPage);
