import {GET_ISSUES} from './types';
import {issues} from '../utils/fakeData';

export const fetchIssues = () =>(
  {type: GET_ISSUES, payload: issues}
)