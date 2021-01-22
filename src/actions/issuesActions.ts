import {FETCH_ISSUES, FETCH_ISSUE, CREATE_ISSUE, EDIT_ISSUE, DELETE_ISSUE} from './types';
import {getIssues, getIssue, postIssue, patchIssue, deleteIssueById} from '../api/issues/issuesRoutes';
import { Issue } from '../interfaces';
import {Dispatch} from 'redux';

export const fetchIssues = () => async (dispatch: Dispatch)  => {
  const res = await getIssues();
  dispatch({type: FETCH_ISSUES, payload: res})
  return res;
  }

export const fetchIssue = (id: string) => async (dispatch: Dispatch) => {
  const res = await getIssue(id);
  dispatch({type: FETCH_ISSUE, payload: res})
  }

export const createIssue = (data: Issue) => async (dispatch: Dispatch) => {
    const res = await postIssue(data);
    dispatch({type: CREATE_ISSUE, payload: res})
    return res;
  }

export const editIssue = (id: any, data: Issue) => async (dispatch: Dispatch) => {
    const res = await patchIssue(id, data);

    dispatch({type: EDIT_ISSUE, payload: res})
  }

export const deleteIssue = (id: string) => (dispatch: Dispatch) => {
  deleteIssueById(id);
  dispatch({type: DELETE_ISSUE, payload: id})
}