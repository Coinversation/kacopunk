import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import { NFT } from 'containers/Homepage/slice';
import tag_selected from './assets/tag_selected.png';

const TarsiersWarp = styled.div`
  .caption {
    background: linear-gradient(90deg, #f59fee 0%, #b8c1c0 25%, #65c0e0 50%, #f59fee 75%, #81c1d9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .tag-selected {
    position: relative;
    ::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, 10px);
      width: 28px;
      height: 12px;
      background-image: url(${tag_selected});
      background-size: 100% 100%;
      background-position: center;
    }
  }

  padding: 60px 0 65px 0;
  @media screen and (min-width: 640px) {
    padding: 120px 0 130px 0;
  }
`;

const Tarsiers = ({ nft, nftName, nftRarity }) => {
  const [tag, setTag] = useState(NFT.caps);
  const parts = useMemo(() => nft[tag], [tag, nft]);
  const partNames = useMemo(() => nftName[tag], [tag, nftName]);
  const raritys = useMemo(() => nftRarity[tag], [tag, nftRarity]);

  return (
    <>
      <TarsiersWarp className="font-gotham">
        <Container className="content text-center">
          <h1 className="text-5xl mb-6">
            <span className="caption">What are karsiers made of</span>
          </h1>
          <p className="text-sm text-secondaryTextColor leading-loose">
            Tarsier is made up with a variety of interesting hair, glasses, hats,
            <br />
            outfits and background features. Each Tarsier is a unique NFT asset！
          </p>
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mt-10 text-textColor text-xl sm:text-2xl">
            {Object.values(NFT).map((item, index) => (
              <span
                className={`
              ${tag === item ? 'text-primary' : ''}
              cursor-pointer text-lg space-x-2 sm:space-x-4`}
                key={item}
                onClick={() => setTag(item)}
              >
                <span className={tag === item ? 'tag-selected' : ''}>{item}</span>
                <span>{index < Object.values(NFT).length - 1 && '/'}</span>
              </span>
            ))}
          </div>
          <div className="flex justify-center flex-wrap w-6/8 m-auto mt-10">
            {parts.map((part, i) => (
              <div key={i} className="mx-2 sm:mx-4 mb-4">
                <img src={part} key={part} alt="" className="w-16 h-16 md:w-32 md:h-32 mb-2" />
                <p>{raritys[partNames[i]]}%</p>
                <p className="text-center text-textColor text-sm">{partNames[i]}</p>
              </div>
            ))}
          </div>
        </Container>
      </TarsiersWarp>
    </>
  );
};

export default Tarsiers;
