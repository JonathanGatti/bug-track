import {GET_PROJECTS} from './types';
import {projects} from '../utils/fakeData';


export const fetchProjects = () =>(
  {type: GET_PROJECTS, payload: projects}
)