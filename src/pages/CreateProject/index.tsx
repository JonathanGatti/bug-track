import React, { useState, useEffect, ChangeEvent } from 'react';
import { Form, Button, InputOnChangeData, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchIssues } from '../../actions/issuesActions';
import { fetchUsers } from '../../actions/usersActions';
import { createProject } from '../../actions/projectsActions';
import { Author, Issue, Project } from '../../interfaces';
import { generateId } from '../../utils/generateId';
import UsersList from '../../components/UsersList';

const CreateProject = ({
  history,
  fetchIssues,
  fetchUsers,
  issues,
  users,
  createProject,
}: any) => {
  const [team, setTeam] = useState<Author[]>([]);
  const [name, setName] = useState('');
  const projectId = generateId();

  useEffect(() => {
    fetchIssues();
    fetchUsers();
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
  };
  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <Form.Input onChange={handleChange} placeholder="First Name" />
        </Form.Field>
        <Button color="blue" onClick={handleClick} type="submit">
          Submit
        </Button>
      </Form>
      <UsersList users={users} addUser={true} onClick={handleAddUser} />
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
  fetchIssues,
  fetchUsers,
})(CreateProject);
