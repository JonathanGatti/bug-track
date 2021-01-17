import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Table } from 'semantic-ui-react';
import styled from 'styled-components';
import { Project, Issue } from '../../interfaces';
import RenderIssues from '../RenderIssues';
import RenderProjects from '../RenderProjects';
import { renderIssues } from '../../utils/renderIssues';
import { renderProjects } from '../../utils/renderProjects';
import Spinner from '../../common/spinner';

const ListContainer = styled.div`
  width: 70vw;
  margin-left: auto;
`;

interface ListProps {
  items: Issue[] | Project[];
}

const List = ({ items }: any) => {
  console.log(items);
  const render = () => {
    if (!items[0]) {
      return <Spinner />;
    } else if (items[0].projectId) {
      return renderProjects(items);
    } else {
      return renderIssues(items);
    }
  };
  return (
    <ListContainer>
      <Table definition>{render()}</Table>
    </ListContainer>
  );
};

export default List;
