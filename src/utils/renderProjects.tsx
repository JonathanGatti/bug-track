import { Project } from '../interfaces';
import { Table } from 'semantic-ui-react';

export const renderProjects = (_list: Project[]) => {
  return (
    <>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Project id</Table.HeaderCell>
          <Table.HeaderCell>Project Name</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {_list.map((obj: Project) => (
          <Table.Row>
            <Table.Cell>{obj.projectId}</Table.Cell>
            <Table.Cell>{obj.projectName}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </>
  );
};
