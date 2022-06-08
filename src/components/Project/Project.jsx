import React, { useCallback, useState } from 'react';


const Project = ({ projectName, tags, codeLink, liveLink, thumbnail, description, tech, thumbnailChange, animationClass, }) => {
  const [active, setActive] = useState(null);

  const handleMouseClick = () => {
    setActive(!active);
  }

  const handleThumbnailChange = useCallback(() => {
    thumbnailChange(thumbnail)
  }, [thumbnailChange])

  return (
    <>
      <li onMouseOver={handleThumbnailChange} className={`projects__item ${animationClass}`}>
        <div className='projects__description'>
          <h3 onClick={handleMouseClick} className='projects__item-title'>{projectName}</h3>
          <p className='projects__item-tags'>{tags}</p>
          <div className={`projects__item-description ${active ? 'projects__item-description--active' : null}`}>
            <p className='projects__item-text'>
              {description}
            </p>
            <p className='projects__item-tech'>
              <span className='projects__item-accent'>Tech: </span>{tech}
            </p>
          </div>
        </div>
        <div className='projects__links'>
          {codeLink ? <a className='projects__link' href={codeLink} target="_blank">code</a> : null}
          {codeLink && liveLink ? <div className={'projects__separator'}></div> : null}
          {liveLink ? <a className='projects__link projects__link--live' href={liveLink} target="_blank">live</a> : null}
        </div>
      </li>
      <hr className={`projects__hr ${animationClass}`} />
    </>
  );
}

export default Project;