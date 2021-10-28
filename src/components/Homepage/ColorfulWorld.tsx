import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import { getPart, DIR_NAMES, backgrounds } from './assets/part';
import tag_selected from './assets/tag_selected.png';

const ColorfulWorldWarp = styled.div`
  padding: 120px 0 130px 0;
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

const ColorfulWorld = () => {
  const [tag, setTag] = useState(DIR_NAMES.caps);
  const [parts, setParts] = useState([]);

  useEffect(() => {
    (async function () {
      const result = await getPart(DIR_NAMES[tag]);
      setParts(result);
    })();
  }, [tag]);

  return (
    <ColorfulWorldWarp className="font-gotham">
      <Container className="content text-center">
        <h1 className="text-6xl mb-6 caption">It’s a colorful world</h1>
        <p className="text-sm text-secondaryTextColor leading-loose">
          The tarsier consists of a variety of interesting spectacles, hair,
          hats,
          <br />
          body and background features. Each glasses is a unique NFT asset that
          <br />
          holds the Tarsiers, allowing you to participate in coordinating
          tarsier community funding.
        </p>
        <div className="flex items-center justify-center space-x-4 mt-10 text-textColor">
          {Object.values(DIR_NAMES).map((item, index) => (
            <span
              className={`
              ${tag === item ? 'text-primary' : ''} 
              cursor-pointer space-x-4 text-2xl`}
              key={item}
              onClick={() => setTag(item)}
            >
              <span className={tag === item ? 'tag-selected' : ''}>{item}</span>
              <span>{index < Object.values(DIR_NAMES).length - 1 && '/'}</span>
            </span>
          ))}
        </div>
        <div className="flex justify-center flex-wrap w-6/8 m-auto mt-10 space-x-10">
          {parts.map((part, i) => (
            <div>
              <img src={part} key={part} alt="" className="w-36 h-36" />
              <p className="text-center text-textColor text-sm">
                {backgrounds[i].caption}
              </p>
              <p className="text-center text-secondaryTextColor text-sm">
                {backgrounds[i].size}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </ColorfulWorldWarp>
  );
};

export default ColorfulWorld;
