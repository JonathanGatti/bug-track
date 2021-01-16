import {GET_ISSUES} from './types';
import {Issue} from '../interfaces';


export const fetchIssues = (issues: Issue[]) =>(
  {type: GET_ISSUES, payload: issues}
)