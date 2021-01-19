import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { UserButton } from '../../common/buttons';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 40vw;
`;
const UsersList = ({ users, addUser, onClick }: any) => {
  return (
    <Container>
      <Table>
        <Table.Body>
          {users.map((user: any) => (
            <Table.Row>
              <Table.Cell>{user.userName}</Table.Cell>
              <Table.Cell>
                {addUser ? (
                  <Button inverted color="green" onClick={() => onClick(user)}>
                    Add User
                  </Button>
                ) : (
                  <Link to={`/user/${user.userId}`}>
                    <UserButton />
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
