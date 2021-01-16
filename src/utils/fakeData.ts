import {Issue, Project, Author} from '../interfaces';

export const issue : Issue = {
  issueId: 'qjwbjwqb',
  author: 'mike@gmail.com',
  project: 'Portfolio',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  date: new Date(),
  active: false,
  priority: 5 
}

export const author: Author = {
  userId: '122102i203u2109',
  userName: 'mike pence'
}

export const teamMembers:Author[] = new Array(5).fill(author)
export const issues: Issue[] = new Array(5).fill(issue);

export const project : Project = {
  teamMembers: teamMembers,
  issues: issues,
  projectId: 'aasb633gsy3',
  projectName: 'protfolio for mike',
}

export const projects = new Array(5).fill(project);


