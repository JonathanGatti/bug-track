import {FETCH_USER,FETCH_USERS, CREATE_USER, DELETE_USER } from './types';
import {getUsers, getUserById, postUser,deleteUserById} from '../api/users/usersRoutes';
import {Dispatch} from 'redux';
import {Author} from '../interfaces';

export const fetchUsers = () => async (dispatch: Dispatch) => {
  const res = await getUsers();
  dispatch({type: FETCH_USERS, payload: res});
}

export const fetchUser = (id: string) => async (dispatch: Dispatch) => {
  const res = await getUserById(id);
  dispatch({type: FETCH_USER, payload: res});
}

export const createUser = (data: Author) => async (dispatch: Dispatch) => {
   const res = await postUser(data);
   dispatch({type: CREATE_USER, payload: res});
}

export const deleteUser = (id: string) => async (dispatch: Dispatch) => {
  await deleteUserById(id)
  dispatch({type: DELETE_USER, payload: id})
}
