export interface Issue {
  issueId: string;
  author: string;
  project: string;
  description: string;
  date: Date;
  active: boolean;
  priority: string;
}

export interface Project {
  teamMembers: Author[];
  issues: Issue[];
  projectId: string | number;
  projectName: string;
}

export interface Author {
  userId: string;
  userName: string;
}

