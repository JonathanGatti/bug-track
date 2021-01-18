import {FETCH_PROJECTS, FETCH_PROJECT, EDIT_PROJECT,DELETE_PROJECT} from '../actions/types';
import _ from 'lodash';

export const projectsReducer = (state = {}, action: any) => {
  switch(action.type){
    case FETCH_PROJECTS:
      return {...state,  ..._.mapKeys(action.payload, 'projectName')};
    case FETCH_PROJECT:
      return {...state, [action.payload._id]: action.payload}
    case EDIT_PROJECT:
      return {...state, [action.payload.projectName]: action.payload}
    case DELETE_PROJECT:
      return _.omit(state, action.payload)
    default:
      return state;
  }
}