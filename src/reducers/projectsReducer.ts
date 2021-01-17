import {FETCH_PROJECTS} from '../actions/types';

export const projectsReducer = (state = [], action: any) => {
  switch(action.type){
    case FETCH_PROJECTS:
      return {...state,  ...action.payload};
    default:
      return state;
  }
}