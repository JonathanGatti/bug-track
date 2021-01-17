import {GET_ISSUE, GET_ISSUES} from '../actions/types';
import _ from 'lodash';
import {Issue} from '../interfaces';

interface Action {
  type: string,
  payload: Issue[]
}

export const issuesReducer = (state = [], action: Action) => {
  switch(action.type){
    case GET_ISSUES:
      return {...state, ...action.payload}
    case GET_ISSUE:
      return {...state, issue : action.payload}
    default:
      return state;
  }
}