import React, { useState, useEffect, ChangeEvent } from 'react';
import { Form, Button, InputOnChangeData } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/usersActions';
import { createProject } from '../../actions/projectsActions';
import { createIssue, fetchIssues } from '../../actions/issuesActions';
import { Project } from '../../interfaces';
import { generateId } from '../../utils/generateId';
import styled from 'styled-components';
import LogInWarning from '../../common/logInWarning';
import { CreateProjectProps, mapState } from './interfaces';
import { mediaQueries } from '../../styles/mediaQueries';

const Container = styled.div`
  max-width: 40vw;
  margin-left: auto;
  margin-right: auto;
  @media ${mediaQueries.laptop} {
    max-width: 50vw;
  }
`;

const CreateProject = ({
  history,
  fetchUsers,
  fetchIssues,
  issues,
  createProject,
  currentUser,
}: CreateProjectProps) => {
  const [projectName, setProjectName] = useState('');
  const [isError, setIsError] = useState(false);
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
    if (projectName === '') {
      setIsError(true);
    } else {
      const newProject: Project = {
        projectId: projectId,
        projectName: projectName,
        text: projectName,
        value: projectName,
      };
      createProject(newProject);
      history.push('/');
    }
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
                <Form.Input
                  onChange={handleChange}
                  placeholder="Project Name"
                  error={isError ? { content: 'This field is Required' } : null}
                />
              </Form.Field>
              <Button color="blue" onClick={handleClick} type="submit">
                Create Project
              </Button>
            </Form>
          </Container>
        </>
      );
    }
  };
  return <div>{render()}</div>;
};

const mapStateToProps = (state: mapState) => {
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
