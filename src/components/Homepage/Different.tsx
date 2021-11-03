import React from 'react';
import styled from 'styled-components';
import bgImg from './assets/say_hello_bg.png';
import Container from 'components/Container';
import AnimateImage from './AnimateImage';

const DifferentWarp = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  .caption {
    background: linear-gradient(90deg, #f59fee 0%, #b8c1c0 25%, #65c0e0 50%, #f59fee 75%, #81c1d9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  padding: 100px 0 90px 0;
  @media screen and (min-width: 640px) {
    padding: 200px 0 180px 0;
  }
`;

const Different = ({ image, cap, glasse, clothe }) => (
  <DifferentWarp className="font-gotham overflow-hidden">
    <Container className="flex items-center justify-between flex-col-reverse lg:flex-row text-center lg:text-left">
      <div className="mt-28 lg:mt-0">
        <AnimateImage image={image} cap={cap} glasse={glasse} clothe={clothe} />
      </div>
      <div>
        <h1 className="text-5xl mb-6">
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
