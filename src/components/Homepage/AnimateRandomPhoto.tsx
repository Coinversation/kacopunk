import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const AnimateRandomPhotoWarp = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  .fade-enter {
    opacity: 0%;
  }
  .fade-enter-active {
    opacity: 100%;
  }
  .fade-exit {
    opacity: 100%;
  }
  .fade-exit-active {
    opacity: 0%;
  }
  @media (prefers-reduced-motion: no-preference) {
    .fade-enter-active,
    .fade-exit-active {
      transition: opacity 0.5s;
    }
  }
`;

const AnimateRandomPhoto = ({ photos }) => {
  return (
    <AnimateRandomPhotoWarp className="grid grid-cols-4 grid-rows-3">
      {photos.map(url => (
        <div className="w-32 h-32 relative">
          <SwitchTransition mode="out-in">
            <CSSTransition key={url} timeout={500} classNames="fade">
              <img className="absolute left-0 top-0" src={url} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      ))}
    </AnimateRandomPhotoWarp>
  );
};

export default React.memo(AnimateRandomPhoto);
