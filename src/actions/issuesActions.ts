import {GET_ISSUES, GET_ISSUE} from './types';
import {issues} from '../utils/fakeData';
import { Issue } from '../interfaces';

export const fetchIssues = () =>(
  {type: GET_ISSUES, payload: issues}
)

export const fetchIssue = (id: string ) => (
  {type: GET_ISSUE }
)