import { Table } from 'semantic-ui-react';
import { Issue } from '../../interfaces';
import { PrimaryButton } from '../../common/buttons';

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
            <Table.Cell>{obj.issueId}</Table.Cell>
            <Table.Cell>{obj.author}</Table.Cell>
            <Table.Cell>{obj.description}</Table.Cell>
            <Table.Cell>
              <PrimaryButton />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </>
  );
};

export default RenderIssues;
