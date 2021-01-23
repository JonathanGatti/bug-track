import { History, LocationState } from 'history';
import { Issue, Author, CurrentUser } from '../../interfaces';


export interface CreateProjectProps {
  history: History<LocationState | any>;
  fetchUsers: () => void;
  fetchIssues: () => void;
  issues: Issue[];
  createProject: (data: any) => void;
  currentUser: CurrentUser;
}


export interface mapState {
  issues: Issue[];
  users: Author[];
  currentUser: CurrentUser;
}