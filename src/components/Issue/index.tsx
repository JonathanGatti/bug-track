import React from 'react';
import { Issue } from '../../interfaces';
import { Table, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteIssue } from '../../actions/issuesActions';

const IssueDetail = ({ issue, deleteIssue }: any) => {
  const handleClick = (id: any) => {
    deleteIssue(id);
  };
  return (
    <>
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan="2">Id</Table.HeaderCell>
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
            <Table.Cell>{issue.author}</Table.Cell>
            <Table.Cell textAlign="center">
              {issue.active ? (
                <Icon color="green" name="checkmark" size="large" />
              ) : (
                <Icon color="red" name="close" size="large" />
              )}
            </Table.Cell>
            <Table.Cell>{issue.priority}</Table.Cell>
            <Table.Cell>{issue.date}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table celled structured>
        <Table.Header>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Header>
        <Table.Row>
          <Table.Cell>{issue.description}</Table.Cell>
        </Table.Row>
        <Table.Cell>
          <Button onClick={() => handleClick(issue._id)} inverted color="red">
            Delete
          </Button>
        </Table.Cell>
      </Table>
    </>
  );
};

export default connect(null, { deleteIssue })(IssueDetail);
