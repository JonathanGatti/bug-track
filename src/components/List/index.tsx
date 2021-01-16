import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Table } from 'semantic-ui-react';
import styled from 'styled-components';
import { Project, Issue } from '../../interfaces';
import { renderIssues } from '../../utils/renderIssues';
import { renderProjects } from '../../utils/renderProjects';

const ListContainer = styled.div`
  width: 70vw;
  margin-left: auto;
`;

const List = (items: Project[] | Issue[]) => {
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    let newList = _.values(items);
    setList([...newList]);
  }, [list.length]);

  const render = () => {
    if (!list[0]) {
      return null;
    } else if (list[0].projectId) {
      return renderProjects(list);
    } else {
      return renderIssues(list);
    }
  };
  return (
    <ListContainer>
      <Table definition>{render()}</Table>
    </ListContainer>
  );
};

export default List;
