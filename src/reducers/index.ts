import {combineReducers} from 'redux';
import { currentUserReducer } from './currentUserReducer';
import {issuesReducer} from './issuesReducer';
import {projectsReducer} from './projectsReducer';
import {usersReducer} from './usersReducer';
import {commentsReducer} from './commentsReducer';

export const reducers = combineReducers({
  issues: issuesReducer,
  projects: projectsReducer,
  users: usersReducer,
  currentUser: currentUserReducer,
  comments: commentsReducer
})