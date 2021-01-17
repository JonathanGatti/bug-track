import React, { useState, useEffect } from 'react';
import { HomeContainer } from './styles';
import { connect } from 'react-redux';
import VerticalHeader from '../../components/VerticalHeader';
import List from '../../components/List';
import { fetchIssues } from '../../actions/issuesActions';

const HomePage = ({ fetchIssues, issues }: any) => {
  useEffect(() => {
    fetchIssues();
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

export default connect(mapStateToProps, { fetchIssues })(HomePage);
