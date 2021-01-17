import React from 'react';
import { Issue } from '../../interfaces';
import { Table, Icon } from 'semantic-ui-react';

const IssueDetail = (issue: Issue) => {
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
            <Table.Cell>{issue.date.toLocaleDateString()}</Table.Cell>
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
      </Table>
    </>
  );
};

export default IssueDetail;
