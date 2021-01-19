import { Project } from '../../interfaces';
import projects from '../baseUrl';

export const getProjects = async () => {
  try {
    const res = await projects.get('/projects');
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProject = async (id: string) => {
  try {
    const res = await projects.get(`projects/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const postProject = async (data: Project) => {
  try {
    projects.post('/projects', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const patchProject = async (data: Project) => {
  try {
    let res = await projects.patch(`/projects/${data._id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteProjectById = async (id: string) => {
  try {
    await projects.delete(`/projects/${id}`);
    return id;
  } catch (err) {
    console.log(err);
  }
};
