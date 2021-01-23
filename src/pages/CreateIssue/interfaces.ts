import { History, LocationState } from 'history';
import { Issue, Project, CurrentUser } from '../../interfaces';
import { RouteComponentProps, StaticContext } from 'react-router';

export interface CreateIssueProps {
  history: History<LocationState | any>;
  createIssue: (data: any) => void;
  fetchProjects: () => void;
  projects: Project[];
  currentUser: CurrentUser;
}

export interface mapState {
  projects: Project[];
  currentUser: CurrentUser;
}

