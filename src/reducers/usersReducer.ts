import {FETCH_USER,FETCH_USERS, CREATE_USER, DELETE_USER } from '../actions/types';
import { Author } from '../interfaces';

interface Action {
  type: string,
  payload: Author | any
}

export const usersReducer = (state=[], action: any) => {
  switch(action.type){
    case FETCH_USERS:
      return {...state, users: action.payload}
    case FETCH_USER:
      return {...state, [action.payload._id]: action.payload}
    case CREATE_USER:
      return {...state, [action.payload._id]: action.payload}
    case DELETE_USER:
      return state.filter(user => (
        user !== action.payload
      ))
    default:
      return state;
  }
}
