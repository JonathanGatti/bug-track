import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Author } from '../../interfaces';
import { editUser } from '../../actions/usersActions';
import { connect } from 'react-redux';

const Container = styled.div`
  max-width: 40vw;
  max-height: 23vh;
  overflow: scroll;
`;

interface UsersListProps {
  users: Author[];
  addUser: boolean;
  projectRef: string;
  editUser: (id: string, data: any) => void;
  onToggleIsListShowing?: () => void;
}
const UsersList = ({
  users,
  addUser,
  projectRef,
  editUser,
  onToggleIsListShowing,
}: UsersListProps) => {
  const handleAddUser = (user: any) => {
    const includes = user.userProjects.includes(projectRef);
    if (includes && onToggleIsListShowing) onToggleIsListShowing();
    else {
      const editedUser = {
        userProjects: [...user.userProjects, projectRef],
      };
      editUser(user._id, editedUser);
    }
    if (onToggleIsListShowing) onToggleIsListShowing();
  };

  const renderList = (user: Author) => {
    if (!user.userProjects) return null;
    else {
      return (
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
      );
    }
  };
  return (
    <Container>
      <Table>
        <Table.Body>{users.map((user: Author) => renderList(user))}</Table.Body>
      </Table>
    </Container>
  );
};

export default connect(null, { editUser })(UsersList);
