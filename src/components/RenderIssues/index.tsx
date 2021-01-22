import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';
import { Issue } from '../../interfaces';

const RenderIssues = ({ list }: any) => {
  const renderIssueList = (obj: Issue) => {
    if (!obj._id) {
      return null;
    } else {
      return (
        <Table.Row active={obj.active} key={obj._id}>
          <Table.Cell>{obj.issueName}</Table.Cell>
          <Table.Cell>{obj.author}</Table.Cell>
          <Table.Cell>{obj.project}</Table.Cell>
          <Table.Cell textAlign="center">
            {obj.active ? (
              <Icon color="green" name="checkmark" size="large" />
            ) : (
              <Icon color="red" name="close" size="large" />
            )}
          </Table.Cell>
          <Table.Cell>{obj.priority}</Table.Cell>
          <Table.Cell>
            <Link to={`/issue/${obj._id}`}>
              <Button inverted color="blue">
                View More
              </Button>
            </Link>
          </Table.Cell>
        </Table.Row>
      );
    }
  };
  return (
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Issue Name</Table.HeaderCell>
          <Table.HeaderCell>Author</Table.HeaderCell>
          <Table.HeaderCell>Project Reference</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Priority</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>{list.map((obj: Issue) => renderIssueList(obj))}</Table.Body>
    </Table>
  );
};

export default RenderIssues;
