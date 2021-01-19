import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../interfaces';
import { Table, Button } from 'semantic-ui-react';

const RenderProjects = ({ list }: any) => {
  return (
    <>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Project id</Table.HeaderCell>
          <Table.HeaderCell>Project Name</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {list.map((obj: Project) => (
          <Table.Row key={obj._id}>
            <Table.Cell>{obj.projectId}</Table.Cell>
            <Table.Cell>{obj.projectName}</Table.Cell>
            <Table.Cell>
              <Link to={`/project/${obj._id}`}>
                <Button inverted color="blue">
                  Log in
                </Button>
              </Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </>
  );
};

export default RenderProjects;
