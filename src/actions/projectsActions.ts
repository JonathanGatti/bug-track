import {FETCH_PROJECTS, FETCH_PROJECT, EDIT_PROJECT,DELETE_PROJECT, CREATE_PROJECT} from './types';
import {getProject, getProjects, postProject, patchProject, deleteProjectById} from '../api/projects/projectsRoutes';
import {Dispatch} from 'redux';
import {Project} from '../interfaces';

export const fetchProjects = () => async (dispatch: Dispatch) => {
  const res = await getProjects();
  dispatch({type: FETCH_PROJECTS, payload: res});
  return res;
}

export const fetchProject = (id: string) => async (dispatch: Dispatch) => {
  const res = await getProject(id);
  dispatch({type: FETCH_PROJECT, payload: res})
}

export const createProject = (data: Project) => async (dispatch: Dispatch) => {
  const res = await postProject(data);
  dispatch({type: CREATE_PROJECT, payload: res})
}

export const editProject = (id: string, data: any) => async (dispatch: Dispatch) => {
  const res = await patchProject(id, data)
  dispatch({type: EDIT_PROJECT, payload: res})
}

export const deleteProject = (id: string) => async (dispatch:Dispatch) => {
  await deleteProjectById(id);
  dispatch({type: DELETE_PROJECT, payload: id})
}