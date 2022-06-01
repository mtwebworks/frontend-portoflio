import React, { useEffect, useState, useRef } from 'react';
import gsap, { Power3 } from 'gsap';

import Project from '../Project/Project';
import List from './List';

import './Projects.module.scss';

const Projects = () => {

  let thumbnailImage = useRef(null);

  const [thumbnailImageState, setThumbnailImageState] = useState(null);
  const [mousePosition, setMousePosition] = useState({
    x: "",
    y: "",
  });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    })
  }

  const handleMouseLeave = () => {
    thumbnailImage.style.opacity = '0';
  }
  const handleMouseEnter = () => {
    thumbnailImage.style.opacity = '.8';

  }

  const Projects = List.map(project => <Project key={project.id} {...project} thumbnailChange={setThumbnailImageState} />)

  useEffect(() => {
    gsap.to(thumbnailImage, 1, { left: mousePosition.x, top: mousePosition.y });

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  })

  return (
    <section className='projects' id='projects'>
      <h2 className='projects__title'>Projects</h2>
      <ul onMouseEnter={window.innerWidth > 768 ? handleMouseEnter : null} onMouseLeave={handleMouseLeave} className='projects__list'>
        <hr className='projects__hr' />
        {Projects}
      </ul>
      <img ref={element => thumbnailImage = element} className='projects__thumbnail-image' style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} src={thumbnailImageState} alt="" />
    </section>
  );
}

export default Projects;