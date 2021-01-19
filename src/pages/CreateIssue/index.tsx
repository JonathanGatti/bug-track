import React, { useState, ChangeEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import { createIssue } from '../../actions/issuesActions';
import { fetchProjects } from '../../actions/projectsActions';
import { Issue } from '../../interfaces';
import { priorities } from '../../utils/priorities';
import { Form, Button, Dropdown, DropdownProps } from 'semantic-ui-react';
import { generateId } from '../../utils/generateId';

interface CreateIssueProps {
  createIssue: (data: Issue) => void;
}

const CreateIssue = ({
  history,
  createIssue,
  fetchProjects,
  projects,
  _projectRef,
  onAddIssue,
}: any) => {
  const author = 'gino@hotmail.com';
  const [issueName, setIssueName] = useState('');
  const [projectRef, setProjectRef] = useState<any>('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<any>('');

  useEffect(() => {
    fetchProjects();
  }, [projects.length]);

  const handleClick = () => {
    const newIssue = {
      issueName: issueName,
      issueId: generateId(),
      author: author,
      project: projectRef,
      description: description,
      active: true,
      priority: priority,
    };
    createIssue(newIssue);
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
  };

  const handlePriorityChange = (
    e: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    setPriority(data.value);
  };
  return (
    <div>
      <h2>Create Issue</h2>
      <Form>
        <Form.Field>
          <label>Name</label>
          <Form.Input onChange={handleNameChange} placeholder="Issue Name" />
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
        {!_projectRef ? (
          <Button type="submit" color="blue" onClick={handleClick}>
            Submit
          </Button>
        ) : (
          <Button
            onClick={() => onAddIssue(issueName, description, priority)}
            inverted
            color="blue"
          >
            Add Issue
          </Button>
        )}
      </Form>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { projects: Object.values(state.projects) };
};
export default connect(mapStateToProps, { createIssue, fetchProjects })(
  CreateIssue
);
