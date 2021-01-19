import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { Author } from '../../interfaces';

const Container = styled.div`
  max-width: 40vw;
`;

interface UsersListProps {
  users: Author[];
  addUser: boolean;
  onClick: (user: Author) => void;
}
const UsersList = ({ users, addUser, onClick }: UsersListProps) => {
  return (
    <Container>
      <Table>
        <Table.Body>
          {users.map((user: Author) => (
            <Table.Row>
              <Table.Cell>{user.userName}</Table.Cell>
              <Table.Cell>
                {addUser ? (
                  <Button inverted color="green" onClick={() => onClick(user)}>
                    Add User
                  </Button>
                ) : (
                  <Link to={`/user/${user.userId}`}>
                    <Button inverted color="green">
                      View User
                    </Button>
                  </Link>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default UsersList;
