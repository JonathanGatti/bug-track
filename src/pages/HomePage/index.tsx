import React from 'react';
import { HomeContainer } from './styles';
import VerticalHeader from '../../components/VerticalHeader';
import IssuesList from '../../components/IssuesList';

const HomePage = () => {
  return (
    <HomeContainer>
      <VerticalHeader />
      <IssuesList />
    </HomeContainer>
  );
};

export default HomePage;
