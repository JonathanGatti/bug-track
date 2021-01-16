import React from 'react';
import List from '../../common/list';
import { issues } from '../../utils/fakeData';

const IssuesList = () => <List {...issues} />;

export default IssuesList;
