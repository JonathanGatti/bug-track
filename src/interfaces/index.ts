export interface Issue {
  _id?: string | number ;
  issueName: string;
  issueId: string;
  author: string;
  project: string;
  description: string;
  date?: Date;
  active: boolean;
  priority: string;
}

export interface Project {
  _id?: string;
  teamMembers: Author[];
  projectId: string | number;
  projectName: string;
  text: string;
  key?: number;
  value: number | string;
}

export interface Author {
  _id?: string | number;
  userId: string;
  userName: string;
  userPassword: string;
}

export interface CurrentUser {
  isSignedIn?: boolean;
  userId: string;
  userName: string;
}

export interface Comment {
  _id?: string; 
  authorId: string,
  date?: Date,
  content: string,
  issueReference: string;
}