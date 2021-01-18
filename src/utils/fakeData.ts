import {Issue, Project, Author} from '../interfaces';
import { generateId } from './generateId';

export const issue : Issue = {
  issueId: 'qjwbjwqb',
  issueName: 'Bugs everywhere',
  author: 'mike@gmail.com',
  project: 'Portfolio',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  date: new Date(),
  active: false,
  priority: 'high'
}

export const author: Author = {
  userId: '122102i203u2109',
  userName: 'mike pence'
}

export const teamMembers:Author[] = new Array(5).fill(author)
export const issues: Issue[] = new Array(5).fill(issue);

const id = generateId()

export const project : Project = {
  teamMembers: teamMembers,
  issues: issues,
  projectId: id,
  projectName: 'portfolio for mike',
  text: 'portfolio for mike',
  key: Math.random() * 100,
  value: id
}


export const projects = new Array(5).fill(project)

// export const projects = new Array(5).fill(project);


