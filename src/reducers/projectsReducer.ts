import {GET_PROJECTS} from '../actions/types';
import {projects} from '../utils/fakeData';

export const projectsReducer = (state = projects, action: any) => {
  switch(action.type){
    case GET_PROJECTS:
      return {...state, projects: action.payload};
    default:
      return state;
  }
}