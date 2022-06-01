import React, { useCallback } from 'react';

const Project = ({ projectName, discription, codeLink, liveLink, thumbnail, thumbnailChange }) => {

  const handleThumbnailChange = useCallback(() => {
    thumbnailChange(thumbnail)
  }, [thumbnailChange])

  return (
    <>
      <li onMouseOver={handleThumbnailChange} className='projects__item'>
        <div className='projects__discription'>
          <h3 className='projects__item-title'>{projectName}</h3>
          <p className='projects__item-discription'>{discription}</p>
        </div>
        <div className='projects__links'>
          {codeLink ? <a className='projects__link' href={codeLink}>code</a> : null}
          {codeLink && liveLink ? <div className={'projects__separator'}></div> : null}
          {liveLink ? <a className='projects__link' href={liveLink}>live</a> : null}
        </div>
      </li>
      <hr className='projects__hr' />
    </>
  );
}

export default Project;