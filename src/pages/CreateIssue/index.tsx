import React, { useState, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { createIssue } from '../../actions/issuesActions';
import { Issue } from '../../interfaces';
import { projects } from '../../utils/fakeData';
import { priorities } from '../../utils/priorities';
import { Form, Button, Dropdown, DropdownProps } from 'semantic-ui-react';
import { generateId } from '../../utils/generateId';

interface CreateIssueProps {
  createIssue: (data: Issue) => void;
}

const CreateIssue = ({ createIssue }: CreateIssueProps) => {
  const author = 'gino@hotmail.com';
  const [issueName, setIssueName] = useState('');
  const [projectRef, setProjectRef] = useState<any>('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<any>('');

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
          <label>Issue Description</label>
          <Form.Input
            onChange={handleDescriptionChange}
            placeholder="Description"
          />
        </Form.Field>
        <Form.Field>
          <Dropdown
            placeholder="Select A project Reference"
            fluid
            selection
            options={projects}
            onChange={handleProjectRefChange}
          />
        </Form.Field>
        <Form.Field>
          <Dropdown
            placeholder="Select The Priority"
            fluid
            selection
            options={priorities}
            onChange={handlePriorityChange}
          />
        </Form.Field>
        <Button type="submit" color="blue" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default connect(null, { createIssue })(CreateIssue);
