import { History, LocationState } from 'history';
import { Project, Issue, Author, CurrentUser } from '../../interfaces';


export interface ProjectDetailProps {
  history: History<LocationState>;
  project: Project ;
  deleteProject: (id: string) => void;
  fetchIssues: () => void;
  issues: Issue[];
  currentUser: CurrentUser;
  fetchUsers: () => void;
  users: Author[];
}

export interface mapState {
  issues: Issue[];
  users: Author[];
}
