import React, { useState } from 'react';
import ProjectDetail from '../../components/Project';
import Project from '../../components/Project';
import { projects } from '../../utils/fakeData';

const ProjectPage = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <div>
      <ProjectDetail {...project} />
    </div>
  );
};

export default ProjectPage;
