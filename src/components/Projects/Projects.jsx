import React from 'react';

import Project from '../Project/Project';
import List from './List';

import './Projects.module.scss';

const Projects = () => {
  const Projects = List.map(project => <Project key={project.id} {...project} />)

  return (
    <section className='projects' id='projects'>
      <h2 className='projects__title'>Projects</h2>
      <ul className='projects__list'>
        <hr className='projects__hr' />
        {Projects}
      </ul>
    </section>
  );
}

export default Projects;