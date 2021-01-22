import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import List from '../List';
import UsersList from '../UsersList';
import { deleteProject } from '../../actions/projectsActions';
import { fetchIssues } from '../../actions/issuesActions';
import { connect } from 'react-redux';

const Container = styled.div`
  display: flex;
  width: 85vw;
  padding-left: 0;
`;

const TableContainer = styled.div``;

const ProjectDetail = ({
  history,
  project,
  deleteProject,
  fetchIssues,
  issues,
}: any) => {
  const [projectIssues, setProjectIssues] = useState<any>([]);

  useEffect(() => {
    fetchIssues();
    const _projectIssues = issues.filter((issues: any) => {
      return issues.project === project.projectName;
    });
    setProjectIssues([..._projectIssues]);
  }, [issues.length]);
  const handleClick = (id: string) => {
    deleteProject(id);
    history.push('/');
  };
  return (
    <>
      <h2>{project.projectName}</h2>
      <Container>
        <List items={projectIssues} />
        <TableContainer>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Team</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <UsersList users={project.teamMembers} addUser={false} />
          </Table>
        </TableContainer>
      </Container>
      <Link to="/create/issue">
        <Button inverted color="blue">
          Add an Issue
        </Button>
      </Link>
      <Button inverted color="green">
        Edit Project
      </Button>
      <Button onClick={() => handleClick(project._id)} inverted color="red">
        Delete
      </Button>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { issues: Object.values(state.issues) };
};
export default connect(mapStateToProps, { deleteProject, fetchIssues })(
  ProjectDetail
);
