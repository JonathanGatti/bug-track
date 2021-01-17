import {FETCH_PROJECTS} from './types';
import {projects} from '../utils/fakeData';


export const fetchProjects = () =>(
  {type: FETCH_PROJECTS, payload: projects}
)