import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { UserButton } from '../../common/buttons';
import { Button } from 'semantic-ui-react';

const UsersList = ({ users, addUser, onClick }: any) => {
  return (
    <Table.Body>
      {users.map((user: any) => (
        <Table.Row>
          <Table.Cell>{user.userName}</Table.Cell>
          <Table.Cell>
            {addUser ? (
              <Button onClick={() => onClick(user)}>Add User</Button>
            ) : (
              <Link to={`/user/${user.userId}`}>
                <UserButton />
              </Link>
            )}
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};

export default UsersList;
