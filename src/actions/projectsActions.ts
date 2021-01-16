import {GET_PROJECTS} from './types';
import {Project} from '../interfaces';


export const fetchProjects = (projects: Project[]) =>(
  {type: GET_PROJECTS, payload: projects}
)