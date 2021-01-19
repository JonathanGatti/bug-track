import {getIssues, deleteIssueById} from '../api/issues/issuesRoutes';
import {getProjects, deleteProjectById} from '../api/projects/projectsRoutes';

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
