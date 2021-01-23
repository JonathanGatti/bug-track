import React, { useEffect } from 'react';
import { HomeContainer } from './styles';
import { connect } from 'react-redux';
import VerticalHeader from '../../components/VerticalHeader';
import { fetchIssues } from '../../actions/issuesActions';
import { Issue } from '../../interfaces';
import { fetchUsers } from '../../actions/usersActions';
import RenderIssues from '../../components/RenderIssues';

interface HomePageProps {
  fetchIssues: () => void;
  issues: Issue[];
  fetchUsers: () => void;
}

const HomePage = ({ fetchIssues, issues, fetchUsers }: HomePageProps) => {
  useEffect(() => {
    fetchIssues();
    fetchUsers();
  }, []);
  return (
    <HomeContainer>
      <VerticalHeader />
      <RenderIssues list={issues} />
    </HomeContainer>
  );
};

interface mapState {
  issues: Issue[];
}

const mapStateToProps = (state: mapState) => {
  return { issues: Object.values(state.issues) };
};

export default connect(mapStateToProps, { fetchIssues, fetchUsers })(HomePage);
