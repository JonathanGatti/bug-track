import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HomeContainer } from './styles';
import { connect } from 'react-redux';
import VerticalHeader from '../../components/VerticalHeader';
import List from '../../components/List';
import { fetchIssues } from '../../actions/issuesActions';

const getIssues = async () => {
  const res = await axios.get('http://localhost:8080/issues');
  console.log(res.data);
};

const HomePage = ({ fetchIssues, issues }: any) => {
  useEffect(() => {
    async function get() {
      await getIssues();
    }
    fetchIssues();
    get();
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
