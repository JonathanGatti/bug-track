import { ReactText } from "react";

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
  _id?: string | undefined;
  projectId: string | number;
  projectName: string;
  text: string;
  key?: number;
  value: number | string;
}

export interface Author {
  _id?:  ReactText | any;
  userId: string;
  userName: string;
  userProjects: string[];
  userPassword: string;
}

export interface CommentInterface {
  _id?: string; 
  author: string,
  date?: Date,
  content: string,
  issueReference: string;
}

export interface CurrentUser {
  isSignedIn?: boolean | null, 
  userName: string, 
  userId: string
}