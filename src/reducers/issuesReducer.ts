import {GET_ISSUES} from '../actions/types';

export const issuesReducer = (state = [], action: any) => {
  switch(action.type){
    case GET_ISSUES:
      return {...state, issues: [action.payload]}
    default:
      return state;
  }
}