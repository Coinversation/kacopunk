import React from 'react';
import styled from 'styled-components';
import bgImg from './assets/say_hello_bg.png';
import Container from 'components/Container';
import AnimateImage from './AnimateImage';

const DifferentWarp = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  padding: 140px 0 100px 0;
  .content {
    height: 60vh;
  }
  .caption {
    background: linear-gradient(90deg, #f59fee 0%, #b8c1c0 25%, #65c0e0 50%, #f59fee 75%, #81c1d9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Different = ({ image, cap, glasse, clothe }) => (
  <DifferentWarp className="font-gotham">
    <Container className="content flex items-center justify-between">
      <div>
        <AnimateImage image={image} cap={cap} glasse={glasse} clothe={clothe} />
      </div>
      <div>
        <h1 className="text-6xl mb-6">
          <span className="caption">
            Why Tarsier <br /> different?
          </span>
        </h1>
        <p className="text-secondaryTextColor leading-loose text-sm">
          The Tarsier collection is programmatically, randomly generated
          <br />
          on the blockchain. Therefore, every single Tarsier is unique
          <br />
          in the world. The total issuance of Tariser is 9,000, of which
          <br />
          3,000 will be issued on the Binance Smart Chain.
        </p>
      </div>
    </Container>
  </DifferentWarp>
);

export default Different;
