import React, { useState } from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import Container from 'components/Container';
import AnimateGroupImage from './AnimateGroupImage';
import MintModal from 'components/Modal/Mint';

const BannerWarp = styled.div`
  .caption {
    background: linear-gradient(90deg, #f59fee 0%, #b8c1c0 25%, #65c0e0 50%, #f59fee 75%, #81c1d9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  padding: 50px 0;
  @media screen and (min-width: 640px) {
    padding: 100px 0;
  }
`;

const Banner = ({ nft }): JSX.Element => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <BannerWarp className="font-gotham">
        <Container className="flex items-center justify-between flex-col lg:flex-row text-center lg:text-left">
          <div>
            <h1 className="text-5xl mb-6">
              <span className="caption">
                What is
                <br /> Tarsier?
              </span>
            </h1>
            <p className="text-sm text-secondaryTextColor leading-loose">
              Tarsier is the smallest primate in the world. <br />
              Tarsier came to the blockchain world to create some fun for us. <br />
              Following the logic of evolution, the tarsier will be <br /> given some special functions in the future.
            </p>
            <div className="space-x-4 mt-10">
              <Button onClick={() => setVisible(true)}>Mint &gt;&gt;</Button>
              <a href="https://www.kaco.finance/nft/pools">
                <Button Button type="outline">
                  View More &gt;&gt;
                </Button>
              </a>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <AnimateGroupImage nft={nft} />
          </div>
        </Container>
      </BannerWarp>

      {/* modal */}
      <MintModal visible={visible} onClose={() => setVisible(false)}></MintModal>
    </>
  );
};

export default Banner;
