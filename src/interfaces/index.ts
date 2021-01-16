export interface Issue {
  id: string;
  author: string;
  project: string;
  description: string;
  date: Date;
  priority: number;
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

