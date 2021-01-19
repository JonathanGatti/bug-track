import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import List from '../List';
import UsersList from '../UsersList';

const Container = styled.div`
  display: flex;
  width: 85vw;
  padding-left: 0;
`;

const TableContainer = styled.div``;

const ProjectDetail = ({ project }: any) => {
  return (
    <>
      <h2>{project.projectName}</h2>
      <Container>
        <List items={project.projectIssues} />
        <Link to="/create/issue">
          <Button inverted color="blue">
            Add an Issue
          </Button>
        </Link>
        <TableContainer>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Team</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <UsersList users={project.teamMembers} addUser={false} />
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default ProjectDetail;
