import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { shallowEqual } from 'react-redux';

const AnimateImageWarp = styled.div`
  .image {
    left: 0;
    top: 0;
  }
  .cap {
    left: calc(100% + 60px);
    top: -40px;
    border-radius: 50%;
    background-size: 70px 70px;
    background-position: center;
  }
  .glasse {
    left: calc(100% + 100px);
    top: 50%;
    border-radius: 50%;
    background-size: 150px 150px;
    background-position: center -20px;
  }
  .clothe {
    left: calc(100% - 70px);
    top: calc(100% - 70px);
    border-radius: 50%;
    background-size: 240px 240px;
    background-position: center -120px;
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
  .fade-move-t-enter {
    opacity: 0%;
    transform: translate(-80px, 40px);
  }
  .fade-move-t-enter-active {
    opacity: 100%;
    transform: translate(0);
  }
  .fade-move-t-exit {
    opacity: 100%;
    transform: translate(0);
  }
  .fade-move-t-exit-active {
    opacity: 0%;
    transform: translate(-80px, 40px);
  }
  @media (prefers-reduced-motion: no-preference) {
    .fade-move-t-enter-active,
    .fade-move-t-exit-active {
      transition: opacity 0.5s, transform 0.5s;
    }
  }
  .fade-move-r-enter {
    opacity: 0%;
    transform: translate(-120px, 0);
  }
  .fade-move-r-enter-active {
    opacity: 100%;
    transform: translate(0);
  }
  .fade-move-r-exit {
    opacity: 100%;
    transform: translate(0);
  }
  .fade-move-r-exit-active {
    opacity: 0%;
    transform: translate(-120px, 0);
  }
  @media (prefers-reduced-motion: no-preference) {
    .fade-move-r-enter-active,
    .fade-move-r-exit-active {
      transition: opacity 0.5s, transform 0.5s;
    }
  }
  .fade-move-b-enter {
    opacity: 0%;
    transform: translate(-10px, -20px);
  }
  .fade-move-b-enter-active {
    opacity: 100%;
    transform: translate(0);
  }
  .fade-move-b-exit {
    opacity: 100%;
    transform: translate(0);
  }
  .fade-move-b-exit-active {
    opacity: 0%;
    transform: translate(-10px, -20px);
  }
  @media (prefers-reduced-motion: no-preference) {
    .fade-move-b-enter-active,
    .fade-move-b-exit-active {
      transition: opacity 0.5s, transform 0.5s;
    }
  }
`;

const AnimateImage = ({ image, cap, glasse, clothe }) => {
  return (
    <AnimateImageWarp>
      <div className="w-60 h-60 relative">
        <SwitchTransition mode="out-in">
          <CSSTransition key={image} timeout={500} classNames="fade">
            <img className="absolute w-full h-full image" src={image} alt="" />
          </CSSTransition>
        </SwitchTransition>
        <SwitchTransition mode="out-in">
          <CSSTransition key={cap} timeout={500} classNames="fade-move-t">
            <div
              className="absolute w-28 h-28 bg-white p-4 bg-no-repeat cap"
              style={{ backgroundImage: `url(${cap})` }}
            />
          </CSSTransition>
        </SwitchTransition>
        <SwitchTransition mode="out-in">
          <CSSTransition key={glasse} timeout={500} classNames="fade-move-r">
            <div
              className="absolute w-28 h-28 bg-white p-4 bg-no-repeat glasse"
              style={{ backgroundImage: `url(${glasse})` }}
            />
          </CSSTransition>
        </SwitchTransition>
        <SwitchTransition mode="out-in">
          <CSSTransition key={clothe} timeout={500} classNames="fade-move-b">
            <div
              className="absolute w-28 h-28 bg-white p-4 bg-no-repeat clothe"
              style={{ backgroundImage: `url(${clothe})` }}
            />
          </CSSTransition>
        </SwitchTransition>
      </div>
    </AnimateImageWarp>
  );
};

export default React.memo(AnimateImage, shallowEqual);
