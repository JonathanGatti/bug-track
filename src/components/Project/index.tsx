import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../interfaces';
import { Table } from 'semantic-ui-react';
import styled from 'styled-components';
import { UserButton } from '../../common/buttons';
import List from '../List';

const Container = styled.div`
  display: flex;
  width: 85vw;
  padding-left: 0;
`;

const TableContainer = styled.div``;

const ProjectDetail = (project: Project) => {
  return (
    <>
      <h2>{project.projectName}</h2>
      <Container>
        <List items={project.issues} />
        <TableContainer>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Team</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {project.teamMembers.map((member) => (
                <Table.Row>
                  <Table.Cell>{member.userName}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/user/${member.userId}`}>
                      <UserButton />
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default ProjectDetail;
