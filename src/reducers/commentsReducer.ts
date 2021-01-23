import {FETCH_COMMENTS, FETCH_COMMENT, CREATE_COMMENT, DELETE_COMMENT, EDIT_COMMENT} from '../actions/types';
import _ from 'lodash';
import {CommentInterface} from '../interfaces';

interface Action {
  type: string,
  payload: any
}

export const commentsReducer = (state = {}, action: Action) => {
  switch(action.type){
    case FETCH_COMMENTS:
      return {...state, ..._.mapKeys(action.payload, '_id')}
    case FETCH_COMMENT:
      return {...state, [action.payload._id]: action.payload}
    case CREATE_COMMENT:
      return {...state, [action.payload._id]: action.payload}
    case EDIT_COMMENT:
      return {...state, [action.payload._id]: action.payload}
    case DELETE_COMMENT:
      return _.omit(state, action.payload)
    default:
      return state;
  }
}