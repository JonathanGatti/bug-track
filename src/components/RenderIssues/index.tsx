import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';
import { Issue } from '../../interfaces';

const RenderIssues = ({ list }: any) => {
  return (
    <>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Issue Id</Table.HeaderCell>
          <Table.HeaderCell>Author</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {list.map((obj: Issue) => (
          <Table.Row active={obj.active}>
            <Table.Cell>{obj.issueName}</Table.Cell>
            <Table.Cell>{obj.author}</Table.Cell>
            <Table.Cell>{obj.description}</Table.Cell>
            <Table.Cell>
              <Link to={`/issue/${obj._id}`}>
                <Button inverted color="blue">
                  View More
                </Button>
              </Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </>
  );
};

export default RenderIssues;
