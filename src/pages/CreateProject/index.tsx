import React, { useState, useEffect, ChangeEvent } from 'react';
import { Form, Button, InputOnChangeData } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/usersActions';
import { createProject } from '../../actions/projectsActions';
import { createIssue, fetchIssues } from '../../actions/issuesActions';
import { Author, Issue, Project } from '../../interfaces';
import { generateId } from '../../utils/generateId';
import UsersList from '../../components/UsersList';
import CreateIssue from '../CreateIssue';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

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
      projectIssues: _issues,
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
    const setNewIssue = async () => {
      await createIssue(newIssue);
      const res = await fetchIssues();
      const newIssues = res.filter(
        (issue: Issue) => issue.project === newIssue.project
      );
      setIssues([...newIssues]);
    };
    setNewIssue();
  };

  return (
    <div>
      <Container>
        <Form>
          <Form.Field>
            <label>Project Name</label>
            <Form.Input onChange={handleChange} placeholder="First Name" />
          </Form.Field>
        </Form>
        <UsersList users={users} addUser={true} onClick={handleAddUser} />
      </Container>
      <CreateIssue _projectRef={projectId} onAddIssue={handleAddIssue} />
      <Button color="blue" onClick={handleClick} type="submit">
        Submit
      </Button>
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
