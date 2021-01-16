import {GET_PROJECTS} from '../actions/types';

export const projectsReducer = (state = [], action: any) => {
  switch(action.type){
    case GET_PROJECTS:
      return {...state,  ...action.payload};
    default:
      return state;
  }
}