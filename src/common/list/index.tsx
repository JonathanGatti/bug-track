import React from 'react';
import { Table } from 'semantic-ui-react';
import styled from 'styled-components';
import { Project, Issue } from '../../interfaces';

interface ListProps {
  issues: Issue[];
}

const ListContainer = styled.div`
  width: 70vw;
  margin-left: auto;
`;
const List = (items: any) => {
  console.log(items);
  return (
    <ListContainer>
      <Table definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>issue id</Table.HeaderCell>
            <Table.HeaderCell>Author</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row active>
            <Table.Cell>id: 9999</Table.Cell>
            <Table.Cell>mike@gmail.com</Table.Cell>
            <Table.Cell>sass not working</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>id: 9999</Table.Cell>
            <Table.Cell>mike@gmail.com</Table.Cell>
            <Table.Cell>sass not working</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </ListContainer>
  );
};

export default List;
