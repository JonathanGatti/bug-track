import React, { useState } from 'react';
import IssueDetail from '../../components/Issue';
import { issues } from '../../utils/fakeData';

const IssuePage = ({ match }: any) => {
  const [issue, setIssue] = useState(issues[0]);
  return (
    <div>
      <IssueDetail {...issue} />
    </div>
  );
};

export default IssuePage;
