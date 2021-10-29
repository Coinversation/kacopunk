import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import bgImg from './assets/roadmap_bg.png';

const RoadmapWarp = styled.div`
  padding: 200px 0 170px 0;
  background-image: url(${bgImg});
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  .caption {
    background: linear-gradient(90deg, #f59fee 0%, #b8c1c0 25%, #65c0e0 50%, #f59fee 75%, #81c1d9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ItemWarp = styled.div<{ height: number; isEnd: boolean }>`
  .line {
    flex: 0 0 6px;
    height: ${({ height = 180 }) => `${height}px`};
    padding-bottom: 20px;
    background: ${({ isEnd }) => (isEnd ? 'linear-gradient(180deg, #1bd3d5, transparent);' : '#1bd3d5')};
    position: relative;

    .point {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 6px;
      left: 3px;
      transform: translate(-50%, -25%);
      background: #1bd3d5;
      border-radius: 50%;

      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 60%;
        height: 60%;
        transform: translate(-50%, -50%);
        background: rgb(254, 224, 190);
        border-radius: 50%;
      }
    }
  }
`;

const Item = ({ content, isEnd }) => (
  <ItemWarp className="space-x-16 flex item-start" height={content.height} isEnd={isEnd}>
    <div className="line">
      <i className="point"></i>
    </div>
    <div>
      <h3 className="text-primary text-2xl font-medium">{content.title}</h3>
      <p className="mt-4 text-secondaryTextColor leading-loose text-sm">
        {content.texts.map((text, index) => {
          return (
            <React.Fragment key={index}>
              {text}
              {index < content.texts.length - 1 && <br />}
            </React.Fragment>
          );
        })}
      </p>
    </div>
  </ItemWarp>
);

const roadma = [
  {
    title: 'Launch Tarsier',
    texts: ['Tarsier will launch recently. Please stay tune with our website and official social media.'],
  },
  {
    title: 'Live on NFT Marketplace',
    texts: [
      'Tarsier will live on Kaco NFT market, Treasureland or any platform that sup-ports BEP-721 after launching.',
    ],
  },
  {
    title: 'Build up a NFT Foundation',
    texts: ['The Official will establish an NFT foundation to support the development of Tarsier.'],
  },
];

const Roadmap = () => (
  <RoadmapWarp className="font-gotham">
    <Container>
      <h1 className="text-6xl font-medium text-center mb-28">
        <span className="caption">Roadmap</span>
      </h1>
      <div className="m-auto w-max">
        {roadma.map((item, index) => (
          <Item content={item} key={index} isEnd={index === roadma.length - 1} />
        ))}
      </div>
    </Container>
  </RoadmapWarp>
);

export default Roadmap;
