import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { Author } from '../../interfaces';
import { editUser } from '../../actions/usersActions';
import { connect } from 'react-redux';

const Container = styled.div`
  max-width: 40vw;
  max-height: 40vh;
  overflow: scroll;
`;

interface UsersListProps {
  users: Author[];
  addUser: boolean;
  onClick?: (user: Author) => void;
  projectRef: string;
  editUser: (id: string, data: any) => void;
}
const UsersList = ({
  users,
  addUser,
  onClick,
  projectRef,
  editUser,
}: UsersListProps) => {
  const handleAddUser = (user: any) => {
    const editedUser = {
      userProjects: [...user.userProjects, projectRef],
    };
    editUser(user._id, editedUser);
  };

  return (
    <Container>
      <Table>
        <Table.Body>
          {users.map((user: Author) => (
            <Table.Row>
              <Table.Cell>{user.userName}</Table.Cell>
              <Table.Cell>
                {addUser ? (
                  <Button
                    inverted
                    color="green"
                    onClick={() => handleAddUser(user)}
                  >
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

export default connect(null, { editUser })(UsersList);
