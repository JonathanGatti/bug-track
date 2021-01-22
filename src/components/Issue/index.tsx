import React, { useState, ChangeEvent } from 'react';
import { Issue } from '../../interfaces';
import {
  Table,
  Icon,
  Button,
  Form,
  Dropdown,
  DropdownProps,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteIssue, editIssue } from '../../actions/issuesActions';
import { History, LocationState } from 'history';
import { priorities } from '../../utils/priorities';
import CreateComment from '../CreateComment';
import CommentsList from '../CommentsList';

interface IssueDetailProps {
  history: History<LocationState>;
  issue: Issue;
  editIssue: any;
  deleteIssue: (id: string) => void;
}

const IssueDetail = ({
  history,
  issue,
  deleteIssue,
  editIssue,
}: IssueDetailProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState<boolean>(issue.active);
  const [priority, setPriority] = useState<any>(issue.priority);
  const [description, setDescription] = useState(issue.description);
  const [isCommenting, setIsCommenting] = useState(false);

  const handleClick = async (id: any) => {
    deleteIssue(id);
    history.push('/');
  };
  const handlePriorityChange = (
    e: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    setPriority(data.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSaveChanges = (id: any) => {
    setIsEditing(false);
    const editedIssue = {
      description: description,
      active: isActive,
      priority: priority,
    };
    editIssue(issue._id, editedIssue);
  };

  const toggleIsActive = () => setIsActive(!isActive);

  const handleEditButton = () => setIsEditing(true);

  const renderButtons = (issue: Issue) => {
    if (!issue._id) {
      return null;
    } else {
      return (
        <>
          {!isEditing ? (
            <Button onClick={handleEditButton} inverted color="green">
              Edit
            </Button>
          ) : (
            <Button
              onClick={() => handleSaveChanges(issue._id)}
              inverted
              color="blue"
            >
              Save Changes
            </Button>
          )}
          <Button onClick={() => handleClick(issue._id)} inverted color="red">
            Delete
          </Button>
        </>
      );
    }
  };

  const renderActiveButtons = () => {
    if (isEditing) {
      return (
        <>
          {isActive ? (
            <Button onClick={toggleIsActive} inverted color="red">
              Set Inactive
            </Button>
          ) : (
            <Button onClick={toggleIsActive} inverted color="green">
              Set Active
            </Button>
          )}
        </>
      );
    } else return null;
  };

  const renderPrioritiesOptions = () => {
    if (isEditing) {
      return (
        <Form.Field>
          <label>Select the priority</label>
          <Dropdown
            placeholder="Select The Priority"
            fluid
            selection
            options={priorities}
            value={priority}
            onChange={handlePriorityChange}
          />
        </Form.Field>
      );
    } else return priority;
  };

  const renderDescriptionForm = () => {
    if (isEditing) {
      return (
        <Form.Field>
          <label>Description</label>
          <Form.Input
            onChange={handleDescriptionChange}
            placeholder="Description"
            value={description}
          />
        </Form.Field>
      );
    } else {
      return description;
    }
  };
  return (
    <>
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan="2">Id</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Project Ref</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Author</Table.HeaderCell>
            <Table.HeaderCell colSpan="3">Status</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Active</Table.HeaderCell>
            <Table.HeaderCell>Priority</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{issue.issueId}</Table.Cell>
            <Table.Cell>{issue.project}</Table.Cell>
            <Table.Cell>{issue.author}</Table.Cell>
            <Table.Cell textAlign="center">
              {isActive ? (
                <Icon color="green" name="checkmark" size="large" />
              ) : (
                <Icon color="red" name="close" size="large" />
              )}
              {renderActiveButtons()}
            </Table.Cell>
            <Table.Cell>{renderPrioritiesOptions()}</Table.Cell>
            <Table.Cell>{issue.date}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table celled structured>
        <Table.Header>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Header>
        <Table.Row>
          <Table.Cell>{renderDescriptionForm()}</Table.Cell>
        </Table.Row>
      </Table>
      {renderButtons(issue)}
      <Button inverted color="blue" onClick={() => setIsCommenting(true)}>
        Add a comment
      </Button>
      {isCommenting && (
        <CreateComment
          issueRef={issue.issueId}
          setOnCommenting={setIsCommenting}
        />
      )}
      <CommentsList issueRef={issue.issueId} />
    </>
  );
};

export default connect(null, { deleteIssue, editIssue })(IssueDetail);
