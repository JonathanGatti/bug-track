import { History, LocationState } from 'history';
import { Issue, Project, CurrentUser } from '../../interfaces';
import { RouteComponentProps, StaticContext } from 'react-router';

export interface CreateIssueProps {
  history: History<LocationState | any>;
  createIssue: (data: Issue) => void;
  fetchProjects: () => void;
  projects: Project[];
  _projectRef: string;
  onAddIssue: (issueName: string, desc: string, priority: any) => void;
}

export interface mapState {
  projects: Project[];
  currentUser: CurrentUser;
}

