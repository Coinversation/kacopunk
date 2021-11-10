import React from 'react';
import styled from 'styled-components';

import loading from './loading.svg';

const LoadingWarp = styled.img`
  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(180deg);
    }
  }
  width: 30px;
  display: inline-block;
  color: inherit;
  font-size: inherit;
  animation: rotate 0.3s linear infinite;
`;

const Loading = () => {
  return <LoadingWarp src={loading} />;
};

export default Loading;
