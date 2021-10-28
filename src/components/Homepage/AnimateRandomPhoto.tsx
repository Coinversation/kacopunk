import React from 'react';
import { shallowEqual } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

interface Photo {
  id: number;
  url: string;
}

const AnimateRandomPhotoWarp = styled(TransitionGroup)`
  img {
    width: 120px;
    height: 120px;
  }
`;

const AnimateRandomPhoto = ({ photos }: { photos: Photo[] }) => {
  return (
    <AnimateRandomPhotoWarp className="grid grid-cols-4 grid-rows-3">
      {photos.map(({ id, url }) => (
        <CSSTransition key={id} timeout={500} classNames="item">
          <img src={url} alt="" className="w-8 h-8" />
        </CSSTransition>
      ))}
    </AnimateRandomPhotoWarp>
  );
};

export default React.memo(AnimateRandomPhoto, shallowEqual);
