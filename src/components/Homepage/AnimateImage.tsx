import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { shallowEqual } from 'react-redux';

const AnimateImageWarp = styled.div`
  .image {
    left: 0;
    top: 0;
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
      transition: opacity 1s;
    }
  }
  .fade-move-t-enter {
    opacity: 0%;
    transform: translate(-50%, 45%);
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
    transform: translate(-50%, 45%);
  }
  @media (prefers-reduced-motion: no-preference) {
    .fade-move-t-enter-active,
    .fade-move-t-exit-active {
      transition: opacity 1s, transform 1s;
    }
  }

  .fade-move-r-enter {
    opacity: 0%;
    transform: translate(-100%, 0);
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
    transform: translate(-100%, 0);
  }
  @media (prefers-reduced-motion: no-preference) {
    .fade-move-r-enter-active,
    .fade-move-r-exit-active {
      transition: opacity 1s, transform 1s;
    }
  }

  .fade-move-b-enter {
    opacity: 0%;
    transform: translate(-10%, -20%);
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
    transform: translate(-10%, -20%);
  }
  @media (prefers-reduced-motion: no-preference) {
    .fade-move-b-enter-active,
    .fade-move-b-exit-active {
      transition: opacity 1s, transform 1s;
    }
  }

  .cap {
    left: calc(100% + 20px);
    top: -20px;
    border-radius: 50%;
    background-size: 70px 70px;
    background-position: center 5px;
  }
  .glasse {
    left: calc(100% + 30px);
    top: 50%;
    border-radius: 50%;
    background-size: 75px 75px;
    background-position: center -10px;
  }
  .clothe {
    left: calc(100% - 35px);
    top: calc(100% - 35px);
    border-radius: 50%;
    background-size: 120px 120px;
    background-position: center -60px;
  }
  @media screen and (min-width: 640px) {
    .cap {
      left: calc(100% + 40px);
      top: -40px;
      border-radius: 50%;
      background-size: 140px 140px;
      background-position: center 10px;
    }
    .glasse {
      left: calc(100% + 60px);
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
  }
`;

const AnimateImage = ({ image, cap, glasse, clothe }) => {
  return (
    <AnimateImageWarp>
      <div className="w-40 h-40 sm:w-60 sm:h-60 relative">
        <SwitchTransition mode="out-in">
          <CSSTransition key={image} timeout={1000} classNames="fade">
            <img className="absolute w-full h-full image" src={image} alt="" />
          </CSSTransition>
        </SwitchTransition>
        <SwitchTransition mode="out-in">
          <CSSTransition key={cap} timeout={1000} classNames="fade-move-t">
            <div
              className="absolute w-14 h-14 sm:w-28 sm:h-28 bg-white shadow-md p-4 bg-no-repeat cap"
              style={{ backgroundImage: `url(${cap})` }}
            />
          </CSSTransition>
        </SwitchTransition>
        <SwitchTransition mode="out-in">
          <CSSTransition key={glasse} timeout={1000} classNames="fade-move-r">
            <div
              className="absolute w-14 h-14 sm:w-28 sm:h-28 bg-white shadow-md p-4 bg-no-repeat glasse"
              style={{ backgroundImage: `url(${glasse})` }}
            />
          </CSSTransition>
        </SwitchTransition>
        <SwitchTransition mode="out-in">
          <CSSTransition key={clothe} timeout={1000} classNames="fade-move-b">
            <div
              className="absolute w-14 h-14 sm:w-28 sm:h-28 bg-white shadow-md p-4 bg-no-repeat clothe"
              style={{ backgroundImage: `url(${clothe})` }}
            />
          </CSSTransition>
        </SwitchTransition>
      </div>
    </AnimateImageWarp>
  );
};

export default React.memo(AnimateImage, shallowEqual);
