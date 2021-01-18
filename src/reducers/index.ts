import {combineReducers} from 'redux';
import {issuesReducer} from './issuesReducer';
import {projectsReducer} from './projectsReducer';
import {usersReducer} from './usersReducer';

export const reducers = combineReducers({
  issues: issuesReducer,
  projects: projectsReducer,
  users: usersReducer,
})