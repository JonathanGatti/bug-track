import {FETCH_COMMENTS, FETCH_COMMENT, CREATE_COMMENT, DELETE_COMMENT, EDIT_COMMENT} from './types';
import {getComments, getComment, postComment, patchComment, deleteCommentById} from '../api/comments/commentsRoutes';
import { CommentInterface } from '../interfaces';
import {Dispatch} from 'redux';

export const fetchComments = () => async (dispatch: Dispatch)  => {
  const res = await getComments();
  dispatch({type: FETCH_COMMENTS, payload: res})
  return res;
  }

export const fetchComment = (id: string) => async (dispatch: Dispatch) => {
  const res = await getComment(id);
  dispatch({type: FETCH_COMMENT, payload: res})
  }

export const createComment = (data: CommentInterface) => async (dispatch: Dispatch) => {
    const res = await postComment(data);
    dispatch({type: CREATE_COMMENT, payload: res})
    return res;
  }

export const editComment = (id: any, data: any) => async (dispatch: Dispatch) => {
    const res = await patchComment(id, data);
    
    dispatch({type: EDIT_COMMENT, payload: res})
  }

export const deleteComment = (id: string) => async (dispatch: Dispatch) => {
  await deleteCommentById(id);
  dispatch({type: DELETE_COMMENT, payload: id})
}