import React, { useState, useEffect, ChangeEvent } from 'react';
import { Form, Button, InputOnChangeData, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/usersActions';
import { createProject } from '../../actions/projectsActions';
import {
  createIssue,
  fetchIssue,
  fetchIssues,
} from '../../actions/issuesActions';
import { Author, Issue, Project } from '../../interfaces';
import { generateId } from '../../utils/generateId';
import UsersList from '../../components/UsersList';
import CreateIssue from '../CreateIssue';
import { postIssue } from '../../api/issues/issuesRoutes';

const CreateProject = ({
  history,
  fetchUsers,
  fetchIssues,
  issues,
  users,
  createProject,
  createIssue,
}: any) => {
  const [team, setTeam] = useState<Author[]>([]);
  const [_issues, setIssues] = useState<Issue[]>([]);
  const [name, setName] = useState('');
  const projectId = generateId();

  useEffect(() => {
    fetchUsers();
    fetchIssues();
  }, [issues.length, users.length]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    setName(data.value);
  };

  const handleClick = () => {
    const newProject: Project = {
      teamMembers: team,
      projectIssues: issues,
      projectId: projectId,
      projectName: name,
      text: name,
      value: projectId,
    };
    createProject(newProject);
    history.push('/');
  };
  const handleAddUser = (user: Author) => {
    setTeam([...team, user]);
    console.log(team);
  };
  const handleAddIssue = (name: string, desc: string, priority: string) => {
    const newIssue = {
      issueName: name,
      issueId: projectId,
      author: 'franco@gmail.com',
      project: projectId,
      description: desc,
      active: true,
      priority: priority,
    };
    const printCreateIssue = async () => {
      await createIssue(newIssue);
      const res = await fetchIssues();
      console.log(res);
      const newIssues = res.filter(
        (issue: Issue) => issue.project === newIssue.project
      );
      setIssues([_issues, ...newIssues]);
    };
    printCreateIssue();
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Project Name</label>
          <Form.Input onChange={handleChange} placeholder="First Name" />
        </Form.Field>
        <Button color="blue" onClick={handleClick} type="submit">
          Submit
        </Button>
      </Form>
      <UsersList users={users} addUser={true} onClick={handleAddUser} />
      <CreateIssue _projectRef={projectId} onAddIssue={handleAddIssue} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    issues: Object.values(state.issues),
    users: Object.values(state.users),
  };
};
export default connect(mapStateToProps, {
  createProject,
  createIssue,
  fetchUsers,
  fetchIssues,
})(CreateProject);
