import React, { useState, useEffect } from 'react';
import { HomeContainer } from './styles';
import { connect } from 'react-redux';
import VerticalHeader from '../../components/VerticalHeader';
import IssuesList from '../../components/IssuesList';
import List from '../../components/List';
import { fetchIssues } from '../../actions/issuesActions';

const HomePage = ({ fetchIssues, issues }: any) => {
  useEffect(() => {
    fetchIssues();
  }, [issues.length]);
  return (
    <HomeContainer>
      <VerticalHeader />
      <List {...issues} />
    </HomeContainer>
  );
};

const mapStateToProps = (state: any) => {
  return { issues: Object.values(state.issues) };
};

export default connect(mapStateToProps, { fetchIssues })(HomePage);
