import React from 'react';
import styled from 'styled-components';
import bgImg from './assets/say_hello_bg.png';
import Container from 'components/Container';

const IntroduceWarp = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  padding: 140px 0 100px 0;
  .content {
    height: 60vh;
  }
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

const Introduce = () => (
  <IntroduceWarp className="font-gotham">
    <Container className="content flex items-center justify-between">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h1 className="text-6xl mb-6 caption">Say Hello</h1>
        <p className="text-secondaryTextColor leading-loose text-sm">
          The tarsier consists of a variety of interesting spectacles, hair,
          hats,
          <br />
          body and background features. Each glasses is a unique NFT asset that
          <br />
          holds the Tarsiers, allowing you to participate in coordinating
          tarsier
          <br />
          community funding. At the end of the public offering, the treasury
          will
          <br />
          be implanted with 600 ETH! Owners can vote in favor of the tarsier
        </p>
      </div>
    </Container>
  </IntroduceWarp>
);

export default Introduce;
