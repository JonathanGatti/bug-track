import {generateId} from './generateId';
import {createIssue, fetchIssues} from '../actions/issuesActions';
import {Issue} from '../interfaces';

let currentUser = {userName: ''}
let projectName = '';

export const handleAddIssue = (name: string, desc: string, priority: string) => {
  const setIssues = (issues: any) => {
    const newIssues = [...issues]
  }
  const newIssue = {
    issueName: name,
    issueId: generateId(),
    author: currentUser.userName,
    project: projectName,
    description: desc,
    active: true,
    priority: priority,
  };
  const setNewIssue = async () => {
    await createIssue(newIssue);
    const res: any =  [] //  await fetchIssues();
    const newIssues = res.filter(
      (issue: Issue) => issue.project === newIssue.project
    );
    setIssues([...newIssues]);
  };
  setNewIssue();
};