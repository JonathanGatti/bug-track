import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TableRender = (props: any) => {
  const { list, name, author, reference, url } = props;
  return (
    <>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>title</Table.HeaderCell>
          <Table.HeaderCell>author</Table.HeaderCell>
          <Table.HeaderCell>reference</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {list.map((obj: any) => (
          <Table.Row active={obj.active} key={obj._id}>
            <Table.Cell>name</Table.Cell>
            <Table.Cell>author</Table.Cell>
            <Table.Cell>project reference</Table.Cell>
            <Table.Cell>
              <Link to={`/${url}/${obj._id}`}>
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

export default TableRender;

{
  /* <Table.Header>
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
                  View More
                </Button>
              </Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body> */
}
