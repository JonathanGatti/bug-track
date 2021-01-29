import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UsersList from '../UsersList';
import { deleteProject } from '../../actions/projectsActions';
import { fetchIssues } from '../../actions/issuesActions';
import { fetchUsers } from '../../actions/usersActions';
import { connect } from 'react-redux';
import { Author, Issue } from '../../interfaces';
import { ProjectDetailProps } from './interfaces';
import RenderIssues from '../RenderIssues';
import { mediaQueries } from '../../styles/mediaQueries';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-left: 0;
  @media ${mediaQueries.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const TableContainer = styled.div`
  width: 25vw;
  @media ${mediaQueries.tablet} {
    width: 100%;
  }
`;

const ProjectDetail = ({
  history,
  project,
  deleteProject,
  issues,
  currentUser,
  users,
}: ProjectDetailProps) => {
  const [projectIssues, setProjectIssues] = useState<any>([]);
  const [isListShowig, setIsListShowing] = useState(false);
  const [projectUsers, setProjectUsers] = useState<any>([]);
  useEffect(() => {
    let newUsers: Author[] = [];

    users.forEach((user: Author) => {
      if (user.userProjects) {
        user.userProjects.forEach((_project: string) => {
          if (_project === project.projectName) {
            newUsers.push(user);
          }
        });
      }
    });
    setProjectUsers([...newUsers]);
  }, [projectUsers]);

  useEffect(() => {
    const _projectIssues = issues.filter((issues: Issue) => {
      return issues.project === project.projectName;
    });
    setProjectIssues([..._projectIssues]);
  }, [projectIssues.length]);

  const handleClick = (id: string | undefined) => {
    if (!id) return null;
    deleteProject(id);
    history.push('/');
  };

  const toggleIsListShowing = () => {
    setIsListShowing(!isListShowig);
  };
  return (
    <>
      <h2>{project.projectName}</h2>
      <Container>
        <RenderIssues list={projectIssues} />
        <TableContainer>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Team</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <UsersList
              users={projectUsers}
              addUser={false}
              projectRef={project.projectName}
            />
          </Table>
        </TableContainer>
      </Container>

      {currentUser.isSignedIn && (
        <>
          <Link to="/create/issue">
            <Button inverted color="blue">
              Add an Issue
            </Button>
          </Link>
          <Button onClick={toggleIsListShowing} inverted color="green">
            Add A Member
          </Button>
          <Button onClick={() => handleClick(project._id)} inverted color="red">
            Delete
          </Button>
        </>
      )}
      {isListShowig && (
        <UsersList
          users={users}
          addUser={true}
          projectRef={project.projectName}
          onToggleIsListShowing={toggleIsListShowing}
        />
      )}
    </>
  );
};

export default connect(null, {
  deleteProject,
  fetchIssues,
  fetchUsers,
})(ProjectDetail);
