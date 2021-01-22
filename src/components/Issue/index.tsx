import React from 'react';
import { Issue, Project } from '../../interfaces';
import { Table, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteIssue } from '../../actions/issuesActions';
import { fetchProjects, editProject } from '../../actions/projectsActions';
import { History, LocationState } from 'history';

interface IssueDetailProps {
  history: History<LocationState>;
  issue: Issue;
  deleteIssue: (id: string) => void;
  fetchProjects: () => any;
  editProject: (id: string, data: Project) => void;
}

const IssueDetail = ({
  history,
  issue,
  deleteIssue,
  editProject,
  fetchProjects,
}: IssueDetailProps) => {
  const handleClick = async (id: any) => {
    deleteIssue(id);
    const res = await fetchProjects();
    const currProject = res.filter((project: any) => {
      return issue.project === project.projectName;
    });
    const editedProject = currProject[0];
    const newProjectIssues = currProject[0].projectIssues.filter(
      (issues: any) => {
        return issue._id !== issues._id;
      }
    );
    editedProject.projectIssues = [...newProjectIssues];
    editProject(editedProject._id, editedProject);
    history.push('/');
  };

  const renderButtons = (issue: Issue) => {
    if (!issue._id) {
      return null;
    } else {
      return (
        <>
          <Button inverted color="green">
            Edit
          </Button>
          <Button onClick={() => handleClick(issue._id)} inverted color="red">
            Delete
          </Button>
        </>
      );
    }
  };
  return (
    <>
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan="2">Id</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Project Ref</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Author</Table.HeaderCell>
            <Table.HeaderCell colSpan="3">Status</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Active</Table.HeaderCell>
            <Table.HeaderCell>Priority</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{issue.issueId}</Table.Cell>
            <Table.Cell>{issue.project}</Table.Cell>
            <Table.Cell>{issue.author}</Table.Cell>
            <Table.Cell textAlign="center">
              {issue.active ? (
                <Icon color="green" name="checkmark" size="large" />
              ) : (
                <Icon color="red" name="close" size="large" />
              )}
            </Table.Cell>
            <Table.Cell>{issue.priority}</Table.Cell>
            <Table.Cell>{issue.date}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table celled structured>
        <Table.Header>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Header>
        <Table.Row>
          <Table.Cell>{issue.description}</Table.Cell>
        </Table.Row>
      </Table>
      {renderButtons(issue)}
    </>
  );
};

export default connect(null, { deleteIssue, fetchProjects, editProject })(
  IssueDetail
);
