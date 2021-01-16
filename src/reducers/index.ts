import {combineReducers} from 'redux';
import {issuesReducer} from './issuesReducer';
import {projectsReducer} from './projectsReducer';

export const reducers = combineReducers({
  issues: issuesReducer,
  projects: projectsReducer
})