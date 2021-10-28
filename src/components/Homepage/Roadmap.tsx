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
    background: linear-gradient(
      0deg,
      #f59fee 0%,
      #b8c1c0 25%,
      #65c0e0 50%,
      #f59fee 75%,
      #81c1d9 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ItemWarp = styled.div<{ height: number; isEnd: boolean }>`
  .line {
    flex: 0 0 6px;
    height: ${({ height = 140 }) => `${height}px`};
    padding-bottom: 20px;
    background: ${({ isEnd }) =>
      isEnd ? 'linear-gradient(180deg, #1bd3d5, transparent);' : '#1bd3d5'};
    position: relative;

    .point {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 0;
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
  <ItemWarp
    className="space-x-16 flex item-start"
    height={content.height}
    isEnd={isEnd}
  >
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
    title: '0%-Await',
    texts: [
      '10,000 AiaMasks were passed back to the present, waiting to be minted and saved on the',
      'blockchain. Early participants who interact on Twitter will have the opportunity to receive NFT airdrop rewards.',
    ],
  },
  {
    title: '25%-Community',
    texts: [
      'The AiaMask community to save future mankind will be established. Also, more NFT metaverse',
      'communities will join to advance together.',
    ],
  },
  {
    title: '50%-Mint',
    texts: [
      'On a full moon night, 10,000 AiaMasks will be minted on our website, aiamask.co, and traded',
      'on the secondary market at Opensea.io.',
    ],
  },
  {
    title: '75%-Gamefi',
    texts: [
      'On the basis of AiaMasks NFT, we will develop a GameFi together with the community to continue',
      'adding value to AiaMasks.',
    ],
  },
  {
    title: '100%-Sold Out',
    texts: [
      '5% of sales and 50% of royalties from OpenSea will be used to sweep the floor, and the',
      'NFT obtained will be used for community operations. In addition, a sponsorship fund will be set up to',
      'support talented independent artists and developers.',
    ],
  },
];

const Roadmap = () => (
  <RoadmapWarp className="font-gotham">
    <Container>
      <h1 className="text-6xl font-medium text-center mb-28 caption">
        Roadmap
      </h1>
      <div className="m-auto w-max">
        {roadma.map((item, index) => (
          <Item
            content={item}
            key={index}
            isEnd={index === roadma.length - 1}
          />
        ))}
      </div>
    </Container>
  </RoadmapWarp>
);

export default Roadmap;
