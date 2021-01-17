import {FETCH_ISSUE, FETCH_ISSUES, CREATE_ISSUE, DELETE_ISSUE}from '../actions/types';
import {Issue} from '../interfaces';

interface Action {
  type: string,
  payload: Issue[]
}

export const issuesReducer = (state = [], action: any) => {
  switch(action.type){
    case FETCH_ISSUES:
      return {...state, ...action.payload}
    case FETCH_ISSUE:
      return {...state, [action.payload._id]: action.payload}
    default:
      return state;
  }
}