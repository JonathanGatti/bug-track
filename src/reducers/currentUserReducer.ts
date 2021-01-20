import {LOG_IN, LOG_OUT} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  userName: null
}
export const currentUserReducer = (state = INITIAL_STATE, action: any ) => {
  switch(action.type){
    case LOG_IN:
      return {...state, isSignedIn: true, ...action.payload}
    case LOG_OUT:
      return {...state, isSignedIn: false, userId: null}
    default:
      return state;
  }
}

