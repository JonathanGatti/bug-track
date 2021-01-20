import React, { useState, ChangeEvent, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { mapState } from './interfaces';
import { createIssue } from '../../actions/issuesActions';
import { fetchProjects, editProject } from '../../actions/projectsActions';
import { priorities } from '../../utils/priorities';
import { Form, Button, Dropdown, DropdownProps } from 'semantic-ui-react';
import { generateId } from '../../utils/generateId';
import styled from 'styled-components';
import LogInWarning from '../../common/logInWarning';

const Container = styled.div`
  max-width: 60vw;
  margin-right: auto;
  margin-left: auto;
`;

const CreateIssue = ({
  history,
  createIssue,
  fetchProjects,
  editProject,
  projects,
  _projectRef,
  onAddIssue,
  currentUser,
}: any) => {
  const [issueName, setIssueName] = useState('');
  const [projectRef, setProjectRef] = useState<any>('');
  const [currentProject, setCurrentProject] = useState<any>({});
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<any>('');
  console.log(_projectRef);
  useEffect(() => {
    fetchProjects();
  }, [projects.length]);

  const handleClick = async () => {
    const newIssue = {
      issueName: issueName,
      issueId: generateId(),
      author: currentUser.userName,
      project: projectRef,
      description: description,
      active: true,
      priority: priority,
    };
    const res = await createIssue(newIssue);
    if (!_.isEmpty(currentProject)) {
      setCurrentProject({
        ...currentProject,
        projectIssues: [...currentProject.projectIssues, res],
      });
    }
  };
  const handleSubmit = () => {
    if (!_.isEmpty(currentProject)) {
      editProject(currentProject._id, currentProject);
    }
    history.push('/');
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIssueName(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleProjectRefChange = (
    e: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    setProjectRef(data.value);
    if (!data.options) return null;
    if (data.options) {
      const projects = data.options;
      const selectedProject = projects?.filter((project: any) => {
        return project.value === data.value;
      });
      setCurrentProject(selectedProject![0]);
    }
  };

  const handlePriorityChange = (
    e: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    setPriority(data.value);
  };

  const render = () => {
    if (!currentUser) return null;
    if (!currentUser.isSignedIn) return <LogInWarning />;
    else {
      return (
        <Container>
          <h4>Add a new Issue</h4>
          <Form>
            <Form.Field>
              <label>Name</label>
              <Form.Input
                onChange={handleNameChange}
                placeholder="Issue Name"
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <Form.Input
                onChange={handleDescriptionChange}
                placeholder="Description"
              />
            </Form.Field>
            {!_projectRef && (
              <Form.Field>
                <label>Select a project reference</label>
                <Dropdown
                  placeholder="Select A project Reference"
                  fluid
                  selection
                  options={projects}
                  onChange={handleProjectRefChange}
                />
              </Form.Field>
            )}
            <Form.Field>
              <label>Select the priority</label>
              <Dropdown
                placeholder="Select The Priority"
                fluid
                selection
                options={priorities}
                onChange={handlePriorityChange}
              />
            </Form.Field>
          </Form>
          {!_projectRef ? (
            <>
              <Button type="submit" inverted color="blue" onClick={handleClick}>
                Create Issue
              </Button>
              <Button type="submit" color="blue" onClick={handleSubmit}>
                Submit
              </Button>
            </>
          ) : (
            <Button
              onClick={() => onAddIssue(issueName, description, priority)}
              inverted
              color="blue"
            >
              Add Issue
            </Button>
          )}
        </Container>
      );
    }
  };
  return <div>{render()}</div>;
};

const mapStateToProps = (state: mapState) => {
  return {
    projects: Object.values(state.projects),
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, {
  createIssue,
  fetchProjects,
  editProject,
})(CreateIssue);
