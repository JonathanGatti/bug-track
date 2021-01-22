import React, { useState, useEffect, ChangeEvent } from 'react';
import { Form, Button, InputOnChangeData } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/usersActions';
import { createProject } from '../../actions/projectsActions';
import { createIssue, fetchIssues } from '../../actions/issuesActions';
import { Author, Issue, Project } from '../../interfaces';
import { generateId } from '../../utils/generateId';
import UsersList from '../../components/UsersList';
import styled from 'styled-components';
import LogInWarning from '../../common/logInWarning';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 60vw;
  margin-left: auto;
  margin-right: auto;
`;

const CreateProject = ({
  history,
  fetchUsers,
  fetchIssues,
  issues,
  users,
  createProject,
  createIssue,
  currentUser,
}: any) => {
  const [team, setTeam] = useState<Author[]>([]);
  const [projectName, setProjectName] = useState('');
  const projectId = generateId();

  useEffect(() => {
    fetchUsers();
    fetchIssues();
  }, [issues.length]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    setProjectName(data.value);
  };

  const handleClick = () => {
    const newProject: Project = {
      teamMembers: team,
      projectIssues: [],
      projectId: projectId,
      projectName: projectName,
      text: projectName,
      value: projectName,
    };
    createProject(newProject);
    history.push('/');
  };
  const handleAddUser = (user: Author) => {
    setTeam([...team, user]);
  };

  const render = () => {
    if (!currentUser) return null;
    if (!currentUser.isSignedIn) return <LogInWarning />;
    else {
      return (
        <>
          <Container>
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
          </Container>
        </>
      );
    }
  };
  return <div>{render()}</div>;
};

const mapStateToProps = (state: any) => {
  return {
    issues: Object.values(state.issues),
    users: Object.values(state.users),
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, {
  createProject,
  createIssue,
  fetchUsers,
  fetchIssues,
})(CreateProject);
