import {FETCH_ISSUE, FETCH_ISSUES, CREATE_ISSUE, DELETE_ISSUE, EDIT_ISSUE}from '../actions/types';
import _ from 'lodash';
import {Issue} from '../interfaces';

interface Action {
  type: string,
  payload: any
}

export const issuesReducer = (state = {}, action: Action) => {
  switch(action.type){
    case FETCH_ISSUES:
      return {...state, ..._.mapKeys(action.payload, '_id')}
    case FETCH_ISSUE:
      return {...state, [action.payload._id]: action.payload}
    case CREATE_ISSUE:
      return {...state, [action.payload._id]: action.payload}
    case EDIT_ISSUE:
      return {...state, [action.payload._id]: action.payload}
    case DELETE_ISSUE:
      return _.omit(state, action.payload)
    default:
      return state;
  }
}