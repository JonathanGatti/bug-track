import {FETCH_USER,FETCH_USERS, CREATE_USER, DELETE_USER } from '../actions/types';
import { Author } from '../interfaces';
import _ from 'lodash';

interface Action {
  type: string,
  payload: Author | any
}

export const usersReducer = (state = {}, action: Action) => {
  switch(action.type){
    case FETCH_USERS:
      return {...state, ..._.mapKeys(action.payload, '_id')}
    case FETCH_USER:
      return {...state, [action.payload._id]: action.payload}
    case CREATE_USER:
      return {...state, [action.payload._id]: action.payload}
    case DELETE_USER:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
