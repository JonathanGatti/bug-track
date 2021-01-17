import {FETCH_ISSUES, FETCH_ISSUE, CREATE_ISSUE, EDIT_ISSUE, DELETE_ISSUE} from './types';
import {getIssues, getIssue, postIssue, pacthIssue} from '../api/issuesRoutes';
import { Issue } from '../interfaces';
import {Dispatch} from 'redux';

interface DispatchGen {
  type: string;
}

export const fetchIssues = () => async (dispatch: Dispatch<DispatchGen>) => {
  const res = await getIssues();
  dispatch({type: FETCH_ISSUES, payload: res})
  }

export const fetchIssue = (id: string) => async (dispatch: any) => {
  const res = await getIssue(id);
  dispatch({type: FETCH_ISSUE, payload: res})
  }

export const createIssue = (data: Issue) => async (dispatch: any) => {
    const res = await postIssue(data);
    dispatch({type: CREATE_ISSUE, payload: res})
  }

export const editIssue = (data: Issue) => async (dispatch:any) => {
    const res = await pacthIssue(data);

    dispatch({type: EDIT_ISSUE, payload: res})
  }

export const deleteIssue = (id: string) => (dispatch: any) => {
  deleteIssue(id);
  dispatch({type: DELETE_ISSUE, payload: id})
}