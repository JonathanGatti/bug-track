import React from 'react';
import List from '../List';
import { issues } from '../../utils/fakeData';

const IssuesList = () => <List {...issues} />;

export default IssuesList;
