import React, { useState } from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import Container from 'components/Container';
import AnimateGroupImage from './AnimateGroupImage';
import MintModal from 'components/Modal/Mint';
import { CONTRACT_STATE } from 'config/constants/state';

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

  .vip-bar {
    background: rgba(27, 211, 213, 0.1);
    margin-bottom: -20px;
  }

  .coming-soon {
    margin-bottom: -20px;
  }

  .mint-now {
    background: #a6ecbb;
    color: #358283;
  }
`;

const Banner = ({ contract, nft, state, canBuyFromVip, updateState }): JSX.Element => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <BannerWarp className="font-gotham">
        <Container className="flex items-center justify-between flex-col lg:flex-row text-center lg:text-left">
          <div>
            <h1 className="text-5xl mb-6">
              <span className="caption">
                What is
                <br /> Karsier?
              </span>
            </h1>
            <p className="text-sm text-secondaryTextColor leading-loose">
              Karsier is the smallest primate in the world. <br />
              Karsier came to the blockchain world to create some fun for us. <br />
              Following the logic of evolution, the karsier will be <br /> given some special functions in the future.
            </p>
            {(state === CONTRACT_STATE.paused || null) && (
              <p className="text-lg mt-4 text-primary coming-soon">
                <span>Comming Soon</span>
              </p>
            )}
            {((state === CONTRACT_STATE.live && canBuyFromVip) || null) && (
              <p className="rounded-xl px-4 py-3 w-max text-sm mt-4 vip-bar">
                <span className="caption">Thanks all of the DUDU Holders!!!</span>
                <button className="px-2.5 py-1 rounded-xl ml-4 mint-now" onClick={() => setVisible(true)}>
                  Mint Now
                </button>
              </p>
            )}
            {(state === CONTRACT_STATE.finish || null) && (
              <p className="text-lg mt-4 text-primary coming-soon">
                <span className="caption">NFT is sold out</span>
              </p>
            )}
            <div className="space-x-4 mt-10">
              {(state === CONTRACT_STATE.live || null) && (
                <Button onClick={() => setVisible(true)}>Mint &gt;&gt;</Button>
              )}
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
      <MintModal
        contract={contract}
        visible={visible}
        onClose={() => setVisible(false)}
        updateState={updateState}
      ></MintModal>
    </>
  );
};

export default Banner;
