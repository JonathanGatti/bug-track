import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Project, Issue } from '../../interfaces';
import RenderIssues from '../RenderIssues';
import RenderProjects from '../RenderProjects';
import Spinner from '../../common/spinner';

const ListContainer = styled.div`
  width: 70vw;
  margin-left: auto;
`;

interface ListProps {
  items: Issue[] | Project[];
}

const List = ({ items }: any) => {
  const render = () => {
    if (!items) return null;
    if (!items[0]) {
      return <Spinner />;
    } else if (items[0].projectId) {
      return <RenderProjects list={items} />;
    } else {
      return <RenderIssues list={items} />;
    }
  };
  return <ListContainer>{render()}</ListContainer>;
};

export default List;
