import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import { NFT } from 'containers/Homepage/slice';
import tag_selected from './assets/tag_selected.png';

const TarsiersWarp = styled.div`
  padding: 120px 0 130px 0;
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
`;

export const backgrounds = [
  { caption: 'Pumpkins', size: '16.89%' },
  { caption: 'Pussycat', size: '18.24%' },
  { caption: 'Blue Light', size: '3.19%' },
  { caption: 'Boy Scout', size: '9.18%' },
  { caption: 'NEON light', size: '12.76%' },
  { caption: 'Colorful', size: '29.10%' },
  { caption: 'Pussycat', size: '18.24%' },
  { caption: 'Blue Light', size: '3.19%' },
  { caption: 'Boy Scout', size: '9.18%' },
  { caption: 'NEON light', size: '12.76%' },
  { caption: 'Colorful', size: '29.10%' },
];

const Tarsiers = ({ nft }) => {
  const [tag, setTag] = useState(NFT.caps);
  const parts = useMemo(() => nft[tag], [tag, nft]);

  return (
    <TarsiersWarp className="font-gotham">
      <Container className="content text-center">
        <h1 className="text-6xl mb-6">
          <span className="caption">What are tarsiers made of</span>
        </h1>
        <p className="text-sm text-secondaryTextColor leading-loose">
          Tarsier is made up with a variety of interesting hair, glasses, hats,
          <br />
          outfits and background features. Each Tarsier is a unique NFT asset！
        </p>
        <div className="flex items-center justify-center space-x-4 mt-10 text-textColor">
          {Object.values(NFT).map((item, index) => (
            <span
              className={`
              ${tag === item ? 'text-primary' : ''} 
              cursor-pointer space-x-4 text-2xl`}
              key={item}
              onClick={() => setTag(item)}
            >
              <span className={tag === item ? 'tag-selected' : ''}>{item}</span>
              <span>{index < Object.values(NFT).length - 1 && '/'}</span>
            </span>
          ))}
        </div>
        <div className="flex justify-center flex-wrap w-6/8 m-auto mt-10 space-x-10">
          {parts.map((part, i) => (
            <div key={i}>
              <img src={part} key={part} alt="" className="w-36 h-36" />
              <p className="text-center text-textColor text-sm">{backgrounds[i].caption}</p>
              <p className="text-center text-secondaryTextColor text-sm">{backgrounds[i].size}</p>
            </div>
          ))}
        </div>
      </Container>
    </TarsiersWarp>
  );
};

export default Tarsiers;