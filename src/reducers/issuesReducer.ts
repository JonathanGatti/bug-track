import {GET_ISSUES} from '../actions/types';
import {issues} from '../utils/fakeData';

export const issuesReducer = (state = issues, action: any) => {
  switch(action.type){
    case GET_ISSUES:
      return {...state, issues: action.payload}
    default:
      return state;
  }
}