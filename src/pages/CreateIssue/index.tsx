import React from 'react';

const CreateIssue = () => {
  const project = {
    teamMembers: [1, 2, 3, 4],
    issues: ['i', 'A', '4', 't'],
    projectId: 'aasb633gsy3',
    projectName: 'protfolio for mike',
  };

  const projects = new Array(5).fill(project);
  return <div>create Issue</div>;
};

export default CreateIssue;
