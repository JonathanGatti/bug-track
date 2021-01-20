import {getIssues, deleteIssueById} from '../api/issues/issuesRoutes';
import {getProjects, deleteProjectById} from '../api/projects/projectsRoutes';
import { deleteUserById, getUsers } from '../api/users/usersRoutes';

export const deleteAllIssues = async () => {
  const res = await getIssues();
  res.map((issue: any) => {
    deleteIssueById(issue._id)
  })
}

export const deleteAllProjects = async () => {
  const res = await getProjects();
  res.map((project: any) => {
    deleteProjectById(project._id)
  })
}

export const deleteAllUsers = async () => {
  const res = await getUsers();
  res.map((user: any) => {
    deleteUserById(user._id)
  })
}
