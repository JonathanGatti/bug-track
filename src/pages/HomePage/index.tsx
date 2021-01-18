import React, { useEffect } from 'react';
import { HomeContainer } from './styles';
import { connect } from 'react-redux';
import VerticalHeader from '../../components/VerticalHeader';
import List from '../../components/List';
import { fetchIssues } from '../../actions/issuesActions';
import { fetchUsers } from '../../actions/usersActions';

const HomePage = ({ fetchIssues, issues, fetchUsers }: any) => {
  useEffect(() => {
    fetchIssues();
    fetchUsers();
  }, [issues.length]);
  return (
    <HomeContainer>
      <VerticalHeader />
      <List items={issues} />
    </HomeContainer>
  );
};

const mapStateToProps = (state: any) => {
  return { issues: Object.values(state.issues) };
};

export default connect(mapStateToProps, { fetchIssues, fetchUsers })(HomePage);
